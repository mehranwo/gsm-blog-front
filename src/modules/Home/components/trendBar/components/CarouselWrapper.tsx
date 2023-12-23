import React from "react";

import { getClient } from "@/services/apollo-wrapper";
import { TrendPostQuery } from "@/services/Graphql/types.generated";

import { TREND_POSTS_QUERY } from "../query";
import TrendBarCarousel from "./TrendBardCarousel";

export const revalidate = 1;

async function getData() {
  try {
    const { data } = await getClient().query({
      query: TREND_POSTS_QUERY,
      fetchPolicy: "no-cache",
    });
    return data;
  } catch (error) {
    console.log(error);
  }
}

const CarouselWrapper = async () => {
  const data: TrendPostQuery = await getData();

  return <TrendBarCarousel data={data} />;
};

export default CarouselWrapper;
