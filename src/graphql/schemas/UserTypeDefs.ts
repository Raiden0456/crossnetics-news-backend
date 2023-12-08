const UserTypeDefs = `#graphql
type User {
  id: ID
  login: String!
}

type AuthPayload {
  user: User
  token: String!
}

type Query {
  login(login: String!, password: String!): AuthPayload
}

type Mutation {
  addUser(login: String!, password: String!): User
  deleteUser(id: ID!): ID
}
`;

export default UserTypeDefs;
