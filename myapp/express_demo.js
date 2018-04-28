var express = require('express');
var app = express()

// 主页输出'hello world'
app.get('/', function(req, res){
  console.log('主页 GET 请求');
  res.send('hello GET');
})

// POST请求
app.post('/', function(req, res){
  console.log('主页 POST 请求');
  res.send('hello POST请求')
})

// del_user 删除用户请求
app.get('/del_user', function(req, res){
  console.log('/del_user页面 删除用户请求');
  res.send('删除用户');
})

// list_user 用户请求
app.get('/list_user', function(req, res) {
  console.log('/list_user 页面 展示用户');
  res.send('列出用户')
})

// 正则匹配
app.get('/ab*cd', function (req, res) {
  console.log('正则匹配');
  res.send('正则匹配')
})

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('应用实例，访问地址http://%s:%s', host, port);
})
