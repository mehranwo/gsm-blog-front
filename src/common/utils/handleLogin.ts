import { deleteCookie, getCookie,setCookie } from "cookies-next";

export const handleLoginCookie = (token: string) => {
  setCookie("_W", token);
};

export const handleLogoutCookie = () => {
  deleteCookie("_W");
};

export const getJWT = () => {
  return getCookie("_W") ?? "";
};

export const setRedirectURL = (url: string) => {
  setCookie("redirectURL", url);
};

export const getRedirectURL = (): string => {
  return getCookie("redirectURL") ?? "";
};
