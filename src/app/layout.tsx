"use client";
import "./globals.css";
import "@mantine/core/styles.css";
import "react-toastify/dist/ReactToastify.css";

import { ApolloProvider } from "@apollo/client";
import {
  AppShell,
  AppShellHeader,
  AppShellMain,
  Box,
  ColorSchemeScript,
  MantineProvider,
  Text,
} from "@mantine/core";
import {
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTelegram,
  IconBrandTwitter,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { ToastContainer } from "react-toastify";

import MembershipButton from "@/common/components/MembershipButton";
import { generalRoutes } from "@/common/constants/routes";
import { client } from "@/services/client";

import { theme } from "../../theme";
import Navbar from "../common/components/Navbar";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@type": "WebSite",
    name: "جی اس ام",
    url: "https://www.gsm.ir/",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://www.gsm.ir/search/?text={search_term_string}",
      "query-input": "required name=search_term_string",
    },
    "@context": "http://schema.org/",
  };

  return (
    <html lang="fa">
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-4ZBS32262V"></script>
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', 'G-4ZBS32262V');`
          }}
        />
        <ColorSchemeScript />
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <meta name="google-site-verification" content="BO6pMopVG3mxTrHA1bcmEyspvnje5gXojW2SXhISNTg" />
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l] = w[l] || [];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-KR3RFHS');`
          }}
        />
      </head>
      <body>
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KR3RFHS"
          height="0" width="0" style={{ display: "none", visibility: "hidden" }}></iframe></noscript>
        <ToastContainer position="bottom-right" />
        <ApolloProvider client={client}>
          <MantineProvider theme={theme}>
            <AppShell
              header={{ height: 60 }}
              padding={"xs"}
              dir="rtl"
            >
              <AppShellHeader>
                <header className="navbar-light header-static">
                  <Navbar />
                </header>
              </AppShellHeader>
              <AppShellMain >
                {children}
              </AppShellMain>
              <footer className="bg-gray-800 pt-5">
                <div className="container ">
                  <div className="md:flex-row md:justify-between md:items-center flex flex-col md:flex-wrap">
                    <div className="col-md-3">
                      <Image
                        className="mb-4 w-3/4 md:w-full"
                        src="/assets/images/GSM Logo-02.png"
                        alt="footer logo"
                        width={200}
                        height={100}
                      />
                      <div className="md:h-[250px]">
                        <p className="text-muted">
                          جی‌اس‌ام، اولین رسانه‌ تخصصی موبایل در ایران محسوب
                          می‌شود. رسالت ما در جی‌اس‌ام راهنمای انتخاب و خرید
                          موبایل در ایران است و در این راستا تلاش می‌کنیم با
                          بررسی‌های تخصصی، اخبار و راهنمای خرید، همراه مخاطب
                          باشیم.
                        </p>
                      </div>
                    </div>

                    <div className="col-sm-6 col-lg-3 mb-4 flex flex-col md:items-center items-start">
                      <ul className="nav flex-column text-primary-hover">
                        <Text className="!font-bold mb-2 !text-lg text-white">لینک‌های پربازدید</Text>
                        <li className="nav-item">
                          <Link
                            className="nav-link"
                            href={`${generalRoutes.brandList}/8`}
                          >
                            قیمت گوشی سامسونگ
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            className="nav-link"
                            href={`${generalRoutes.brandList}/12`}
                          >
                            قیمت گوشی اپل
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            className="nav-link"
                            href={`${generalRoutes.brandList}/35`}
                          >
                            قیمت گوشی شیائومی
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="col-sm-6 col-lg-3 mb-4 flex flex-col md:items-center items-start">
                      <ul className="nav flex-column text-primary-hover">
                        <Text className="!font-bold mb-2 !text-lg !text-white">دسترسی سریع</Text>
                        <li className="nav-item">
                          <Link
                            className="nav-link"
                            href={generalRoutes.contactUs}
                          >
                            تماس با ما
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            className="nav-link"
                            href={generalRoutes.aboutus}
                          >
                            درباره ما
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            className=""
                            href={generalRoutes.termsAndConditions}
                          >
                            شرایط و قوانین
                          </Link>
                        </li>
                      </ul>
                    </div>

                    <Box className="col-sm-6 col-lg-3 mb-5">
                      <MembershipButton />
                      <Box className="flex flex-col md:flex md:flex-row md:justify-center items-center container">
                        <div className="flex gap-2 flex-col mt-3 ">
                          <Text className="!text-gray-300">
                            GSM در شبکه‌های اجتماعی:
                          </Text>
                          <div className="flex gap-3 justify-center">
                            <Link
                              rel="noopener"
                              target="_blank"
                              href={"https://instagram.com/gsmwebsite"}
                            >
                              <IconBrandInstagram className="!text-gray-300 hover:!text-blue-500" />
                            </Link>
                            <Link
                              rel="noopener"
                              target="_blank"
                              href={"https://telegram.me/gsmwebsite"}
                            >
                              <IconBrandTelegram className="!text-gray-300 hover:!text-blue-500" />
                            </Link>
                            <Link
                              rel="noopener"
                              target="_blank"
                              href={"https://twitter.com/GSMwebsite"}
                            >
                              <IconBrandTwitter className="!text-gray-300 hover:!text-blue-500" />
                            </Link>
                            <Link
                              rel="noopener"
                              target="_blank"
                              href={
                                "https://www.linkedin.com/company/gsm-group"
                              }
                            >
                              <IconBrandLinkedin className="!text-gray-300 hover:!text-blue-500" />
                            </Link>
                          </div>
                        </div>
                      </Box>
                    </Box>
                  </div>
                </div>
              </footer>
            </AppShell>
          </MantineProvider>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
        </ApolloProvider>
      </body>
    </html>
  );
}
