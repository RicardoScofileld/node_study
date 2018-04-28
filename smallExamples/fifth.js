// 文件操作
/*
// 小文件拷贝
var fs = require('fs');

function copy(src, dst){
  fs.writeFileSync(dst, fs.readFileSync(src));
};

function main(argv){
  copy(argv[0], argv[1]);
};
// process是一个全局变量，可以通过process.argv获得命令行参数，类似于os.sys模块
main(process.argv.slice(2));
*/

/*
// 大文件拷贝
var fs = require('fs')

function copy(src, dst){
  fs.createReadStream(src).pipe(fs.createWriteStream(dst));
}

function main(argv){
  copy(argv[0], argv[1]);
}

main(process.argv.slice(2));
*/

// 目录遍历
var fs = require('fs')
var path = require('path')


function travel(dir, callback){
  fs.readdirSync(dir).forEach(function(file){
    var pathname = path.join(dir, file);

    if (fs.statSync(pathname).isDirectory()){
      travel(pathname, callback);
    }else {
      callback(pathname)
    }
  });
}

function main(argv){
  travel(argv[0], function(pathname){
    console.log(pathname);
  })
}

main(process.argv.slice(2));
