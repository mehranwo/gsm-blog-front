import React from "react";

import { getClient } from "@/services/apollo-wrapper";
import { ContactUsDataQuery } from "@/services/Graphql/types.generated";

import { CONTACT_US_DATA_QUERY } from "./query";

export const dynamic = "force-dynamic"

import { Metadata } from "next";

import ContactUsModule from "@/modules/contactus";

export const metadata: Metadata = {
  title: "جی‌اس‌ام | ارتیاط با ما",
  description: 'اطلاع از آخرین اخبار دنیای موبایل و تکنولوژی به همراه قیمت روز، بررسی تخصصی و مقایسه ای جدیدترین گوشی ها ، معرفی و دانلود اپلیکیشن های کاربردی | جی‌اس‌ام',
  alternates: {
    canonical: "https://www.gsm.ir/contactus/"
  },
  robots: "follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
}


export const revalidate = 10;

async function getData() {
  try {
    const { data } = await getClient().query({ query: CONTACT_US_DATA_QUERY });
    return data;
  } catch (error) {
    console.log(error);
  }
}

const ContactUs = async () => {
  const data: ContactUsDataQuery = await getData();

  return (
    <ContactUsModule data={data} />
  );
};

export default ContactUs;
