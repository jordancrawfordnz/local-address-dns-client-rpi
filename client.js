var os = require('os');
var http = require('http');

var args = process.argv.slice(2);
if (args.length !== 1) {
	console.log('Run with: node client [interface]. e.g.: node client eth0');
	return;
}
var interface = args[0];

var port = 3000;

console.log('Local Address DNS Client server started on port ' + port);

// Run a web server.
var app = http.createServer(function(httpRequest, httpResult) {
	console.log('IP address requested.');

	// On an incoming request, get the local IP address of the chosen interface.
	var toReturn = {
		ip : getInterfaceIP(interface)
	};

	httpResult.setHeader('Content-Type', 'application/json');
	httpResult.end(JSON.stringify(toReturn));
});

app.listen(port);

function getInterfaceIP(requestedInterface) {
  var interfaces = os.networkInterfaces();
  if (interfaces.hasOwnProperty(requestedInterface)) {
    var interfaceDetails = interfaces[requestedInterface];
    for (var i = 0; i < interfaceDetails.length; i++) {
      var interface = interfaceDetails[i];
      if (interface.family === 'IPv4') {
        return interface.address;
      }
    }
  }
  return null;
}
