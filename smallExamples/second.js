// fs类似于import
// 阻塞实例
/*
var fs = require('fs')
var data = fs.readFileSync("what's_NPM.md");
console.log(data.toString());
console.log('程序结束');
*/

// 非阻塞实例
var fs = require('fs')
fs.readFile("what's_NPM.md", function(err, data){
    if (err) return console.log(err);
    console.log(data.toString());
});
console.log('程序结束');
