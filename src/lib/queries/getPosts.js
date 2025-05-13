import { gql } from "@apollo/client";

export const GET_ALL_POSTS = gql`
  query GetAllPosts {
    posts(first: 10) {
      nodes {
        id
        databaseId
        title
        content
        date
        excerpt
        slug
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
      }
    }
  }
`;
