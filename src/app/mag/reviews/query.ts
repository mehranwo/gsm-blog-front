import { gql } from "@apollo/client";

export const TECH_REVIEW_LIST_QUERY = gql`
  query TechReviewList($page: Int, $pageSize: Int, $filters: PostFiltersInput) {
    posts(
      sort: ["publishedAt:desc"]
      filters: $filters
      pagination: { page: $page, pageSize: $pageSize }
    ) {
      data {
        id
        attributes {
          titre
          publishedAt
          main_tag {
            data {
              attributes {
                name
              }
            }
          }
          main_image {
            data {
              attributes {
                url
                previewUrl
                formats
              }
            }
          }
        }
      }
    }
  }
`;
