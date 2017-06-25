module.exports = (app, events) => {
  app.use((req, res, next) => {
    events.on('accept', () => next());
  });

  app.get('/', (req, res) => {
    res.json({ message: 'You are accepted' });
  });
};