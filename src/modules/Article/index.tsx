import { Box, Text } from "@mantine/core";
import { IconChevronLeft } from "@tabler/icons-react";
import Link from "next/link";

import BreadCrumbs from "@/common/components/BreadCrumbs";
import ReportsCarousel from "@/common/components/Carousel/ReportsCarousel";
import Comments from "@/common/components/comments";
import { generalRoutes } from "@/common/constants/routes";
import { truncate } from "@/common/utils";
import { getClient } from "@/services/apollo-wrapper";
import {
  ArticleDetailQuery,
  PostEntity,
  TrendArticlesQuery,
} from "@/services/Graphql/types.generated";

import { ARTICLE_DETAIL_QUERY, TREND_ARTICLES_QUERY } from "./query";
export const revalidate = 600000;
const getData = async (
  id: string
): Promise<{
  articleDetail: ArticleDetailQuery;
  trendArticles: TrendArticlesQuery;
}> => {
  const responses = await Promise.all([
    getClient().query({ query: ARTICLE_DETAIL_QUERY, variables: { id } }),
    getClient().query({ query: TREND_ARTICLES_QUERY, variables: { id } }),
  ]);
  return { articleDetail: responses[0].data, trendArticles: responses[1].data };
};

const ArticleDetailModule = async ({ params }: { params: { id: string } }) => {
  const { articleDetail, trendArticles } = await getData(params.id);

  const styleInImageRegex = /height(.*);\sw/g

  return (
    <div className="container mt-10 md:mt-0" >
      {/* <div className="border-bottom border-primary border-1 opacity-1"></div> */}
      <BreadCrumbs>
        <Link style={{ color: "#8690A2" }} className="!text-xs md:!text-base" href={generalRoutes.home}>خانه</Link>
        <IconChevronLeft style={{ color: "#8690A2" }} size={10} />
        <Link style={{ color: "#8690A2" }} className="!text-xs md:!text-base" href={generalRoutes.articles}>مقاله‌ها</Link>
        <IconChevronLeft style={{ color: "#8690A2" }} size={10} />
        <Text className="block md:hidden !text-xs md:!text-base">
          {truncate(articleDetail.post?.data?.attributes?.titre ?? "", 30)}
        </Text>
        <Text className="hidden md:block !text-xs md:!text-base">
          {articleDetail.post?.data?.attributes?.titre}
        </Text>
      </BreadCrumbs>
      <section className="!pb-0 pt-2 container flex flex-col md:flex-row md:flex gap-3 md:!gap-0">
        <Box className="border md:p-4 rounded-md">
          <div className="container">
            <div className="md:flex gap-3">
              <div className=" mt-4 mt-md-0 w-full">
                {/* <a
              href="#"
              className="badge bg-primary bg-opacity-10 text-primary mb-2"
            >
              {
                articleDetail.post?.data?.attributes?.main_tag?.data
                  ?.attributes?.name
              }
            </a> */}

                <h1 className="display-6">
                  {articleDetail.post?.data?.attributes?.titre}
                </h1>
                <div
                  className="mt-2 md:w-[760px] flex gap-2"
                // style={{
                //   fontFamily: "IRANSans",
                // }}
                // dangerouslySetInnerHTML={{
                //   __html: articleDetail.post?.data?.attributes?.summary ?? "",
                // }}
                >
                  <Box className="w-1 bg-blue-500"></Box>
                  <Text>
                    {articleDetail.post?.data?.attributes?.summary ?? ""}
                  </Text>
                </div>
                <span className="ms-2 small">
                  {new Date(
                    articleDetail.post?.data?.attributes?.publishedAt
                  ).toLocaleDateString("fa-IR")}
                </span>
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
                __html: articleDetail?.post?.data?.attributes?.main_text?.replaceAll(
                  "<a ",
                  '<a target="_blank" rel="noopenner" '
                ).replaceAll(styleInImageRegex, "w") ?? "",
              }}
            ></div>
          </div>
        </Box>
        {trendArticles.posts?.data.length !== 0 ? (
          <Box className="flex flex-col-reverse md:flex md:flex-row-reverse container !pr-0">
            <div className="md:mr-8 border rounded-md h-fit">
              <h4 className="mt-[20px] container">پربحث‌ترین‌ها</h4>
              {trendArticles.posts?.data.map((trendArticle, index) => (
                <div key={index} className="d-flex position-relative items-center mb-3 container">
                  <div className="row g-3">
                    <div className="col-4">
                      <img
                        className="rounded h-[70px] w-[80px]"
                        src={
                          trendArticle.attributes?.main_image?.data?.attributes
                            ?.url
                        }
                        alt=""
                      />
                    </div>
                    <div className="col-8">
                      <h6>
                        <Link
                          href={`${generalRoutes.newsList}/${trendArticle.id}`}
                          className="btn-link stretched-link text-reset"
                        >
                          {truncate(trendArticle?.attributes?.titre ?? "", 40)}
                        </Link>
                      </h6>
                      <div className="small mt-1">
                        {new Date(
                          trendArticle?.attributes?.publishedAt
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

      <Box className="container">
        {articleDetail.post?.data?.attributes?.main_tag?.data?.attributes
          ?.main_tag_posts?.data.length !== 0 &&
          articleDetail.post?.data?.attributes?.main_tag?.data?.attributes
            ?.main_tag_posts?.data.length !== undefined ? (
          <div className="mt-5">
            <h2 className="my-3">مقاله‌های مشابه</h2>
            <ReportsCarousel
              data={
                (articleDetail.post?.data?.attributes?.main_tag?.data
                  ?.attributes?.main_tag_posts?.data as Array<PostEntity>) || []
              }
            />
          </div>
        ) : (
          <></>
        )
        }
        <br />
        <Comments postId={`api::post.post:${params.id}`} />
      </Box>
      {/* <!-- Reply END --> */}
    </div>
  );
};

export default ArticleDetailModule;
