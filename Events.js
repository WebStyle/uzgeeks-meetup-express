const EventEmitter = require('events');

const event = new EventEmitter();

function accept(req, res, next) {
  event.on('accept', (message) => {
    console.log(message);
    next();
  });
}

function approve(req, res, next) {
  event.emit('accept', 'hello');
  res.json({ message: 'accepted' });
}

module.exports.event = event;
module.exports.accept = accept;
module.exports.approve = approve;
