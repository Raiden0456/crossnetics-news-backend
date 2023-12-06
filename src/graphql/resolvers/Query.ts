import { mockQueryResult } from '../../models/Post.js';


const queryResolvers = {
  Query: {
    getArticles: () => mockQueryResult,
  },

};

export default queryResolvers;
