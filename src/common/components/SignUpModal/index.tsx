"use client";
import { Box, Button, Divider, Text, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { IconBrandGoogle } from "@tabler/icons-react";
import { setCookie } from "cookies-next";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "react-toastify";

import { useRegisterMutation } from "@/services/Graphql/types.generated";

const SignUpModal = () => {
  const [registerUser, { loading }] = useRegisterMutation();

  const router = useRouter();

  const form = useForm({
    initialValues: {
      userName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },

    validate: {
      email: (value) =>
        /^\S+@\S+$/.test(value) ? null : "ایمیل وارد شده معتبر نمیباشد",
      password: (value) =>
        value.length < 7 ? "رمز عبور باید بیشتر از ۷ کاراکتر باشد" : null,
      confirmPassword: (value, values) =>
        value.length < 7
          ? "رمز عبور باید بیشتر از ۷ کاراکتر باشد"
          : value !== values.password
            ? "یکی نیست"
            : null,
      userName: (value) =>
        value.length < 4 ? "رمز عبور باید بیشتر از ۴ کاراکتر باشد" : null,
    },
  });

  type FormType = typeof form.values;

  const handleSubmit = async ({ userName, email, password }: FormType) => {
    try {
      const result = await registerUser({
        variables: {
          email,
          password,
          userName,
        },
      });
      setCookie("token", result.data?.register.jwt);
      toast("با موفقیت ثبت نام شدید");
      router.push("/");
    } catch (error) {
      console.log(error);
      toast("مشکلی به وجود آمده است دوباره تلاش کنید");
    }
  };

  return (
    <div dir="rtl" className="mx-auto !w-full">
      <div className="p-3">
        <h2>ثبت‌نام در جی‌اس‌ام</h2>
        <Box className="flex justify-center">
          <Button className="flex gap-2 !text-black/80 bg-white !border-[1px] !border-slate-300  !w-full justify-center items-center !rounded-2xl hover:!bg-slate-300" rightSection={<IconBrandGoogle size={20} />}>
            ثبت‌نام با گوگل
          </Button>
        </Box>
        <Divider label="ورود با ایمیل" className="mt-4" />

        <form className="mt-2" onSubmit={form.onSubmit(handleSubmit)}>
          <div className="mb-3 flex flex-col justify-between md:flex md:flex-row">
            <TextInput
              label={"نام کاربری"}
              type="email"
              className="mb-3"
              classNames={{ input: "!rounded-lg !p-5", label: " pb-1" }}
              styles={{ input: { fontFamily: "IRANSans" } }}
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              {...form.getInputProps("userName")}
            />

            <TextInput
              label={"پست الکترونیکی"}
              type="email"
              id="exampleInputEmail1"
              classNames={{ input: "!rounded-lg !p-5", label: " pb-1" }}
              styles={{ input: { fontFamily: "IRANSans" } }}
              aria-describedby="emailHelp"
              {...form.getInputProps("email")}
            />
          </div>
          <TextInput
            label={"رمز عبور"}
            type="password"
            className="mb-3"
            classNames={{ input: "!rounded-lg !p-5", label: " pb-1" }}
            id="exampleInputPassword1"
            {...form.getInputProps("password")}
          />
          <TextInput
            label={"تایید رمز عبور"}
            type="password"
            className="mb-3"
            classNames={{ input: "!rounded-lg !p-5", label: " pb-1" }}
            id="exampleInputPassword2"
            {...form.getInputProps("confirmPassword")}
          />
          <div className="flex justify-center flex-col gap-2 mt-3">

            <Button
              type="submit"
              className="!rounded-2xl"
              loading={loading}
            >
              ثبت‌‌نام
            </Button>
            <Box className="flex gap-2 justify-center">
              <Text>
                حساب کاربری دارید؟
              </Text>
              <Link className="underline" href={"#"}>ورود</Link>
            </Box>


          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpModal;
