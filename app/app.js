import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Today is friday in California!');
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
