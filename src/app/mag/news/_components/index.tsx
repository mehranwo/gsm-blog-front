"use client";
import { useMediaQuery } from "@mantine/hooks";
import { useSearchParams } from "next/navigation";
import React, { useState } from "react";

import NewsCard from "@/common/components/Card/NewsCard";
import { ContainerListing } from "@/common/components/Container";
import {
  NewsListQuery,
  PostEntity,
  useNewsListLazyQuery,
} from "@/services/Graphql/types.generated";
import LoadMoreButton from "@/common/components/LoadMoreButton";

const ListingNews = ({ data }: { data: NewsListQuery }) => {
  const [localData, setLocalData] = useState<PostEntity[]>(
    data?.posts?.data as PostEntity[]
  );
  const [loading, setLoading] = useState(false)

  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState<number>(1);

  const [getNews] = useNewsListLazyQuery();
  const searchParams = useSearchParams();

  const id = searchParams.get("brandId");
  const handleMoreProduct = async () => {
    setLoading(true)
    const { data } = await getNews({
      variables: {
        page: page + 1,
        pageSize: 15,
        filters: {
          type: { eq: "news" },
          ...(id ? { brands: { id: { eq: id } } } : {}),
        },
      },
    });
    setLoading(false)
    if (!data?.posts?.data.length) return setHasMore(false);
    if (data?.posts?.data.length === 0) {
      return setHasMore(false);
    }
    setLocalData([...localData, ...(data?.posts?.data as PostEntity[])]);
    setPage(page + 1);
  };

  const isMobile = useMediaQuery("(max-width: 768px)");


  return (
    <>
      <ContainerListing
      >
        {localData?.map((news) => (
          <NewsCard
            key={news.id}
            id={news.id ?? ""}
            authorName={""}
            titre={news.attributes?.titre ?? ""}
            publishedAt={news.attributes?.publishedAt ?? ""}
            tagName={news.attributes?.main_tag?.data?.attributes?.name ?? ""}
            imageUrl={
              news.attributes?.main_image?.data?.attributes?.formats?.thumbnail.url ?? ""
            }
            similarStyle={isMobile ? true : false}
            authorImageUrl={""}
          />
        ))}
      </ContainerListing>
      {
        hasMore ?
          <LoadMoreButton
            loading={loading}
            className="lg:!mx-20" onClick={handleMoreProduct}
          />
          : null
      }

    </>
  );
};

export default ListingNews;
