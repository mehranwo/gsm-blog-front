"use client";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/controller";

import { Box } from "@mantine/core";
import React, { useRef, useState } from "react";
import { Swiper as SwiperType } from "swiper";
import { Controller, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { generalRoutes } from "@/common/constants/routes";

import ChevronLeftIcon from "../../../../../public/assets/images/ChevronLeftIcon";
import ChevronRightIcon from "../../../../../public/assets/images/ChevronRightIcon";
import BrandItem from "./BrandItem";

const BrandSwiper = ({ data }: { data: any }) => {
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);
  const swiperRef = useRef<SwiperType>();
  const sortedFeaturedAttributes = data?.brands?.data.sort(function (
    x: any,
    y: any
  ) {
    return (x.attributes.priority ?? 0) - (y.attributes.priority ?? 0);
  });
  const [isBeginning, setIsBeginning] = useState(false);
  const [isEnd, setIsEnd] = useState(false);
  return (
    <Box className="relative">
      <Swiper
        slidesPerView={3.5}
        centeredSlidesBounds
        navigation={{
          nextEl: navigationNextRef.current,
          enabled: true,
          prevEl: navigationPrevRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        modules={[Navigation, Pagination, Controller]}
        breakpoints={{ 768: { slidesPerView: 8 } }}
        controller={{ control: "swiper" }}
        onSlideChange={(swiper) => {
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        onAfterInit={(swiper) => {
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
      >
        {sortedFeaturedAttributes.map((brand: any, index: any) => (
          <SwiperSlide key={index} className="!ml-0">
            <BrandItem
              key={brand.id}
              brandName={brand.attributes?.persian_name ?? ""}
              imageUrl={
                brand.attributes?.brand_image.data?.attributes?.url ?? ""
              }
              href={`${generalRoutes.brandList}/${brand.id
                }/${brand.attributes.english_name.split(" ").join("-")}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {data.brands?.data.length > 8 ? (
        <>
          <div
            className={"md:block hidden absolute top-10 z-10 -mr-10"}
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
            className={"md:block hidden absolute top-10 left-0  z-10 -ml-3"}
            ref={navigationNextRef}
            onClick={() => swiperRef.current?.slideNext()}
          >
            <ChevronLeftIcon
              iconFill={isEnd ? "#B7BECD" : "black"}
              fill={isEnd ? "#EAEEF5" : "white"}
              className={isEnd ? "cursor-auto" : "cursor-pointer"}
            />
          </div>
        </>
      ) : (
        <></>
      )}
    </Box>
  );
};

export default BrandSwiper;
