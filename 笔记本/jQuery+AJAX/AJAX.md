1.全局刷新和局部刷新

全局刷新：整个浏览器被新的数据覆盖，在网络中传输大流量的数据，浏览器需要加载，渲染页面

局部刷新：在浏览器内部发起请求，获取数据，改变页面中的部分内容，其余页面无需加载和渲染

AJAX就是用来进行局部刷新的

 ajax是用来做局部刷新的。局部刷新使用的核心对象是 异步对象（XMLHttpRequest）
 这个异步对象是存在浏览器内存中的 ，使用javascript语法创建和使用XMLHttpRequest对象。

2.ajax:Asynchronous JavaScript and XML（异步的 JavaScript 和 XML）。
  Asynchronous: 异步的意思
  JavaScript：javascript脚本，在浏览器中执行
  and : 和
  xml : 是一种数据格式

 ajax是一种做局部刷新的新方法（2003左右），不是一种语言。 ajax包含的技术主要有javascript,
 dom,css, xml等等。 核心是javascript 和 xml 。
 javascript：负责创建异步对象， 发送请求， 更新页面的dom对象。 ajax请求需要服务器端的数据。
 xml： 网络中的传输的数据格式。 使用json替换了xml 。

       <数据>
          <数据1>宝马1</数据1>
      <数据2>宝马2</数据2>
      <数据3>宝马3</数据3>
      <数据4>宝马4</数据4>
      </数据>

3.ajax中使用XMLHttpRequest对象
 1）创建异步对象 var xmlHttp = new XMLHttpRequest();
 2）给异步对象绑定事件。onreadystatechange ：当异步对象发起请求，获取了数据都会触发这个事件。
    这个事件需要指定一个函数， 在函数中处理状态的变化。

```
    btn.onclick = fun1()
​    function fun1(){
​     alert("按钮单击");
​    }

例如：
xmlHttp.onreadystatechange= function(){
   处理请求的状态变化。
	 if(xmlHttp.readyState == 4 && xmlHttp.status== 200 ){
       //可以处理服务器端的数据，更新当前页面
		  var data = xmlHttp.responseText;
		  document.getElementById("name").value= data;
	 }
}
```

 异步对象的属性 readyState 表示异步对象请求的状态变化
 0：创建异步对象时， new XMLHttpRequest();
 1: 初始异步请求对象， xmlHttp.open()
 2：发送请求， xmlHttp.send()
 3: 从服务器端获取了数据，此时3， 注意3是异步对象内部使用， 获取了原始的数据。
 4：异步对象把接收的数据处理完成后。 此时开发人员在4的时候处理数据。
    在4的时候，开发人员做什么 ？  更新当前页面。

异步对象的status属性，表示网络请求的状况的，  200， 404， 500， 需要是当status==200
 时，表示网络请求是成功的。

  3) 初始异步请求对象
     异步的方法open().
	  xmlHttp.open(请求方式get|post, "服务器端的访问地址", 同步|异步请求（默认是true，异步请求）)
	  例如：
	  xmlHttp.open('get', 'http://localhost:3000/first', true ) ;  //以访问nodejs服务器为例

  4)使用异步对象发送请求
     xmlHttp.send()

  获取服务器端返回的数据， 使用异步对象的属性 responseText .
  使用例子：

xmlHttp.responseText 

  ==回调：当请求的状态变化时，异步对象会自动调用onreadystatechange事件对应的函数。==

与 POST 相比，GET 更简单也更快，并且在大部分情况下都能用。

然而，在以下情况中，请使用 POST 请求：

- 无法使用缓存文件（更新服务器上的文件或数据库）
- 向服务器发送大量数据（POST 没有数据量限制）
- 发送包含未知字符的用户输入时，POST 比 GET 更稳定也更可靠

