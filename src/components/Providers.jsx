"use client";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";

// Validate environment variables
if (!process.env.NEXT_PUBLIC_WORDPRESS_URL) {
  throw new Error(
    "NEXT_PUBLIC_WORDPRESS_URL is not defined in environment variables"
  );
}

// Create Apollo Client instance
const httpLink = new HttpLink({
  uri: `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/graphql`,
  headers: {
    "Content-Type": "application/json",
  },
});

const client = new ApolloClient({
  link: from([httpLink]),
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: "cache-and-network",
    },
  },
});

export default function Providers({ children }) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
