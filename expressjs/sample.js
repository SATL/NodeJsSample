var express = require("express");
var app = express();

app.get('/', function(req, res) {
  res.send("Hello World ExpressJs");
});

app.get('/customer', function(req, res) {
  res.send('customer page');
});

app.get('/admin', function(req, res) {
  res.send('admin page');
});
app.listen(8888);
console.log("Sever Running");
