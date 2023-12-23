"use client";
import { useSearchParams } from "next/navigation";
import React, { useState } from "react";

import TechReviewCard from "@/common/components/Card/techReviewCard";
import { ContainerListing } from "@/common/components/Container";
import { client } from "@/services/client";
import {
  PostEntity,
  TechReviewListQuery,
} from "@/services/Graphql/types.generated";

import { TECH_REVIEW_LIST_QUERY } from "../query";
import LoadMoreButton from "@/common/components/LoadMoreButton";

const ListingReviews = ({ data }: { data: TechReviewListQuery }) => {
  const [localData, setLocalData] = useState<PostEntity[]>(
    data?.posts?.data as PostEntity[]
  );
  const [loading, setLoading] = useState(false)
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState<number>(1);
  const searchParams = useSearchParams();

  async function getData({
    page,
    pageSize,
    filters,
  }: {
    page: number,
    pageSize: number,
    filters: any,
  }) {
    try {
      const { data } = await client.query({
        query: TECH_REVIEW_LIST_QUERY,
        fetchPolicy: "no-cache",
        variables: {
          page,
          pageSize,
          filters,
        },
      });
      return data;
    } catch (error) {
      console.log(error);
    }
  }


  const id = searchParams.get("brandId");
  const handleMoreProduct = async () => {
    setLoading(true)
    const data = await getData(
      {
        page: page + 1,
        pageSize: 16,
        filters: { type: { eq: "review" }, brands: { id: { eq: id } } },
      },
    );
    setLoading(false)
    if (!data?.posts?.data.length) return setHasMore(false);
    if (data?.posts?.data.length === 0) {
      return setHasMore(false);
    }
    setLocalData([...localData, ...(data?.posts?.data as PostEntity[])]);
    setPage(page + 1);
  };


  return (
    <>
      <ContainerListing
        className='grid grid-cols-[1fr_1fr] md:flex'
      >
        {localData?.map((post) => (
          <TechReviewCard
            key={post.id}
            id={post.id ?? ""}
            authorName=""
            titre={post.attributes?.titre ?? ""}
            publishedAt={post.attributes?.publishedAt ?? ""}
            tagName={post.attributes?.main_tag?.data?.attributes?.name ?? ""}
            imageUrl={post.attributes?.main_image?.data?.attributes?.formats?.thumbnail.url ?? ""}
          />
        ))}
      </ContainerListing>
      {
        hasMore ?
          <LoadMoreButton
            loading={loading}
            className="lg:!mx-6"
            onClick={handleMoreProduct}
          />
          : null
      }
    </>
  );
};

export default ListingReviews;
