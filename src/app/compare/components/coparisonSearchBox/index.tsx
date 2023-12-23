"use client";
import {
  Box,
  Loader,
  TextInput,
  useCombobox,
} from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import { debounce } from "lodash";
import { SearchParams, SearchResponse } from "meilisearch";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

import { generalRoutes } from "@/common/constants/routes";
import { productIndex } from "@/services/miliSearch";

import SearchProductCard from "../searchProductCard";

const ComparisonSearchBox = ({ onClick }: { onClick: () => void }) => {
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });
  const query = useSearchParams();
  const { replace } = useRouter();
  const params = useSearchParams();
  const createRoute = params.getAll("id").map((item) => {
    return `id=${item}`;
  });
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<SearchResponse<
    Record<string, any>,
    SearchParams
  > | null>(null);
  const [value, setValue] = useState("");
  const [empty, setEmpty] = useState(false);
  const handleProductSearch = async (searchWord: string) => {
    const res = await productIndex.search(searchWord);
    return res;
  };

  const fetchOptions = async (query: string) => {

    if (query.length !== 0) {
      setLoading(true);

      const response = await handleProductSearch(query);

      setData(response);
      setEmpty(response.hits.length === 0);

      setLoading(false);
    } else {
      setData(null);
      setEmpty(true);
    }
  }


  const options = () => {
    return (
      <Box className="h-full">
        <Box className="flex flex-wrap justify-center gap-2">
          {data?.hits?.map((product, index) => (
            <SearchProductCard
              key={index}
              productName_en={""}
              price={product.price}
              productId=""
              productImageURL={product.main_image}
              productName={product.name}
              onClick={() => {
                // const filterRoute = params.getAll("id").filter((item) => {
                //   return item !== product.id;
                // });
                replace(
                  `${generalRoutes.comparison}?${createRoute.join("&")}&id=${product.id
                  }`
                );
                onClick();
              }}
            />
          ))}
        </Box>
      </Box>
    );
  };

  return (
    <>
      <TextInput
        className="w-full"
        placeholder="برای افزودن کالا جستجو کنید"
        classNames={{
          input: "text-base"
        }}
        leftSection={<IconSearch />}
        styles={{ input: { fontFamily: "IRANSans", textAlign: "right" } }}
        onChange={debounce((event) => {
          setValue(event.target.value);
          fetchOptions(event.target.value);
        }, 400)}
        defaultValue={query.get("query") ?? ""}
        rightSection={loading && <Loader size={18} />}
      />
      {options()}
    </>
  );
};

export default ComparisonSearchBox;
