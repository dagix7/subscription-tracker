import express from 'express';
import { PORT} from './config/env.js';
const app = express();




app.get('/', (req, res) => {
  res.send('Welcome to Dagis world (from  the back end)');
}) ;

app.listen( PORT , hostname, () => {
  console.log(`Server is running on port ${PORT}`);
}); 