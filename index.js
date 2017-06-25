const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const events = require('events');

const app = express();
const Events = new events();

app.get('/', guard, (req, res) => {
  console.log('request');
  res.json({ message: 'Hello you are accepted' })
});


app.get('/accept', (req, res) => {
  Events.emit('accept');
  res.json({ message: 'accept sent' })
});

function guard(req, res, next) {
  Events.on('accept', () => next());
}

app.listen(3000, () => console.log('Server is run on port 3000'));
