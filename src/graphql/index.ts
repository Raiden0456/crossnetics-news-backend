import { ApolloServer } from '@apollo/server';
import typeDefs from './schemas/index.js';
import queryResolvers from './resolvers/Query.js';
import mutationResolvers from './resolvers/Mutation.js';

const server = new ApolloServer({
  typeDefs,
  resolvers: [queryResolvers, mutationResolvers],
});

export default server;
