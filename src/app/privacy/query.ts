import { gql } from "@apollo/client";

export const PRIVACY_DATA_QUERY = gql`
query PrivacyData {
    staticPage(id: "2") {
        data {
            attributes {
                main_text
            }
        }
    }
  }


`