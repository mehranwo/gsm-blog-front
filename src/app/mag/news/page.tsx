import { Box, Text } from "@mantine/core";
import { IconChevronLeft } from "@tabler/icons-react";
import { Metadata } from "next";
import Link from "next/link";

import BreadCrumbs from "@/common/components/BreadCrumbs";
import { generalRoutes } from "@/common/constants/routes";
import { getClient } from "@/services/apollo-wrapper";
import {
  NewsListQuery,
} from "@/services/Graphql/types.generated";

import ListingNews from "./_components";
import { NEWS_LIST_QUERY } from "./query";

export const metadata: Metadata = {
  title: "آخرین اخبار موبایل و تکنولوژی | جی‌اس‌ام",
  description: "آخرین اخبار موبایل و تکنولوژی و هر آن چیزی که از دنیای موبایل باید بدانید را در این صفحه می‌توانید مشاهده کنید.",
  alternates: {
    canonical: "https://www.gsm.ir/mag/news/"
  },
  robots: "follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
}
export const revalidate = 6000;
export const dynamic = "force-dynamic"

async function getData(filterBrandId?: string) {
  try {
    const { data } = await getClient().query({
      query: NEWS_LIST_QUERY,
      variables: {
        filters: {
          type: { eq: "news" },
          ...(filterBrandId ? { brands: { id: { eq: filterBrandId } } } : {}),
        },
        page: 1,
        pageSize: 15,
      },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
}

const ReportList = async ({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) => {
  const data: NewsListQuery = await getData(searchParams?.brandId as string);
  return (
    <Box className="container mt-10 md:mt-0">
      <BreadCrumbs>
        <Link style={{ color: "#8690A2" }} className="!text-xs md:!text-base" href={generalRoutes.home}>خانه</Link>
        <IconChevronLeft style={{ color: "#8690A2" }} size={10} />
        <Text className="!text-xs md:!text-base">اخبار</Text>
      </BreadCrumbs>
      <ListingNews data={data} />
    </Box>
  );
};

export default ReportList;
