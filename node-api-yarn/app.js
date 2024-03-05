// app.js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('API is running via yarn!');
});

app.get('/yc', (req, res) => {
  res.send('Yatharth Chauhan Here!');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
