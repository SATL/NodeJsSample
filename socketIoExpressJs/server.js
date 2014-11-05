var express = require("express"),
  http = require('http');

var app = express();
var server = http.createServer(app);
var io = require('socket.io').listen(server);
console.log("Server created");


app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

io.sockets.on('connection', function(socket) {
  socket.emit('new', {
    content: 'news from server'
  });

  socket.on('feedback', function(data) {
    console.log('FeedBack from client ' + data);
    socket.emit('news', {
      content: 'news - ' + new Date()
    });
  });

});

server.listen(8089);
