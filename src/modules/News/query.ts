import { gql } from "@apollo/client";
export const NEWS_DETAIL_QUERY = gql`
  query NewsDetail($id: ID) {
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
                  filters: { id: { not: { eq: $id } }, type: { eq: "news" } }
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
                            previewUrl
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
              }
            }
          }
        }
      }
    }
  }
`;

export const TREND_NEWS_QUERY = gql`
  query TrendNews {
    posts(
      filters: { is_hot: { eq: true }, type: { eq: "news" } }
      pagination: { page: 1, pageSize: 10 }
      sort: ["publishedAt:desc"]
    ) {
      data {
        id
        attributes {
          titre
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

export const RELATED_NEWS_QUERY = gql`
  query RelatedNews($id: ID) {
    posts(
      filters: { id: { not: { eq: $id } }, type: { eq: "news" } }
      sort: ["publishedAt:desc"]
      pagination: { page: 1, pageSize: 8 }
    ) {
      data {
        id
        attributes {
          titre
          publishedAt
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

// export const COMMENT_LIST_QUERY = gql`
//     query CommentsList($id:String!) {
//         findAllInHierarchy(relation: $id) {
//             id
//             content
//             createdAt
//             author {
//                 name
//             }
//         }
//     }
// `
