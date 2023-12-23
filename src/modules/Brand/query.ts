import { gql } from "@apollo/client";

export const BRAND_DETAIL_QUERY = gql`
  query BrandDetail($id: ID) {
    brand(id: $id) {
      data {
        id
        attributes {
          persian_name
          brand_image {
            data {
              attributes {
                url
                previewUrl
              }
            }
          }
          background_image {
            data {
              attributes {
                url
              }
            }
          }
          description
          english_name
          posts{
                data {
                  id
                  attributes{
                    type
                  }
              }
          }
        }
      }
    }
  }
`;

export const PRODUCTS_RELATED_BRAND = gql`
  query ProductListBrand(
    $page:Int,
    $pageSize:Int,
    $id:ID
  ) {
      products(
          sort: ["publishedAt:desc"]
          pagination: { page: $page, pageSize: $pageSize }
          filters: { brand: { id: { eq: $id } } }
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
`

export const BRAND_DETAIL_SEO = gql`
  query BrandDetailSeo($id:ID) {
      brand(id: $id) {
          data {
              id
              attributes {
                  seo {
                      metaTitle
                      metaDescription
                      slug
                      canonicalURL
                      metaRobots
                  }
                  persian_name
                  english_name
              }
          }
      }
  }
`
