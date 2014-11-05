var myModule = require("./myModule");
var Account = require("./moduleClass");

var result = myModule.calculate(43, 76);
console.log(result);
console.log( myModule.add(10, 4));


var account = new Account();
account.foo("adaew", "wefew");
