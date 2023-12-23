"use client";
import "swiper/css";
import "swiper/css/navigation";

import { IconChevronLeft } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import generalConfig from "@/common/config/general";
import { generalRoutes } from "@/common/constants/routes";
import { BrandDetailQuery,PostEntity, TagEntity } from "@/services/Graphql/types.generated";

const BrandRelatedPost = ({data}: {data : BrandDetailQuery}) => {
  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={1.5}
      modules={[Navigation]}
    >
      <SwiperSlide>
        <Link
          style={{
            borderColor: "#197bff !important",
            color: "#197bff !important",
          }}
          className="p-2 w-full md:w-[245px] border flex justify-between  rounded-3xl"
          href={`${generalRoutes.reviewList}?brandId=${data.brand?.data?.id}`}
        >
          بررسی‌های تخصصی 
          {/* ({data.brand?.data?.attributes?.posts?.data.length}) */}
          <IconChevronLeft />
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link
          style={{
            borderColor: "#197bff !important",
            color: "#197bff !important",
          }}
          className="p-2 w-full md:w-[245px] border flex justify-between  rounded-3xl"
          href={`${generalRoutes.news}?brandId=${data.brand?.data?.id}`}
        >
          اخبار 
          {/* ({data.brand?.data?.attributes?.posts?.data.length}) */}
          <IconChevronLeft />
        </Link>
      </SwiperSlide>
    </Swiper>
  );
};

export default BrandRelatedPost;
