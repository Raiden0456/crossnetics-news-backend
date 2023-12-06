import { mockArticles } from '../../models/Post.js';


const queryResolvers = {
  Query: {
    getArticles: () => mockArticles.articles,
  },

};

export default queryResolvers;
