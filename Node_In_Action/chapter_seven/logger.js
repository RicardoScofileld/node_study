'use strict'
var connect = require('connect');
var app = connect();


app.use(logger(':method : url'))
    .use(hello)


function setup(format) {
    var regexp = /:(W+)/g;
    return function logger(req, res, next) {
        var str = format.replace(regexp, function(match, property) {
            return req[property];
        });
        console.log(str);
        next();
    }
}


function hello(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.end()
}