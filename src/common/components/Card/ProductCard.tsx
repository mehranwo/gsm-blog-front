import { Box, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import { generalRoutes } from "@/common/constants/routes";
import { truncate } from "@/common/utils";

const ProductCard = ({
  productId,
  productImageURL,
  productName,
  price,
  productName_en
}: {
  productId: string;
  productImageURL: string;
  productName: string;
  price: string;
  productName_en: string
}) => {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  return (
    <div className="col-sm-6 col-md-4 col-lg-3 !w-[130px] h-[200px] md:!w-fit md:h-full">
    <div className="card border py-2  md:p-3 h-100">
      <Link
        className="max-w-full max-h-full flex justify-center items-center overflow-hidden !h-[200px] !w-[200px] mx-auto"
        href={generalRoutes.product + "/" + productId + "/" + productName_en?.split(" ").join("-")}
      >
        <Image
          className="w-[70px] h-[70px] md:w-full md:h-full mx-auto max-h-full"
          src={productImageURL}
          alt=""
          width={150}
          height={200}
        />
      </Link>

      <div className="card-body text-center p-3 px-0">
        <h5 className="card-title md:w-[233px]">
          <Link href={generalRoutes.product + "/" + productId + "/" + productName_en?.split(" ").join("-")}>
            {isDesktop ? productName : truncate(productName, 18)}
          </Link>
        </h5>
        <h6 className="mb-0 text-success">
          {parseInt(price, 10) ? <Text> از {price.replaceAll(".", ",")} تومان</Text> : <Text className="!text-black">ناموجود</Text>}
        </h6>
      </div>
    </div>
  </div>
  );
};

export default ProductCard;
