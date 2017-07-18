const requestModel = require('../models/request');

module.exports = (app, events) => {
  /**
   * Requests list
   */
  app.get('/', (req, res) => {
    requestModel.find({ accepted: false }).exec((err, requests) => {
      if (err) return res.json({ message: err.message });
      res.json(requests);
    });
  });

  /**
   * Request accept
   */
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
