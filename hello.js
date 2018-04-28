var http = require('http')


http.server('/', function(request, response){
	response.wirte('hello world');
	response.end()
}).listen(3000)
