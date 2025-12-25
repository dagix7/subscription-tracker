import express from 'express';
import { PORT} from './config/env.js';
const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to Dagis world (from  the back end)');
}) ;

const hostname = '127.0.0.1';
app.listen(PORT, hostname, () => {
  console.log(`Server is running on http://${hostname}:${PORT}`);
}); 