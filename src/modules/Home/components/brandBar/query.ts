import { gql } from "@apollo/client";

export const BRAND_LIST_QUERY = gql`
  query Brands {
    brands(
      pagination: { page: 1, pageSize: 8 }
      sort: ["priority:desc"]
    ) {
      data {
        id
        attributes {
          brand_image {
            data {
              id
              attributes {
                url
                previewUrl
              }
            }
          }
          priority
          persian_name
          background_image {
            data {
              id
              attributes {
                url
              }
            }
          }
          description
          english_name
        }
      }
    }
  }
`;
