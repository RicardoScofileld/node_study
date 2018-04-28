// require指令，载入http模块，并将实例化的HTTP赋值给http
var http = require('http')
// 创建服务器，并绑定端口
http.createServer(function(request, response){
	// 发送HTTP头部
	// HTTP状态值：200：OK
	// 内容类型：text/plain
	response.writeHead(200, {'Content-Type': 'text/plain'});
	// 发送响应数据
	response.end('小哥哥，来玩呀');

}).listen(8888);
// 终端打印如下信息
console.log('Server running at http://127.0.0.1:8888')
