// server.ts
import { startStandaloneServer } from '@apollo/server/standalone';
import jwt from 'jsonwebtoken';
import connectDB from './db/mongoose.js';
import server from './graphql/index.js';

async function startServer() {
  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
    context: async ({ req }) => {
      const token = req.headers.authorization || '';
      let user = null;
      try {
        if (token) {
          const decoded = jwt.verify(token.split(' ')[1], process.env.JWT_SECRET);
          user = { ...decoded };
        }
      } catch (error) {
        console.error('JWT Verification Error:', error.message);
      }
      return { user };
    },
  });

  await connectDB();
  console.log(`🚀 Server ready at: ${url}`);
}

startServer();
