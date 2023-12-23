import "swiper/css";
import "swiper/css/navigation";

import {
  Box,
  Table,
  TableTbody,
  TableTd,
  TableThead,
  TableTr,
  Text,
} from "@mantine/core";
import { IconChevronLeft } from "@tabler/icons-react";
import Link from "next/link";
import React from "react";

import BreadCrumbs from "@/common/components/BreadCrumbs";
import ProductCarousel from "@/common/components/Carousel/ProductCarousel";
import Comments from "@/common/components/comments";
import { generalRoutes } from "@/common/constants/routes";
import { distractPriceInProductData } from "@/common/utils/product";
import { getClient } from "@/services/apollo-wrapper";
import {
  Attribute,
  ProductDetailQuery,
  ProductEntity,
  UploadFileEntity,
} from "@/services/Graphql/types.generated";

import Sharing from "../../common/components/Sharing";
import Gallery from "./components/Gallery";
import ProductAttribute from "./components/ProductAttribute";
import { PRODUCT_DETAIL_BAR_QUERY, PRODUCT_DETAIL_QUERY } from "./query";

export const revalidate = 1;

const getData = async (
  id: string
): Promise<{ productDetail: ProductDetailQuery; RelatedProduct: any }> => {
  try {
    const responses = await Promise.all([
      await getClient().query({
        query: PRODUCT_DETAIL_QUERY,
        variables: { id },
      }),
      await getClient().query({
        query: PRODUCT_DETAIL_BAR_QUERY,
        variables: { id },
      }),
    ]);
    // const { data } = await getClient().query({
    //   query: PRODUCT_DETAIL_QUERY,
    //   variables: { id },
    // });
    return {
      productDetail: responses[0].data,
      RelatedProduct: responses[1].data,
    };
  } catch (error) {
    console.log(error);
    return { productDetail: {}, RelatedProduct: {} };
  }
};
const ProductDetailModule = async ({ params }: { params: { id: string } }) => {
  const { RelatedProduct, productDetail: data } = await getData(params.id);

  const convertedDataToFeaturedAttributes = (data: ProductDetailQuery) => {
    const featuredAttributes: Array<
      Attribute & {
        attribute_value: string;
      }
    > = [];

    data?.product?.data?.attributes?.attribute_values?.data?.forEach((item) => {
      if (item.attributes?.attribute_id?.data?.attributes?.is_featured) {
        featuredAttributes.push({
          ...(item.attributes?.attribute_id?.data?.attributes as Attribute),
          attribute_value: item.attributes.value,
        });
      }
    });

    const sortedFeaturedAttributes = featuredAttributes.sort(function (x, y) {
      return (x.featured_priority ?? 0) - (y.featured_priority ?? 0);
    });

    const result: Array<{ [key: string]: string }> =
      sortedFeaturedAttributes.map((item) => {
        return {
          key: item.name,
          value: item.attribute_value,
        };
      });

    let mergedAttributes: { [key: string]: string } = {};
    result.forEach((attribute) => {
      mergedAttributes[attribute.key] =
        (mergedAttributes[attribute.key] ?? "") + " " + attribute.value;
    });

    return mergedAttributes;
  };

  let attributes: Array<{
    attr_category_id: string;
    attr_category_title: string;
    attr_category_priority: number;
    children: Array<{
      attr_name: string;
      attr_value: string;
      attr_priority: number;
    }>;
  }> = [];

  data?.product?.data?.attributes?.attribute_values?.data.map((item: any) => {
    const attr_category = attributes.filter(
      (attribute) =>
        attribute.attr_category_id ===
        item.attributes?.attribute_id?.data?.attributes?.attribute_category
          ?.data?.id
    );
    const rest_attr_category = attributes.filter(
      (attribute) =>
        attribute.attr_category_id !==
        item.attributes?.attribute_id?.data?.attributes?.attribute_category
          ?.data?.id
    );

    if (attr_category.length) {
      attributes = [
        ...rest_attr_category,
        {
          attr_category_id: attr_category[0].attr_category_id,
          attr_category_priority: attr_category[0].attr_category_priority ?? 0,
          attr_category_title: attr_category[0].attr_category_title,
          children: [
            ...attr_category[0].children,
            {
              attr_name:
                item.attributes?.attribute_id?.data?.attributes?.name ?? "",
              attr_priority:
                item.attributes?.attribute_id?.data?.attributes
                  ?.attr_cat_priority ?? 0,
              attr_value: item.attributes?.value ?? "",
            },
          ],
        },
      ];
    } else {
      attributes = [
        ...rest_attr_category,
        {
          attr_category_id:
            item.attributes?.attribute_id?.data?.attributes?.attribute_category
              ?.data?.id ?? "",
          attr_category_priority:
            item.attributes?.attribute_id?.data?.attributes?.attribute_category
              ?.data?.attributes?.priority ?? 0,
          attr_category_title:
            item.attributes?.attribute_id?.data?.attributes?.attribute_category
              ?.data?.attributes?.title ?? "",
          children: [
            {
              attr_name:
                item.attributes?.attribute_id?.data?.attributes?.name ?? "",
              attr_priority:
                item.attributes?.attribute_id?.data?.attributes
                  ?.attr_cat_priority ?? 0,
              attr_value: item.attributes?.value ?? "",
            },
          ],
        },
      ];
    }
  });

  const sortedAttributes = attributes.sort(function (x, y) {
    return x.attr_category_priority - y.attr_category_priority;
  });

  return (
    <div className="container mt-10 md:mt-0">
      <BreadCrumbs>
        <Link
          style={{ color: "#8690A2" }}
          className="text-xs md:text-base"
          href={generalRoutes.home}
        >
          خانه
        </Link>
        <IconChevronLeft style={{ color: "#8690A2" }} size={10} />
        <Link
          style={{ color: "#8690A2" }}
          className="!text-xs md:!text-base"
          href={generalRoutes.plp}
        >
          گوشی‌ها
        </Link>
        <IconChevronLeft style={{ color: "#8690A2" }} size={10} />
        <Text className="!text-xs md:!text-base">
          {data?.product?.data?.attributes?.name}
        </Text>
      </BreadCrumbs>
      <div className="container mt-5">
        <div className="row g-4 g-lg-0 justify-content-between">
          <h1
            style={{
              fontSize: "24px",
              fontWeight: "semi-bold",
            }}
            className="md:hidden block"
          >
            {data?.product?.data?.attributes?.name}
          </h1>
          <div className="col-lg-5 relative">
            <Box className="flex flex-col gap-3 !w-fit absolute top-0 right-[10px] z-50">
              <Sharing />
            </Box>
            <Gallery
              data={
                [
                  ...(data?.product?.data?.attributes?.images?.data ?? []),
                  data?.product?.data?.attributes?.main_image?.data,
                ] as UploadFileEntity[]
              }
            />
          </div>
          <div className="col-lg-6">
            <h1
              style={{
                fontSize: "24px",
                fontWeight: "semi-bold",
              }}
              className="hidden md:block"
            >
              {data?.product?.data?.attributes?.name}
            </h1>
            <ProductAttribute
              price={distractPriceInProductData(
                (data.product?.data as ProductEntity) ?? []
              )}
              attributes={convertedDataToFeaturedAttributes(data)}
            />
            <Link
              href={`${generalRoutes.comparison}?id=${params.id}`}
              className=" text-white  text-center"
            >
              <Box
                style={{ backgroundColor: "#197bff" }}
                className="!w-full p-2 !rounded-md mt-20"
              >
                مقایسه کالا
              </Box>
            </Link>
          </div>
        </div>
      </div>
      <div className="">
        <Table withTableBorder withColumnBorders className="mt-10">
          <TableThead>
            <TableTr></TableTr>
          </TableThead>
          <TableTbody>
            {sortedAttributes.map((attribute) => {
              const sortedAttributesChildren = attribute.children.sort(
                function (x, y) {
                  return x.attr_priority - y.attr_priority;
                }
              );
              return (
                <TableTr key={attribute.attr_category_id}>
                  <TableTd className="flex bg-slate-100 font-bold">
                    {attribute.attr_category_title}
                  </TableTd>
                  <Table withColumnBorders>
                    {sortedAttributesChildren.map((attr_child, index) => {
                      if (index === 0) {
                        return (
                          <TableThead key={index}>
                            <TableTr>
                              <TableTd className="w-[10%]">
                                {attr_child.attr_name}
                              </TableTd>
                              <TableTd className="w-full">
                                {attr_child.attr_value}
                              </TableTd>
                            </TableTr>
                          </TableThead>
                        );
                      }
                      return (
                        // <TableTbody>
                        <TableTr key={index}>
                          <TableTd>{attr_child.attr_name}</TableTd>
                          <TableTd>{attr_child.attr_value}</TableTd>
                        </TableTr>
                        // </TableTbody>
                      );
                    })}
                  </Table>
                </TableTr>
              );
            })}
          </TableTbody>
        </Table>
        <hr />
      </div>
      {/* <div className="container">
        <h2 className="my-3">اخبار و بررسی‌های مرتبط</h2>
        <ReportsCarousel data={data.product?.data?.attributes?.posts?.data as PostEntity[]} />
      </div> */}

      <div className=" mt-4">
        <h2 className="my-3">کالاهای مشابه</h2>
        <ProductCarousel
          data={
            RelatedProduct?.products?.data
              .concat(
                data?.product?.data?.attributes?.brand?.data?.attributes
                  ?.products?.data ?? []
              )
              .reverse() as ProductEntity[]
          }
        />
      </div>

      <Box className="mt-2">
        <Comments postId={`api::product.product:${params.id}`} />
      </Box>
    </div>
  );
};

export default ProductDetailModule;
