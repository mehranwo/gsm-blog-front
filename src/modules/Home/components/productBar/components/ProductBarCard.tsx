import { Box, Text } from "@mantine/core";
import Link from "next/link";
import React from "react";

import { generalRoutes } from "@/common/constants/routes";

const ProductBarCard = ({
  productId,
  productImageURL,
  productName,
  price,
  productName_en
}: {
  productId: string;
  productImageURL: string;
  productName: string;
  price: number;
  productName_en: string
}) => {
  return (
    <div className="col-sm-6 col-md-4 col-lg-3 h-[200px] md:!w-[285px] md:h-full">
      <div className="card border p-3 h-100 ">

        <Link className="max-w-full max-h-full flex justify-center items-center overflow-hidden !h-[200px] !w-[200px] mx-auto" href={generalRoutes.plp + "/" + productId}>
          <img
            className="mx-auto max-h-full"
            src={productImageURL}
            alt=""
          />
        </Link>


        <div className="card-body text-center p-3 px-0">
          <h5 className="card-title md:w-[233px]">
            <Link href={generalRoutes.product + "/" + productId + "/" + productName_en.split(" ").join("-")}>
              {productName}
            </Link>
          </h5>
          <h6 className="mb-0 text-success">
            {price ? <Text>{price} تومان</Text> : <Text>ناموجود</Text>}
          </h6>
        </div>
      </div>
    </div>
  );
};

export default ProductBarCard;
