import { ComponentSharedSeo } from "@/services/Graphql/types.generated";

export const distractSeoData = (data?: ComponentSharedSeo | null) => {
  return {
    slug: data?.slug,
    description: data?.metaDescription,
    canonical: data?.canonicalURL,
    robots: data?.metaRobots,
    title: data?.metaTitle,
  }
}

export const generateMetaTitleAndMetaDescriptionPost = ({ description, title }: { title: string, description: string }) => {

}
