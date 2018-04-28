// node中的继承与常见的基于类的不同，JavaScript的面向对象特性是基于原型的。
// JavaScript没有提供对象继承的语言级别特性，而是通过原型复制来实现的。

var util = require('util')

function Base(){
  this.name = 'base';
  this.base = 'none';
  this.sayHello = function(){
    console.log('hello' + this.name);
  };
}

Base.prototype.showName = function(){
  console.log(this.name);
};

function Sub(){
  this.name = 'Sub'
}
util.inherits(Sub, Base);
var objBase = new Base();
objBase.showName();
objBase.sayHello();
console.log(objBase);
var objSub = new Sub();
objSub.showName();
console.log(objSub);
