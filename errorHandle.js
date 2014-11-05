var LogHandler = require("./modules/LogHandler");

var n = 3,
  b = 0;

var logger = new LogHandler('myHandler');

try {
  var c = n / b;
  if (c == Infinity)
    throw new Error("Error invalid operation");
} catch (err) {
  logger.error(err);
}
