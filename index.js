var server = require("./server/serverHttp");
var router = require("./server/route");

server.start(router.route);
