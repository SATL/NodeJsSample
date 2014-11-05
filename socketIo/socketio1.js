 var app = require('http').createServer(handler),
   io = require('socket.io').listen(app),
   fs = require('fs');
 app.listen(8098);
 console.log('server started on port 8098');

 function handler(req, res) {
   fs.readFile(__dirname + '/index.html', function(err, data) {
     if (err) {
       res.writeHead(500);
       return res.end('Error loading index.html');
     }
     res.writeHead(200);
     res.end(data);
   });
 }

 io.sockets.on('connection', function(socket) {
   socket.emit('news', {
     content: 'news from server'
   });

   socket.on('whatsUp', function(data) {
     console.log(data);
     socket.emit('hi', {
       content: 'hi from SlemServer (Socket.io)',
       lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dapibus porta nibh ac tempus. Proin vel nulla posuere, posuere odio sed, placerat ante. Morbi lobortis auctor nunc. Morbi iaculis nulla lectus, ut porta nunc volutpat vitae. Donec quis tristique lorem. Curabitur quis libero id nunc rhoncus ultricies. Aliquam pellentesque est ut diam tempor placerat. Curabitur eu odio venenatis, fringilla justo eget, ultricies urna. Phasellus imperdiet risus in ipsum porta venenatis. Aliquam quis malesuada velit. Mauris ultrices enim eget maximus aliquet.'
     });
   });

   socket.on('feedback', function(data) {
     console.log(data);
     socket.emit('news', {
       content: 'news - ' + new Date()
     });
   });
 });
