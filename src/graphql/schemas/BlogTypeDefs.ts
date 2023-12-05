const blogTypeDefs = `#graphql
type Image {
  url: String
}

type Blog {
  id: ID!
  date: String
  title: String
  text: String
  tags: [String]
  likes: Int
  image: Image
}

type News {
  date: String
  title: String
  text: String
  tags: [String]
  image: Image
}

type QueryResult {
  news: [News]
  blog: [Blog]
}

type Query {
  getNews: QueryResult
}
`;

export default blogTypeDefs;
