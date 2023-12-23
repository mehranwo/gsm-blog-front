import { Box, Button, Modal, Text } from "@mantine/core";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import { useRouter, useSearchParams } from "next/navigation";

import { generalRoutes } from "@/common/constants/routes";
import { distractPriceInProductData } from "@/common/utils/product";
import {
  ComparisonProductListQuery,
  ProductEntity,
  useProductListLazyQuery,
} from "@/services/Graphql/types.generated";

import ComparisonProductCard from "../comparisonProductCard";
import ComparisonSearchBox from "../coparisonSearchBox";

const ComparisonTable = ({ data: commingData }: { data?: ComparisonProductListQuery }) => {

  const data = { ...commingData, products: { ...commingData?.products, data: commingData?.products?.data ? [...commingData?.products?.data]?.reverse() : undefined } }
  const [opened, { open, close }] = useDisclosure(false);
  const [getProductList, { data: productListData }] = useProductListLazyQuery();
  const { replace } = useRouter();
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const params = useSearchParams();
  const createRoute = params.getAll("id").map((item) => {
    return `id=${item}`;
  });
  let attributes: Array<{
    attr_category_id: string;
    attr_category_title: string;
    attr_category_priority: number;
    children: Array<{
      attr_name: string;
      attr_priority: number;
      attr_values: Array<string>;
      id: number | string;
      product_id: number | string;
    }>;
  }> = [];

  data?.products?.data?.map((product) => {
    product.attributes?.attribute_values?.data.map((attr_value) => {
      const attr_category = attributes.filter(
        (attribute) =>
          attribute.attr_category_id ===
          attr_value.attributes?.attribute_id?.data?.attributes
            ?.attribute_category?.data?.id
      );
      const rest_attr_category = attributes.filter(
        (attribute) =>
          attribute.attr_category_id !==
          attr_value.attributes?.attribute_id?.data?.attributes
            ?.attribute_category?.data?.id
      );

      if (attr_category.length) {
        attributes = [
          ...rest_attr_category,
          {
            attr_category_id: attr_category[0].attr_category_id,
            attr_category_priority:
              attr_category[0].attr_category_priority ?? 0,
            attr_category_title: attr_category[0].attr_category_title,
            children: [
              ...attr_category[0].children,
              {
                attr_name:
                  attr_value.attributes?.attribute_id?.data?.attributes?.name ??
                  "",
                attr_priority:
                  attr_value.attributes?.attribute_id?.data?.attributes
                    ?.attr_cat_priority ?? 0,
                attr_values: [attr_value.attributes?.value ?? ""],
                id: attr_value.attributes?.attribute_id?.data?.id ?? "",
                product_id: product.id ?? "",
              },
            ],
          },
        ];
      } else {
        attributes = [
          ...rest_attr_category,
          {
            attr_category_id:
              attr_value.attributes?.attribute_id?.data?.attributes
                ?.attribute_category?.data?.id ?? "",
            attr_category_priority:
              attr_value.attributes?.attribute_id?.data?.attributes
                ?.attribute_category?.data?.attributes?.priority ?? 0,
            attr_category_title:
              attr_value.attributes?.attribute_id?.data?.attributes
                ?.attribute_category?.data?.attributes?.title ?? "",
            children: [
              {
                attr_name:
                  attr_value.attributes?.attribute_id?.data?.attributes?.name ??
                  "",
                attr_priority:
                  attr_value.attributes?.attribute_id?.data?.attributes
                    ?.attr_cat_priority ?? 0,
                attr_values: [attr_value.attributes?.value ?? ""],
                id: attr_value.attributes?.attribute_id?.data?.id ?? "",
                product_id: product.id ?? "",
              },
            ],
          },
        ];
      }
    });
  });

  attributes.forEach((attribute) => {
    let newChildren: Array<{
      attr_name: string;
      attr_priority: number;
      attr_values: Array<string>;
      id: number | string;
      product_id: number | string;
    }> = [];
    attribute.children.forEach((child, index) => {
      const filteredNewChildren = newChildren.filter(
        (newChild) => newChild.id === child.id
      );
      const restNewChildren = newChildren.filter(
        (newChild) => newChild.id !== child.id
      );
      if (filteredNewChildren.length) {
        newChildren = [
          ...restNewChildren,
          {
            ...child,
            attr_values: [
              ...filteredNewChildren[0].attr_values,
              ...child.attr_values,
            ],
          },
        ];
      } else {
        newChildren.push(child);
      }
    });

    const sortedChildrenAttributes = newChildren.sort(function (x, y) {
      return x.attr_priority - y.attr_priority;
    });

    attribute.children = sortedChildrenAttributes;
  });

  const sortedAttributes = attributes.sort(function (x, y) {
    return x.attr_category_priority - y.attr_category_priority;
  });

  const firstAddedProduct = data?.products?.data?.[0]
  const secondAddedProduct = data?.products?.data?.[1]

  return (
    <div className="container my-4">
      <div className="flex items-start justify-between  gap-4 ">
        <Box className="w-[20%] hidden md:block"></Box>
        {secondAddedProduct ?
          <>
            {data?.products?.data?.map(product => <>
              <Box className="flex gap-2 w-full justify-center">
                <ComparisonProductCard
                  productName_en={product?.attributes?.name_en ?? ""}
                  index={data.products?.data?.length === 2 ? 0 : 1}
                  productName={product?.attributes?.name ?? ""}
                  productId={product?.id ?? ""}
                  price={distractPriceInProductData(product as ProductEntity)}
                  productImageURL={
                    product?.attributes?.main_image?.data?.attributes?.url ?? ""
                  }
                  onClick={() => {
                    const filterRoute = params.getAll("id").filter((item) => {
                      return item !== product?.id?.toString();
                    });
                    const createRoute = filterRoute.map((item) => {
                      return `id=${item}`;
                    });
                    replace(`${generalRoutes.comparison}?${createRoute.join("&")}`);
                  }}
                />
              </Box>
            </>)}
            {/* <Box className="flex justify-center self-center w-full">
              <ComparisonProductCard
                productName={ firstAddedProduct?.attributes?.name ?? ""}
                productId={ firstAddedProduct?.id ?? ""}
                price={distractPriceInProductData(firstAddedProduct as ProductEntity)}
                productImageURL={
                  firstAddedProduct?.attributes?.main_image?.data?.attributes?.url ?? ""
                }
                onClick={() => {
                  const filterRoute = params.getAll("id").filter((item) => {
                    return item !== firstAddedProduct?.id;
                  });
                  const createRoute = filterRoute.map((item) => {
                    return `id=${item}`;
                  });
                  replace(`${generalRoutes.comparison}?${createRoute.join("&")}`);
                }}
              />

            </Box> */}
          </>
          : <>
            <Box className="flex gap-2 w-full justify-center">
              <ComparisonProductCard
                productName_en={firstAddedProduct?.attributes?.name_en ?? ""}
                index={data?.products?.data?.length === 2 ? 0 : 1}
                productName={firstAddedProduct?.attributes?.name ?? ""}
                productId={firstAddedProduct?.id ?? ""}
                price={distractPriceInProductData(firstAddedProduct as ProductEntity)}
                productImageURL={
                  firstAddedProduct?.attributes?.main_image?.data?.attributes?.url ?? ""
                }
                onClick={() => {
                  const filterRoute = params.getAll("id").filter((item) => {
                    return item !== firstAddedProduct?.id?.toString();
                  });
                  const createRoute = filterRoute.map((item) => {
                    return `id=${item}`;
                  });
                  replace(`${generalRoutes.comparison}?${createRoute.join("&")}`);
                }}
              />
            </Box>
            <Box className="flex justify-center self-center w-full">
              <Button
                style={{ backgroundColor: "#197bff" }}
                className={`self-center ${data?.products?.data?.length === 2 ? "!hidden" : "block"}`}
                onClick={async () => {
                  open();
                  await getProductList({
                    variables: {
                      page: 1,
                      pageSize: 10,
                    },
                  });
                }}
              >
                افزودن کالا
              </Button>
            </Box>
          </>}
      </div>
      <table className="w-full border mt-4">
        {sortedAttributes.map((attribute) => {
          return (
            <>
              <tr className="border">
                <th className="p-2 bg-slate-100">
                  {attribute.attr_category_title}
                </th>
                {data?.products?.data?.map((item, index) => (
                  <th key={index} className=" bg-slate-100"></th>
                ))}
              </tr>
              {attribute.children.map((child, index) => (
                <tr key={index}>
                  <td className="border w-[12%] p-2">{child.attr_name}</td>
                  {child.attr_values.map((attr_value, index) =>
                    index <= (data?.products?.data?.length ?? 0) - 1 ? (
                      <td key={index} className="border text-right p-1  md:!w-[40%]">
                        <Text className={`${data?.products?.data?.length === 2 ? "w-[12t0px]" : "w-full"} ${isDesktop ? "" : "break-words"} md:w-full`}>
                          {attr_value}
                        </Text>
                      </td>
                    ) : (
                      <></>
                    )
                  )}
                </tr>
              ))}
            </>
          );
        })}
      </table>
      <Modal
        styles={{ header: { position: "unset" } }}
        opened={opened}
        onClose={close}
        centered
        size="70%"
        classNames={{
          content: "p-0",
          body: "md:!h-[650px]",
        }}
        fullScreen={isDesktop ? false : true}
      >
        <Box className="w-full flex flex-wrap gap-2 ">
          <ComparisonSearchBox
            onClick={() => {
              close();
            }}
          />
        </Box>
      </Modal>
    </div>
  );
};

export default ComparisonTable;
