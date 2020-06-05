const app = require('./server');
require('./database');

// <-- Server listenning -->
const server = app.listen(app.get('port'), () => {
  //   console.log('\nEnvironment: ', process.env.MONGODB_URI);
  console.log(`\nListening server on Port -> http://localhost:${server.address().port}`);
});
