import { gql } from "@apollo/client";

export const PRODUCT_DETAIL_QUERY = gql`
    query ProductDetail($id:ID) {
        product(id: $id) {
            data {
                id
                attributes {
                    attribute_values(pagination: { page: 1, pageSize: 60 }) {
                        data {
                            attributes {
                                value
                                attribute_id {
                                    data {
                                        attributes {
                                            name
                                            is_featured
                                            featured_priority
                                            attr_cat_priority
                                            attribute_category {
                                                data {
                                                    id
                                                    attributes {
                                                        title
                                                        priority
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                    name
                    main_image {
                        data {
                            attributes {
                                url
                                previewUrl
                                formats
                            }
                        }
                    }
                    images (pagination: { page: 1, pageSize: 30 }) {
                        data {
                            attributes {
                                url
                            }
                        }
                    }
                    brand {
                        data {
                            attributes {
                                persian_name
                                products(
                                    filters: { id: { not: { eq: $id } } }
                                    pagination: { page: 1, pageSize: 10 }
                                    sort: ["publishedAt:desc"]
                                ) {
                                    data {
                                        id
                                        attributes {
                                            name
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
                                            main_image {
                                                data {
                                                    id
                                                    attributes {
                                                        url
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                    posts(pagination: { page: 1, pageSize: 10 }) {
                        data {
                            attributes {
                                titre
                                main_image {
                                    data {
                                        attributes {
                                            url
                                        }
                                    }
                                }
                                publishedAt
                            }
                        }
                    }
                    variant(pagination: { page: 1, pageSize: 20 }) {
                        id
                        price
                    }
                    market_status
                }
            }
        }
    }
`

export const PRODUCT_DETAIL_BAR_QUERY = gql`
  query ProductDetailBar($id:ID){
    products(
      filters: { id: { not: { eq: $id } }}
      sort: ["publishedAt:desc"]
      pagination: {page:1 , pageSize: 10 }
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

export const PRODUCT_SEO = gql`
  query ProductDetailSeo($id:ID) {
      product(id: $id) {
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
                  name
                  name_en
              }
          }
      }
  }
`
