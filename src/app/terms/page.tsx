import { gql } from "@apollo/client";
import { Box, Text, Title } from "@mantine/core";
import { IconChevronLeft } from "@tabler/icons-react";
import Link from "next/link";
import React from "react";

import BreadCrumbs from "@/common/components/BreadCrumbs";
import { generalRoutes } from "@/common/constants/routes";
import { getClient } from "@/services/apollo-wrapper";
import { TermsAndConditionDataQuery } from "@/services/Graphql/types.generated";

import { TERMS_AND_CONDITION_DATA_QUERY } from "./query";


export const revalidate = 10;
export const dynamic = "force-dynamic"

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "جی‌اس‌ام | شرایط و قوانین",
  description: 'اطلاع از آخرین اخبار دنیای موبایل و تکنولوژی به همراه قیمت روز، بررسی تخصصی و مقایسه ای جدیدترین گوشی ها ، معرفی و دانلود اپلیکیشن های کاربردی | جی‌اس‌ام',
  alternates: {
    canonical: "https://www.gsm.ir/terms/"
  },
  robots: "follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
}
async function getData() {
  try {
    const { data } = await getClient().query({ query: TERMS_AND_CONDITION_DATA_QUERY })
    return data
  } catch (error) {
    console.log(error)
  }
}


const TermsAndConditions = async () => {

  const data: TermsAndConditionDataQuery = await getData()

  return (
    <Box className="border flex flex-col justify-center items-center p-3 ">
      <Box className="container mt-10 md:mt-0">
        <BreadCrumbs>
          <Link style={{ color: "#8690A2" }} className="!text-xs md:!text-base" href={generalRoutes.home}>خانه</Link>
          <IconChevronLeft style={{ color: "#8690A2" }} size={10} />
          <Text className="!text-xs md:!text-base">شرایط و قوانین</Text>
        </BreadCrumbs>
      </Box>
      <div
        className="container"
        style={{
          fontFamily: "IRANSans",
        }}
        dangerouslySetInnerHTML={{
          __html: data?.staticPage?.data?.attributes?.main_text ?? ""
        }}
      ></div>
    </Box>

  );
};

export default TermsAndConditions;
