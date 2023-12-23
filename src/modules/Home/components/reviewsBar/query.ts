import { gql } from "@apollo/client";

export const REVIEW_BAR_QUERY = gql`
  query ReviewBar {
    posts(
      filters: { type: { eq: "review" } }
      sort: ["publishedAt:desc"]
      pagination: { page: 1, pageSize: 5 }
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
