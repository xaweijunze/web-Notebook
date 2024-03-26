#### 1. 对象(数组)的深克隆和浅克隆

```javascript
let obj = {

    a: 100,
    b: [10, 20, 30],
    c: {
        x: 10
    },
    d: /^\d+$/
};

let arr = [10, [100, 200], {
    x: 10,
    y: 20
}];

//=>深克隆1，存在问题
let obj2 = JSON.parse(JSON.stringify(obj)); 
//=>弊端?:对象属性的值为函数，日期对象和正则表达式的时候会出现问题。

//=>深克隆2
function deepClone(obj) {
			//=>过滤特殊情况
			if (obj === null) return null;
			if (typeof obj !== "object") return obj;
			if (obj instanceof RegExp) {//检测是否为正则
				return new RegExp(obj);
			}
			if (obj instanceof Date) {
				return new Date(obj);
			}
			//=>不直接创建空对象目的：克隆的结果和之前保持相同的所属类
			let newObj = new obj.constructor;
			for (let key in obj) {
				if (obj.hasOwnProperty(key)) {
					newObj[key] = deepClone(obj[key]);
				}
			}
			return newObj;
		}
```

#### 2. BAT笔试题中几道关于堆栈内存和闭包作用域的题

```javascript
//example 1
let a={}, b='0', c=0;  
a[b]='百度';
a[c]='谷歌';  
console.log(a[b]);
// 对象内的属性名不可以重复，数值属性名===字符串属性名
// 对象和数组的区别
//example 2
let a={}, 
    b=Symbol('1'),
    c=Symbol('1');  
a[b]='百度';
a[c]='谷歌';
console.log(a[b]);
// symbol创建唯一值，即是参数相同也是唯一的
//自己实现一个symbol
---------------------
//example 3
let a={}, b={n:'1'}, c={m:'2'};  
a[b]='百度';
a[c]='谷歌';
console.log(a[b]);
// 对象作为属性名，会调用 toString()方法
// 转换为字符串"[object Object]"
//Object.prototype.toString /valueOf
```

```javascript
//闭包
//立即执行的自执行函数
var test = (function(i){
    return function(){
        alert(i*=2);
    }
})(2);
//"4"
test(5);
```

```Javascript
//闭包操作
//重新赋值A的值
//保留A(1)执行时候的上下文，因为他执行的时候
//重写了全局之下的A，A(1)内的部分代码被外部变量占用
//因此A(1)的上下文ESstack（执行栈）形成了闭包
//不会被销毁
var a=0,
    b=0;
function A(a){
    A=function(b){
        alert(a+b++);
    };
    alert(a++);
}
A(1);
A(2);
// "1" "4"
```

#### 3.关于面向对象面试题

https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

```javascript

//变量提升
//所有的声明都会提升到作用域的最顶上去。
//同一个变量只会声明一次，其他的会被忽略掉或者覆盖掉。
//函数声明的优先级高于变量声明的优先级，并且函数声明和函数定义的部分一起被提升。
//语句优先级
function Foo() {
    getName = function () {
        console.log(1);
    };
    return this;
}
Foo.getName = function () {
    console.log(2);
};
Foo.prototype.getName = function () {
    console.log(3);
};
var getName = function () {
    console.log(4);
};
function getName() {
    console.log(5);
}
Foo.getName();
getName();
Foo().getName();
getName();
new Foo.getName();
new Foo().getName();
new new Foo().getName();
```

#### 4.一道面试题让你彻底掌握JS中的EventLoop（事件循环）

```javascript
//浏览器是多线程的，但是js是单线程的
//浏览器只给了js一个线程来渲染
//先执行微任务，在执行宏任务
//拓展2
async function async1() {
    console.log('async1 start');
    await async2();
    console.log('async1 end');
}
async function async2() {
    console.log('async2');
}
console.log('script start');
setTimeout(function() {
    console.log('setTimeout');
}, 0)
async1();
new Promise(function(resolve) {
    console.log('promise1');
    resolve();
}).then(function() {
    console.log('promise2');
});
console.log('script end');
```

##### 拓展1：宏任务和微任务的区别

|                    | 宏任务（macrotask）                                          | 微任务（microtask）                                          |
| ------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 谁发起的           | 宿主（Node、浏览器）                                         | JS引擎                                                       |
| 具体事件           | 1. script (可以理解为外层同步代码) 2. setTimeout/setInterval 3. UI rendering/UI事件 4. postMessage，MessageChannel 5. setImmediate，I/O（Node.js） | 1. Promise 2. MutaionObserver 3. Object.observe（已废弃；`Proxy` 对象替代） 4. process.nextTick（Node.js） |
| 谁先运行           | 后运行                                                       | 先运行                                                       |
| 会触发新一轮Tick吗 | 会                                                           | 不会                                                         |





##### 拓展 2：`async`和`await`是如何处理异步任务的？

简单说，`async`是通过`Promise`包装异步任务。

比如有如下代码：

```jsx
async function async1() {
  await async2()
  console.log('async1 end')
}
async function async2() {
  console.log('async2 end')
}
async1()
```

改为ES5的写法：

```jsx
new Promise((resolve, reject) => {
  // console.log('async2 end')
  async2() 
  ...
}).then(() => {
 // 执行async1()函数await之后的语句
  console.log('async1 end')
})
```



