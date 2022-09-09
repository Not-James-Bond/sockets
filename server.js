const express = require('express');
const socket = require('socket.io');
const app = express();

const port = process.env.PORT;
const server = app.listen(port);
console.log('Socket is Running');
app.use(express.static('public'));

const io = socket(server);

io.on('connection', socket => {
  console.log('Socket Server New Connection: ' + socket.id);

  socket.on('mouseCordinates', data => {
    console.log(`Receiving Mouse Corrdinates: ${data.X},${data.Y}`);
    socket.broadcast.emit('mouseCordinates', data); //It emits to other client exluding the current client  
    // io.sockets.emit('mouseCordinates', data); //It emits to all the clients including the current client
  });
});
