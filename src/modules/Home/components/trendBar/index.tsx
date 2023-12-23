import { Box } from "@mantine/core";
import Link from "next/link";
import React from "react";

import { getClient } from "@/services/apollo-wrapper";
import {
  PostEntity,
  TrendPostQuery,
} from "@/services/Graphql/types.generated";

import CarouselWrapper from "./components/CarouselWrapper";
import { TREND_POSTS_QUERY } from "./query";
import TrendCard from "./trendCard";
import { setHrefByType } from "./utils";

export const revalidate = 120;

const getData = async () => {
  try {
    const { data } = await getClient().query({
      query: TREND_POSTS_QUERY,
      fetchPolicy: "no-cache",
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};

const TrendBar = async () => {
  const data: TrendPostQuery = await getData();

  const firstPost = data?.posts?.data[0] ?? ({} as PostEntity);

  return (
    <section className="container pt-4 pb-0 card-grid">
      <div className="row g-4">
        <div className="col-lg-6">
          <div className="card card-overlay-bottom card-grid-lg card-bg-scale !max-w-none">
            <img
              className="h-full"
              src={
                firstPost.attributes?.main_image?.data?.attributes?.formats
                  ?.small.url ?? ""
              }
            />
            <div className="card-img-overlay d-flex align-items-center p-3 p-sm-4">
              <div className="w-100 mt-auto">
                <h2 className="text-white h1">
                  <Link
                    href={setHrefByType(
                      firstPost?.attributes?.type,
                      firstPost?.id,
                      firstPost?.attributes?.titre
                    )}
                    className="btn-link stretched-link text-reset"
                  >
                    {firstPost?.attributes?.titre}
                  </Link>
                </h2>
                {/* <ul className="nav nav-divider text-white-force align-items-center d-none d-sm-inline-block">
                                    <li className="nav-item">
                                        <div className="nav-link">
                                            <div className="d-flex align-items-center text-white position-relative">
                                                <div className="avatar avatar-sm">
                                                    <Image
                                                        className="avatar-img rounded-circle"
                                                        src="/assets/images/avatar/11.jpg"
                                                        alt="avatar"
                                                        width={100}
                                                        height={200}
                                                    />
                                                </div>

                                                <p
                                                    className="stretched-link text-reset btn-link flex items-center"
                                                >
                                                    با {
                                                        firstPost?.attributes?.author?.data?.attributes?.username
                                                    }
                                                </p>

                                            </div>
                                        </div>
                                    </li>
                                    <li className="nav-item">{new Date(firstPost.attributes?.publishedAt).toLocaleDateString("fa-IR")}</li>
                                    <li className="nav-item">{firstPost?.attributes?.reading_time} دقیقه زمان مطالعه</li>
                                </ul> */}
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 hidden md:block">
          <div className="row g-4">
            {data?.posts?.data.slice(1).map((trendPost, index) => (
              <TrendCard
                key={index}
                authorName={""}
                imageURL={
                  trendPost.attributes?.main_image?.data?.attributes?.formats
                    ?.small.url ?? ""
                }
                mainTag={
                  trendPost.attributes?.main_tag?.data?.attributes?.name ?? ""
                }
                postId={trendPost.id ?? ""}
                publishedAt={trendPost.attributes?.publishedAt ?? ""}
                titre={trendPost.attributes?.titre ?? ""}
                trendType={trendPost.attributes?.type}
              />
            ))}
          </div>
        </div>

        <Box className="block md:hidden">
          <CarouselWrapper />
        </Box>
      </div>
    </section>
  );
};

export default TrendBar;
