(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
//app.js
let module1 = require('./module1');
let module2 = require('./module2');
let module3 = require('./module3');

module1.foo();
module2();
module3.foo();
module3.bar();
//module1
//module2
//module3
//module3
},{"./module1":2,"./module2":3,"./module3":4}],2:[function(require,module,exports){
module.exports = {
    foo(){
        console.log("foo: module1");
        
    }
}
},{}],3:[function(require,module,exports){
//module2.js
//暴露对象赋值一个方法
module.exports = function (){
	console.log('module2');
}
},{}],4:[function(require,module,exports){
//module3.js
//给暴露对象添加属性
exports.foo = function() {
    console.log('module3');
 }
 exports.bar = function() {
    console.log('module3');
 }
},{}]},{},[1]);
