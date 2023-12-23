import { gql } from "@apollo/client";

export const NEWS_BAR_QUERY = gql`
  query NewsBarQuery {
    posts(
      filters: { type: { eq: "news" } }
      sort: ["publishedAt:desc"]
      pagination: { pageSize: 20 }
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
