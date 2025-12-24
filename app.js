import express from 'express';
const app = express();

const PORT = process.env.PORT || 3000;
const HOSTNAME = process.env.HOSTNAME || '0.0.0.0';

app.get('/', (req, res) => {
  res.send('Welcome to Dagis world (from  the back end)');
});

app.listen(PORT, HOSTNAME, () => {
  console.log(`Server is running on port ${PORT}`);
});