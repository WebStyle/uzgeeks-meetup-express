const requestModel = require('../models/request');

module.exports = (app, events) => {

  app.use((req, res, next) => {
    let request = new requestModel({
      ip: req.headers['x-forwarded-for'] || req.connection.remoteAddress,
      url: req.originalUrl,
      headers: req.headers,
      method: req.method,
    });
    request.save((err, result) => {
      if (err) return res.json({ message: err.message });
      req._id = result._id.toString();
      console.log('Requested client id:', req._id);
      events.on('accept', (id) => {
        if (id === req._id) {
          console.log('Accepted client id:', req._id);
          next();
        }
      });
    });
  });

  app.get('/', (req, res) => {
    res.json({ message: 'Congratulations! You are approved', _id: req._id });
  });
};