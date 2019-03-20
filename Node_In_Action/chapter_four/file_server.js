/**
 * 静态文件服务
 */

var http = require('http');
var parse = require('url').parse;
var join = require('path').join;
var fs = require('fs');
var root = __dirname;

// normal
// var server = http.createServer(function(req, res) {
//     var url = parse(req.url);
//     var path = join(root, url.pathname);
//     var steam = fs.createReadStream(path);
//     // steam.on('data', function(chunk) {
//     //     res.write(chunk);
//     // });
//     // steam.on('end', function() {
//     //     res.end();
//     // });
//     // 使用管道
//     steam.pipe(res);
//     // 错误处理
//     steam.on('error', function(err) {
//         res.statusCode = 500;
//         res.end('Internal server error.')
//     })
// });


// 
var server = http.createServer(function(req, res) {
    var url = parse(req.url);
    var path = join(root, url.pathname);
    fs.stat(path, function(err, stat) {
        if (err) {
            if ('ENOENT' == err.code) {
                res.statusCode = 404;
                res.end('Not Found');
            } else {
                res.statusCode = 500;
                res.end('Internal Server Error');
            }
        } else {
            res.setHeader('Content-Length', stat.size);
            var steam = fs.createReadStream(path);
            steam.pipe(res);
            steam.on('error', function(err) {
                res.statusCode = 500;
                res.end('Internal Server Error');
            })
        }
    })
})



server.listen(3000, '127.0.0.1')