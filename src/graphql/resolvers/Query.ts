
import { mockQueryResult } from '../../models/Post.js';
import { mockBlogResult } from '../../models/Blog.js';

const queryResolvers = {
  Query: {
    getArticles: () => mockQueryResult,
    getNews: () => mockBlogResult,
  },

};

export default queryResolvers;
