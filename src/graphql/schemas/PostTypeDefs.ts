const PostTypeDefs = `#graphql

  # Queries
  type Image {
    url: String!
    copyright: String
  }

  type ArticleBlock {
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
  }

  type Article {
    id: ID!
    articleType: String!
    description: Description!
    content: [ArticleBlock]!
  }

  type Query {
    getArticles: [Article],
    getArticle(id: ID!): Article
  }

  # Mutations

  input ArticleInput {
    id: ID!
    articleType: String!
    description: DescriptionInput!
    content: [ArticleBlockInput]!
  }

  input DescriptionInput {
    image: ImageInput
    title: String!
    author: String
    tags: [String]
    date: String!
    likes: Int
  }

  input ArticleBlockInput {
    id: ID!
    titleType: Boolean!
    title: String!
    text: String
  }

  input ImageInput {
    url: String!
    copyright: String
  }

  type Mutation {
    addArticle(article: ArticleInput!): Article
    deleteArticle(id: ID!): ID
    editArticle(id: ID!, article: ArticleInput!): Article
  }
`

export default PostTypeDefs
