"use client";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Box } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import React, { useRef, useState } from "react";
import { Swiper as SwiperType } from "swiper";
import { Grid, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import ChevronLeftIcon from "../../../../../../public/assets/images/ChevronLeftIcon";
import ChevronRightIcon from "../../../../../../public/assets/images/ChevronRightIcon";
import NewsBarCard from "./NewsBarCard";

const NewsBarCarousel = ({ data }: { data: any }) => {
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);
  const swiperRef = useRef<SwiperType>();
  const [isBeginning, setIsBeginning] = useState(false);
  const [isEnd, setIsEnd] = useState(false);
  return (
    <Box className="relative">
      <Swiper
        slidesPerView={1.5}
        navigation={{
          nextEl: navigationNextRef.current,
          enabled: true,
          prevEl: navigationPrevRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        slidesPerGroup={1}
        breakpoints={{ 768: { slidesPerView: 5, slidesPerGroup: 5 } }}
        modules={[Navigation, Pagination, Grid]}
        grid={{
          rows: 2,
          fill: "row",
        }}
        onSlideChange={(swiper) => {
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        onAfterInit={(swiper) => {
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
      >
        {data?.posts?.data.map((report: any, index: any) => (
          <SwiperSlide key={index}>
            <NewsBarCard
              authorImageUrl={
                report.attributes?.author?.data?.attributes?.main_image?.data
                  ?.attributes?.url ?? ""
              }
              authorName={
                report.attributes?.author?.data?.attributes?.username ?? ""
              }
              tagName={
                report.attributes?.main_tag?.data?.attributes?.name ?? ""
              }
              imageUrl={
                report.attributes?.main_image?.data?.attributes?.formats?.thumbnail.url ??
                ""
              }
              publishedAt={report.attributes?.publishedAt ?? ""}
              titre={report.attributes?.titre ?? ""}
              id={report.id ?? ""}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div
        className={"md:block hidden absolute top-56 z-10 -mr-12"}
        ref={navigationPrevRef}
        onClick={() => swiperRef.current?.slidePrev()}
      >
        <ChevronRightIcon
          iconFill={isBeginning ? "#B7BECD" : "black"}
          fill={isBeginning ? "#EAEEF5" : "white"}
          className={
            isBeginning ? "cursor-auto" : "cursor-pointer"
          } />
      </div>
      <div
        className={"md:block hidden absolute top-56 left-0 z-10 -ml-4"}
        ref={navigationNextRef}
        onClick={() => swiperRef.current?.slideNext()}
      >
        <ChevronLeftIcon
          iconFill={isEnd ? "#B7BECD" : "black"}
          fill={isEnd ? "#EAEEF5" : "white"}
          className={
            isEnd ? "cursor-auto" : "cursor-pointer"
          } />
      </div>
    </Box>
  );
};

export default NewsBarCarousel;
