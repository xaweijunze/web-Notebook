### call

> call、apply、bind都是改变this指向的方法

##### fn.call

> 当前实例(函数fn)通过原型链的查找机制，找到function.prototype上的call方法，function call(){[native code]}

##### fn.call()

> 把找到的call方法执行
>
> 当call方法执行的时候，内部处理了一些事情
>
> ```
> 1.首先把要操作的函数中的this关键字变为call方法第一个传递的实参
> 2.把call方法第二个及之后的实参获取到
> 3.把要操作的函数执行，并且把第二个以后传递进来的实参传递给函数
> ```

```js
fn.call([this],[param]...)
```

##### call中的细节

###### 1.非严格模式

> 如果不传参数，或者第一个参数是`null`或`nudefined`，`this`都指向`window`

```js
let fn = function(a,b){
        console.log(this,a,b);
    }
let obj = {name:"obj"};
fn.call(obj,1,2);    // this:obj a:1 b:2
fn.call(1,2);        // this:1 a:2  b:undefined
fn.call();    // this:window a:undefined b:undefined
fn.call(null);// this=window a=undefined b=undefined
fn.call(undefined);//this=window a=undefined b=undefined
```

###### 2.严格模式

> 第一个参数是谁，this就指向谁，包括null和undefined，如果不传参数this就是undefined

```js
"use strict"
    let fn = function(a,b){
        console.log(this,a,b);
    }
let obj = {name:"obj"};
fn.call(obj,1,2); // this:obj a:1 b:2
fn.call(1,2);     // this:1 a:2 b=undefined
fn.call(); // this:undefined  a:undefined  b:undefined
fn.call(null); // this:null a:undefined  b:undefined
fn.call(undefined); // this:undefined  a:undefined  b:undefined

```

### apply

- apply：和call基本上一致，唯一区别在于传参方式

> apply把需要传递给fn的参数放到一个数组（或者类数组）中传递进去，虽然写的是一个数组，但是也相当于给fn一个个的传递

```js
fn.call(obj, 1, 2);
fn.apply(obj, [1, 2]);
```

### bind

- bind：语法和call一模一样，区别在于立即执行还是等待执行，bind不兼容IE6~8

```javascript
fn.call(obj, 1, 2); // 改变fn中的this，并且把fn立即执行
fn.bind(obj, 1, 2); // 改变fn中的this，fn并不执行
```

> this改变为obj了，但是绑定的时候立即执行，当触发点击事件的时候执行的是fn的返回值undefined

```javascript
document.onclick = fn.call(obj);
```

> bind会把fn中的this预处理为obj，此时fn没有执行，当点击的时候才会把fn执行

```javascript
document.onclick = fn.bind(obj);
```