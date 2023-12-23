import { Box, Text } from "@mantine/core";
import { IconChevronLeft } from "@tabler/icons-react";
import Link from "next/link";
import React from "react";

import BreadCrumbs from "@/common/components/BreadCrumbs";
import { generalRoutes } from "@/common/constants/routes";
import { getClient } from "@/services/apollo-wrapper";

import ListingReviews from "./_components";
import { TECH_REVIEW_LIST_QUERY } from "./query";

export const dynamic = "force-dynamic"
export const revalidate = 6000;

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "آخرین بررسی تخصصی گوشی‌های موبایل | جی‌اس‌ام",
  description: 'آخرین بررسی تخصصی گوشی‌های موبایل در ایران را در این صفحه می‌توانید مشاهده کنید. ',
  alternates: {
    canonical: "https://www.gsm.ir/mag/reviews/"
  },
  robots: "follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
}
async function getData(id?: string | string[]) {
  try {
    const { data } = await getClient().query({
      query: TECH_REVIEW_LIST_QUERY,
      fetchPolicy: "no-cache",
      variables: {
        page: 1,
        pageSize: 16,
        filters: { type: { eq: "review" }, brands: { id: { eq: id } } },
      },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
}

const TechReviewList = async ({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) => {
  const data = await getData(searchParams?.brandId);
  return (
    <Box className="container mt-10 md:mt-0">
      <BreadCrumbs>
        <Link style={{ color: "#8690A2" }} className="!text-xs md:!text-base" href={generalRoutes.home}>خانه</Link>
        <IconChevronLeft style={{ color: "#8690A2" }} size={10} />
        <Text className="!text-xs md:!text-base">
          بررسی‌ها
        </Text>
      </BreadCrumbs>
      <ListingReviews data={data} />
    </Box>
  );
};

export default TechReviewList;
