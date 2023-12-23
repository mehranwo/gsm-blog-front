"use client";
import { LoadingOverlay } from "@mantine/core";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect } from "react";
import { toast } from "react-toastify";

import generalConfig from "@/common/config/general";
import { useAuthState } from "@/common/store";
import { getRedirectURL, handleLoginCookie } from "@/common/utils/handleLogin";

const CallbackAuth = () => {
  const param = useSearchParams();

  const setData = useAuthState((state) => state.setData);
  const setLoginState = useAuthState((state) => state.login);
  const typeAuth = useAuthState((state) => state.typeAuth)
  const router = useRouter();

  const getUserProfile = async () => {
    const query = param.toString();

    const response = await fetch(
      `${generalConfig.baseUrl}/api/auth/google/callback/?${query}`
    );

    const data = await response.json();

    const redirectURL = getRedirectURL();

    setLoginState();

    handleLoginCookie(data.jwt);

    setData(data.user);

    router.push(redirectURL.length !== 0 ? redirectURL : "/");

    if (typeAuth === "membership") {
      return toast("کاربر گرامی، درخواست شما برای عضویت در خبرنامه با موفقیت ثبت شد", { type: "success" });
    }
    toast("کاربر گرامی، ورود شما با موفقیت انجام شد.", { type: "success" });
  };

  useEffect(() => {
    if (param) {
      getUserProfile();
    }
  }, [param]);

  return (
    <div>
      <LoadingOverlay />
    </div>
  );
};

export default CallbackAuth;
