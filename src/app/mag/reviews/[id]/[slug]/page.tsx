import { Metadata, ResolvingMetadata } from "next";

import { distractSeoData } from "@/common/utils/seo";
import ReviewDetailModule from "@/modules/Review";
import { REVIEW_DETAIL_SEO } from "@/modules/Review/query";
import { getClient } from "@/services/apollo-wrapper";
import { ComponentSharedSeo, ReviewDetailSeoQuery } from "@/services/Graphql/types.generated";

type Props = {
  params: { id: string, slug: string }
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
    query: REVIEW_DETAIL_SEO,
    variables: {
      id
    }
  })
  const data: ReviewDetailSeoQuery = response.data
  const { canonical, description, robots, slug, title } = distractSeoData(data.post?.data?.attributes?.seo as ComponentSharedSeo)
  const titre = data?.post?.data?.attributes?.titre

  return {
    title: `${title ?? titre ?? " "}`,
    description: `${description ?? "اطلاع از آخرین اخبار دنیای موبایل و تکنولوژی به همراه قیمت روز، بررسی تخصصی و مقایسه ای جدیدترین گوشی ها ، معرفی و دانلود اپلیکیشن های کاربردی"}`,
    alternates: {
      canonical: canonical ?? `https://www.gsm.ir/reviews/${`${id}/${slug?.split(" ").join("-") ?? titre?.split(" ").join("-")}`}/`
    },
    robots: robots ?? "follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
  }
}

export const dynamic = "force-dynamic"
const ReviewDetail = ({ params }: { params: { id: string } }) => {
  return (
    <ReviewDetailModule params={params} />
  );
};

export default ReviewDetail;
