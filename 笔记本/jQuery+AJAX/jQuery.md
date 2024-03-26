####   jQuery

## 概述

jQuery是JavaScript一个封装好的特定的集合（方法和函数），简单理解就是一个js文件，里面对我们原生的js代码进行了封装，存放在里面。这样我们就可以快速高效的使用这些封装好的功能。

jQuery就是为了快速方便的操作dom，里面基本都是函数



概念

j 就是JavaScript ；Query查询；意思就是查询js，把js中的DOM操作做了封装，我们可以快速的查询使用里面的功能

jQuery封装了JavaScript常用的功能模块，优化了DOM操作，事件处理、动画设计和ajax交互

学习jQuery的本质：是学习如何调用这些函数



优点

- 轻量级。核心文件只有几十kb，不会影响页面加载速度
- 跨浏览器兼容。基本兼容了现在所有的主流浏览器
- 链式编程、饮食迭代
- 对时间、样式、动画支持，大大简化了DOM操作
- 支持插件扩展开发、有着丰富的第三方插件例如：树形菜单、日期控件、轮播图等
- 免费开源



## jQuery的使用

1. ​	下载并引入jQuery文件（在官网下载jQuery文件，放到目录下）

![image-20210421212508980](/Users/weijunze/Desktop/webNotebook/笔记本/jQuery+AJAX/jQuery.assets/image-20210421212508980.png)

2. 直接在页面中就可以使用jQuery了





jQuery的入口函数

​	

```javascript
$( function () { 

		..//此处是页面DOM加载完成的入口		

} )

$(document).ready( function () { 

		..//此处是页面DOM加载完成的入口		

} )
```

1. 等着DOM结构渲染完毕即可执行内部代码，不必等到所有外部资源加载完成。jQuery帮我们完成了封装。
2. 相当于原生js中的DOMContentLoaded。
3. 不同于原生js中的load事件，它是等页面文档，外部js文件、css文件，图片等都加载完成才会执行。

### jQuery的顶级对象$

1. $是jQuery的别称，在代码中可使用jQuery代替$，但是一般为了方便，直接用$
2. $是jQuery的顶级对象，相当于原生JavaScript中的window，把元素利用$包装成jQuery，就可以调用jQuery的方法了。

### jQuery对象和DOM对象的区别

```html
<script>
	//1.DOM对象：用原生js获取过来的对象就是DOM对象
	var myDiv = document.querySelector('div');//myDiv 是DOM对象
	console.dir(myDiv);
	//2.jQuery对象：用jQuery方式获取过来的对象就是jQuery对象，本质：通过$把DOM元素进行了包装
	$('div');//$('div')是一个jQuery对象
	//3.jQuery对象只能使用jQuery方法，DOM对象则使用原生JavaScript属性和方法
</script>

```

### jQuery对象和DOM元素的相互转换



DOM对象和JQuery对象之间是可以相互转换的

因为原生js比jQuery更大，原生的一些属性和方法jQuery没有给我们封装，当我们需要使用这些方法的时候，就需要将jQuery对象转换成DOM对象才能使用

```html
<script>
	//1.DOM对象转换成jQuery对象
   //（1）我们直接获取视频，得到的就是jQuery对象
   $('video');
   //	(2)我们已经使用获胜js获取了DOM对象
	var myvideo = document.querySelector('video');//myvideo 是DOM对象
	//$(myvideo)就是jQuery对象
	//2.jQuery对象
	$('video')[0].play();//$('video')[0]是一个DOM对象
	$('video').get(0).play();//$('video').get(0)也是一个DOM对象
</script>
```

### jQuery常用的API

#### jQuery选择器

原生js获取元素的方式很多，很杂，而且兼容性情况不一致，因此jQuery给我们做了选择，是获取元素统一标准。

```javascript
$("选择器") //里面选择器直接写css选择器即可，但是要加引号
```

| 名称       | 用法            | 描述                     |
| ---------- | --------------- | ------------------------ |
| ID选择器   | $("id")         | 获取指定ID的元素         |
| 全选选择器 | $("*")          | 匹配所有元素             |
| 类选择器   | $(".class")     | 获取同一类class的元素    |
| 标签选择器 | $("div")        | 获取统一类标签的所有元素 |
| 并集选择器 | $("div,p.li")   | 选取多个元素             |
| 交集选择器 | $("li.current") | 交集元素                 |

##### jQuery层级选择器

| 名称       | 用法       | 描述                                                       |
| ---------- | ---------- | ---------------------------------------------------------- |
| 子代选择器 | $("ul>li") | 使用>获取亲儿子层级的元素，注：并不会获取孙子元素          |
| 后代选择器 | $("ul li") | 使用空格，代表后代选择器，获取ul下的所有li元素，包括孙子等 |

#####  隐式迭代（重要）

```javascript
$("div").css("background","pink");//所有的div元素都会设置成背景色粉色
```

遍历内部DOM元素(伪数组形式存储)的过程就叫做隐式迭代。

简单理解就是 ：给匹配到的所有元素进行循环遍历，执行相应的方法，而不用我们在进行循环，简化我们的操作，方便我们的调用。

##### 链式编程



```javascript
$(this).addClass("current").siblings().removeClass("current");
//等价于
//$(this).addClass("current");  +
//$(this).siblings().removeClass("current");
```



##### jQuery筛选选择器

| 语法       | 用法          | 描述                                             |
| ---------- | ------------- | ------------------------------------------------ |
| :first     | $("li:first") | 获取第一个li元素                                 |
| :last      | $("li:last")  | 获取最后一个元素                                 |
| :eq(index) | $("li:eq(2)") | 获取到li元素中，选择索引号为2的元素，索引号index |
| :odd       | $("li:odd")   | 获取到的li元素中，选择索引号为奇数的元素         |
| :even      | $("li:even")  | 获取到的li元素中，选择索引号为偶数的元素         |

```javascript
$("ul li:first").css("color","red");
```

| 语法               | 用法                            | 说明                                               |
| ------------------ | ------------------------------- | -------------------------------------------------- |
| parent()           | $("li").parent();               | 查找父级                                           |
| children(selector) | $("li").children("li");         | 查找最近一级的儿子元素                             |
| find(selector)     | $("li").find("li");             | 后代选择器，选择所有li后代                         |
| siblings(selector) | $(".first").siblings("li");     | 查找兄弟节点，不包括自己本身                       |
| nextAll([expr])    | $(".first").nextAll();          | 查找当前元素之后的所有同辈元素                     |
| prevtAll([expr])   | $(".first").prevtAll();         | 查找当前元素之前的所有同辈元素                     |
| hasCLass(class)    | $("div").hasCLass("protected"); | 检查当前元素是否含有某个特定的类，如果有则返回true |
| eq(index)          | $("div").eq(2);                 | 获取到div元素中，选择索引号为2的元素，索引号index  |

##### jQuery中的排他思想	

想要多选一的效果，排他思想：当前元素设置样式，其余兄弟清除样式

```javascript
$(function(){
   //1.隐式迭代 给所有的按钮都绑定了点击事件
   $("button").click(function(){
      //2.给当前元素变化背景颜色
      $(this).css("background","pink");  //$(this)表示当前元素
      //3.给其他元素去除背景颜色隐式迭代
      $(this).siblings("button").css("background","");
   })
})
```

##### 淘宝服饰精品案例

1. 核心原理：鼠标经过左侧盒子某个小li，就让内容区盒子相对应的图片显示，其余图片隐藏(鼠标经过：mouseover() )
2. 需要得到当前小li的索引号，就可以显示对应索引号的图片
3. jQuery得到当前元素索引号 $(this).index()
4. 中间对应的图片，可以通过eq(index)方法去选择
5. 显示元素show(),隐藏元素hide()

#### jQuery样式操作

##### 操作样式方法

1. 参数只写属性名，则返回属性值

   ```javascript
   $(this).css("color");
   ```

   

2. 参数是属性名属性值，逗号分割开，是这只一组央视，属性必须加引号，属性值如果是数字可以不用跟单位和引号。

   ```javascript
   $(this).css("color","red");
   ```

   

3. 参数可以是对象形式，方便设置多组样式。属性名和属性值用冒号分隔，属性可以不用加引号

   ```javascript
   $(this).css({
      color:"red",
      fontSize:"20px",
      height:200
   });
   ```

##### 添加删除修改类方法

1. 添加类方法addClass()

```javascript
$("div").addClass("current");
```

2. 删除类方法removeClass()

```javascript
$("div").removeClass("current");
```

3. 切换类方法toggleClass()

```javascript
$("div").toggleClass("current");
```

##### jQuery类操作不会影响原先类

1. 原生JS中className会覆盖元素原先的类名
2. jQuery里面类操作只是对指定类进行操作，不会影响原先额类名



#### jQuery动画效果

| 方法                                            | 效果       |
| ----------------------------------------------- | ---------- |
| show();  hide();  toggle()                      | 显示隐藏   |
| slideDown();  slideUp();  slideToggle();        | 滑动       |
| fadeIn();  fadeOut();  fadeToggle();  fadeTo(); | 淡入淡出   |
| animate();                                      | 自定义动画 |

##### 显示隐藏效果

1. 显示语法规范

```css
hide(speed,easing,fn)；
show(speed,easing,fn)；
toggle(speed,easing,fn)；
```

2. 显示参数

   （1）参数都可以省略，无动画直接显示隐藏

   （2）speed：三种预定速度之一的字符串（"slow", "normal", "fast"）或者表示动画时长的毫秒数值（如：1000    = 1秒）

   （3）easing：（optional）用来指定切换效果，默认是swing ，可用参数linear

    （4）fn：回调函数，在动画完成的时候执行的函数，每个元素执行一次

##### 上下滑动效果

1. 滑动语法规范

```css
slideUp(speed,easing,fn)；
slideDown(speed,easing,fn)；
slideToggle(speed,easing,fn)；
```

2. 滑动参数

   （1）参数都可以省略，无动画直接滑动

   （2）speed：三种预定速度之一的字符串（"slow", "normal", "fast"）或者表示动画时长的毫秒数值（如：1000    = 1秒）

   （3）easing：（optional）用来指定切换效果，默认是swing ，可用参数linear

   （4）fn：回调函数，在动画完成的时候执行的函数，每个元素执行一次

##### 事件切换效果

1. 切换语法规范

```css
hover(function(){},function(){})
```

2. 切换参数

   第一个函数是鼠标经过时候触发的

   第二个函数式鼠标离开时候触发的

   如果只写一个函数作为参数的话，鼠标经过和离开都会触发这个函数

##### 动画排队队列和停止排队方法

1. 动画或效果队列

   动画或者效果一但出发就会执行，如果多次触发，就会造成多个动画或者效果排队执行。

2. 停止排队

   ```javascript
   stop()
   ```

   stop()方法用于停止冻哈或者效果

   注意：stop()写到动画或者效果的前面，相当于停止结束上一次的动画

```javascript
$("div").hover(function(){
	//stop方法必须写在动画的前面
   $(this).children("ul").stop().slideToggle(); 
})
```

##### 淡入淡出效果

1. 淡入效果的语法规范

   ```javascript
   fadeIn(speed,easing,fn);
   fadeOut(speed,easing,fn);
   fadeToggle(speed,easing,fn)
   ```

2. 淡入效果的参数

   与显示隐藏效果类似

   

3. 渐进方式调整到指定的不透明度

   ```javascript
   fadeTo(speed,opacity,easing,fn)
   ```

4. 效果参数

   **opacity：透明度必须写，取值0-1之间**

   speed：三种预定速度之一的字符串（slow、normal、fast）

##### 自定义动画效果animate

语法

```javascript
animate(params,speed,easing,fn);
animate({},200,"swing",fn);
```

参数

​	params：想要更改的样式属性，以对象形式传递，必须写，属性名可以不带引号，如果是复合属性则需要用驼峰命名法borderLeft，其余参数都可以省略。

speed：速度

easing：切换效果

```javascript
$(function(){
	$("button").click(function){
      $("div").animate({
         left:500,
         top:300,
         opacity:.4,
         width.500
      },500) 
   })
})
```

### jQuery属性操作

1. 设置或获取元素固有属性值prop()

所谓元素固有属性就是元素本身自带的属性，比如<a>元素里的href，比如<input>元素里的type。

​	获取属性语法

```javascript
porp("属性")
```

​	设置属性语法

```javascript
porp("属性","属性值")
```

| 输入                         | 预测输出   |
| ---------------------------- | ---------- |
| 用户名：admin   密码：654321 | 登录成功   |
| 用户名：admin   密码：123456 | 验证通过   |
| 用户名：jjj   密码：123456   | 用户不存在 |

