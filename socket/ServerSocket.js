var serverPort = 9099;

var net = require('net');
var server = net.createServer(function(client) {
  console.log('client connected');
  console.log('client IpAdress: ' + client.remoteAdress);
  console.log('is Ipv6 ' + net.isIPv6(client.remoteAdress));
  console.log('total server connections: '+server.connections);


  client.on('data', function(data){
      console.log('data recieved '+data.toString());
      client.write("Hi from SlemServer");
  });

  client.on('end', function(){
    console.log("Client Disconnected");
  });

});


server.on("error", function(err){
  console.log(err);
  server.close();
});

server.listen(serverPort, function(){
  console.log("server started in port "+serverPort);
});
