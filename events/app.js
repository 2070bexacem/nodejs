const EventEmitter = require('events');

const customEmitter = new EventEmitter();

customEmitter.on('request', (name, id) => {
  console.log(`Date recieved of user with name ${name} and id ${id}`);
});

customEmitter.on('request', () => {
  console.log('your logic here');
});

customEmitter.emit('request', 'Peter', 44);

// const http = require('http');

// const server = http.createServer();

// server.on('request', (req, res) => {
//   res.end('Home');
// });

// server.listen(5000);