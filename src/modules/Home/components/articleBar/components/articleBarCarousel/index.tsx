"use client";
import { Box } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import React, { useEffect, useRef, useState } from "react";
import { Swiper as SwiperType } from "swiper";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";

import { ArticleBarQuery } from "@/services/Graphql/types.generated";

import ChevronLeftIcon from "../../../../../../../public/assets/images/ChevronLeftIcon";
import ChevronRightIcon from "../../../../../../../public/assets/images/ChevronRightIcon";
import ArticleBarCard from "../articleBarCard";

const ArticleBarCarousel = ({ data }: { data: ArticleBarQuery }) => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  const swiperRef = useRef<SwiperType>();
  const [isBeginning, setIsBeginning] = useState(false);
  const [isEnd, setIsEnd] = useState(false);
  return (
    <Box className="relative">
      <Swiper
        breakpoints={{ 768: { slidesPerView: 5 } }}
        slidesPerView={2.5}
        navigation={{
          nextEl: navigationNextRef.current,
          prevEl: navigationPrevRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        modules={[Navigation]}
        onSlideChange={(swiper) => {
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        onAfterInit={(swiper) => {
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
      >
        {data?.posts?.data.map((article) => (
          <SwiperSlide key={article?.id}>
            <ArticleBarCard
              id={article.id ?? ""}
              imageUrl={
                article.attributes?.main_image?.data?.attributes?.formats?.thumbnail.url ??
                ""
              }
              publishedAt={article.attributes?.publishedAt ?? ""}
              titre={article.attributes?.titre ?? ""}
              authorImageUrl=""
              authorName=""
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div
        className={`md:block hidden absolute top-28 z-10 -mr-10`}
        ref={navigationPrevRef}
        onClick={() => swiperRef.current?.slidePrev()}
      >
        <ChevronRightIcon
        iconFill={isBeginning ? "#B7BECD" : "black"}
        fill={isBeginning ? "#EAEEF5" : "white"}
          className={
            isBeginning ? "cursor-auto" : "cursor-pointer"
          }
        />
      </div>
      <div
        className={`md:block hidden absolute top-28 left-0 z-10 -ml-3`}
        ref={navigationNextRef}
        onClick={() => swiperRef.current?.slideNext()}
      >
        <ChevronLeftIcon
          iconFill={isEnd ? "#B7BECD" : "black"}
          fill={isEnd ? "#EAEEF5" : "white"}
          className={
            isEnd ? "cursor-auto" : "cursor-pointer"
          }
        />
      </div>
    </Box>
  );
};

export default ArticleBarCarousel;
