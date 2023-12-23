"use client";
import { Box, Text } from "@mantine/core";
import { SearchParams, SearchResponse } from "meilisearch";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

import NewsCard from "@/common/components/Card/NewsCard";
import ProductCard from "@/common/components/Card/ProductCard";
import SearchTechReviewCard from "@/common/components/Card/SearchTechReviewCard";
import { postIndex, productIndex } from "@/services/miliSearch";

const SearchPage = () => {
  const query = useSearchParams();

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<{
    products: SearchResponse<Record<string, any>, SearchParams>;
    post: SearchResponse<Record<string, any>, SearchParams>;
  } | null>(null);

  const handlePostSearch = async (searchWord: string) => {
    const res = await postIndex.search(searchWord);
    return res;
  };

  const handleProductSearch = async (searchWord: string) => {
    const res = await productIndex.search(searchWord);
    return res;
  };

  const fetchOptions = async (query: string) => {
    setLoading(true);

    const responses = await Promise.all([
      handlePostSearch(query),
      handleProductSearch(query),
    ]);
    setData({ post: responses[0], products: responses[1] });
    setLoading(false);
  };

  useEffect(() => {
    fetchOptions(query.get("query") ?? "");
  }, [query]);

  return (
    <Box className="container mt-10">
      <Box className="flex flex-col gap-6">
        <Text className="text-black">گوشی‌ها</Text>
        <Box className="container flex gap-8 flex-wrap p-0 gap-y-4 mb-4">
          {data?.products.hits.map((product, index) => (
            <ProductCard
              key={index}
              price={"0"}
              productId={product?.id}
              productImageURL={product?.main_image}
              productName={product?.name}
              productName_en={product?.name_en}
            />
          ))}
        </Box>
      </Box>
      <Box className="flex flex-col gap-6 mt-4">
        <Text>مطالب</Text>
        <Box className="md:flex md:flex-wrap md:flex-row gap-6 space-y-4 md:space-y-0 mb-3 flex flex-col justify-center items-center">
          {data?.post.hits.map((item) => (
            <>
              <Box className="hidden md:block">
                <SearchTechReviewCard
                  id={item?.id}
                  imageUrl={item?.main_image ?? "assets/images/imagery-2.png"}
                  titre={item?.titre}
                  authorName=""
                  publishedAt=""
                  tagName=""
                />
              </Box>
              <Box className="block md:hidden w-full">
                <NewsCard
                  authorImageUrl=""
                  authorName=""
                  id={item?.id}
                  imageUrl={item?.main_image ?? "assets/images/imagery.png"}
                  publishedAt=""
                  tagName=""
                  titre={item?.titre}
                />
              </Box>
            </>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default SearchPage;
