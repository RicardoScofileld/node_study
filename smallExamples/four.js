// event.js
// 事件注册后，设置timeout，接收一个函数和一个超时时间，类似于time.sleep()
/*
var EventEmitter = require('events').EventEmitter;
var event = new EventEmitter();
event.on('some_event', function() {
    console.log('some_event occured.');
});
setTimeout(function() {
    event.emit('some_event');
}, 1000);
*/


// events模块只提供了一个对象，events.EventEmitter.EventEmitter的核心就是事件发射与事件监听功能的封装
var events = require('events');
var emitter = new events.EventEmitter();
emitter.on('someEvent', function(arg1, arg2){
  console.log('listener1', arg1, arg2);
});
emitter.on('someEvent', function(arg1, arg2){
  console.log('listener2', arg1, arg2);
});
emitter.emit('someEvent', 'hello', 'world')
