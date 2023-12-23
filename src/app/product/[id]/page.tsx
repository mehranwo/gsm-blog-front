import { Metadata, ResolvingMetadata } from "next";

import { distractSeoData } from "@/common/utils/seo";
import ProductDetailModule from "@/modules/PDP";
import { PRODUCT_SEO } from "@/modules/PDP/query";
import { getClient } from "@/services/apollo-wrapper";
import { client } from "@/services/client";
import { ComponentSharedSeo, ProductDetailSeoQuery } from "@/services/Graphql/types.generated";


export const revalidate = 6000;
export const dynamic = "force-dynamic"
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
    query: PRODUCT_SEO,
    variables: {
      id
    }
  })
  const data: ProductDetailSeoQuery = response.data
  const { canonical, description, robots, slug, title } = distractSeoData(data.product?.data?.attributes?.seo as ComponentSharedSeo)
  const name = data?.product?.data?.attributes?.name
  const name_en = data.product?.data?.attributes?.name_en

  return {
    title: `${title ?? `${name ?? ""} قیمت گوشی | ${name_en ?? ""}`}`,
    description: `آخرین قیمت گوشی ${name ?? ""} + بررسی تخصصی، مشخصات فنی و مقایسه با گوشی‌های همرده ${name ?? ""} + مقایسه با هر گوشی که بخواهید را در این صفحه ببینید.`,
    alternates: {
      canonical: canonical ?? `https://www.gsm.ir/product/${`${id}/${slug?.split(" ").join("-") ?? name_en?.split(" ").join("-")}`}/`
    },
    robots: robots ?? "follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
  }
}
const ProductDetailPage = ({ params }: { params: { id: string } }) => {
  return (
    <ProductDetailModule params={params} />
  );
};

export default ProductDetailPage;
