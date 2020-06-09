const socketIO = require('socket.io');

let socket;

const conenection = (server) => {
  const io = socketIO.listen(server);

  io.on('connection', (newSocket) => {
    socket = newSocket;
    console.log(newSocket.id);
  });
};

const getSockect = () => socket;

module.exports = {conenection, getSockect};
