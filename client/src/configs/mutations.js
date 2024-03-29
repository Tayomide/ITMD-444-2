import { gql } from "@apollo/client"

const DeletePostById = gql`
  mutation DeletePostById($id: String!) {
    deletePost(id: $id) {
      id
    }
  }
`

const UpdateViewCount = gql`
  mutation IncrementPostViewCount($id: String!) {
    incrementPostViewCount(id: $id) {
      id
      createdAt
      updatedAt
      title
      content
      published
      viewCount
    }
  }
`

export {
  DeletePostById,
  UpdateViewCount
}