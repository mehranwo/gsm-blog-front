"use client";
import { Box, Button, Divider, Text, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { IconBrandGoogle } from "@tabler/icons-react";
import { setCookie } from "cookies-next";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "react-toastify";

import generalConfig from "@/common/config/general";
import { useLoginMutation } from "@/services/Graphql/types.generated";

const LoginModal = () => {
  const [loginUser, { loading }] = useLoginMutation();

  const router = useRouter();

  const initOAuth = async () => {
    const response = await fetch("https://gsm-blog-back-gsm-back-develop.apps.gsmapp.dev/api/connect/google")
    const data = await response.json()
    router.push(data.url)
  }

  const handleGoogleLogin = async () => {
    await initOAuth()
  }

  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },

    validate: {
      email: (value) =>
        /^\S+@\S+$/.test(value) ? null : "ایمیل وارد شده معتبر نمیباشد",
      password: (value) =>
        value.length < 1 ? "رمز عبور خود را وارد نمایید" : null,
    },
  });

  const handleSubmitForm = async (values: {
    email: string;
    password: string;
  }) => {
    try {
      const result = await loginUser({
        variables: {
          email: values.email,
          password: values.password,
        },
      });

      setCookie("token", result.data?.login.jwt);
      toast("با موفقیت وارد شدید");
      router.push("/");
    } catch (error) {
      console.log(error);
      toast("نام کاربری یا رمز عبور اشتباه است");
    }
  };

  return (
    <div dir="rtl" className="mx-auto !w-full">
      <div className="p-4 ">
        <h2>ورود به حساب کاربری</h2>
        <Box className="flex justify-center">
          <Link href={`${generalConfig.baseUrl}/api/connect/google`}>
            <Button
              className="flex gap-2 !text-black/80 bg-white !border-[1px] !border-slate-300  !w-full justify-center items-center !rounded-2xl hover:!bg-slate-300"
              rightSection={<IconBrandGoogle size={20} />}
            >
              ورود با گوگل
            </Button>
          </Link>
        </Box>
        <Divider label="ورود با ایمیل" className="mt-5" />
        <form onSubmit={form.onSubmit(handleSubmitForm)} className="mt-4">
          <TextInput
            label={"پست الکترونیکی"}
            className="mb-3 "
            classNames={{ input: "!rounded-lg !p-5", label: " pb-1" }}
            styles={{ input: { fontFamily: "IRANSans" } }}
            id="exampleInputEmail1"
            {...form.getInputProps("email")}
          />

          <TextInput
            label={"رمز عبور"}
            type="password"
            className="mb-3"
            classNames={{ input: "!rounded-lg !p-5", label: " pb-1" }}
            id="exampleInputPassword1"
            {...form.getInputProps("password")}
          />


          <div className=" w-full">
            <div className="w-full">
              <Button
                type="submit"
                className="!w-full !rounded-2xl"
                loading={loading}
              >
                ورود
              </Button>
            </div>
          </div>
        </form>
        <Box className="flex mt-3 gap-2">
          <Text>حساب کاربری ندارید؟</Text>
          <Link className="underline" href={""}>ثبت‌نام</Link>
        </Box>

      </div>
    </div>
  );
};

export default LoginModal;
