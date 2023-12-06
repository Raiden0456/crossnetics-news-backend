const PostTypeDefs = `#graphql

type Image {
  url: String
  copyright: String
}

type Article {
  id: String
  titleType: Boolean
  title: String
  text: String
}

type Description {
  image: Image
  title: String
  author: String
  tags: [String]
  date: String
  likes: Int
}

type QueryResult {
  description: Description
  content: [Article]
}

type Query {
  getArticles: QueryResult
}
`;

export default PostTypeDefs;
