const events = require('events');

/**
 * Stream 对象继承EventEmitter 
 */

 function Stream() {
     events.EventEmitter.call(this);
}

util.inherits(Stream, events.EventEmitter());
events.EventEmitter();