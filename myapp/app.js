var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.send('hello world');
});

var server = app.listen(3000, function(){
  var host = server.address().adress;
  var port = server.address().port;

  console.log('Example app listen at http://%s:%s', host, port);
})
