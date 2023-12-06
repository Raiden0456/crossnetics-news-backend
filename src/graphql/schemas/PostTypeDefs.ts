const PostTypeDefs = `#graphql

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
  getArticles: [Article]
}
`;

export default PostTypeDefs;
