var EventEmitter = require('events').EventEmitter;
var myEmitter = new EventEmitter;

var connection = function (id){
  console.log("client id: "+id);
};

myEmitter.on('connection', connection);

myEmitter.once('message', function(msg){
  console.log('message' + msg);
});


myEmitter.emit('connection', 6);

myEmitter.removeListener('connection', connection);

myEmitter.emit('connection', 15);

myEmitter.emit('message', 'new message');
myEmitter.emit('message', 'new message 2');
myEmitter.emit('message', 'Hi nodeJs');
