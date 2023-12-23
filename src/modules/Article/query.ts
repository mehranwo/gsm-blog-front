import { gql } from "@apollo/client";

export const ARTICLE_DETAIL_QUERY = gql`
query ArticleDetail($id:ID) {
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
                                filters: { id: { not: { eq: $id } }, type: { eq: "article" } }
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

`

export const TREND_ARTICLES_QUERY = gql`
    query TrendArticles {
        posts(
            filters: { is_hot: { eq: true }, type: { eq: "article" } }
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
                            }
                        }
                    }
                }
            }
        }
    }
`