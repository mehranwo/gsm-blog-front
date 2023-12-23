import { gql } from "@apollo/client";

export const ARTICLE_LIST_QUERY = gql`
  query ArticleList($page: Int, $pageSize: Int) {
    posts(
      filters: {type: { eq: "article" }}
      sort: ["publishedAt:desc"]
      pagination: { page: $page, pageSize: $pageSize }
    ) {
      data {
        id
        attributes {
          comment
          titre
          main_text
          source
          is_hot
          reading_time
          summary
          publishedAt
          main_image {
            data {
              id
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
