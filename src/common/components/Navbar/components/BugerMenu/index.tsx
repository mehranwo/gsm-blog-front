import { Box, Menu } from "@mantine/core";
import {
  IconMenu,
} from "@tabler/icons-react";
import Link from "next/link";
import React from "react";

import { generalRoutes } from "@/common/constants/routes";

const BugerMenu = () => {
  return (
    <Box className="block md:hidden">
      <Menu shadow="md" width={200}>
        <Menu.Target>
          <IconMenu />
        </Menu.Target>

        <Menu.Dropdown dir="rtl">
          
          <Menu.Item>
            <Link href={generalRoutes.plp}>گوشی‌ها</Link>
          </Menu.Item>
          <Menu.Item>
            <Link href={generalRoutes.newsList}>اخبار</Link>
          </Menu.Item>
          <Menu.Item>
            <Link href={generalRoutes.reviewList}>بررسی‌ها</Link>
          </Menu.Item>
          <Menu.Item>
            <Link href={generalRoutes.articles}>مقاله‌ها</Link>
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </Box>
  );
};

export default BugerMenu;
