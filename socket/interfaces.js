var os = require('os');

var interface = os.networkInterfaces();

for (item in interface) {
  console.log("networkInterface " + item);
  for (att in interface[item]) {
    var address = interface[item][att];
    console.log('Family: ' + address.family);
    console.log('IP Address: ' + address.address);
    console.log('Is Internal: ' + address.internal);
    console.log('');
  }
  console.log('==================================');
}
