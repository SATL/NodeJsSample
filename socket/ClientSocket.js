var serverPort = 9099;
var server = 'localhost';
var net = require('net');

console.log('connecting to server...');
var client = net.connect({
    server: server,
    port: serverPort
  },
  function() {
    console.log("client connected");

    console.log("Sending data...");
    client.write('hi from client');
  });

client.on('data', function(data) {
  console.log('received data: ' + data.toString());
  //client.end();
});
client.on('error', function(err) {
  console.log(err);
});
client.on('end', function() {
  console.log('client disconnected');
});
