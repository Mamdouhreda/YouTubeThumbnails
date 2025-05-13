import { gql } from "@apollo/client";

export const GET_POST_BY_SLUG = gql`
  query GetPostBySlug($slug: ID!) {
    post(id: $slug, idType: SLUG) {
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
`;
