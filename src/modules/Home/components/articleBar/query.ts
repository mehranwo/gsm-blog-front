import { gql } from "@apollo/client";

export const ARTICLE_BAR_QUERY = gql`
  query ArticleBar {
    posts(filters: { type: { eq: "article" } }
    sort: ["publishedAt:desc"]
     pagination: { pageSize: 10 }
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
