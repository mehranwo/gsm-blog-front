import { gql } from "@apollo/client";

export const ABOUT_US_DATA_QUERY = gql`
  query AboutUsData {
    staticPage(id: "5") {
        data {
            attributes {
                main_text
            }
        }
    }
  }
`