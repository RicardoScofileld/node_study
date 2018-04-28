var net = require('net');

/* TCP服务端
var server = net.createServer(function(socket){
  // 新的连接
  socket.on('data', function(data){
    socket.write('你好');
  });
  socket.on('end', function(){
    console.log('连接断开');
  });
  socket.write('听得到吗?');
})

server.listen(1206, function(){
  console.log('server start');
});
*/

// TCP客户端
var client = net.connect({port:3456}, function(){
  console.log('client connected');
  client.write('hello world');
});
client.on('data', function(data){
  console.log(data.toString());
  client.end();
});
client.on('end', function(){
  console.log('client disconnected');
});
