"use client";
import {
  Avatar,
  Box,
  Button,
  Image,
  Menu,
  MenuTarget,
  Modal,
  Text,
} from "@mantine/core";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import { IconLogout } from "@tabler/icons-react";
import Link from "next/link";
import React from "react";

import LoginModal from "@/common/components/LoginModal";
import { generalRoutes } from "@/common/constants/routes";
import { useAuthState } from "@/common/store";
import { getJWT, handleLogoutCookie } from "@/common/utils/handleLogin";

import BugerMenu from "./components/BugerMenu";
import LoginButton from "./components/LoginButton";
import SearchSection from "./components/Search";

const Navbar = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const isMobile = useMediaQuery("(min-width: 768px)");
  const setData = useAuthState((state) => state.setData);
  const setLogoutState = useAuthState((state) => state.logout);

  const logoutHandler = () => {
    setData({});
    setLogoutState();
    handleLogoutCookie()
  };

  const authState = useAuthState((state) => state.authState);
  const token = getJWT()
  return (
    <Box className="container flex justify-between items-center flex-col lg:flex-row pb-1">
      <Box className="flex gap-4 items-center w-full justify-between md:justify-normal">
        <Box className="flex items-center gap-3">
          <BugerMenu />
          <Link className="navbar-brand" href={generalRoutes.home}>
            <Image
              className="navbar-brand-item light-mode-item"
              src="/assets/images/GSM Logo-02.png"
              alt="logo"
            />
          </Link>
        </Box>
        <Box className="items-center gap-4 hidden md:flex">
          <Link
            prefetch={false}
            style={{ color: "#197bff" }}
            className="font-bold"
            href={generalRoutes.plp}
          >
            گوشی‌ها
          </Link>
          <Link
            prefetch={false}
            style={{ color: "#197bff" }}
            className="font-bold"
            href={generalRoutes.newsList}
          >
            اخبار
          </Link>
          <Link
            prefetch={false}
            style={{ color: "#197bff" }}
            className="font-bold"
            href={generalRoutes.reviewList}
          >
            بررسی‌ها‌
          </Link>
          <Link
            prefetch={false}
            style={{ color: "#197bff" }}
            className="font-bold"
            href={generalRoutes.articles}
          >
            مقاله‌ها
          </Link>
        </Box>
        <Box className="block lg:hidden">
          {token?.length !== 0 ? (
            <Menu shadow="md">
              <MenuTarget>
                <Avatar className="cursor-pointer" />
              </MenuTarget>

              <Menu.Dropdown className="!w-[210px]">
                <Menu.Item onClick={logoutHandler} className="!text-right">
                  <Box className="flex gap-2 items-center">
                    <Text>خروج از حساب کاربری</Text>
                    <IconLogout size={20} />
                  </Box>
                </Menu.Item>
              </Menu.Dropdown>
            </Menu>
          ) : (
            <LoginButton />
          )}
        </Box>
      </Box>
      <SearchSection className="block lg:hidden w-full" />

      <Box className="flex gap-2 items-center w-full">
        <SearchSection className="hidden lg:block flex-1 px-3" />
        <Box className="hidden lg:block">
          {token?.length !== 0 ? (
            <Menu shadow="md">
              <MenuTarget>
                <Avatar className="cursor-pointer" />
              </MenuTarget>

              <Menu.Dropdown className="!w-[210px]">
                <Menu.Item onClick={logoutHandler} className="!text-right">
                  <Box className="flex gap-2 items-center">
                    <Text>خروج از حساب کاربری</Text>
                    <IconLogout size={20} />
                  </Box>
                </Menu.Item>
              </Menu.Dropdown>
            </Menu>
          ) : (
            <LoginButton />
          )}
        </Box>
      </Box>
      <Modal
        styles={{
          header: { position: "unset" },
          content: { height: isMobile ? "660px" : "100%", padding: "0px" },
        }}
        size={"30%"}
        opened={opened}
        onClose={close}
        centered
        fullScreen={isMobile ? false : true}
      >
        <LoginModal />
      </Modal>
    </Box>
  );
};

export default Navbar;
