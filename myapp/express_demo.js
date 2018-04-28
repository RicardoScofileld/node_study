var express = require('express');
var app = express();
var fs = require('fs');

var bodyParser = require('body-parser');
var multer = require('multer');

app.use(bodyParser.urlencoded({extended:false}));
app.use(multer({dest:'/tmp/'}).array('image'));

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

// 文件上传
app.post('/file_upload', function (req, res){
  console.log(req.files[0]);
  var des_file = __dirname + '/' + req.files[0].originalname;
  fs.readFile(req.files[0].path, function(err, data){
    if (err){
      console.log(err);
    }else {
      response = {
        message:'File uploaded successfully',
        filename:req.files[0].originalname
      };
    }
    console.log(response);
    res.end(Json.stringify(response));
  });
});



var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('应用实例，访问地址http://%s:%s', host, port);
})
