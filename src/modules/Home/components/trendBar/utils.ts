import { generalRoutes } from "@/common/constants/routes";
import { Enum_Post_Type } from "@/services/Graphql/types.generated";

export const setHrefByType = (
  type?: Enum_Post_Type | null,
  postId?: string | null,
  titre?: string | null
) => {
  if (!type) return "";
  return {
    news: `${generalRoutes.newsList}/${postId}/${titre?.split(" ").join("-")}`,
    review: `${generalRoutes.reviewList}/${postId}/${titre?.split(" ").join("-")}`,
    article: "",
  }[type];
};
