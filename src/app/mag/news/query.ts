import { gql } from "@apollo/client";

export const NEWS_LIST_QUERY = gql`
  query NewsList($page: Int, $pageSize: Int, $filters: PostFiltersInput) {
    posts(
      filters: $filters
      sort: ["publishedAt:desc"]
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
