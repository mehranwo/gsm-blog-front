"use client";
import "swiper/css";
import "swiper/css/navigation";

import { Box } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import React, { useRef, useState } from "react";
import { Swiper as SwiperType } from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import ProductCard from "@/common/components/Card/ProductCard";
import {
  distractPriceInProductData,
  separatePriceWithComma,
} from "@/common/utils/product";
import { ProductEntity } from "@/services/Graphql/types.generated";

import ChevronLeftIcon from "../../../../../../public/assets/images/ChevronLeftIcon";
import ChevronRightIcon from "../../../../../../public/assets/images/ChevronRightIcon";
import ProductBarCard from "./ProductBarCard";

const ProductBarCarousel = ({ data }: { data: any }) => {
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);
  const swiperRef = useRef<SwiperType>();
  const [isBeginning, setIsBeginning] = useState(false);
  const [isEnd, setIsEnd] = useState(false);

  return (
    <Box className="relative w-full">
      <Swiper
        slidesPerView={2.5}
        navigation={{
          nextEl: navigationNextRef.current,
          enabled: true,
          prevEl: navigationPrevRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        breakpoints={{ 768: { slidesPerView: 4 } }}
        modules={[Navigation, Pagination]}
        spaceBetween={10}
        onSlideChange={(swiper) => {
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        onAfterInit={(swiper) => {
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
      >
        {data?.products?.data.map((product: any, index: any) => (
          <SwiperSlide key={index}>
            <ProductCard
              price={separatePriceWithComma(
                distractPriceInProductData(product as ProductEntity)
              )}
              productId={product.id ?? ""}
              productImageURL={
                product.attributes?.main_image?.data?.attributes?.formats
                  ?.thumbnail.url ?? ""
              }
              productName={product.attributes?.name ?? ""}
              productName_en={product.attributes?.name_en ?? ""}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div
        className={"md:block hidden absolute top-32 z-10 -mr-10"}
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
        className={"md:block hidden absolute top-32 left-0  z-10 -ml-4"}
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

export default ProductBarCarousel;
