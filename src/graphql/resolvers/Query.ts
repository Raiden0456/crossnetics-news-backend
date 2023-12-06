import { GraphQLError } from 'graphql'

// Mock imports
import { mockArticles } from '../../models/Post.js'
import { mockUsers } from '../../models/Users.js'
//** **//

const queryResolvers = {
  Query: {
    getArticles: () => {
      const articles = mockArticles.articles
      // Error handling
      if (!articles || articles.length === 0) {
        throw new GraphQLError('No articles found!', {
          extensions: {
            code: 'NOT_FOUND',
          },
        })
      }

      return articles
    },

    getArticle: (_, { id }) => {
      const article = mockArticles.articles.find(article => article.id === id)

      // Error handling
      if (!article) {
        throw new GraphQLError(`Article with id: ${id} not found!`, {
          extensions: {
            code: 'NOT_FOUND',
          },
        })
      }

      return article
    },
    
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
