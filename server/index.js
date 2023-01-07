const express = require('express');
const app = express();
// port
const port = 5000;
// data 
const courses = require('./data/courses');
// creat api
app.get('/', (req, res) => {
  res.status(200);
  res.json({ismail});
});

app.get('/courses', (req, res) => {
  res.status(200);
  res.json({ courses });
});

app.get('/courses/:id', (req, res) => {
  const id = req.params.id;
  const course = courses.find((c) => c.id === id);
  res.status(200);
  res.json({ course });
});
// tachghil l code
app.listen(port, () => {
  console.log(`The server runs on port ${port}`);
});