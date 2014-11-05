var log4js = require('log4js');
var fs = require('fs');

var LogHandler = module.exports = function(appName) {
  log4js.loadAppender('file');

  if (!fs.existsSync('log')) {
    try {
      fs.mkdirSync('log');
    } catch (e) {
      if (e.code != 'EEXIST') throw e;
    }
  }

  log4js.addAppender(log4js.appenders.file('log/' + appName + '.log'), appName);
  return log4js.getLogger(appName);

};
