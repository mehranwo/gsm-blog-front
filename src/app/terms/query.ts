import { gql } from "@apollo/client";

export const TERMS_AND_CONDITION_DATA_QUERY = gql`
  query TermsAndConditionData {
    staticPage(id: "1") {
        data {
            attributes {
                main_text
            }
        }
    }
  }
`