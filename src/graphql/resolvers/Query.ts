import { GraphQLError } from 'graphql/error/index.js'

import { mockArticles } from '../../models/Post.js'
import { mockUsers } from '../../models/Users.js'

const queryResolvers = {
  Query: {
    getArticles: () => mockArticles.articles,
    login: (_, { login, password }) => {
      const user = mockUsers.users.find(user => user.login === login)
      if (!user) {
        throw new GraphQLError('Incorrect login, please try again', {
          extensions: { code: 'INCORRECT_LOGIN' },
        })
      }

      if (user.password !== password) {
        throw new GraphQLError('Incorrect password, please try again', {
          extensions: { code: 'INCORRECT_PASSWORD' },
        })
      }
      return user
    },
  },
}

export default queryResolvers
