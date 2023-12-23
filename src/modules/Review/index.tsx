import { Box, Text } from "@mantine/core";
import { IconChevronLeft } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import BreadCrumbs from "@/common/components/BreadCrumbs";
import TechReviewsCarousel from "@/common/components/Carousel/TechReviewsCarousel";
import Comments from "@/common/components/comments";
import Sharing from "@/common/components/Sharing";
import { generalRoutes } from "@/common/constants/routes";
import { truncate } from "@/common/utils";
import { getClient } from "@/services/apollo-wrapper";
import {
  PostEntity,
  TechReviewDetailQuery,
} from "@/services/Graphql/types.generated";

import MainText from "./_components/MainText";
import { REVIEW_DETAIL_BAR_QUERY, TECH_REVIEW_DETAIL } from "./query";

export const dynamic = "force-dynamic";
const getData = async (
  id: string
): Promise<{
  reviewDetailData: TechReviewDetailQuery;
  newReviews: any;
}> => {
  try {
    const responses = await Promise.all([
      getClient().query({
        query: TECH_REVIEW_DETAIL,
        variables: { id },
      }),
      getClient().query({
        query: REVIEW_DETAIL_BAR_QUERY,
        variables: { id },
      }),
    ]);
    // const { data } = await getClient().query({
    //     query: TECH_REVIEW_DETAIL,
    //     variables: { id },
    // });
    return {
      reviewDetailData: responses[0].data,
      newReviews: responses[1].data,
    };
  } catch (error) {
    console.log(error);
    return { reviewDetailData: {}, newReviews: {} };
  }
};

const ReviewDetailModule = async ({ params }: { params: { id: string } }) => {
  const { newReviews, reviewDetailData } = await getData(params.id);

  return (
    <Box className="container mt-10 md:mt-0">
      <BreadCrumbs>
        <Link style={{ color: "#8690A2" }} className="!text-xs md:!text-base" href={generalRoutes.home}>
          خانه
        </Link>
        <IconChevronLeft style={{ color: "#8690A2" }} size={10} />
        <Link style={{ color: "#8690A2" }}
          className="!text-xs md:!text-base"
          href={generalRoutes.reviewList}
        >
          بررسی‌ها‌
        </Link>
        <IconChevronLeft style={{ color: "#8690A2" }} size={10} />
        <Text className="hidden md:block !text-xs md:!text-base">
          {reviewDetailData?.post?.data?.attributes?.titre}
        </Text>
        <Text className="block md:hidden !text-xs md:!text-base">
          {truncate(reviewDetailData?.post?.data?.attributes?.titre ?? "", 18)}
        </Text>
      </BreadCrumbs>
      <Box className="">
        <div className="bg-dark-overlay-4 relative overflow-hidden container mb-8 h-[400px] md:w-[600px] md:h-[600px]">
          <Image
            className="absolute w-full h-full right-0 -z-10"
            src={
              reviewDetailData?.post?.data?.attributes?.main_image?.data
                ?.attributes?.url ?? ""
            }
            width={600}
            height={200}
            alt=""
          />
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                {/* <a href="#" className="badge text-bg-warning mb-2">{data.post?.data?.attributes?.main_tag?.data?.attributes?.name}</a> */}

                <h1 className="text-white mt-[120px] md:mt-[450px]">
                  {reviewDetailData?.post?.data?.attributes?.titre}
                </h1>
                <p className="lead text-white ">
                  {reviewDetailData?.post?.data?.attributes?.summary}
                </p>
                <ul className="nav nav-divider text-white-force align-items-center">
                  <li className="nav-item">
                    <div className="nav-link">
                      {/* <div className="d-flex align-items-center text-white position-relative">
                                            <div className="avatar avatar-sm">
                                                <Image className="avatar-img rounded-circle" src={data.post?.data?.attributes?.author?.data?.attributes?.author_image.data?.attributes?.url} alt="avatar" width={50} height={50} />
                                            </div>
                                            <span className="ms-3">با <a href="#" className="stretched-link text-reset btn-link">{data.post?.data?.attributes?.author?.data?.attributes?.name}</a></span>
                                        </div> */}
                    </div>
                  </li>
                  {/* <li className="">
                                        {new Date(
                                            reviewDetailData?.post?.data?.attributes?.publishedAt
                                        ).toLocaleDateString("fa-IR")}
                                    </li> */}
                  {reviewDetailData?.post?.data?.attributes?.reading_time ? (
                    <li className="nav-item">
                      <span>زمان مطالعه </span>
                      {reviewDetailData?.post?.data?.attributes?.reading_time ??
                        ""}
                      <span> دقیقه</span>
                    </li>
                  ) : (
                    <></>
                  )}
                  <li className="mr-2"></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Box>
      <Box className="flex items-center flex-row-reverse">
        <Box className="flex items-center gap-6">
          <Text>
            {new Date(
              reviewDetailData?.post?.data?.attributes?.publishedAt
            ).toLocaleDateString("fa-IR")}
          </Text>

          <Sharing />
        </Box>
      </Box>
      <Box className="container flex items-center justify-center">
        <Box className="!max-w-[700px]">
          <MainText data={reviewDetailData} />
        </Box>
      </Box>
      <div className="w-full">
        <div className="mt-10 mb-4">
          <h2 className="my-3">بررسی‌های مشابه</h2>
          <TechReviewsCarousel
            data={
              (newReviews?.posts?.data
                .concat(
                  reviewDetailData?.post?.data?.attributes?.main_tag?.data
                    ?.attributes?.main_tag_posts?.data ?? []
                )
                .reverse() as Array<PostEntity>) || []
            }
            slidesPerView={4}
            slidePerViewInMobile={2.3}
          />
        </div>
        <Comments postId={`api::post.post:${params.id}`} />
      </div>
    </Box>
  );
};

export default ReviewDetailModule;
