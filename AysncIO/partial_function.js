/**
 * 偏函数用法: 通过指定部分参数来产生一个新的定制函数的形式就是偏函数
 */

 var toString = Object.prototype.toString;

//  var isString = function(obj) {
//      return toString.call(obj) == '[object String]';
//  }

//  var isFunction = function(obj) {
//      return toString.call(obj) == '[object Function]';
//  }

 var isType = function(type) {
     return function(obj) {
         return toString.call(obj) == '[object ' + type + ']'
     }
 }

 var isString = isType('String');
 var isFunction = isType('Function');

 var a = 'hello';
 console.log(isString(a));
 console.log(isFunction(isString));