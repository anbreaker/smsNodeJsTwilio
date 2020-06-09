// Read Environment Variables
require('dotenv').config();
const app = require('./server');

// For use socket.io
const http = require('http');
const server = http.createServer(app);

require('./database');
require('./sockets').conenection(server);

// <-- Server listenning -->
server.listen(app.get('port'), () => {
  //   console.log('\nEnvironment: ', process.env.MONGODB_URI);
  console.log(`\nListening server on Port -> http://localhost:${server.address().port}`);
});
