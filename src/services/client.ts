import { ApolloClient, HttpLink } from "@apollo/client";
import { NextSSRInMemoryCache } from "@apollo/experimental-nextjs-app-support/ssr";

import generalConfig from "@/common/config/general";

export const client = new ApolloClient({
  cache: new NextSSRInMemoryCache(),
  link: new HttpLink({
    uri: `${generalConfig.baseUrl}/graphql`,
  }),
})
