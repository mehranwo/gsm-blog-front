import { gql } from "@apollo/client";

const LOGIN = gql`
	mutation Login($email:String! , $password:String!) {
		login(input: { identifier: $email, password: $password }) {
			jwt
		}
	}
`
