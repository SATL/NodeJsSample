var http = require("http");
var url = require("url");

function start(route) {

  function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
    //console.log("Request for " + pathname + " received.");


    route(pathname);

    pageHandler(response, request.url);
  }

  http.createServer(onRequest).listen(8888);
  console.log("Server started");

}

function pageHandler(res, url) {
  if (url == '/') {
    res.write('Welcome to Slem server');
  } else
  if (url == '/admin') {
    res.write('Welcome to admin page');
  } else
  if (url == '/customer') {
    res.write('Welcome to customer page');
  } else {
    res.write('Page not found');
  }

  res.end();
}


exports.start = start;
