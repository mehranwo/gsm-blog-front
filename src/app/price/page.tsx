import { Text } from "@mantine/core";
import { IconChevronLeft } from "@tabler/icons-react";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";

import { generalRoutes } from "@/common/constants/routes";
import { getClient } from "@/services/apollo-wrapper";
import { ProductListQuery } from "@/services/Graphql/types.generated";

import PlpListingComponent from "./_components/Listing";
import { PRODUCT_LIST_QUERY } from "./query";

export const metadata: Metadata = {
  title: "قیمت روز گوشی - لیست قیمت گوشی موبایل - جی‌اس‌ام",
  description: 'لیست قیمت روز تمام گوشی‌های موجود در بازار ایران شامل برندهای اپل، هواوی، سامسونگ، شیائومی و … را در این صفحه می‌توانید مشاهده کنید.',
  alternates: {
    canonical: "https://www.gsm.ir/price/"
  },
  robots: "follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
}

import BreadCrumbs from "@/common/components/BreadCrumbs";
// export const dynamic = 'force-dynamic'
export const revalidate = 6000;
export const dynamic = "force-dynamic"
async function getData() {
  try {
    const { data } = await getClient().query({
      query: PRODUCT_LIST_QUERY,
      fetchPolicy: "no-cache",
      variables: { page: 1, pageSize: 12 },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
}

const ProductListPage = async () => {
  const data: ProductListQuery = await getData();

  return (
    <div className="container mt-10 md:mt-0">
      <BreadCrumbs>
        <Link style={{ color: "#8690A2" }} className="!text-xs md:!text-base" href={generalRoutes.home}>خانه</Link>
        <IconChevronLeft style={{ color: "#8690A2" }} size={10} />
        <Text className="!text-xs md:!text-base">گوشی‌ها</Text>
      </BreadCrumbs>
      {/* <form className="flex gap-2 flex-row-reverse justify-between md:!mb-1">

        <div className="col-md-4 col-xl-3 !w-[65%] md:!w-[20%]">
          <select className="form-select" aria-label="نمونه انتخاب پیش فرض">
            <option selected>مرتب‌سازی بر اساس</option>
            <option value="1">نام</option>
            <option value="2">ارزان ترین</option>
            <option value="3">گران ترین</option>
          </select>
        </div>
        <div className="flex gap-2 flex-wrap ">
          <div className="!w-[30%] md:!w-[15%]">
            <select className="form-select" aria-label="نمونه انتخاب پیش فرض">
              <option selected>فیلتر</option>
              <option value="1">تی شرت</option>
              <option value="2">کفش</option>
              <option value="3">کوله پشتی</option>
            </select>
          </div>
          <div className="!w-[30%] md:!w-[15%]">
            <select className="form-select" aria-label="نمونه انتخاب پیش فرض">
              <option selected>فیلتر</option>
              <option value="1">تی شرت</option>
              <option value="2">کفش</option>
              <option value="3">کوله پشتی</option>
            </select>
          </div>
          <div className="!w-[30%] md:!w-[15%]">
            <select className="form-select" aria-label="نمونه انتخاب پیش فرض">
              <option selected>فیلتر</option>
              <option value="1">تی شرت</option>
              <option value="2">کفش</option>
              <option value="3">کوله پشتی</option>
            </select>
          </div>
          <div className="!w-[30%] md:!w-[15%]">
            <select className="form-select" aria-label="نمونه انتخاب پیش فرض">
              <option selected>فیلتر</option>
              <option value="1">تی شرت</option>
              <option value="2">کفش</option>
              <option value="3">کوله پشتی</option>
            </select>
          </div>
          <div className="!w-[30%] md:!w-[15%]">
            <select className="form-select" aria-label="نمونه انتخاب پیش فرض">
              <option selected>فیلتر</option>
              <option value="1">تی شرت</option>
              <option value="2">کفش</option>
              <option value="3">کوله پشتی</option>
            </select>
          </div>
        </div>

      </form> */}
      <PlpListingComponent data={data} />
    </div>
  );
};

export default ProductListPage;
