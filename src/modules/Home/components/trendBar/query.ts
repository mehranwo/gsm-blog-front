import { gql } from "@apollo/client";

export const TREND_POSTS_QUERY = gql`
    query TrendPost {
        posts(
            filters: { is_hot: { eq: true } }
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
                    type
                    reading_time
                }
            }
        }
    }
`