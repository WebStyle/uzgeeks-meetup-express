const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const emitter = require('./Events');
const app = express();

app.get('/', (req, res) => res.json({ message: 'Welcome to adminServer' }));
app.get('/accept', emitter.approve);

app.listen(3030, () => console.log('Server is run on port 3030'));
