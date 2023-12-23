"use"
import { Box, Text } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

import { generalRoutes } from "@/common/constants/routes";

const SearchProductCard = ({
  productId,
  productImageURL,
  productName,
  price,
  onClick,
  productName_en
}: {
  productId: string;
  productImageURL: string;
  productName: string;
  price: number;
  onClick?: () => void;
  productName_en: string
}) => {
  const { push } = useRouter();

  return (

    <div className="col-sm-6 col-md-4 col-lg-3 w-[165px] h-[200px] md:!w-fit md:h-full">
      <div onClick={() => {
        onClick ? onClick() : push(generalRoutes.product + "/" + productId + "/" + productName_en?.split(" ").join("-"));
      }} className="card border py-2 md:p-3 h-100 cursor-pointer">

        <Box className="max-w-full max-h-full flex justify-center items-center overflow-hidden !h-[200px] !w-[80px] md:!w-[150px] mx-auto" >
          <Image
            className="mx-auto max-h-full"
            src={productImageURL}
            alt=""
            width={200}
            height={300}
          />
        </Box>


        <div className="card-body text-center p-3 px-0">
          <h5 className="card-title md:w-[233px]">
            <Link href={generalRoutes.product + "/" + productId + "/" + productName_en?.split(" ").join("-")}>
              {productName}
            </Link>
          </h5>
          <h6 className="mb-0 text-success">
            {price ? <Text>{price} تومان</Text> : <Text>ناموجود</Text>}
          </h6>
        </div>
      </div>
    </div >
  );
};

export default SearchProductCard;
