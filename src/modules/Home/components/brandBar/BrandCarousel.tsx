import { getClient } from "@/services/apollo-wrapper";
import { BrandsQuery } from "@/services/Graphql/types.generated";

import BrandSwiper from "./BrandSwiper";
import { BRAND_LIST_QUERY } from "./query";

export const revalidate = 1;

async function getData() {
  try {
    const { data } = await getClient().query({
      query: BRAND_LIST_QUERY,
      fetchPolicy: "no-cache",
    });
    return data;
  } catch (error) {
    console.log(error)
  }
}

const BrandCarousel = async () => {
  const data: BrandsQuery = await getData();

  return <BrandSwiper data={data} />;
};

export default BrandCarousel;
