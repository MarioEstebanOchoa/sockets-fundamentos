const express = require('express');
const path = require('path');
const socketIO = require('socket.io')
const http = require('http');

const app = express();

let server = http.createServer(app);

const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));


// Esta es la conexion de backend
module.exports.io = socketIO(server);

require('./sockets/socket')


server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});