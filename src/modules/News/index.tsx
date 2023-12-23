import { Box, Text } from "@mantine/core";
import { IconChevronLeft } from "@tabler/icons-react";
import Link from "next/link";
import React from "react";

import BreadCrumbs from "@/common/components/BreadCrumbs";
import ReportsCarousel from "@/common/components/Carousel/ReportsCarousel";
import Comments from "@/common/components/comments";
import Sharing from "@/common/components/Sharing";
import { generalRoutes } from "@/common/constants/routes";
import { truncate } from "@/common/utils";
import { getClient } from "@/services/apollo-wrapper";
import {
  NewsDetailQuery,
  PostEntity,
} from "@/services/Graphql/types.generated";

import { NEWS_DETAIL_QUERY, RELATED_NEWS_QUERY, TREND_NEWS_QUERY } from "./query";
export const revalidate = 600000;
const getData = async (
  id: string
): Promise<{ newsDetail: NewsDetailQuery; trendNews: any; RelatedNews: any }> => {
  try {
    const responses = await Promise.all([
      getClient().query({ query: NEWS_DETAIL_QUERY, variables: { id } }),
      getClient().query({ query: TREND_NEWS_QUERY, variables: { id } }),
      getClient().query({ query: RELATED_NEWS_QUERY, variables: { id } })
    ]);
    return {
      newsDetail: responses[0].data,
      trendNews: responses[1].data,
      RelatedNews: responses[2].data
    };
  } catch (error) {
    return { newsDetail: {}, trendNews: {}, RelatedNews: {} }
  }
};

const NewsDetailModule = async ({ params }: { params: { id: string } }) => {
  const { newsDetail, trendNews, RelatedNews } = await getData(params.id);


  const styleInImageRegex = /height(.*);\sw/g

  return (
    <div className="container mt-10 md:mt-0">
      <BreadCrumbs>
        <Link style={{ color: "#8690A2" }} className="!text-xs md:!text-base" href={generalRoutes.home}>
          خانه
        </Link>
        <IconChevronLeft style={{ color: "#8690A2" }} size={10} />
        <Link style={{ color: "#8690A2" }} className="!text-xs md:!text-base" href={generalRoutes.newsList}>
          اخبار
        </Link>
        <IconChevronLeft style={{ color: "#8690A2" }} size={10} />
        <Text className="hidden md:block !text-xs md:!text-base">
          {newsDetail.post?.data?.attributes?.titre}
        </Text>
        <Text className="block md:hidden !text-xs md:!text-base">
          {truncate(newsDetail.post?.data?.attributes?.titre ?? "", 35)}
        </Text>
      </BreadCrumbs>
      <section className="!pb-0 pt-2 container flex flex-col md:flex-row md:flex gap-3 md:!gap-0 px-0">
        <Box className="border md:p-4 rounded-md">
          <div className="container">
            <div className="md:flex gap-3">
              <div className=" mt-4 mt-md-0 w-full">
                {/* <a
                  href="#"
                  className="badge bg-primary bg-opacity-10 text-primary mb-2"
                >
                  {
                    newsDetail.post?.data?.attributes?.main_tag?.data
                      ?.attributes?.name
                  }
                </a> */}

                <h1 className="display-6">
                  {newsDetail.post?.data?.attributes?.titre}
                </h1>
                <div
                  className="mt-2 md:w-[760px] flex gap-2"
                // style={{
                //   fontFamily: "IRANSans",
                // }}
                // dangerouslySetInnerHTML={{
                //   __html: newsDetail.post?.data?.attributes?.summary ?? "",
                // }}
                >
                  <Box className="w-1 bg-blue-500"></Box>
                  <Text style={{
                    fontFamily: "IRANSans",
                  }}
                    dangerouslySetInnerHTML={{
                      __html: newsDetail?.post?.data?.attributes?.summary ?? "",
                    }}>
                    {/* {newsDetail.post?.data?.attributes?.summary ?? ""} */}
                  </Text>
                </div>
                <Box className="flex items-center gap-2 mt-2">
                  <Sharing />
                  <span className="ms-2 small">
                    {new Date(
                      newsDetail.post?.data?.attributes?.publishedAt
                    ).toLocaleDateString("fa-IR")}
                  </span>
                </Box>
              </div>
            </div>
          </div>
          <div className="container">
            <div
              className="mt-4"
              style={{
                fontFamily: "IRANSans",
              }}
              dangerouslySetInnerHTML={{
                __html: newsDetail?.post?.data?.attributes?.main_text?.replaceAll(styleInImageRegex, "w") ?? "",
              }}
            ></div>
          </div>
        </Box>
        {trendNews.posts?.data.length !== 0 ? (
          <Box className="flex flex-col-reverse md:flex md:flex-row-reverse container !px-0">
            <div className="md:mr-8 border rounded-md h-fit">
              <h4 className="mt-[20px] container">داغ‌ترین‌ها</h4>
              {trendNews.posts?.data.map((trendReport: any, index: any) => (
                <div key={index} className="d-flex position-relative items-center mb-3 container">
                  <div className="row g-3">
                    <div className="col-4">
                      <img
                        className="rounded h-[70px] w-[80px]"
                        src={
                          trendReport.attributes?.main_image?.data?.attributes
                            ?.formats?.thumbnail.url
                        }
                        alt=""
                      />
                    </div>
                    <div className="col-8">
                      <h6>
                        <Link
                          href={`${generalRoutes.newsList}/${trendReport.id}/${trendReport?.attributes?.titre?.split(" ").join("-")}`}
                          className="btn-link stretched-link text-reset"
                        >
                          {truncate(trendReport?.attributes?.titre ?? "", 40)}
                        </Link>
                      </h6>
                      <div className="small mt-1">
                        {new Date(
                          trendReport?.attributes?.publishedAt
                        ).toLocaleDateString("fa-IR")}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Box>
        ) : (
          <></>
        )}
      </section>
      <Box className="container px-0">
        <Box className="max-w-[820px]">
          <div className="mt-5">
            <h2 className="my-3">اخبار مشابه</h2>
            <ReportsCarousel
              data={
                (RelatedNews?.posts?.data.concat(newsDetail.post?.data?.attributes?.main_tag?.data?.attributes
                  ?.main_tag_posts?.data).reverse() as Array<PostEntity>) || []
              }
            />
          </div>
          <Comments postId={`api::post.post:${params.id}`} />
        </Box>
      </Box>
      {/* <!-- Reply END --> */}
    </div>
  );
};

export default NewsDetailModule;
