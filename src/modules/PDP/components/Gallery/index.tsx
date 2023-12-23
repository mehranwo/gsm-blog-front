"use client";
import "swiper/swiper-bundle.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { Box } from "@mantine/core";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { Swiper as SwiperType } from "swiper";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import { UploadFileEntity } from "@/services/Graphql/types.generated";

const Gallery = ({ data }: { data: UploadFileEntity[] }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const swiperRef = useRef<SwiperType>();
  return (
    <>
      <Box className="relative flex justify-center ">
        <Swiper
          loop={true}
          spaceBetween={10}
          navigation={{
            nextEl: null,
            enabled: false,
            prevEl: null,
          }}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          thumbs={{
            swiper:
              //@ts-ignore
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="w-full "
          centeredSlides={true}
        >
          {data?.map((item, index) => (
            <SwiperSlide key={index} className="my-auto  mb-4">
              <div className="h-[400px] w-full flex items-center justify-center">
                <Image
                  className="mx-auto my-auto w-[250px] md:w-[300px] max-h-[400px]"
                  src={item?.attributes?.url ?? ""}
                  alt="productImage"
                  width={150}
                  height={350}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
      <Swiper
        //@ts-ignore
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="w-full flex items-center justify-center"
      >
        {data?.map((item, index) => (
          <SwiperSlide key={index} className="my-auto border-2 !w-[70px] !h-[70px] p-[5px] rounded-2">
            <Image
              className="h-full mx-auto max-w-[100%] max-h-[100%] block"
              src={item?.attributes?.url ?? ""}
              alt="productImage"
              width={240}
              height={500}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Gallery;
