"use client"
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import React from 'react'
import { Grid, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import TrendBarCard from './TrendBarCard';



const TrendBarCarousel = ({ data }: { data: any }) => {
  return (
    <Swiper
      slidesPerView={1.5}
      spaceBetween={20}
      slidesPerGroup={1}
      centeredSlides={true}
      centeredSlidesBounds={true}
    >
      {data?.posts?.data.slice(1).map((trendPost: any, index: any) => (
        <SwiperSlide key={index}>
          <TrendBarCard
            authorName={""}
            imageURL={trendPost.attributes?.main_image?.data?.attributes?.url ?? ""}
            mainTag={trendPost.attributes?.main_tag?.data?.attributes?.name ?? ""}
            postId={trendPost.id ?? ""}
            publishedAt={trendPost.attributes?.publishedAt ?? ""}
            titre={trendPost.attributes?.titre ?? ""}
            trendType={trendPost.attributes?.type}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default TrendBarCarousel
