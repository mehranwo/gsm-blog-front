import { gql } from "@apollo/client";

export const PRODUCT_BAR_QUERY = gql`
  query ProductBar{
    products(
      sort: ["publishedAt:desc"]
      pagination: {pageSize: 20 }
    ) {
      data {
        id
        attributes {
          name
          name_en
          main_image {
            data {
              attributes {
                url
                previewUrl
                formats
              }
            }
          }
          attribute_values {
            data {
              attributes {
                value
              }
            }
          }
          variant(pagination: { page: 1, pageSize: 40 }) {
            id
            price
          }
        }
      }
    }
  }
`;
