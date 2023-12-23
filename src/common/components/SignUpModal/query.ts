import { gql } from "@apollo/client";

export const SIGNUP_QUERY = gql`
  mutation Register($userName:String! , $email:String!, $password:String!) {
      register(input: { username: $userName, email: $email, password: $password }) {
          jwt
      }
  }
`