import { books } from '../../models/Book.js';
import { mockQueryResult } from '../../models/Post.js';

const queryResolvers = {
  Query: {
    books: () => books,
    getArticles: () => mockQueryResult,
  },

};

export default queryResolvers;
