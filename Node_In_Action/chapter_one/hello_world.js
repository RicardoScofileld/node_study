const http = require('http');

/** 
http.createServer(function(req, res ){
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('hello world\n')
}).listen(3000);

console.log('Server running at http://localhost:3000/')
*/
var server = http.createServer()
server.on('request', function(req, res){
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('hello world\n')
})
server.listen(3000);
console.log('Server running at http://localhost:3000/')