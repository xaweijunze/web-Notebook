###  ajax与axios的使用和对比

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

##### XMLHttpRequest API 属性

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

#### axios

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


// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});
// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});
```

ajax 与 axios 的根本区别

axios 是基于promise实现的对 ajax 技术的一种封装，两者用法基本一样，个别参数不同，axios 封装了一些更简便的 ajax 操作
axios 是 ajax，但是 ajax 不限于 axios