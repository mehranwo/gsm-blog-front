import { distractSeoData } from "@/common/utils/seo";
import BrandDetailModule from "@/modules/Brand"
import { BRAND_DETAIL_SEO } from "@/modules/Brand/query";
import { getClient } from "@/services/apollo-wrapper";
import { BrandDetailSeoQuery, ComponentSharedSeo } from "@/services/Graphql/types.generated";

export const revalidate = 6000;
export const dynamic = "force-dynamic"

import { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const id = params.id
  // optionally access and extend (rather than replace) parent metadata

  const response = await getClient().query({
    query: BRAND_DETAIL_SEO,
    variables: {
      id
    }
  })
  const data: BrandDetailSeoQuery = response.data
  const { canonical, description, robots, slug, title } = distractSeoData(data.brand?.data?.attributes?.seo as ComponentSharedSeo)
  const persion_name = data?.brand?.data?.attributes?.persian_name
  const english_name = data?.brand?.data?.attributes?.english_name

  return {
    title: title ? title : `لیست قیمت گوشی ${persion_name ?? " "} + مشخصات فنی`,
    description: description ?? `لیست مشخصات و قیمت گوشی‌های برند ${persion_name ?? " "} به همراه مقایسه مشخصات فنی | بهترین گوشی ${persion_name ?? " "} را به کمک جی‌اس‌ام انتخاب کنید`,
    alternates: {
      canonical: canonical ?? `https://www.gsm.ir/brands/${id}/${slug?.split(" ").join("-") ?? english_name?.split(" ").join("-")}/`
    },
    robots: robots ?? "follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
  }
}

const BrandPage = ({ params }: { params: { id: string } }) => {
  return (
    <BrandDetailModule params={params} />
  );
};

export default BrandPage;
