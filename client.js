var localip = require('local-ip');
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
    httpResult.setHeader('Content-Type', 'application/json');
    
    // On an incoming request, get the local IP address of the chosen interface.
    localip(interface, function(error, localIP) {
    	var toReturn = {
    		ip : null
    	};

    	console.log('IP address requested.');

    	// Include the IP address in the response.
		if (!error) {
	  		toReturn.ip = 
	  		result = localIP;
	  	}
	  	
	  	httpResult.end(JSON.stringify(toReturn));
	});
});
app.listen(port);