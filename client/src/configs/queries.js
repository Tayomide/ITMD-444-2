import { gql } from '@apollo/client'

// Fetch all posts with titles and authors
const GetPosts = gql`
query GetPosts {
    feed {
      id
      title
      viewCount
      updatedAt
      createdAt
      author {
        id
        name
      }
    }
  }
`

// Fetch a single post by ID
const GetPostById = gql`
  query GetPostById($id: String!) {
    postById(id: $id) {
      id
      title
      content
      author {
        id
        name
      }
    }
  }
`

// Fetch posts by a user
const GetPostsByUser = gql`
  query GetPostsByUser($userId: String!) {
    draftsByUser(userUniqueInput: { id: $userId }) {
      id
      title
      viewCount
      updatedAt
      author{
        name
        email
      }
    }
  }
`

export {
  GetPosts,
  GetPostById,
  GetPostsByUser
}