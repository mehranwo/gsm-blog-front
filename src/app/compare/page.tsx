"use client";
import { Box, Loader, LoadingOverlay } from "@mantine/core";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

import CustomLoading from "@/common/components/CustomLoading";
import { client } from "@/services/client";
import {
  ComparisonProductListQuery,
} from "@/services/Graphql/types.generated";

import ComparisonTable from "./components/table";
import { COMPARISON_PRODUCT_LIST } from "./query";

export const revalidate = 1;

const ComparisonPage = () => {
  const queryParams = useSearchParams();
  const [data, setData] = useState<ComparisonProductListQuery | undefined>();
  const [loading, setLoading] = useState<boolean>(true);
  const getData = async () => {
    setLoading(true);
    const data = await client.query({
      query: COMPARISON_PRODUCT_LIST,
      variables: {
        ids: queryParams.getAll("id"),
      },
    });

    setLoading(false);

    return data.data;
  };

  useEffect(() => {
    if (queryParams.getAll("id").length) {
      getData().then((res) => {
        setData(res);
      });
    }
  }, [queryParams]);

  return (
    <>
      <Box className="container flex-col space-y-4 md:space-y-0 md:flex-row md:flex md:justify-center md:items-center"></Box>
      <hr />
      {loading ? <CustomLoading /> : <ComparisonTable data={data} />}
    </>
  );
};

export default ComparisonPage;
