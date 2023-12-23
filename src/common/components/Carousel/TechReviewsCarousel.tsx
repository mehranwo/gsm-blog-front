"use client";
import "swiper/css";
import "swiper/css/navigation";

import { Box } from "@mantine/core";
import React, { useRef, useState } from "react";
import { Swiper as SwiperType } from "swiper";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { PostEntity } from "@/services/Graphql/types.generated";

import ChevronLeftIcon from "../../../../public/assets/images/ChevronLeftIcon";
import ChevronRightIcon from "../../../../public/assets/images/ChevronRightIcon";
import TechReviewCard from "../Card/techReviewCard";

const TechReviewsCarousel = ({
  data,
  slidesPerView,
  slidePerViewInMobile,
}: {
  data: Array<PostEntity>;
  slidesPerView?: number;
  slidePerViewInMobile?: number;
}) => {
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);
  const swiperRef = useRef<SwiperType>();
  const [isBeginning, setIsBeginning] = useState(false);
  const [isEnd, setIsEnd] = useState(false);
  return (
    <Box className="relative">
      <Swiper
        spaceBetween={30}
        slidesPerView={slidePerViewInMobile}
        navigation={{
          nextEl: navigationNextRef.current,
          enabled: true,
          prevEl: navigationPrevRef.current,
        }}
        modules={[Navigation]}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        breakpoints={{ 768: { slidesPerView: slidesPerView } }}
        onSlideChange={(swiper) => {
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        onAfterInit={(swiper) => {
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
      >
        {data?.map((slide) => (
          <SwiperSlide key={slide?.id}>
            <TechReviewCard
              authorName={""}
              id={slide.id ?? ""}
              publishedAt={slide.attributes?.publishedAt ?? ""}
              tagName={slide.attributes?.main_tag?.data?.attributes?.name ?? ""}
              titre={slide.attributes?.titre ?? ""}
              imageUrl={
                slide?.attributes?.main_image?.data?.attributes?.url ?? ""
              }
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div
        className={"md:block hidden absolute top-28 z-10 -mr-10"}
        ref={navigationPrevRef}
        onClick={() => swiperRef.current?.slidePrev()}
      >
        <ChevronRightIcon
          iconFill={isBeginning ? "#B7BECD" : "black"}
          fill={isBeginning ? "#EAEEF5" : "white"}
          className={isBeginning ? "cursor-auto" : "cursor-pointer"}
        />
      </div>
      <div
        className={"md:block hidden absolute top-28 left-0  z-10 -ml-10"}
        ref={navigationNextRef}
        onClick={() => swiperRef.current?.slideNext()}
      >
        <ChevronLeftIcon
          iconFill={isEnd ? "#B7BECD" : "black"}
          fill={isEnd ? "#EAEEF5" : "white"}
          className={isEnd ? "cursor-auto" : "cursor-pointer"}
        />
      </div>
    </Box>
  );
};

export default TechReviewsCarousel;
