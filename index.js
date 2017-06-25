const express = require('express');
const mongoose = require('mongoose');
const events = require('events');

const Events = new events();

const client = express();
const admin = express();

mongoose.connect('mongodb://localhost:27017/RA-service');

require('./client/index')(client, Events);
require('./admin/index')(admin, Events);

client.listen(3000, () => console.log('client server is run'));
admin.listen(3001, () => console.log('admin server is run'));
