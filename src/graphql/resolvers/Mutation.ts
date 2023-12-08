import { GraphQLError } from 'graphql'

// Mongo models
import PostModel from '../../models/Post.js'
import UserModel from '../../models/User.js'
//** **//

// Mock imports
// import { mockPosts } from '../../models/_mockModelPost.js'
//** **//

const mutationResolvers = {
  Mutation: {
    // Add a new post
    addPost: async (_, { post }, context) => {

      // Check if user is logged in
      if (!context.user) {
        throw new GraphQLError('Unauthorized access. Please login to continue.', {
          extensions: {
            code: 'UNAUTHENTICATED_ACCESS',
          },
        });
      }

      try {
        // Create a new post using the Post model
        const newPost = new PostModel(post)
        await newPost.save() // Save the new post to the database
        return newPost // Return the saved post
      } catch (error) {
        throw new GraphQLError('Failed to add post', {
          extensions: {
            code: 'INTERNAL_SERVER_ERROR',
            message: error.message,
          },
        })
      }
    },

    // Delete a post by ID
    deletePost: async (_, { id }, context) => {

      // Check if user is logged in
      if (!context.user) {
        throw new GraphQLError('Unauthorized access. Please login to continue.', {
          extensions: {
            code: 'UNAUTHENTICATED_ACCESS',
          },
        });
      }

      try {
        // Find the post by id and delete it
        const deletedPost = await PostModel.findByIdAndDelete(id)
        if (!deletedPost) {
          throw new GraphQLError('Post not found', {
            extensions: {
              code: 'NOT_FOUND',
            },
          })
        }
        return id // Return the id of the deleted post
      } catch (error) {
        throw new GraphQLError('Failed to delete post', {
          extensions: {
            code: 'INTERNAL_SERVER_ERROR',
            message: error.message,
          },
        })
      }
    },

    // Edit a post by ID
    editPost: async (_, { id, post }, context) => {

      // Check if user is logged in
      if (!context.user) {
        throw new GraphQLError('Unauthorized access. Please login to continue.', {
          extensions: {
            code: 'UNAUTHENTICATED_ACCESS',
          },
        });
      }

      try {
        // Update the post with the provided id with new data
        const updatedPost = await PostModel.findByIdAndUpdate(id, post, {
          new: true, // Return the updated post
          runValidators: true, // Run model validators on update
        })
        if (!updatedPost) {
          throw new GraphQLError('Post not found', {
            extensions: {
              code: 'NOT_FOUND',
            },
          })
        }
        return updatedPost // Return the updated post
      } catch (error) {
        throw new GraphQLError('Failed to edit post', {
          extensions: {
            code: 'INTERNAL_SERVER_ERROR',
            message: error.message,
          },
        })
      }
    },

    // Add a new user
    addUser: async (_, { login, password }, context) => {

      // Check if user is logged in
      if (!context.user) {
        throw new GraphQLError('Unauthorized access. Please login to continue.', {
          extensions: {
            code: 'UNAUTHENTICATED_ACCESS',
          },
        });
      }

      try {
        // Check if user already exists
        const existingUser = await UserModel.findOne({ login });
        if (existingUser) {
          throw new GraphQLError('User already exists', {
            extensions: {
              code: 'USER_EXISTS',
            },
          });
        }

        // Create a new user with the provided login and password
        const newUser = new UserModel({ login, password });
        await newUser.save(); // Save the new user to the database
        return newUser; // Return the saved user
      } catch (error) {
        throw new GraphQLError('Failed to add user', {
          extensions: {
            code: 'INTERNAL_SERVER_ERROR',
            message: error.message,
          },
        });
      }
    },

    // Delete a user by ID
    deleteUser: async (_, { id }, context) => {

      // Check if user is logged in
      if (!context.user) {
        throw new GraphQLError('Unauthorized access. Please login to continue.', {
          extensions: {
            code: 'UNAUTHENTICATED_ACCESS',
          },
        });
      }
      
      try {
        // Find the user by ID and delete them
        const deletedUser = await UserModel.findByIdAndDelete(id);
        if (!deletedUser) {
          throw new GraphQLError('User not found', {
            extensions: {
              code: 'NOT_FOUND',
            },
          });
        }
        return id; // Return the ID of the deleted user
      } catch (error) {
        throw new GraphQLError('Failed to delete user', {
          extensions: {
            code: 'INTERNAL_SERVER_ERROR',
            message: error.message,
          },
        });
      }
    },
  },
}

export default mutationResolvers
