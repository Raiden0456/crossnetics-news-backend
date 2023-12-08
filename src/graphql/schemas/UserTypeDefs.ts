const UserTypeDefs = `#graphql
type User {
    id: ID
    login: String!
    password: String!
}

type Query {
    login(login: String!, password: String!): User
}

type Mutation {
  addUser(login: String!, password: String!): User
  deleteUser(id: ID!): ID
}

`

export default UserTypeDefs
