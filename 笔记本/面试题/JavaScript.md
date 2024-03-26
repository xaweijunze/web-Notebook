\1. 介绍js的数据类型。

2.介绍js有哪些内置对象？

3.JavaScript原型，原型链 ? 有什么特点？

4.JavaScript有几种类型的值？你能画一下他们的内存图吗？

5.Javascript如何实现继承？

6.javascript创建对象的几种方式？

7.说说你对作用域链的理解

8.谈谈你对this对象的理解

9.eval是做什么的

10.什么是window对象，什么是document对象

11.null undefined 的区别

12.map与forEach的区别

13.[“1”, “2”, “3”].map(parseInt) 答案是多少？

14.事件模型

15.事件委托机制

16.什么是闭包

17.说说你对闭包的理解

18.JavaScript代码中use strict 是什么意思，使用它区别是什么

19.new操作符具体做了什么

20.JavaScript中有一个函数，执行对象查找时，永远不会去查找原型，这个函数是什么

21.谈谈你对json 的理解

22.js 延迟加载的方式有哪些

23.ajax是什么如何创建一个ajax

24.ajax解决浏览器缓存问题

25.同步和异步的区别

26.页面编码和被请求的资源编码如果不一致如何处理

27.谈谈你对ES6的理解

28.ES6怎么写class 为什么会出现class 这种东西

29.异步加载js 的方法

30.document.write 和 innerHTML 的区别

31.dom操作--怎样添加、移除、移动、复制、创建和查找节点

\32. ...call()和.apply()的区别

33.谈一谈let与var的区别？

34.谈一谈箭头函数与普通函数的区别？

35.js数组和对象的遍历方式，以及他们之间的比较



### 1. 介绍js的数据类型。

```javascript
数据类型可以分为基本数据类型和引用数据类型

基本数据类型 ：String、Number、Boolean 、Null、Undefined、Symbol、BigInt ;

引用数据类型：Object;

有些小伙伴喜欢把引用数据类型这块分为 Object 和 Funtion，这也是可以的，(主要是 typeof可以检测function,还有就是Function这个类比较特殊)

其中 Symbol、BigInt 是新增的数据类型
```

### 2.介绍js有哪些内置对象？

 Object 是 JavaScript 中所有对象的父对象

 数据封装类对象：`Object、Array、Boolean、Number 和 String`
 其他对象：`Function、Arguments、Math、Date、RegExp、Error`

### 3.JavaScript原型，原型链 ? 有什么特点？

所有的 JavaScript 对象都会从一个 显示原型：prototype（原型对象）中继承属性和方法。

使用对象的构造器（constructor）：

```javascript
function Person(first, last, age, eyecolor) {
   this.firstName = first;  
   this.lastName = last;  
   this.age = age;  
   this.eyeColor = eyecolor;
}
var myFather = new Person("John", "Doe", 50, "blue");
var myMother = new Person("Sally", "Rally", 48, "green");
```

在一个已存在的对象构造器中是不能添加新的属性的：

```javascript
Person.nationality = "English";//不可行
```

要添加一个新的属性需要在在构造器函数中添加：

```javascript
function Person(first, last, age, eyecolor) {
   this.firstName = first;  
   this.lastName = last;  
   this.age = age;  
   this.eyeColor = eyecolor;  
   this.nationality = "English";
}
```

####  原型链

![image-20210524104829222](JavaScript.assets/image-20210524104829222.png)

![image-20210524104804360](JavaScript.assets/image-20210524104804360.png)

![image-20210524104951142](JavaScript.assets/image-20210524104951142.png)

![image-20210524105050775](JavaScript.assets/image-20210524105050775.png)

![image-20210524105217662](JavaScript.assets/image-20210524105217662.png)

![image-20210524105306897](JavaScript.assets/image-20210524105306897.png)

![image-20210524105344747](JavaScript.assets/image-20210524105344747.png)



![image-20210521083621499](JavaScript.assets/image-20210521083621499.png)

JavaScript 对象有一个指向一个原型对象的链。当试图访问一个对象的属性时，它不仅仅在该对象上搜寻，还会搜寻该对象的原型，以及该对象的原型的原型，依次层层向上搜索，直到找到一个名字匹配的属性或到达原型链的末尾。

隐式原型：**`__proto__`** 属性，它是**对象所独有的**，可以看到`__proto__`属性都是由**一个对象指向一个对象**，即指向它们的原型对象（也可以理解为父对象）。直到原型链顶端**null**。

通过`__proto__`属性来连接对象直到`null`的一条链即为我们所谓的**原型链**。

#### 添加属性和方法

有的时候我们想要在所有已经存在的对象添加新的属性或方法。

另外，有时候我们想要在对象的构造函数中添加属性或方法。

使用 prototype 属性就可以给对象的构造函数添加新的属性：

```javascript
function Person(first, last, age, eyecolor) {
   this.firstName = first;
   this.lastName = last;
   this.age = age;
   this.eyeColor = eyecolor;
}
Person.prototype.nationality = "English";
```

当然我们也可以使用 prototype 属性就可以给对象的构造函数添加新的方法：

```javascript
function Person(first, last, age, eyecolor) {
   this.firstName = first;
   this.lastName = last;
   this.age = age;
   this.eyeColor = eyecolor;
}
Person.prototype.name = function() { 
   return this.firstName + " " + this.lastName;
};
```

#### constructor

`constructor`属性也是**对象才拥有的**，它是从**一个对象指向一个函数**，含义就是**指向该对象的构造函数**

#### 注意：

利用prototype重写构造函数后，`constructor`会指向你重新写的这个构造函数对象。

```javascript
function Person(first, last, age, eyecolor) {
   this.firstName = first;
   this.lastName = last;
   this.age = age;
   this.eyeColor = eyecolor;
}
Person.prototype = {
   getName: function() { 
   return this.firstName + " " + this.lastName;
	};
}
   
```

就像是这个实例，重写后会指向：

```javascript
 function() { 
   return this.firstName + " " + this.lastName;
};
```

这个构造函数对象。

所以在重写prototype之后，要将constructor重新写回原构造对象

```javascript
 Person.prototype = {
    constructor :Person;
   getName: function() { 
   return this.firstName + " " + this.lastName;
	};
}
```



### 

### 4.JavaScript有几种类型的值？你能画一下他们的内存图吗？

 栈：原始数据类型（Undefined，Null，Boolean，Number、String）
 		堆：引用数据类型（对象、数组和函数）

 两种类型的区别是：存储位置不同；
 原始数据类型直接存储在栈(stack)中的简单数据段，占据空间小、大小固定，属于被频繁使用数据，所以放入栈中存储；
 引用数据类型存储在堆(heap)中的对象,占据空间大、大小不固定。如果存储在栈中，将会影响程序运行的性能；引用数据类型在栈中存储了指针，该指针指向堆中该实体的起始地址。当解释器寻找引用值时，会首先检索其在栈中的地址，取得地址后从堆中获得实体

### 5.Javascript如何实现继承？

 1、构造继承
		2、原型继承
		3、实例继承
		4、拷贝继承

 原型prototype机制或apply和call方法去实现较简单，建议使用构造函数与原型混合方式。   

```JavaScript
function Parent(){
	this.name = 'wang';
}

function Child(){
	this.age = 28;
}
Child.prototype = new Parent();//继承了Parent，通过原型

var demo = new Child();
alert(demo.age);
alert(demo.name);//得到被继承的属性
```

### 6.javascript创建对象的几种方式？

javascript创建对象简单的说,无非就是使用内置对象或各种自定义对象，当然还可以用JSON；但写法有很多种，也能混合使用。

```js
javascript创建对象简单的说,无非就是使用内置对象或各种自定义对象，当然还可以用JSON；但写法有很多种，也能混合使用。


 1、对象字面量的方式

 	person={firstname:"Mark",lastname:"Yun",age:25,eyecolor:"black"};

 2、用function来模拟无参的构造函数

 	function Person(){}
 	var person=new Person();//定义一个function，如果使用new"实例化",该function可以看作是一个Class
 	person.name="Mark";
 	person.age="25";
 	person.work=function(){
 	alert(person.name+" hello...");
 	}
 	person.work();

 3、用function来模拟参构造函数来实现（用this关键字定义构造的上下文属性）

 	function Pet(name,age,hobby){
 	   this.name=name;//this作用域：当前对象
 	   this.age=age;
 	   this.hobby=hobby;
 	   this.eat=function(){
 	      alert("我叫"+this.name+",我喜欢"+this.hobby+",是个程序员");
 	   }
 	}
 	var maidou =new Pet("麦兜",25,"coding");//实例化、创建对象
 	maidou.eat();//调用eat方法


 4、用工厂方式来创建（内置对象）

 	 var wcDog =new Object();
 	 wcDog.name="旺财";
 	 wcDog.age=3;
 	 wcDog.work=function(){
 	   alert("我是"+wcDog.name+",汪汪汪......");
 	 }
 	 wcDog.work();


 5、用原型方式来创建

 	function Dog(){

 	 }
 	 Dog.prototype.name="旺财";
 	 Dog.prototype.eat=function(){
 	 alert(this.name+"是个吃货");
 	 }
 	 var wangcai =new Dog();
 	 wangcai.eat();


 5、用混合方式来创建

 	function Car(name,price){
 	  this.name=name;
 	  this.price=price;
 	}
 	 Car.prototype.sell=function(){
 	   alert("我是"+this.name+"，我现在卖"+this.price+"万元");
 	  }
 	var camry =new Car("凯美瑞",27);
 	camry.sell();
```

### 7.说说你对作用域链的理解

```
全局函数无法查看局部函数的内部细节，但局部函数可以查看其上层的函数细节，直至全局细节。
 当需要从局部函数查找某一属性或方法时，如果当前作用域没有找到，就会上溯到上层作用域查找，直至全局函数，这种组织形式就是作用域链。
 	作用域链的作用是保证执行环境里有权访问的变量和函数是有序的，作用域链的变量只能向上访问，变量访问到window对象即被终止，作用域链向下访问变量是不被允许的
简单的说，作用域就是变量与函数的可访问范围，即作用域控制着变量与函数的可见性和生命周期
```

### 8.谈谈你对this对象的理解

```
this总是指向函数的直接调用者（而非间接调用者）；
如果有new关键字，this指向new出来的那个对象；
在事件中，this指向触发这个事件的对象，特殊的是，IE中的attachEvent中的this总是指向全局对象Window；
```

### 9.eval是做什么的

```
 它的功能是把对应的字符串解析成JS代码并运行；
 应该避免使用eval，不安全，非常耗性能（2次，一次解析成js语句，一次执行）。
 由JSON字符串转换为JSON对象的时候可以用eval，var obj =eval('('+ str +')');
```

### 10.什么是window对象，什么是document对象

```
window对象是指浏览器打开的窗口。
 document对象是Documentd对象（HTML 文档对象）的一个只读引用，window对象的一个属性。
```

### 11.null undefined 的区别

```
 null 		表示一个对象是“没有值”的值，也就是值为“空”；
 undefined 	表示一个变量声明了没有初始化(赋值)；

 undefined不是一个有效的JSON，而null是；
 undefined的类型(typeof)是undefined；
 null的类型(typeof)是object；


 Javascript将未赋值的变量默认值设为undefined；
 Javascript从来不会将变量设为null。它是用来让程序员表明某个用var声明的变量时没有值的。

 typeof undefined
 	//"undefined"
 	undefined :是一个表示"无"的原始值或者说表示"缺少值"，就是此处应该有一个值，但是还没有定义。当尝试读取时会返回 undefined；
 	例如变量被声明了，但没有赋值时，就等于undefined

 typeof null
 	//"object"
 	null : 是一个对象(空对象, 没有任何属性和方法)；
 	例如作为函数的参数，表示该函数的参数不是对象；

 注意：
 	在验证null时，一定要使用　=== ，因为 == 无法分别 null 和　undefined
 	null == undefined // true
 	null === undefined // false
```

### 12.map与forEach的区别

```
`forEach方法`，是最基本的方法，就是遍历与循环，默认有3个传参：分别是遍历的数组内容item、数组索引index、和当前遍历数组Array
`map方法`，基本用法与forEach一致，但是不同的，它会返回一个新的数组，所以在callback需要有return值，如果没有，会返回undefined

```

### 13.[“1”, “2”, “3”].map(parseInt) 答案是多少？

```
parseInt() 函数能解析一个字符串，并返回一个整数，需要两个参数 (val, radix)，
 其中 radix 表示要解析的数字的基数。【该值介于 2 ~ 36 之间，并且字符串中的数字不能大于radix才能正确返回数字结果值】;
 但此处 map 传了 3 个 (element, index, array),我们重写parseInt函数测试一下是否符合上面的规则。

 function parseInt(str, radix) {
     return str+'-'+radix;
 };
 var a=["1", "2", "3"];
 a.map(parseInt);  // ["1-0", "2-1", "3-2"] 不能大于radix

 因为二进制里面，没有数字3,导致出现超范围的radix赋值和不合法的进制解析，才会返回NaN
 所以["1", "2", "3"].map(parseInt) 答案也就是：[1, NaN, NaN]

 详细解析：http://blog.csdn.net/justjavac/article/details/19473199
```

### 14.事件模型

```
W3C中定义事件的发生经历三个阶段：捕获阶段（capturing）、目标阶段（targetin）、冒泡阶段（bubbling）

	冒泡型事件：当你使用事件冒泡时，子级元素先触发，父级元素后触发
	捕获型事件：当你使用事件捕获时，父级元素先触发，子级元素后触发
	DOM事件流：同时支持两种事件模型：捕获型事件和冒泡型事件
	阻止冒泡：在W3c中，使用ev.stopPropagation（）方法；在IE下设置ev.cancelBubble = true
	阻止捕获：阻止事件的默认行为，例如click - <a>后的跳转。在W3c中，使用preventDefault（）方法，在IE下设置window.event.returnValue = false
	function stopBubble(e)
{
    if (e && e.stopPropagation)
        e.stopPropagation()
    else
        window.event.cancelBubble=true
}
```

### 15.事件委托机制

```
`原理`：使用事件委托技术能让你避免对特定的每个节点添加事件监听器；相反，事件监听器是被添加到它们的父元素上，利用冒泡的原理，把事件加到父级上，触发执行效果。
　　优点
  通过上面的介绍，大家应该能够体会到使用事件委托对于web应用程序带来的几个优点：
  1.可以大量节省内存占用，减少事件注册。
  2.可以方便地动态添加和修改元素，不需要因为元素的改动而修改事件绑定。
  3.JavaScript和DOM节点之间的关联变少了，这样也就减少了因循环引用而带来的内存泄漏发生的概率。
  	缺点：
  不是所有的事件都能冒泡的。blur、focus、load和unload不能像其它事件一样冒泡。事实上blur和focus可以用事件捕获而非事件冒泡的方法获得（在IE之外的其它浏览器中）。
  在管理鼠标事件的时候有些需要注意的地方。如果你的代码处理mousemove事件的话你遇上性能瓶颈的风险可就大了，因为mousemove事件触发非常频繁。而mouseout则因为其怪异的表现而变得很难用事件代理来管理.
```

### 16.什么是闭包

```
闭包是指有权访问另一个函数作用域中变量的函数，创建闭包的最常见的方式就是在一个函数内创建另一个函数，通过另一个函数访问这个函数的局部变量,利用闭包可以突破作用链域，将函数内部的变量和方法传递到外部。

 闭包的特性：

 1.函数内再嵌套函数
 2.内部函数可以引用外层的参数和变量
 3.参数和变量不会被垃圾回收机制回收

 //li节点的onclick事件都能正确的弹出当前被点击的li索引
  <ul id="testUL">
     <li> index = 0</li>
     <li> index = 1</li>
     <li> index = 2</li>
     <li> index = 3</li>
 </ul>
 <script type="text/javascript">
   	var nodes = document.getElementsByTagName("li");
 	for(i = 0;i<nodes.length;i+= 1){
 	    nodes[i].onclick = (function(i){
 	              return function() {
 	                 console.log(i);
 	              } //不用闭包的话，值每次都是4
 	            })(i);
 	}
 </script>



 执行say667()后,say667()闭包内部变量会存在,而闭包内部函数的内部变量不会存在
 使得Javascript的垃圾回收机制GC不会收回say667()所占用的资源
 因为say667()的内部函数的执行需要依赖say667()中的变量
 这是对闭包作用的非常直白的描述

   function say667() {
 	// Local variable that ends up within closure
 	var num = 666;
 	var sayAlert = function() {
 		alert(num);
 	}
 	num++;
 	return sayAlert;
 }

  var sayAlert = say667();
  sayAlert()//执行结果应该弹出的667
```

### 17.说说你对闭包的理解

```
使用闭包主要是为了设计私有的方法和变量。闭包的优点是可以避免全局变量的污染，缺点是闭包会常驻内存，会增大内存使用量，使用不当很容易造成内存泄露。在js中，函数即闭包，只有函数才会产生作用域的概念

闭包的最大用处有两个，一个是可以读取函数内部的变量，另一个就是让这些变量始终保持在内存中

闭包的另一个用处，是封装对象的私有属性和私有方法

好处：能够实现封装和缓存等；

坏处：就是消耗内存、不正当使用会造成内存溢出的问题

使用闭包的注意点

由于闭包会使得函数中的变量都被保存在内存中，内存消耗很大，所以不能滥用闭包，否则会造成网页的性能问题，在IE中可能导致内存泄露
解决方法是，在退出函数之前，将不使用的局部变量全部删除
```

### 18.JavaScript代码中use strict 是什么意思，使用它区别是什么

```
use strict是一种ECMAscript 5 添加的（严格）运行模式,这种模式使得 Javascript 在更严格的条件下运行,使JS编码更加规范化的模式,消除Javascript语法的一些不合理、不严谨之处，减少一些怪异行为。
 默认支持的糟糕特性都会被禁用，比如不能用with，也不能在意外的情况下给全局变量赋值;
 全局变量的显示声明,函数必须声明在顶层，不允许在非函数代码块内声明数,arguments.callee也不允许使用；
 消除代码运行的一些不安全之处，保证代码运行的安全,限制函数中的arguments修改，严格模式下的eval函数的行为和非严格模式的也不相同;

 提高编译器效率，增加运行速度；
 为未来新版本的Javascript标准化做铺垫。
```

### 19.new操作符具体做了什么

```
	 1、创建一个空对象，并且 this 变量引用该对象，同时还继承了该函数的原型。
   	2、属性和方法被加入到 this 引用的对象中。
 	 3、新创建的对象由 this 所引用，并且最后隐式的返回 this 。

 var obj  = {};
 obj.__proto__ = Base.prototype;
 Base.call(obj);
```

### 20.JavaScript中有一个函数，执行对象查找时，永远不会去查找原型，这个函数是什么

```
hasOwnProperty

 javaScript中hasOwnProperty函数方法是返回一个布尔值，指出一个对象是否具有指定名称的属性。此方法无法检查该对象的原型链中是否具有该属性；该属性必须是对象本身的一个成员。
 使用方法：
 object.hasOwnProperty(proName)
 其中参数object是必选项。一个对象的实例。
 proName是必选项。一个属性名称的字符串值。

 如果 object 具有指定名称的属性，那么JavaScript中hasOwnProperty函数方法返回 true，反之则返回 false。
```

### 21.谈谈你对json 的理解

```
JSON(JavaScript Object Notation) 是一种轻量级的数据交换格式。
 它是基于JavaScript的一个子集。数据格式简单, 易于读写, 占用带宽小
 如：{"age":"12", "name":"back"}

 JSON字符串转换为JSON对象:
 var obj =eval('('+ str +')');
 var obj = str.parseJSON();
 var obj = JSON.parse(str);

 JSON对象转换为JSON字符串：
 var last=obj.toJSONString();
 var last=JSON.stringify(obj);
```

### 22.js 延迟加载的方式有哪些

```
defer和async、动态创建DOM方式（用得最多）、按需异步载入js
```

### 23.ajax是什么如何创建一个ajax

```
ajax的全称：Asynchronous Javascript And XML。
 异步传输+js+xml。
 所谓异步，在这里简单地解释就是：向服务器发送请求的时候，我们不必等待结果，而是可以同时做其他的事情，等到有了结果它自己会根据设定进行后续操作，与此同时，页面是不会发生整页刷新的，提高了用户体验。

 (1)创建XMLHttpRequest对象,也就是创建一个异步调用对象
 (2)创建一个新的HTTP请求,并指定该HTTP请求的方法、URL及验证信息
 (3)设置响应HTTP请求状态变化的函数
 (4)发送HTTP请求
 (5)获取异步调用返回的数据
 (6)使用JavaScript和DOM实现局部刷新

Ajax的原理简单来说是在用户和服务器之间加了一个中间层(AJAX引擎)，通过XmlHttpRequest对象来向服务器发异步请求，从服务器获得数据，然后用javascript来操作DOM而更新页面。使用户操作与服务器响应异步化。这其中最关键的一步就是从服务器获得请求数据
Ajax的过程只涉及JavaScript、XMLHttpRequest和DOM。XMLHttpRequest是ajax的核心机制
 // 1. 创建连接
    var xhr = null;
    xhr = new XMLHttpRequest()
    // 2. 连接服务器
    xhr.open('get', url, true)
    // 3. 发送请求
    xhr.send(null);
    // 4. 接受请求
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4){
            if(xhr.status == 200){
                success(xhr.responseText);
            } else { // fail
                fail && fail(xhr.status);
            }
        }
    }
```

### 24.ajax解决浏览器缓存问题

```
IE浏览器缓存的内容分析：
　　IE浏览器会缓存网页中的GET和XHR的内容，并且在IE浏览器中如果请求方式是get方式的话，IE浏览器会进行识别，如果该get请求的url是第一次请求的话，会请求项目的后台，从数据库中获取数据，如果该get请求的url不是第一次请求的话，那么该url就不会请求项目后台，IE浏览器会直接从缓存中拿到上次该url获取的数据，无论是什么插件的get方式请求，IE浏览器都会这样进行处理的；　　

　　这是一个非常严重的问题

IE浏览器中各种插件或请求获取的数据与数据库的数据不同步的原因：
　　各种插件或请求如果是利用get方式请求的时候，在IE浏览器中都会按照IE浏览器缓存机制进行处理的，因此会产生网页中的数据与数据库的数据不同步的现象；

方法一：提交方式是get方式，但是在传递的参数中添加一个随机数或当前时间戳的参数，从而保证每次url请求唯一性，从而解决在IE浏览器中从数据库中获取数据；

方法二：提交方式修改为post方法，这样就不会出现这样的问题了；
1、在ajax发送请求前加上 anyAjaxObj.setRequestHeader("If-Modified-Since","0")。
  2、在ajax发送请求前加上 anyAjaxObj.setRequestHeader("Cache-Control","no-cache")。
  3、在URL后面加上一个随机数： "fresh=" + Math.random();。
  4、在URL后面加上时间戳："nowtime=" + new Date().getTime();。 
  5、如果是使用jQuery，直接这样就可以了 $.ajaxSetup({cache:false})。这样页面的所有ajax都会执行这条语句就是不需要保存缓存记录。
```

### 25.同步和异步的区别

```
同步的概念应该是来自于OS中关于同步的概念:不同进程为协同完成某项工作而在先后次序上调整(通过阻塞,唤醒等方式).同步强调的是顺序性.谁先谁后.异步则不存在这种顺序性.

同步：浏览器访问服务器请求，用户看得到页面刷新，重新发请求,等请求完，页面刷新，新内容出现，用户看到新内容,进行下一步操作。

异步：浏览器访问服务器请求，用户正常操作，浏览器后端进行请求。等请求完，页面不刷新，新内容也会出现，用户看到新内容。
```

### 26.页面编码和被请求的资源编码如果不一致如何处理

```
URL是Uniform Resource Locator的缩写，译为"统一资源定位符"。URL是一种URI，它标识一个互联网[资源](https://baike.baidu.com/item/%E8%B5%84%E6%BA%90)，并指定对其进行操作或获取该资源的方法。可能通过对主要访问手段的描述，也可能通过网络“位置”进行标识。例如，http://www.wikipedia.org/这个URL，标识一个特定资源（[首页](https://baike.baidu.com/item/%E9%A6%96%E9%A1%B5)）并表示该资源的某种形式（例如以编码字符表示的，首页的[HTML](https://baike.baidu.com/item/HTML)代码）是可以通过[HTTP](https://baike.baidu.com/item/HTTP)协议从www.wikipedia.org这个网络主机获得的。主要用在各种WWW客户程序和[服务器](https://baike.baidu.com/item/%E6%9C%8D%E5%8A%A1%E5%99%A8)程序上，特别是著名的Mosaic。采用URL可以用一种统一的格式来描述各种信息资源，包括文件、服务器的地址和目录等。

目前最大的缺点是当信息资源的存放地点发生变化时，必须对URL作相应的改变。因此人们正在研究新的信息资源表示方法，例如：URI(Universal Resource Identifier)即"通用资源标识" <sup>[2]</sup>  、URN（Uniform Resource Name）即"统一资源名"和URC（Uniform Resource Citation）即"统一资源引用符"等。

URI还在进一步的研究当中。研究的方向就是弥补URL的缺点。

对于 ajax 请求传递的参数，如果是 get 请求方式，参数如果传递中文，在有些浏览器 会乱码，不同的浏览器对参数编码的处理方式不同，所以对于 get 请求的参数需要使用 encodeURIComponent 函数对参数进行编码处理，后台开发语言都有相应的解码 api。对于 post 请求不需要 进行编码
```

### 27.谈谈你对ES6的理解

```
新增模板字符串（为JavaScript提供了简单的字符串插值功能）
箭头函数
for-of（用来遍历数据—例如数组中的值。）
arguments对象可被不定参数和默认参数完美代替。
ES6将promise对象纳入规范，提供了原生的Promise对象。
增加了let和const命令，用来声明变量。
增加了块级作用域。
let命令实际上就增加了块级作用域。
还有就是引入module模块的概念
```

### 28.ES6怎么写class 为什么会出现class 这种东西

```
      class Ponit{
     	constructor(x, y){
     		this.x = x;
     		this.y = y;
     	}

     	toString(){
     		return '(' + this.x +','+ this.y + ')';
     	}
     }
  JS原型继承方法写法跟传统的面向对象语言（比如 C++ 和 Java）差异很大，很容易让新学习这门语言的程序员感到困惑。ES6提供了更接近传统语言的写法，引入了Class(类)；作为对象的模板。通过class关键字， 可以定义类。class其实只是一个语法糖，它的绝大部分功能ES5 都可以做到，新的class写法只是让对象原型的写法更加清晰、更像面向对象编程的语法而已。
```

### 29.异步加载js 的方法

```
   (1) defer，只支持IE

   (2) async：

   (3) 创建script，插入到DOM中，加载完毕后callBack
   
   defer并行加载js文件，会按照页面上script标签的顺序执行
async并行加载js文件，下载完成立即执行，不会按照页面上script标签的顺序执行
```

### 30.document.write 和 innerHTML 的区别

```
document.write只能重绘整个页面

innerHTML可以重绘页面的一部分
```

### 31.dom操作--怎样添加、移除、移动、复制、创建和查找节点

```
##### 元素节点的增删改查方法

1. 创建节点 cerateElement();

2. 插入节点 appendchild()   

   insertBefore(newNode,node) 第一个参数是新插入的节点，第二个参数是参考的节点

3. 删除节点 removeChild()

4. 替换节点 replaceChild(newNode,node)

5. 创建文本节点 createTextNode()

node.innerHTML = '';将引号内的代码加入到节点内，可以渲染标签

node.innerText = '';  将引号内的文本加入到节点内，以文本的形式添加
    getElementById()    //通过元素Id，唯一性
```

### 32. ...call()和.apply()的区别

```
apply：应用某一对象的一个方法，用另一个对象替换当前对象。例如：B.apply(A, arguments);即A对象应用B对 象的方法。 
call： 调用一个对象的一个方法，以另一个对象替换当前对象。例如：B.call(A, args1,args2);即A对象 调用B对象的方法。

apply：最多只能有两个参数——新this对象和一个数组argArray。
call：它可以接受多个参数，第一个参数与apply一样，后面则是一串参数列表。

例子中用 add 来替换 sub，add.call(sub,3,1) == add(3,1) ，所以运行结果为：alert(4);

注意：js 中的函数其实是对象，函数名是对 Function 对象的引用。

 function add(a  ,b)
 {
     alert(a+b);
 }

 function sub(a,b)
 {
     alert(a-b);
 }

 add.call(sub,3,1);
```

### 33.谈一谈let与var的区别？

```javascript
let命令不存在变量提升，如果在let前使用，会导致报错
如果块区中存在let和const命令，就会形成封闭作用域
不允许重复声明，因此，不能在函数内部重新声明参数
```

### 34.谈一谈箭头函数与普通函数的区别？

```
函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象
不可以当作构造函数，也就是说，不可以使用new命令，否则会抛出一个错误
不可以使用arguments对象，该对象在函数体内不存在。如果要用，可以用Rest参数代替
不可以使用yield命令，因此箭头函数不能用作Generator函数
```

### 35.js数组和对象的遍历方式，以及他们之间的比较

```
for in循环

for循环

forEach

这里的 forEach回调中两个参数分别为 value，index
forEach 无法遍历对象
IE不支持该方法；Firefox 和 chrome 支持
forEach 无法使用 break，continue 跳出循环，且使用 return 是跳过本次循环
这两种方法应该非常常见且使用很频繁。但实际上，这两种方法都存在性能问题

在方式一中，for-in需要分析出array的每个属性，这个操作性能开销很大。用在 key 已知的数组上是非常不划算的。所以尽量不要用for-in，除非你不清楚要处理哪些属性，例如 JSON对象这样的情况

在方式2中，循环每进行一次，就要检查一下数组长度。读取属性（数组长度）要比读局部变量慢，尤其是当 array 里存放的都是 DOM 元素，因为每次读取都会扫描一遍页面上的选择器相关元素，速度会大大降低
```





### this关键字

面向对象语言中 this 表示当前对象的一个引用。

但在 JavaScript 中 this 不是固定不变的，它会随着执行环境的改变而改变。

- 在方法中，this 表示该方法所属的对象。
- 如果单独使用，this 表示全局对象。
- 在函数中，this 表示全局对象。
- 在函数中，在严格模式下，this 是未定义的 (undefined)。
- 在事件中，this 表示接收事件的元素。

### 箭头函数

匿名函数最经典的总结：就是谁调用匿名函数，匿名函数中的this就指向谁；匿名函数是有执行上下文，只是执行上下文是执行的时候传递过来，箭头函数中的执行上下文是父级的执行上下文，匿名函数可以作为箭头函数的父级（详见例3）

```js
例1.匿名函数

var name='window';
var obj = {
    name:'obj',
    nameprintf:function(){
        console.log(this.name)
    }
}
var obj1 = {
    name:'obj1'
}
obj.nameprintf();//'obj'
var w = obj.nameprintf;
w();//'window'，这时候相当于Window.w(),this自然指向的是Window
obj.nameprintf.call(obj1) //obj1,匿名函数的中的this已经被绑定到了obj1
```

```js
例2.箭头函数它会直接绑定到它父级的执行上下文里的this。

var name='window';
var obj = {
    name:'obj',
    nameprintf:()=>{
        console.log(this.name)
    }
}
obj.nameprintf();//window,因为此时父级是obj，obj的上下文是window
```

```js
例3.两者相结合 

var obj={
    num:4,
    fn:function(){  
        console.log(this); //匿名函数的this，应该是谁调用指向谁
        (() => {
            console.log(this);//箭头函数的this，应该是父级的执行上下文，这里父级是fn，上下文就是调用fn函数的那个对象，和上面的this指向是一样的
        })();
    }
}
obj.fn(); //指向的都是obj
var w = obj.fn;
w(); //指向的Window 
var obj1 = {name:'obj1', fn:obj.fn}
obj1.fn(); //指向的obj1
obj.fn.call(obj1); //也是指向obj1
```



### prototype \_proto\_ constructor 原型链和原型对象

所有的 JavaScript 对象都会从一个 显示原型：prototype（原型对象）中继承属性和方法。

使用对象的构造器（constructor）：

```javascript
function Person(first, last, age, eyecolor) {
   this.firstName = first;  
   this.lastName = last;  
   this.age = age;  
   this.eyeColor = eyecolor;
}
var myFather = new Person("John", "Doe", 50, "blue");
var myMother = new Person("Sally", "Rally", 48, "green");
```

在一个已存在的对象构造器中是不能添加新的属性的：

```javascript
Person.nationality = "English";//不可行
```

要添加一个新的属性需要在在构造器函数中添加：

```javascript
function Person(first, last, age, eyecolor) {
   this.firstName = first;  
   this.lastName = last;  
   this.age = age;  
   this.eyeColor = eyecolor;  
   this.nationality = "English";
}
```

#### 原型链

![image-20210521083621499](JavaScript.assets/image-20210521083621499-1683895.png)

JavaScript 对象有一个指向一个原型对象的链。当试图访问一个对象的属性时，它不仅仅在该对象上搜寻，还会搜寻该对象的原型，以及该对象的原型的原型，依次层层向上搜索，直到找到一个名字匹配的属性或到达原型链的末尾。

隐式原型：**`__proto__`** 属性，它是**对象所独有的**，可以看到`__proto__`属性都是由**一个对象指向一个对象**，即指向它们的原型对象（也可以理解为父对象）。直到原型链顶端**null**。

通过`__proto__`属性来连接对象直到`null`的一条链即为我们所谓的**原型链**。

#### 添加属性和方法

有的时候我们想要在所有已经存在的对象添加新的属性或方法。

另外，有时候我们想要在对象的构造函数中添加属性或方法。

使用 prototype 属性就可以给对象的构造函数添加新的属性：

```javascript
function Person(first, last, age, eyecolor) {
   this.firstName = first;
   this.lastName = last;
   this.age = age;
   this.eyeColor = eyecolor;
}
Person.prototype.nationality = "English";
```

当然我们也可以使用 prototype 属性就可以给对象的构造函数添加新的方法：

```javascript
function Person(first, last, age, eyecolor) {
   this.firstName = first;
   this.lastName = last;
   this.age = age;
   this.eyeColor = eyecolor;
}
Person.prototype.name = function() { 
   return this.firstName + " " + this.lastName;
};
```

#### constructor

`constructor`属性也是**对象才拥有的**，它是从**一个对象指向一个函数**，含义就是**指向该对象的构造函数**

#### 注意：

利用prototype重写构造函数后，`constructor`会指向你重新写的这个构造函数对象。

```javascript
function Person(first, last, age, eyecolor) {   this.firstName = first;   this.lastName = last;   this.age = age;   this.eyeColor = eyecolor;}Person.prototype = {   getName: function() {    return this.firstName + " " + this.lastName;	};}   
```

就像是这个实例，重写后会指向：

```javascript
 function() {    return this.firstName + " " + this.lastName;};
```

这个构造函数对象。

所以在重写prototype之后，要将constructor重新写回原构造对象

```javascript
 Person.prototype = {    constructor :Person;   getName: function() {    return this.firstName + " " + this.lastName;	};}
```

- 

### promise

- promise是一个对象，对象和函数的区别就是对象可以保存状态，函数不可以（闭包除外）
- 并未剥夺函数return的能力，因此无需层层传递callback，进行回调获取数据
- 代码风格，容易理解，便于维护
- 多个异步等待合并便于解决

#### promise详解

```jsx
new Promise(  function (resolve, reject) {    // 一段耗时的异步操作    
   resolve('成功') // 数据处理完成   
   // reject('失败') // 数据处理出错  
}).then(  (res) => {console.log(res)},  
  // 成功  (err) => {console.log(err)} // 失败)
```

- resolve作用是，将Promise对象的状态从“未完成”变为“成功”（即从 pending 变为 resolved），在异步操作成功时调用，并将异步操作的结果，作为参数传递出去；
  reject作用是，将Promise对象的状态从“未完成”变为“失败”（即从 pending 变为 rejected），在异步操作失败时调用，并将异步操作报出的错误，作为参数传递出去。
- promise有三个状态：
  1、pending[待定]初始状态
  2、fulfilled[实现]操作成功
  3、rejected[被否决]操作失败
  当promise状态发生改变，就会触发then()里的响应函数处理后续步骤；
  promise状态一经改变，不会再变。
- Promise对象的状态改变，只有两种可能：
  从pending变为fulfilled
  从pending变为rejected。
  这两种情况只要发生，状态就凝固了，不会再变了。

##### 最简单示例：

```jsx
new Promise(resolve => {  setTimeout(() => {    resolve('hello')  }, 2000)}).then(res => {  console.log(res)})
```

##### 分两次，顺序执行

```jsx
new Promise(resolve => {    setTimeout(() => {      resolve('hello')    }, 2000)  }).then(val => {    console.log(val) //  参数val = 'hello'    return new Promise(resolve => {      setTimeout(() => {        resolve('world')      }, 2000)    })  }).then(val => {    console.log(val) // 参数val = 'world'  })
```

##### promise完成后then()

```jsx
let pro = new Promise(resolve => {   setTimeout(() => {     resolve('hello world')   }, 2000) }) setTimeout(() => {   pro.then(value => {   console.log(value) // hello world }) }, 2000)
```

结论：promise作为队列最为重要的特性，我们在任何一个地方生成了一个promise队列之后，我们可以把他作为一个变量传递到其他地方。

#### 一、Pomise.all的使用

**Promise.all可以将多个Promise实例包装成一个新的Promise实例。同时，成功和失败的返回值是不同的，成功的时候返回的是一个结果数组，而失败的时候则返回最先被reject失败状态的值。**

具体代码如下：

```jsx
let p1 = new Promise((resolve, reject) => {  resolve('成功了')})let p2 = new Promise((resolve, reject) => {  resolve('success')})let p3 = Promse.reject('失败')Promise.all([p1, p2]).then((result) => {  console.log(result)               //['成功了', 'success']}).catch((error) => {  console.log(error)})Promise.all([p1,p3,p2]).then((result) => {  console.log(result)}).catch((error) => {  console.log(error)      // 失败了，打出 '失败'})
```

Promse.all在处理多个异步处理时非常有用，比如说一个页面上需要等两个或多个ajax的数据回来以后才正常显示，在此之前只显示loading图标。

代码模拟：

```dart
let wake = (time) => {  return new Promise((resolve, reject) => {    setTimeout(() => {      resolve(`${time / 1000}秒后醒来`)    }, time)  })}let p1 = wake(3000)let p2 = wake(2000)Promise.all([p1, p2]).then((result) => {  console.log(result)       // [ '3秒后醒来', '2秒后醒来' ]}).catch((error) => {  console.log(error)})
```

**需要特别注意的是，Promise.all获得的成功结果的数组	里面的数据顺序和Promise.all接收到的数组顺序是一致的，即p1的结果在前，即便p1的结果获取的比p2要晚。这带来了一个绝大的好处：在前端开发请求数据的过程中，偶尔会遇到发送多个请求并根据请求顺序获取和使用数据的场景，使用Promise.all毫无疑问可以解决这个问题。**

#### 二、Promise.race的使用

顾名思义，Promse.race就是赛跑的意思，意思就是说，Promise.race([p1, p2, p3])里面哪个结果获得的快，就返回那个结果，不管结果本身是成功状态还是失败状态。

```jsx
let p1 = new Promise((resolve, reject) => {  setTimeout(() => {    resolve('success')  },1000)})let p2 = new Promise((resolve, reject) => {  setTimeout(() => {    reject('failed')  }, 500)})Promise.race([p1, p2]).then((result) => {  console.log(result)}).catch((error) => {  console.log(error)  // 打开的是 'failed'})
```

#### `async`和`await`是如何处理异步任务的？

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
new Promise((resolve, reject) => {  // 
   console.log('async2 end')  
   }).then(() => { // 执行async1()函数await之后的语句
      console.log('async1 end')
   })
```

### 宏任务和微任务

微任务要比宏任务执行的早

宏任务：setTimeout 、setInterval、DOM事件、AJAX请求

微任务：Promise、async/await

执行顺序：

​	微任务->DOM渲染->宏任务

### ajax与axios的使用和对比

#### ajax  

Ajax 即“Asynchronous Javascript And XML”（异步 JavaScript 和 XML），是指一种创建交互式网页应用的网页开发技术
Ajax = 异步 JavaScript 和 XML 或者是 HTML（标准通用标记语言的子集）
Ajax 是一种用于创建快速动态网页的技术
Ajax 是一种在无需重新加载整个网页的情况下，能够更新部分网页的技术
通过在后台与服务器进行少量数据交换，Ajax 可以使网页实现异步更新。这意味着可以在不重新加载整个网页的情况下，对网页的某部分进行更新
传统的网页（不使用 Ajax）如果需要更新内容，必须重载整个网页页面
参考百度百科

##### 优点：

在页面无刷新的情况下与服务器通讯维护数据，用户体验好
异步通讯方式，不打断用户操作，响应能力迅速
把一些请求转到客户端，“按需取数据”，最大程度的减少冗余请求和对服务器造成的负担
基于标准化的并被广泛支持的技术，不需要下载浏览器插件或者小程序
使用：

##### \1. 原生 ajax

ajax 的核心是 JavaScript 对象 XmlHttpRequest

GET 请求方式

```javascript
//创建 XMLHttpRequest对象
var xhr = new XMLHttpRequest()

//打开要发送请求的地址，get发送请求时参数要放在url中
xhr.open("get","https://me.csdn.net/weixin_45426836?a=1&b=2",true)

//发送请求
xhr.send()

//监听请求状态，接收响应数据，onload 等于 xhr.readyState == 4
xhr.onload = function(){
if(xhr.status == 200) {
console.log(xhr.response) //通过xhr的response获取到响应的响应体
}else {
console.log(error)
}
}
```

POST 请求方式

```javascript
//创建 XMLHttpRequest对象
var xhr = new XMLHttpRequest()

//打开要发送请求的地址
xhr.open("post","https://me.csdn.net/weixin_45426836",true)

//设置请求头
xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");

//发送请求，post发送请求时参数要放在send中
xhr.send("a=1&b=2")

//监听请求状态，接收响应数据，xhr.readyState == 4 等于 onload
xhr.onreadystatechange = function(){
	if(xhr.readyState == 4 && xhr.status == 200) {
			console.log(xhr.response) //通过xhr的response获取到响应的响应体
		}else {
					console.log(error)
				}
}
```

### XMLHttpRequest API 属性

eadyState： xhr的状态，请求响应过程的当前活动阶段

status： 响应的http状态

statusText： 响应的http状态的字符串信息说明

responseText： 响应的数据文本

responseXML： 响应的DOM兼容的文档数据对象

onreadystatechange： 事件，当 xhr.readyState 属性发生改变触发

onload： 事件，响应接收完毕触发

##### XMLHttpRequest API 方法

open(method, url, async)： 打开要发送请求的地址，参数：请求方式、请求的url地址、请求是否异步的布尔值（默认true）
send(requsetBody)： 发送请求（体）
setRequestHeader(key, value)： 设置请求头
getResponseHeader(key)： 获取响应头

XMLHttpRequest 对象的 readyState 属性，表示请求响应过程的当前活动阶段：

0： 未初始化，创建了XMLHttpRequest对象，但未调用open()方法
1： 启动，已经调用open()方法，但未调用send()方法
2： 发送，已经调用send()方法，但未接收到响应
3： 接收，已经接收到部分响应数据
4： 完成，已经接收到全部响应数据，并且可以在客户端使用

##### \2. jquery将ajax封装成了一个函数 $.ajax()，我们可以直接用这个函数来执行ajax请求

常用参数：

url ： 请求的 URL 地址
type ： 请求方式，默认是 GET，常用的还有 POST
async ： 请求是否异步，默认值是 true，表示异步，false 表示同步
dataType ： 返回的数据类型，常用的是 json 格式
contentType： 请求的数据类型，默认为"application/x-www-form-urlencoded"
data ： 请求的数据参数
success ： 请求成功后的回调函数
error ： 请求失败后的回调函数



GET 请求方式 $.get()

```javascript
$.ajax({
    url: 'https://me.csdn.net/weixin_45426836',
    type: 'get',
    dataType: 'json',
    data: {
        //'a': 1,
        //'b': 2
    },
    success: function (data) {
        console.log(data)
    },
    error: function (err) {
        console.log(err)
    }
})
```

### axios

axios 是一个基于promise 的 http 库，可以用于浏览器和 nodejs 中

##### 优点：

从浏览器中创建 XMLHttpRequests
从 node.js 创建 http 请求
支持 Promise API
拦截请求和响应
转换请求数据和响应数据
取消请求
自动转换 JSON 数据
客户端支持防御 XSRF

##### 使用：

通过向 axios 传递相关配置来创建请求

常用参数：

url ： 请求的 URL 地址
method ： 请求方式，默认是 GET，常用的还有 POST
baseURL： baseURL 将自动加在 url 前面，除非 url 是一个绝对 URL
responseType ： 返回的数据类型，常用的是 json 格式
headers： 请求的自定义请求头
params ： 与请求一起发送的 URL 参数
data ： 请求的数据参数，只适用于 PUT, POST, 和 PATCH

```js
axios({
    url: 'https://me.csdn.net/weixin_45426836',
    method: 'get',
    responseType: 'json',
    params: {
        //'a': 1,
        //'b': 2,
    }
}).then(function (data) {
    console.log(data)
}).catch(function (err) {
    console.log(err)
})
```

执行 GET 请求

```js
axios.get('https://me.csdn.net/weixin_45426836', {
    params: {
        //'a': 1,
        //'b': 2,
    }
}).then(function (data) {
    console.log(data)
}).catch(function (err) {
    console.log(err)
})
```

执行 POST 请求

```js
axios.post('https://me.csdn.net/weixin_45426836', {
    //'a': 1,
    //'b': 2,
}).then(function (data) {
    console.log(data)
}).catch(function (err) {
    console.log(err)
})
```

使用 axios.all 处理并发请求

```js
function getOne() {
    return axios.get('https://me.csdn.net/weixin_45426836', {
        params: {
            //'a': 1
        }
    });
}
function getTwo() {
    return axios.get('https://me.csdn.net/weixin_45426836', {
        params: {
            //'b': 2
        }
    });
}
axios.all([getOne(), getTwo()])
    .then(axios.spread(function (one, two) {
        console.log(one)
        cosnoel.log(two)
    }))
```

全局 axios 默认值

```js
axios.defaults

// 全局默认的baseURL
axios.defaults.baseURL = 'https://me.csdn.net/weixin_45426836'
```

##### axios 拦截器

//在请求或响应被 then 或 catch 处理前拦截它们，进行一些操作

```js
// 添加请求拦截器axios.interceptors.request.use(function (config) {    // 在发送请求之前做些什么    return config;}, function (error) {    // 对请求错误做些什么    return Promise.reject(error);});// 添加响应拦截器axios.interceptors.response.use(function (response) {    // 对响应数据做点什么    return response;}, function (error) {    // 对响应错误做点什么    return Promise.reject(error);});
```

ajax 与 axios 的根本区别

axios 是基于promise实现的对 ajax 技术的一种封装，两者用法基本一样，个别参数不同，axios 封装了一些更简便的 ajax 操作
axios 是 ajax，但是 ajax 不限于 axios

### 16.**防抖和节流区别**

> 防抖和节流是针对响应跟不上触发频率这类问题的两种解决方案。 在给DOM绑定事件时，有些事件我们是无法控制触发频率的。 如鼠标移动事件onmousemove, 滚动滚动条事件onscroll，窗口大小改变事件onresize，瞬间的操作都会导致这些事件会被高频触发。 如果事件的回调函数较为复杂，就会导致响应跟不上触发，出现页面卡顿，假死现象。 在实时检查输入时，如果我们绑定onkeyup事件发请求去服务端检查，用户输入过程中，事件的触发频率也会很高，会导致大量的请求发出，响应速度会大大跟不上触发。
>
> 针对此类快速连续触发和不可控的高频触发问题，debounce 和 throttling 给出了两种解决策略；
>
> debounce，去抖动。策略是当事件被触发时，设定一个周期延迟执行动作，若期间又被触发，则重新设定周期，直到周期结束，执行动作。 这是debounce的基本思想，在后期又扩展了前缘debounce，即执行动作在前，然后设定周期，周期内有事件被触发，不执行动作，且周期重新设定。
> 		debounce的特点是当事件快速连续不断触发时，动作只会执行一次。 延迟debounce，是在周期结束时执行，前缘debounce，是在周期开始时执行。但当触发有间断，且间断大于我们设定的时间间隔时，动作就会有多次执行。
>
> throttling，节流的策略是，固定周期内，只执行一次动作，若有新事件触发，不执行。周期结束后，又有事件触发，开始新的周期。 节流策略也分前缘和延迟两种。与debounce类似，延迟是指 周期结束后执行动作，前缘是指执行动作后再开始周期。
>
> 函数防抖：将多次操作合并为一次操作进行。原理是维护一个计时器，规定在delay时间后触发函数，但是在delay时间内再次触发的话，就会取消之前的计时器而重新设置。这样一来，只有最后一次操作能被触发。
>
> 函数节流：使得一定时间内只触发一次函数。原理是通过判断是否有延迟调用函数未执行。
>
> 区别： 函数节流不管事件触发有多频繁，都会保证在规定时间内一定会执行一次真正的事件处理函数，而函数防抖只是在最后一次事件后才触发一次函数。 比如在页面的无限加载场景下，我们需要用户在滚动页面时，每隔一段时间发一次 Ajax 请求，而不是在用户停下滚动页面操作时才去请求数据。这样的场景，就适合用节流技术来实现。