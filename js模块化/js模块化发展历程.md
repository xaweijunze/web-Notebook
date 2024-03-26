#### 模块化的原因：

​	一开始的时候，写js代码是写在一个js文件当中的，这时候代码量并不大。可是等到代码量达到一定的程度之后，如果仍然写在一个js文件中，会造成全局污染，很容易命名冲突。降低复杂度、提高解耦性、部署方便（功能明确）

#### 模块化的思想：

将一个复杂的程序依据一定的规则（规范）封装成几个块（文件），并组合在一起。

每块的内部数据/实现是私有的，只向外部暴露一些接口（方法），与外部的其他块进行通讯。

#### 模块化的发展历程：

将方法和属性加入到一个对象中

```html
<script>
	var obj = {
		var uname = '小明'；
      foo (){
         console.log(this.uname);
      }
   }
   obj.foo();//可以打印，但是会有问题如下
   obj.uname = '小红';
   obj.foo();//发现数据被修改
</script>
```

=>将方法和属性写成闭包的形式，利用立即执行函数语法进行封装（jQuery）

```js
//module0js 文件
function (window){
	var uname = '小明';
   var foo = function(){
      console.log(uname);
   }
   window.module0 = {
      foo
   }
}(window)

```

```html
<---> HTML文件 </--->
<script src = "module0.js"></script>
<script>
   module0.foo();
</script>
```

=>引入依赖关系

```js
//module1.js
function (window ,jQuery){
	var uname = '小明';
   var foo = function(){
      $('body').css('backgroundColor','red');
   }
   window.module = {
      foo
   }
}(window,jQuery)
```

```HTML
<---> HTML文件 </--->
<script src = "jQuery.js"></script>
<script src = "module1.js"></script>
<--->
   因为后边文件要依赖上边文件，次序不可以换，否则无法执行
   依赖太多就会带来一些问题
</--->

<script>
   module1.foo();
</script>
```



#### 模块的好处

避免命名冲突

更好的分离，按需加载

更高的复用性

高可维护性

#### 带来的问题

原来一个HTML请求一个js文件即可，但是现在随着依赖的引入，需要请求多个js文件。加载速度变慢

请求多、依赖模糊、难以维护

