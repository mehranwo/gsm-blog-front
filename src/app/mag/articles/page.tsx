import { Box, Text } from "@mantine/core";
import { IconChevronLeft } from "@tabler/icons-react";
import { Metadata } from "next";
import Link from "next/link";

import BreadCrumbs from "@/common/components/BreadCrumbs";
import { generalRoutes } from "@/common/constants/routes";
import { getClient } from "@/services/apollo-wrapper";
import { ArticleListQuery } from "@/services/Graphql/types.generated";

import ArticleListingComponent from "./_components/Listing";
import { ARTICLE_LIST_QUERY } from "./query";

export const metadata: Metadata = {
  title: "آخرین مقاله‌های آموزشی موبایل | جی‌اس‌ام",
  description: 'آخرین مقاله‌های آموزشی در زمینه موبایل و تکنولوژی را در این صفحه می‌توانید مشاهده کنید.',
  alternates: {
    canonical: "https://www.gsm.ir/mag/articles/"
  },
  robots: "follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
}

export const revalidate = 6000;
export const dynamic = "force-dynamic"
async function getData() {
  try {
    const { data } = await getClient().query({
      query: ARTICLE_LIST_QUERY,
      variables: {
        page: 1,
        pageSize: 12,
      }
    });
    return data;
  } catch (error) {
    console.log(error);
  }
}

const ArticlePage = async () => {
  const data: ArticleListQuery = await getData();
  return (
    <Box className="container flex flex-col mt-10 md:mt-0">
      <BreadCrumbs>
        <Link style={{ color: "#8690A2" }} className="!text-xs md:!text-base" href={generalRoutes.home}>خانه</Link>
        <IconChevronLeft style={{ color: "#8690A2" }} size={10} />
        <Text className="!text-xs md:!text-base">مقاله‌ها</Text>
      </BreadCrumbs>
      <ArticleListingComponent data={data} />
    </Box>
  );
};

export default ArticlePage;
