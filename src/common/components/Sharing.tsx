"use client";
import { Box, Tooltip, TooltipFloating } from "@mantine/core";
import { IconShare } from "@tabler/icons-react";
import { usePathname } from "next/navigation";
import React from "react";
import { toast } from "react-toastify";

import generalConfig from "@/common/config/general";

const Sharing = () => {
  const pathName = usePathname();
  return (
    <Box
      onClick={() => {
        navigator.clipboard.writeText(generalConfig.baseUrlFront + pathName);
        toast("لینک صفحه کپی شد", { type: "success" });
      }}
      className="flex justify-end md:justify-start"
    >
      <Tooltip
        position="right"
        events={{ hover: true, focus: true, touch: false }}
        offset={25}
        label="اشتراک گذاری"
      >
        <IconShare className="text-black cursor-pointer" />
      </Tooltip>
    </Box >
  );
};

export default Sharing;
