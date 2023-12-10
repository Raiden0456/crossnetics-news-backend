const PostTypeDefs = `#graphql

  # Queries
  type Image {
    url: String!
    copyright: String
  }

  type PostBlock {
    id: ID!
    titleType: Boolean!
    title: String!
    text: String
  }

  type Description {
    image: Image
    title: String!
    author: String
    tags: [String]
    date: String!
    likes: Int
    views: Int
  }

  type Post {
    id: ID!
    postType: String!
    description: Description!
    content: [PostBlock]!
  }

  type Query {
    getPosts: [Post],
    getPost(id: ID!): Post
  }

  # Mutations

  input PostInput {
    postType: String!
    description: DescriptionInput!
    content: [PostBlockInput]!
  }

  input DescriptionInput {
    image: ImageInput
    title: String!
    author: String
    tags: [String]
    date: String!
    likes: Int
    views: Int
  }

  input PostBlockInput {
    titleType: Boolean!
    title: String!
    text: String
  }

  input ImageInput {
    url: String!
    copyright: String
  }

  type Mutation {
    addPost(post: PostInput!): Post
    deletePost(id: ID!): ID
    editPost(id: ID!, post: PostInput!): Post
  }
`

export default PostTypeDefs
