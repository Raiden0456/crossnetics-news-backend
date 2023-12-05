import { ApolloServer } from '@apollo/server';
import typeDefs from './schemas/index.js';
import queryResolvers from './resolvers/Query.js';

const server = new ApolloServer({
  typeDefs,
  resolvers: queryResolvers,
});

export default server;
