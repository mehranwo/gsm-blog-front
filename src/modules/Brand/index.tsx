import { Box, Image, Text } from "@mantine/core";
import { IconChevronLeft } from "@tabler/icons-react";
import Link from "next/link";
import React from "react";

import BreadCrumbs from "@/common/components/BreadCrumbs";
import { generalRoutes } from "@/common/constants/routes";
import { getClient } from "@/services/apollo-wrapper";
import {
    BrandDetailQuery,
    ProductListBrandQuery,
} from "@/services/Graphql/types.generated";

import BrandRelatedPost from "./_components/BrandRelatedPost";
import BrandProductsComponent from "./_components/productListing";
import { BRAND_DETAIL_QUERY, PRODUCTS_RELATED_BRAND } from "./query";

export const revalidate = 600000;
const getData = async (
    id: string
): Promise<{
    brandDetail: BrandDetailQuery;
    productRelated: ProductListBrandQuery;
}> => {
    const responses = await Promise.all([
        getClient().query({ query: BRAND_DETAIL_QUERY, variables: { id } }),
        getClient().query({
            query: PRODUCTS_RELATED_BRAND,
            variables: { id, page: 1, pageSize: 16 },
        }),
    ]);
    return { brandDetail: responses[0].data, productRelated: responses[1].data };
};

const BrandDetailModule = async ({ params }: { params: { id: string } }) => {
    const { brandDetail, productRelated } = await getData(params.id);


    return (
        <div className="container mt-10 md:mt-0">
            <BreadCrumbs>
                <Link style={{ color: "#8690A2" }} className="!text-xs md:!text-base" href={generalRoutes.home}>خانه</Link>
                <IconChevronLeft style={{ color: "#8690A2" }} size={10} />
                <Text className="!text-xs md:!text-base">
                    {brandDetail.brand?.data?.attributes?.persian_name}
                </Text>
            </BreadCrumbs>
            {/* <Box
        style={{ backgroundColor: "#f9fafb" }}
        className="border-2 mt-2 p-2 flex flex-col md:flex md:flex-row items-center justify-center rounded-lg"
      > */}
            {/* <h3 className="mt-5">{brandDetail.brand?.data?.attributes?.english_name}</h3> */}
            <Box className="flex items-center gap-3">
                <Image
                    src={
                        brandDetail.brand?.data?.attributes?.brand_image.data?.attributes
                            ?.url
                    }
                    alt={brandDetail.brand?.data?.attributes?.persian_name}
                />
                <Text>
                    {brandDetail.brand?.data?.attributes?.persian_name}
                </Text>
            </Box>
            {/* {brandDetail.brand?.data?.attributes?.description ? (
        <>
          <p>{brandDetail.brand?.data?.attributes?.description}</p>{" "}
        </>
      ) : null} */}
            {/* </Box> */}
            <form className="flex flex-col md:flex md:flex-row gap-2 mt-2 justify-between mb-4">
                {/* <Box className="flex flex-col md:flex md:flex-row gap-2 md:gap-0">

        <Box className="flex gap-2">
        <div className="!w-full md:!w-[30%]">
            <select className="form-select">
              <option selected>فیلتر</option>
              <option value="1">تی شرت</option>
              <option value="2">کفش</option>
              <option value="3">کوله پشتی</option>
            </select>
          </div>
          <div className="!w-full md:!w-[30%]">
            <select className="form-select">
              <option selected>فیلتر</option>
              <option value="1">تی شرت</option>
              <option value="2">کفش</option>
              <option value="3">کوله پشتی</option>
            </select>
          </div>
          <div className="!w-full md:!w-[30%]">
            <select className="form-select">
              <option selected>فیلتر</option>
              <option value="1">تی شرت</option>
              <option value="2">کفش</option>
              <option value="3">کوله پشتی</option>
            </select>
          </div>
        </Box>
        <div className="col-md-4 col-xl-3 !w-full md:!w-[35%]">
          <select className="form-select">
            <option selected>مرتب‌سازی بر اساس</option>
            <option value="1">نام</option>
            <option value="2">ارزان ترین</option>
            <option value="3">گران ترین</option>
          </select>
        </div>
        </Box> */}
                <Box className="flex gap-3">
                    <Link
                        style={{ border: "1px solid #197bff", color: "#197bff !important" }}
                        className="p-2 w-[200px] text-sm md:text-base md:w-[245px] flex justify-between rounded-3xl"
                        href={`${generalRoutes.reviewList}?brandId=${brandDetail.brand?.data?.id}`}
                    >
                        بررسی‌
                        {/* ({brandDetail.brand?.data?.attributes?.posts?.data.length}) */}
                        <IconChevronLeft />
                    </Link>
                    <Link
                        style={{ border: "1px solid #197bff", color: "#197bff !important" }}
                        className="p-2 w-[200px] text-sm md:text-base md:w-[245px] flex justify-between rounded-3xl"
                        href={`${generalRoutes.news}?brandId=${brandDetail.brand?.data?.id}`}
                    >
                        اخبار
                        {/* ({brandDetail.brand?.data?.attributes?.posts?.data.length}) */}
                        <IconChevronLeft />

                    </Link>
                </Box>
                {/* <Box className="md:hidden block">
                    <BrandRelatedPost data={brandDetail} />
                </Box> */}
            </form>
            <BrandProductsComponent data={productRelated} brandId={params.id} />
        </div>
    );
};

export default BrandDetailModule;
