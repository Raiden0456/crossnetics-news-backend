import jwt from 'jsonwebtoken';
import { GraphQLError } from 'graphql'

// Load environment variables
import dotenv from 'dotenv'
dotenv.config()
//** **//

// Mongo models
import PostModel from '../../models/Post.js'
import UserModel from '../../models/User.js'
//** **//

// Mock models
// import { mockPosts } from '../../models/_mockModelPost.js'
// import { mockUsers } from '../../models/_mockModelUsers.js'
//** **//

const queryResolvers = {
  Query: {
    getPosts: async () => {
      const posts = await PostModel.find({})
      if (!posts || posts.length === 0) {
        throw new GraphQLError('No posts found!', {
          extensions: {
            code: 'NOT_FOUND',
          },
        })
      }
      return posts
    },

    getPost: async (_, { id }) => {
      const post = await PostModel.findById(id)
      if (!post) {
        throw new GraphQLError(`Post with id: ${id} not found!`, {
          extensions: {
            code: 'NOT_FOUND',
          },
        })
      }
      return post
    },

    login: async (_, { login, password }) => {
      const user = await UserModel.findOne({ login }).exec();
      if (!user) {
        throw new GraphQLError('Incorrect login or password', {
          extensions: { code: 'INCORRECT_CREDENTIALS' },
        });
      }
    
      const validPassword = await user.comparePassword(password);
      if (!validPassword) {
        throw new GraphQLError('Incorrect login or password', {
          extensions: { code: 'INCORRECT_CREDENTIALS' },
        });
      }
    
      const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
        expiresIn: '1h',
      });
    
      return { user: { id: user.id, login: user.login }, token };
    },
  },
}

export default queryResolvers
