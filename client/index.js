const requestModel = require('../models/request');

module.exports = (app, events) => {

  app.use((req, res, next) => {
    let request = new requestModel({
      url: req.originalUrl,
      headers: req.headers,
      method: req.method,
    });
    request.save((err, result) => {
      if (err) return res.json({ message: err.message });
      req._id = result._id.toString();
      console.log(req._id);
      events.on('accept', (id) => {
        if (id === req._id) {
          next();
        }
      });
    });
  });

  app.get('/', (req, res) => {
    res.json({ message: 'You are accepted' });
  });
};