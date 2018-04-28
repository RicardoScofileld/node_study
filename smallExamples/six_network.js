// 网络操作

const http = require('http');

http.createServer(function(request, response){
  var body =[];
  console.log('it work');
  console.log(request.method);
  console.log(request.headers);

  request.on('data', function(chunk){
    body.push(chunk);
  });

  request.on('end', function(){
    body = Buffer.concat(body);
    console.log(body.toString());
  });

  response.end('<h1 style=color:red>hello world</h1>')
}).listen(8000)
