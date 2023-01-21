import { graphql } from "graphql";
import { request, gql } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getPosts = async () => {
  const query = gql`
    query MyQuery {
      postsConnection {
        edges {
          cursor
          node {
            author {
              bio
              name
              id
              photo {
                url
              }
            }
            createdAt
            slug
            title
            execerpt
            featuredImage {
              url
            }
            categories {
              name
              slug
            }
          }
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query);

  //  above is the request^^^^

  return result.postsConnection.edges;

//   after the results are fetched the line above will be returning the post. 

}
/*this is how you fetch data using graphql and graphcms
    you will be able to make a request below the query model */



// new models to be made in the query things for post music embeds codin help blocks and videos. 


export const getRecentPosts = async () => {
const query = gql`
query GetPostDetails() {
  post(orderBy: createdAt_ASC last: 3 ) 
  {
    title 
    featuredImage
    url
    {
      createdAt
      slug
    }
  }
}`
  const result = await request(graphqlAPI, query);

  return result.posts;

};

export const getSimlarPosts = async () => {
const query = gql`
 const getPostDetails($slug: String!, $categories: [String!]) {
  posts(
    where: { slug_not: $slug, &&: {categories_some: { slug_in: $categoreis}} }
    last: 3
  )
  {
    title 
    featuredImage
    url
    {
      createdAt
      slug
    }
 }
`

  const result = await request(graphqlAPI, query);

  return result.posts;
// complicated ass graphql query^^^^
}

export const getCategories = async () => {
  const query = gql`
  query GetCatergories {
    cateegories {
      name
      slug
    }
  }
  `
  const result = await request(graphqlAPI, query);

  return result.categories;

}
