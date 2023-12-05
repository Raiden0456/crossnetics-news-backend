import { books } from '../../models/Book.js';

const queryResolvers = {
  Query: {
    books: () => books,
  },
};

export default queryResolvers;
