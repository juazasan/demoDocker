var http = require('http');
const os = require('os'); 
http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    var hostname = os.hostname();
    var returnMessage = 'Hello World!!!\n';
    returnMessage += 'server: '+ os.hostname() +'\n';
    returnMessage += 'Network Interfaces:\n';    
    returnMessage +=  JSON.stringify(os.networkInterfaces(), null, 2)+ '\n';    
    response.end(returnMessage);
}).listen(80);

console.log('Server started');