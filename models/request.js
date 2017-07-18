const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RequestModel = new Schema({
  ip: String,
  accepted: { type: Boolean, default: false },
  url: String,
  headers: Object,
  method: String,
  createdAt: { type: Date, default: new Date() },
  updatedAt: { type: Date, default: new Date() },
});

module.exports = mongoose.model('Requests', RequestModel);

