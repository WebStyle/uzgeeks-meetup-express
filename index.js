const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Events = require('./Events');

const app = express();

app.use(Events.accept);

app.get('/', (req, res) => {
  console.log('request');
  res.json({ message: 'Hello you are accepted' })
});

app.listen(3000, () => console.log('Server is run on port 3000'));
