import { gql } from "@apollo/client";

export const TECH_REVIEW_DETAIL = gql`
  query TechReviewDetail($id: ID) {
    post(id: $id) {
      data {
        id
        attributes {
          titre
          main_text
          source
          reading_time
          summary
          publishedAt
          main_tag {
            data {
              id
              attributes {
                name
                main_tag_posts(
                  filters: { id: { not: { eq: $id } }, type: { eq: "review" } }
                  pagination: { page: 1, pageSize: 8 }
                  sort: ["publishedAt:desc"]
                ) {
                  data {
                    id
                    attributes {
                      titre
                      main_image {
                        data {
                          attributes {
                            url
                            formats
                          }
                        }
                      }
                      publishedAt
                    }
                  }
                }
              }
            }
          }
          main_image {
            data {
              attributes {
                url
                formats
              }
            }
          }
        }
      }
    }
  }
`;

export const REVIEW_DETAIL_BAR_QUERY = gql`
  query ReviewDetailBar($id: ID) {
    posts(
      filters: { id: { not: { eq: $id } }, type: { eq: "review" } }
      sort: ["publishedAt:desc"]
      pagination: { page: 1, pageSize: 8 }
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
              }
            }
          }
        }
      }
    }
  }
`;

export const REVIEW_DETAIL_SEO = gql`
  query ReviewDetailSeo($id:ID) {
      post(id: $id) {
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
                  titre
              }
          }
      }
  }
`
