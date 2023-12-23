import { gql } from "@apollo/client";

export const COMPARISON_PRODUCT_LIST = gql`
  query ComparisonProductList($ids: [ID]) {
    products(filters: { id: { in: $ids } }) {
      data {
        id
        attributes {
          name
          name_en
          main_image {
            data {
              attributes {
                url
              }
            }
          }
          variant(pagination: { page: 1, pageSize: 40 }) {
            id
            price
          }
          attribute_values(pagination: { page: 1, pageSize: 60 }) {
            data {
              attributes {
                value
                etc
                attribute_id {
                  data {
                    id
                    attributes {
                      name
                      attr_cat_priority
                      attribute_category {
                        data {
                          id
                          attributes {
                            priority
                            title
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
