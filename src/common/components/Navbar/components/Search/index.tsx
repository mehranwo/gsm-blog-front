"use client";
const persianjs = require("persianjs")
import {
  Box,
  Button,
  Combobox,
  Divider,
  Image,
  Loader,
  Text,
  TextInput,
  useCombobox,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { IconSearch } from "@tabler/icons-react";
import { debounce } from "lodash";
import { SearchParams, SearchResponse } from "meilisearch";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { generalRoutes } from "@/common/constants/routes";
import { truncate } from "@/common/utils";
import { postIndex, productIndex } from "@/services/miliSearch";

const SearchSection = ({ className }: { className?: string }) => {
  const [open, setOpen] = useState(false);
  const combobox = useCombobox({
    onDropdownClose: () => {
      setOpen(false);
      combobox.resetSelectedOption();
    },
  });
  const query = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<{
    products: SearchResponse<Record<string, any>, SearchParams>;
    post: SearchResponse<Record<string, any>, SearchParams>;
  } | null>(null);
  const [value, setValue] = useState("");
  const [empty, setEmpty] = useState(false);

  // const [query, setQuery] = useState("");
  // const [data, setData] = useState(null);

  const isMobile = useMediaQuery("(max-width: 768px)");

  const { push } = useRouter();

  useEffect(() => {
    if (isMobile) {
      if (open) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "scroll";
      }
    }
  }, [open]);

  const handlePostSearch = async (searchWord: string) => {
    const res = await postIndex?.search(searchWord, { limit: 3 });
    return res;
  };

  const handleProductSearch = async (searchWord: string) => {
    const res = await productIndex.search(searchWord, { limit: 4 });
    return res;
  };

  const ref = useRef<HTMLInputElement>(null)

  const fetchOptions = async (keyword: string) => {

    if (keyword.length !== 0) {
      setOpen(true);
      setLoading(true);
      const convertArabicCharToPersionTitre = persianjs(keyword).arabicChar().toString()
      const query = persianjs(convertArabicCharToPersionTitre).toEnglishNumber().toString()
      const responses = await Promise.all([
        handlePostSearch(query),
        handleProductSearch(query),
      ]);

      setData({ post: responses[0], products: responses[1] });
      setEmpty(
        responses[0].hits.length === 0 || responses[1].hits.length === 0
      );
      setLoading(false);
    } else {
      setOpen(false);
      setData(null);
      setEmpty(false);
    }
  };

  const options = () => {
    return (
      <Box className="h-[450px] overflow-y-scroll">
        {data?.post.hits.length !== 0 && data?.post.hits !== undefined ? (
          <>
            <Text className="text-right my-2 !font-extrabold p-2 !text-xl">
              مطالب
            </Text>

            <Box>
              {data?.post.hits?.map((item) => (
                <Combobox.Option
                  className="!bg-transparent"
                  onClick={() => {
                    push(
                      `${generalRoutes[
                      item.type as "news" | "review" | "article"
                      ]
                      }/${item.id}`
                    );
                  }}
                  value={item.titre}
                  key={item.id}
                >
                  <div className="flex items-center gap-2 w-full border-b-2 border-gray-100 ">
                    <img
                      className="card-img !w-[80px] !h-[80px] !rounded-lg"
                      src={item.main_image}
                      alt="Card image"
                    />

                    <h5 className="hover:text-blue-400 hover:transition-all h-[75px] flex-1">
                      {truncate(item.titre, 60)}
                    </h5>
                  </div>
                </Combobox.Option>
              ))}
            </Box>
          </>
        ) : (
          <></>
        )}

        <Text className="text-right my-2 !font-extrabold p-2 !text-xl">
          محصولات
        </Text>
        <Box className=" flex justify-center">
          <Box className="flex flex-wrap justify-center ">
            {data?.products.hits?.map((item) => (
              <Combobox.Option
                className="hover:bg-transparent"
                onClick={() => {
                  push(
                    `${generalRoutes.product}/${item.id}/${item?.name_en.split(" ").join("-") ?? ""
                    }`
                  );
                }}
                value={item.titre}
                key={item.id}
              >
                <div className="flex items-center gap-2 w-[120px]  md:w-[150px] flex-col justify-center">
                  <img
                    className="card-img !w-fit !h-[100px] !rounded-lg"
                    src={item.main_image}
                    alt="Card image"
                  />

                  <div className="card-body px-0">
                    <Box className="flex-col flex justify-center">
                      <h5 className="hover:text-blue-400 hover:transition-all ">
                        {item.name}
                      </h5>
                      {/* <Text className="text-center">{item.price} تومان</Text> */}
                    </Box>
                  </div>
                </div>
              </Combobox.Option>
            ))}
          </Box>
        </Box>
      </Box>
    );
  };

  return (
    <Combobox
      onOptionSubmit={(optionValue) => {
        setValue(optionValue);
        combobox.closeDropdown();
      }}
      withinPortal={false}
      store={combobox}
    >
      <Combobox.Target>
        <TextInput
          placeholder="جستجو"
          className={`${className}`}
          ref={ref}
          classNames={{
            input: "!text-base",
          }}
          leftSection={<IconSearch />}
          styles={{ input: { fontFamily: "IRANSans" } }}
          onChange={debounce((event) => {
            setValue(event.target.value);
            fetchOptions(event.target.value);
            combobox.resetSelectedOption();
            combobox.openDropdown();
          }, 400)}
          onClick={() => {
            combobox.openDropdown();
          }}
          onFocus={() => {
            combobox.openDropdown();
            // if (data === null) {
            //   fetchOptions(value);
            // }
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              push(`${generalRoutes.search}/?query=${value}`);
              combobox.closeDropdown();
            }
          }}
          defaultValue={query.get("query") ?? ""}
          onBlur={() => {
            if (ref.current) ref.current.value = ""
            combobox.closeDropdown();
          }}
          rightSection={loading && <Loader size={18} />}
        />
      </Combobox.Target>

      <Combobox.Dropdown
        style={{
          boxShadow: "2px 2px 10px rgb(156, 163, 175)",
          margin: "0px",
        }}
        hidden={data === null}
      >
        {data?.post.hits.length === 0 && data?.products.hits.length === 0 ? (
          <Box className="h-[300px] flex items-center justify-center">
            محتوایی برای نمایش وجود ندارد
          </Box>
        ) : (
          <>
            <Combobox.Options>
              {options()}
              {empty && <Combobox.Empty>No results found</Combobox.Empty>}
            </Combobox.Options>
            <Divider
              style={{
                marginTop: "4px",
              }}
            />
            <Combobox.Option
              className=""
              onClick={() => {
                push(`${generalRoutes.search}/?query=${value}`);
              }}
              value={""}
              key={1}
            >
              <Text className="text-center my-2 !font-extrabold p-2 !text-[#197bff]">
                مشاهده همه
              </Text>
            </Combobox.Option>
          </>
        )}
      </Combobox.Dropdown>
    </Combobox>
  );
};

export default SearchSection;
