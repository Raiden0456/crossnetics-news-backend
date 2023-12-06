import { GraphQLError } from 'graphql'

// Mock imports
import { mockArticles } from '../../models/Post.js'
//** **//

const mutationResolvers = {
  Mutation: {
    addArticle: (_, { article }) => {
      try {
        mockArticles.articles.push(article)
        return article
      } catch (error) {
        throw new GraphQLError('Failed to add article')
      }
    },
    deleteArticle: (_, { id }) => {
      try {
        mockArticles.articles = mockArticles.articles.filter(
          article => article.id !== id
        )
        return id
      } catch (error) {
        throw new GraphQLError('Failed to delete article')
      }
    },
    editArticle: (_, { id, article }) => {
      try {
        mockArticles.articles = mockArticles.articles.map(existingArticle =>
          existingArticle.id === id
            ? { ...existingArticle, ...article }
            : existingArticle
        )
        return mockArticles.articles.find(article => article.id === id)
      } catch (error) {
        throw new GraphQLError('Failed to edit article')
      }
    },
  },
}

export default mutationResolvers
