# bom浏览器对象模型

1. window对象
2. location对象
3. screen对象
4. history对象



## widow对象

alert()方法

confirm()

prompt()

setInterval()

setTimeout()

### alert()方法

弹出对话框

alert()  = window.alert()

### confirm()

弹出对话框，可以选择确定或者取消

var a =  window.confirm("你选择的是");

确定则a为true  取消则a为false

### prompt()

弹出输入框

var name = window.prompt("请输入你早晨吃了什么" , "'默认值');

输入的内容以字符串的形式返回

### setInterval()

循环执行，每一时间间隔都会执行一次

```javascript
var timer window.setInterval(function(){
   num++;
   if(num>=5)
      {
         clearInterval(timer);
         return;
      }
   console.log(num)
},2000)


```

### clearInterval()

清除循环定时器

### setTimeout()

延迟执行，设置为0也会延迟

```javascript
window.setTimeout(function(){
   console.log("计时器");
},2000)
```

##### 

## location对象

|   属性   |                             作用                             |
| :------: | :----------------------------------------------------------: |
|   host   |              获取主机号+端口号 172.168.0.1:8080              |
| hostname |                    获取主机号 172.168.0.1                    |
|   port   |                       获取端口号 8080                        |
| protocol |                 获取网站协议  http:  https:                  |
|   href   |  获取完整的url  https://www.axihe.com/edu/js/edu/this.html   |
|   hash   |       获取端口号到HTML的整个目录 /edu/js/edu/this.html       |
|  search  | 获取字符串 <br>?spm_id_from=333.851.b_7072696d61727950616765546162.2 |

### 位置操作（location方法）

```HTML
<script>
	setTimeout(function(){
      //跳转到其他页面
      location.href("https://www.bilibili.com");
      //跳转到其他页面（不会产生历史记录）
      location.replace("https://www.bilibili.com");
      //页面刷新
      location.reload();
	},1000)
</script>
```

## screen对象

screen对象包含有关用户屏幕的信息

#### 一些属性

- screen.availWidth - 可用的屏幕宽度
- screen.availHeight - 可用的屏幕高度

注：

属性返回访问者屏幕的宽度，以像素计，减去界面特性，比如窗口任务栏。



## navigator对象

window.navigator 对象包含有关访问者浏览器的信息。

```HTML
<div id="example"></div>
<script>
txt = "<p>浏览器代号: " + navigator.appCodeName + "</p>";
txt+= "<p>浏览器名称: " + navigator.appName + "</p>";
txt+= "<p>浏览器版本: " + navigator.appVersion + "</p>";
txt+= "<p>启用Cookies: " + navigator.cookieEnabled + "</p>";
txt+= "<p>硬件平台: " + navigator.platform + "</p>";
txt+= "<p>用户代理: " + navigator.userAgent + "</p>";
txt+= "<p>用户代理语言: " + navigator.systemLanguage + "</p>";
document.getElementById("example").innerHTML=txt;
</script>
```

### 警告！

来自 navigator 对象的信息具有误导性，不应该被用于检测浏览器版本，这是因为：

- navigator 数据可被浏览器使用者更改
- 一些浏览器对测试站点会识别错误
- 浏览器无法报告晚于浏览器发布的新操作系统

### 浏览器检测

由于 navigator 可误导浏览器检测，使用对象检测可用来嗅探不同的浏览器。

由于不同的浏览器支持不同的对象，您可以使用对象来检测浏览器。例如，由于只有 Opera 支持属性 “window.opera”，您可以据此识别出 Opera。

例子：if (window.opera) {…some action…}



## Cookie

Cookie 用于存储 web 页面的用户信息。

##### 什么是 Cookie？

Cookie 是一些数据，存储于你电脑上的文本文件中。

当 web 服务器向浏览器发送 web 页面时，在连接关闭后，服务端不会记录用户的信息。

##### Cookie 的作用就是用于解决 “如何记录客户端的用户信息”:

- 当用户访问 web 页面时，他的名字可以记录在 cookie 中。
- 在用户下一次访问该页面时，可以在 cookie 中读取用户访问记录。

##### Cookie 以名 / 值对形式存储，如下所示：

```Javascript
username=John Doe
```

当浏览器从服务器上请求 web 页面时， 属于该页面的 cookie 会被添加到该请求中。服务端通过这种方式来获取用户的信息

##### 使用 JavaScript 创建 Cookie

JavaScript 可以使用 **document.cookie** 属性来创建 、读取、及删除 cookie。

JavaScript 中，创建 cookie 如下所示：

```JavaScript
document.cookie="username=John Doe";
```

您还可以为 cookie 添加一个过期时间（以 UTC 或 GMT 时间）。默认情况下，cookie 在浏览器关闭时删除：

```
document.cookie="username=John Doe; expires=Thu, 18 Dec 2043 12:00:00 GMT";
```

您可以使用 path 参数告诉浏览器 cookie 的路径。默认情况下，cookie 属于当前页面。

```JavaScript
document.cookie="username=John Doe; expires=Thu, 18 Dec 2043 12:00:00 GMT; path=/";
```

##### 使用 JavaScript 读取 Cookie

在 JavaScript 中，可以使用以下代码来读取 cookie：

```JavaScript
var x = document.cookie;
```

> document.cookie 将以字符串的方式返回所有的 cookie，类型格式： cookie1=value; cookie2=value; cookie3=value;

##### 使用 JavaScript 修改 Cookie

在 JavaScript 中，修改 cookie 类似于创建 cookie，如下所示：

```JavaScript
document.cookie="username=John Smith; expires=Thu, 18 Dec 2043 12:00:00 GMT; path=/";
```

旧的 cookie 将被覆盖。

##### 使用 JavaScript 删除 Cookie

删除 cookie 非常简单。您只需要设置 expires 参数为以前的时间即可，如下所示，设置为 Thu, 01 Jan 1970 00:00:00 GMT:

```JavaScript
document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
```

注意，当您删除时不必指定 cookie 的值。

##### Cookie 字符串

document.cookie 属性看起来像一个普通的文本字符串，其实它不是。

即使您在 document.cookie 中写入一个完整的 cookie 字符串，当您重新读取该 cookie 信息时，cookie 信息是以名 / 值对的形式展示的。

如果您设置了新的 cookie，旧的 cookie 不会被覆盖。 新 cookie 将添加到 document.cookie 中；