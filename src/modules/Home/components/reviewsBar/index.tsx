import { Box } from "@mantine/core";
import React from "react";

import SpecialTechReviewCard from "@/common/components/Card/specialTechReviewCard";
import { getClient } from "@/services/apollo-wrapper";
import { PostEntity, ReviewBarQuery } from "@/services/Graphql/types.generated";

import { REVIEW_BAR_QUERY } from "./query";
import ReviewBarCard from "./reviewBarCard";

export const revalidate = 120;

const getData = async () => {
  try {
    const { data } = await getClient().query({
      query: REVIEW_BAR_QUERY,
      fetchPolicy: "no-cache",
    });
    return data;
  } catch (error) {
    console.log(error);
  }
}

const ReviewsBar = async () => {
  const data: ReviewBarQuery = await getData();

  return (
    <section className="!p-0 mb-4">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            {/* <!-- Title --> */}
            <div className="mb-2">
              <h2 className="m-sm-0">بررسی‌های‌ تخصصی</h2>
              <p>
                آخرین بررسی‌های گوشی را میتوانید از اینجا مشاهده کنید
              </p>
            </div>
          </div>
          <Box className="container flex flex-col md:flex md:flex-row w-full gap-3">
            <SpecialTechReviewCard data={data?.posts?.data[0] as PostEntity} />
            <div className="col-lg-5 mt-2 mt-lg-0 bg-transparent flex-col flex gap-3">
              {data?.posts?.data.slice(1).map((review) => (
                <ReviewBarCard
                  key={review.id}
                  mainTag={
                    review.attributes?.main_tag?.data?.attributes?.name ?? ""
                  }
                  titre={review.attributes?.titre ?? ""}
                  postId={review.id ?? ""}
                  publishedAt={review.attributes?.publishedAt ?? ""}
                  imageURL={
                    review.attributes?.main_image?.data?.attributes
                      ?.formats?.thumbnail.url ?? ""
                  }
                />
              ))}
            </div>
          </Box>
        </div>
      </div>
    </section>
  );
};

export default ReviewsBar;
