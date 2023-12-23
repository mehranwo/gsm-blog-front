import type { Metadata } from 'next'

import HomeModule from "@/modules/Home";

export const metadata: Metadata = {
  title: "جی‌اس‌ام | رسانه تخصصی صنعت موبایل | بررسی و راهنمای خرید گوشی",
  description: "مشخصات فنی و قیمت گوشی‌های موبایل به همراه راهنمای خرید گوشی و بررسی تخصصی تمام گوشی‌های بازار + پوشش خبری صنعت موبایل در قدیمی‌ترین رسانه موبایل در ایران",
  alternates: {
    canonical: "https://www.gsm.ir/"
  },
  robots: "follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
}

export const revalidate = 120;
export const dynamic = "force-dynamic"
const Home = () => {
  return (
    <HomeModule />
  );
};

export default Home;
