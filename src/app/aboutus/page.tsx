import { Box, Text } from "@mantine/core";
import { IconChevronLeft } from "@tabler/icons-react";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";

import BreadCrumbs from "@/common/components/BreadCrumbs";
import { generalRoutes } from "@/common/constants/routes";
import { getClient } from "@/services/apollo-wrapper";
import { AboutUsDataQuery } from "@/services/Graphql/types.generated";

import { ABOUT_US_DATA_QUERY } from "./query";

export const metadata: Metadata = {
  title: "جی‌اس‌ام | درباره ما",
  description: 'اطلاع از آخرین اخبار دنیای موبایل و تکنولوژی به همراه قیمت روز، بررسی تخصصی و مقایسه ای جدیدترین گوشی ها ، معرفی و دانلود اپلیکیشن های کاربردی | جی‌اس‌ام',
  alternates: {
    canonical: "https://www.gsm.ir/aboutus/"
  },
  robots: "follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
}

export const revalidate = 600;
export const dynamic = "force-dynamic"

async function getData() {
  try {
    const { data } = await getClient().query({ query: ABOUT_US_DATA_QUERY });
    return data;
  } catch (error) {
    console.log(error);
  }
}

const AboutUs = async () => {

  const data: AboutUsDataQuery = await getData();

  return (
    <main>
      <Box className="container mt-10 md:!mt-0">
        <BreadCrumbs>
          <Link
            style={{ color: "#8690A2" }}
            className=" hover:!text-blue-600 !text-xs md:!text-base"
            href={generalRoutes.home}
          >
            خانه
          </Link>
          <IconChevronLeft
            style={{ color: "#8690A2" }}
            size={10}
          />
          <Text className=" !text-xs md:!text-base">درباره ما</Text>
        </BreadCrumbs>
      </Box>
      {/* <section className="">
        
        <div className="container">
          <div className="row">
            <div className="col-12">
              <Box
                className=" bg-dark-overlay-4 overflow-hidden card-bg-scale h-400 text-center rounded-lg"
                style={{
                  backgroundImage: `url(assets/images/blog/16by9/09.jpg)`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              >
                <div className="card-img-overlay d-flex align-items-center p-3 p-sm-4">
                  <div className="w-100 my-auto">
                    <h1 className="text-white display-5">درباره ما</h1>

                    <nav
                      className="d-flex justify-content-center"
                      aria-label="breadcrumb"
                    ></nav>
                  </div>
                </div>
              </Box>
            </div>
          </div>
        </div>
      </section> */}

      <div
        className="mt-4 container"
        style={{
          fontFamily: "IRANSans",
        }}
        dangerouslySetInnerHTML={{
          __html: data?.staticPage?.data?.attributes?.main_text ?? "",
        }}
      ></div>
    </main>
  );
};

export default AboutUs;
