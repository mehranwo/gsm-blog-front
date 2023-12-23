import { gql } from "@apollo/client";

export const CONTACT_US_DATA_QUERY = gql`
  query ContactUsData {
    staticPage(id: "3") {
        data {
            attributes {
                main_text
            }
        }
    }
  }
`