## jQuery

- 1.你觉得jQuery原码有哪些写得好的地方
- 2.jQuery的源码看过吗，能不能简单概括一下它的实现原理
- 3.jQuery.fn的init方法返回的this指的是什么对象，为什么要返回this
- 4.jQuery中如何将数组转化成json字符串，然后再转化回来
- 5.jQuery的属性拷贝extend的实现原理是什么，如何实现深拷贝
- 6.jQuery.extend 与 jQuery.fn.extend 的区别？
- 7.jQuery的队列是如何实现的？队列可以用到哪些地方
- 8.jQuery中的bind() live() delegate() on() 的区别
- 9.jQuery一个对象可以同时绑定多个事件，这是如何实现的
- 10.是否知道自定义事件，jQuery里的fire函数是什么意思，什么时候用
- 11.针对jQuery的优化方法
- 12.jQuery与jQuery UI jQuery Mobile的区别
- 13.jQuery使用场景

### 1.你觉得jQuery原码有哪些写得好的地方

```
jquery源码封装在一个匿名函数的自执行环境中，有助于防止变量的全局污染，然后通过传入window对象参数，可以使window对象作为局部变量使用，好处是当jquery中访问window对象的时候，就不用将作用域链退回到顶层作用域了，从而可以更快的访问window对象。同样，传入undefined参数，可以缩短查找undefined时的作用域链
 (function( window, undefined ) {

         //用一个函数域包起来，就是所谓的沙箱

         //在这里边var定义的变量，属于这个函数域内的局部变量，避免污染全局

         //把当前沙箱需要的外部变量通过函数参数引入进来

         //只要保证参数对内提供的接口的一致性，你还可以随意替换传进来的这个参数

        window.jQuery = window.$ = jQuery;

    })( window );
jquery将一些原型属性和方法封装在了jquery.prototype中，为了缩短名称，又赋值给了jquery.fn，这是很形象的写法
有一些数组或对象的方法经常能使用到，jQuery将其保存为局部变量以提高访问速度
jquery实现的链式调用可以节约代码，所返回的都是同一个对象，可以提高代码效率
```

### 2.jQuery的源码看过吗，能不能简单概括一下它的实现原理

```
(function(window, undefined) {})(window);

jQuery 利用 JS 函数作用域的特性，采用立即调用表达式包裹了自身，解决命名空间和变量污染问题

window.jQuery = window.$ = jQuery;

在闭包当中将 jQuery 和 $ 绑定到 window 上，从而将 jQuery 和 $ 暴露为全局变量
```

### 3.jQuery.fn的init方法返回的this指的是什么对象，为什么要返回this

```
jQuery.fn 的 init 方法 返回的 this 就是 jQuery 对象
用户使用 jQuery() 或 $() 即可初始化 jQuery 对象，不需要动态的去调用 init 方法
```

### 4.jQuery中如何将数组转化成json字符串，然后再转化回来

```
现代浏览器中提供了JSON.stringify()方法 将数组，对象转成json。
JSON.stringify 把一个对象转换成json字符串， 
JSON.parse 把一个json字符串解析成对象。
不支持的可以引入json2.js


// 通过原生 JSON.stringify/JSON.parse 扩展 jQuery 实现
 $.array2json = function(array) {
    return JSON.stringify(array);
 }

 $.json2array = function(array) {
    // $.parseJSON(array); // 3.0 开始，已过时
    return JSON.parse(array);
 }

 // 调用
 var json = $.array2json(['a', 'b', 'c']);
 var array = $.json2array(json);
```

### 5.jQuery的属性拷贝extend的实现原理是什么，如何实现深拷贝

```
浅拷贝（只复制一份原始对象的引用）
var newObject = $.extend({}, oldObject);

深拷贝（对原始对象属性所引用的对象进行进行递归拷贝）
var newObject = $.extend(true, {}, oldObject);
```

### 6.jQuery.extend 与 jQuery.fn.extend 的区别？

```js
$.fn.extend() 和 $.extend() 是 jQuery 为扩展插件提拱了两个方法
$.extend(object); // 为jQuery添加“静态方法”（工具方法）

$.extend({
　　min: function(a, b) { return a < b ? a : b; },
　　max: function(a, b) { return a > b ? a : b; }
});
$.min(2,3); //  2
$.max(4,5); //  5
$.extend([true,] targetObject, object1[, object2]); // 对target对象进行扩展
var settings = {validate:false, limit:5};
var options = {validate:true, name:"bar"};
$.extend(settings, options);  // 注意：不支持第一个参数传 false
// settings == {validate:true, limit:5, name:"bar"}
$.fn.extend(json); // 为jQuery添加“成员函数”（实例方法）

$.fn.extend({
   alertValue: function() {
      $(this).click(function(){
        alert($(this).val());
      });
   }
});

$("#email").alertValue();
```

### 7.jQuery的队列是如何实现的？队列可以用到哪些地方

```js
jQuery 核心中有一组队列控制方法，由 queue()/dequeue()/clearQueue() 三个方法组成。
主要应用于 animate()，ajax，其他要按时间顺序执行的事件中
var func1 = function(){alert('事件1');}
var func2 = function(){alert('事件2');}
var func3 = function(){alert('事件3');}
var func4 = function(){alert('事件4');}

// 入栈队列事件
$('#box').queue("queue1", func1);  // push func1 to queue1
$('#box').queue("queue1", func2);  // push func2 to queue1

// 替换队列事件
$('#box').queue("queue1", []);  // delete queue1 with empty array
$('#box').queue("queue1", [func3, func4]);  // replace queue1

// 获取队列事件（返回一个函数数组）
$('#box').queue("queue1");  // [func3(), func4()]

// 出栈队列事件并执行
$('#box').dequeue("queue1"); // return func3 and do func3
$('#box').dequeue("queue1"); // return func4 and do func4

// 清空整个队列
$('#box').clearQueue("queue1"); // delete queue1 with clearQueue
```

### 8.jQuery中的bind() live() delegate() on() 的区别

```
bind 直接绑定在目标元素上
live 通过冒泡传播事件，默认document上，支持动态数据
delegate 更精确的小范围使用事件代理，性能优于 live
on 是最新的1.9版本整合了之前的三种方式的新事件绑定机制
```

### 9.jQuery一个对象可以同时绑定多个事件，这是如何实现的

```
 $("#btn").on("mouseover mouseout", func);

  $("#btn").on({
      mouseover: func1,
      mouseout: func2,
      click: func3
  });
```

### 10.是否知道自定义事件，jQuery里的fire函数是什么意思，什么时候用

```
事件即“发布/订阅”模式，自定义事件即“消息发布”，事件的监听即“事件订阅”
JS 原生支持自定义事件，示例：
  document.createEvent(type); // 创建事件
  event.initEvent(eventType, canBubble, prevent); // 初始化事件
  target.addEventListener('dataavailable', handler, false); // 监听事件
  target.dispatchEvent(e);  // 触发事件
  
jQuery 里的 fire 函数用于调用 jQuery 自定义事件列表中的事件
```

### 11.针对jQuery的优化方法

```
缓存频繁操作DOM对象
尽量使用id选择器代替class选择器
总是从#id选择器来继承
尽量使用链式操作
使用时间委托 on绑定事件
采用jQuery的内部函数data()来存储数据
使用最新版本的 jQuery
```

### 12.jQuery与jQuery UI jQuery Mobile的区别

```
jQuery 是 JS 库，兼容各种PC浏览器，主要用作更方便地处理 DOM、事件、动画、AJAX

jQuery UI 是在jQuery的基础上，利用jQuery的扩展性，设计的插件。 提供了一些常用的界面元素，诸如对话框、拖动行为、改变大小行为等等

jQuery Mobile 以 jQuery 为基础，用于创建“移动Web应用”的框架
```

### 13.jQuery使用场景

```
jQuery 主要目标是PC的网页中，兼容全部主流浏览器。在移动设备方面，单独推出 `jQuery Mobile`
```



