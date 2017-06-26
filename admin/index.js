const requestModel = require('../models/request');

module.exports = (app, events) => {
  app.get('/', (req, res) => {
    requestModel.find({}).exec((err, requests) => {
      if (err) return res.json({ message: err.message });
      res.json(requests);
    });
  });
  app.get('/:id', (req, res) => {
    if (!req.params.id) return res.json({ message: 'id is required' });
    const id = req.params.id;

    requestModel.findOneAndUpdate({ _id: id }, { accepted: true }).exec((err, result) => {
      if (err) return res.json({ message: err.message });

      if (!result) return res.json({ message: 'not found' });

      events.emit('accept', id);
      res.json({ message: 'Accepted' });
    });
  });
};
