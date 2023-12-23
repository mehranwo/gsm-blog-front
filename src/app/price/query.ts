import { gql } from "@apollo/client";

export const PRODUCT_LIST_QUERY = gql`
    query ProductList(
        $page:Int,
        $pageSize:Int
        ) {
        products(
            sort: ["publishedAt:desc"]
            pagination: { page: $page, pageSize: $pageSize }
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
                    variant(pagination: { page: 1, pageSize: 30 }) {
                        id
                        price
                    }
                }
            }
        }
    }
`