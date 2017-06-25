module.exports = (app, events) => {
  app.get('/', (req, res) => {
    events.emit('accept');
    res.json({ message: 'Accepted' });
  });
};
