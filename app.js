import express from 'express';
import { PORT} from './config/env.js';
import connectToDatabase from './database/mongodb.js';
import authRouter from './routes/auth.routes.js';
import userRouter from './routes/user.routes.js';
import subscriptionRouter from './routes/subscription.routes.js';

const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to Dagis world (from  the back end)');
}) ;

const hostname = '127.0.0.1';
app.listen(PORT, hostname, async () => {
  console.log(`Server is running on http://${hostname}:${PORT}`);

  await connectToDatabase();
}); 