import { Box, Text } from "@mantine/core";
import { IconChevronLeft } from "@tabler/icons-react";
import Link from "next/link";
import React from "react";

import { generalRoutes } from "@/common/constants/routes";
import { getClient } from "@/services/apollo-wrapper";
import { ProductBarQuery } from "@/services/Graphql/types.generated";

import ProductBarCarousel from "./components/ProductBarCarousel";
import { PRODUCT_BAR_QUERY } from "./query";

export const revalidate = 120;

const getData = async () => {
  try {
    const { data } = await getClient().query({
      query: PRODUCT_BAR_QUERY,
      fetchPolicy: "no-cache",
      variables: { page: 1, pageSize: 10 },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
}
const ProductBar = async () => {
  const data: ProductBarQuery = await getData();

  return (
    <>
      <div className="mb-3 flex justify-content-between align-items-center container">
        <h2 className="m-0">محصولات</h2>
        <Link style={{ color: "#197bff" }} href={generalRoutes.plp} className="p-1.5 rounded-lg flex items-center">
          <Text>
            مشاهده همه
          </Text>
          <IconChevronLeft />
        </Link>
      </div>
      <Box className="container flex-col space-y-4 md:space-y-0 md:flex-row md:flex md:justify-center md:items-center md:flex-wrap !pr-3">
        <ProductBarCarousel data={data} />
      </Box>
    </>
  );
};

export default ProductBar;
