import { startStandaloneServer } from '@apollo/server/standalone';

import connectDB from './db/mongoose.js';
import server from './graphql/index.js';

async function startServer() {
  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });

  await connectDB();

  console.log(`🚀 Server ready at: ${url}`);
}

startServer();
