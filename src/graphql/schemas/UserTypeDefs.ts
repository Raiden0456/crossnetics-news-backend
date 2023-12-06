const UserTypeDefs = `#graphql
type User {
    id: ID
    login: String!
    password: String!
}

type Query {
    login(login: String!, password: String!): User
}
`

export default UserTypeDefs
