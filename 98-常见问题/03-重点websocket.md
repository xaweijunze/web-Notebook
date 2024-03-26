http是如何通讯的

websocket是什么 和http有什么关系

websocket是如何实现通讯的

Web通讯技术有哪些





### HTTP 

#### 基本概念



超文本传输协议，是互联网上应用最广泛的一种网络协议，是用于从www服务器传输超文本到本地浏览器的传送协议

http协议是一种无状态的、无连接的、单向的应用层协议。它采用了请求响应的模型。通信请求只能由客户端发起，服务端对请求做出应答处理。

这种通信模型有一个弊端：http协议无法实现服务器主动向客户端发起消息。

这种单向请求的特点，注定了如果服务器有联系的状态变化，客户端要获知就会非常麻烦。大多数web应用程序通过频繁的==异步ajax请求实现长轮询==。轮询效率非常低，浪费资源（因为必须不定连接，或者http连接始终打开）



#### 过程：

​	建立连接 （三次握手）

​	发送请求 （request headers）

​	接受响应（response headers）

​	断开连接 （四次挥手）

### websocket协议

websocket是HTML5的一种新的协议，它实现了浏览器与服务器的全双工通信。一开始的建立连接需要借助http请求完成。（其他概念可查阅）

本协议有两部分：握手和数据传输。

握手是基于http协议的

来自客户端的握手看起来像如下形式：

```http
GET ws://localhost/chat HTTP/1.1
Host: localhost
Upgrade: websocket
Connection: Upgrade
Sec-webSocket-Key: dGhlIHNhbxBsZSBub25jZQ==
Sec-webSocket-Extensions: permessage-deflate
Sec-webSocket-Version: 13
```

来自服务器的握手看起来像如下形式：

```http
HTTP/1.1 101 Switching Protocols
Upgrade: websocket
Connection: Upgrade
Sec-webSocket-Accept: S3pPLMBiTxaQ9kYGzzhZRbk+xOo=
Sec-webSocket-Extensions: permessage-deflate
```

字段说明：

| 头名称                    | 说明                                                         |
| ------------------------- | ------------------------------------------------------------ |
| Connection: Upgrade       | 标识HTTP请求是一个协议升级请求                               |
| Upgrade: websocket        | 协议升级为WebSocket协议                                      |
| Sec-webSocket-Version: 13 | 客户端支持的websocket版本                                    |
| Sec-webSocket-Key         | 客户端采用base64编码的24位随机字符序列，服务器接受客户端http协议升级的证明。要求服务端响应一个对应加密的Sec-webSocket-Accept头信息作为应答 |
| Sec-webSocket-Extensions  | 协议扩展类型                                                 |



#### websocket的浏览器端使用

##### 常见的方法

###### 创建websocket

```
var ws = new WebSocket(url , [protocols])；
```

| url       | 表示要连接的url。这个url应该为响应websocket的地址            |
| --------- | ------------------------------------------------------------ |
| protocols | 可以使一个单个协议名字字符串或者包含多个协议名字字符串的数组（可以省略） |

###### 关闭连接 close 关闭websocket连接或者停止正在进行的连接请求

```
ws.close([code], [reson])
```

| code   | 一个数字值表示关闭连接的状态号，表是连接被关闭的原因 |
| ------ | ---------------------------------------------------- |
| reason | 一个可读的字符串，表示连接被关闭的原因。             |

###### 发送数据

```
ws.send(data) //通过webSocket连接向服务器发送数据
```

| data | 一个数字值表示关闭连接的状态号，表示连接被关闭的原因。 |
| ---- | ------------------------------------------------------ |

##### 常见的属性

| 事件    | 事件处理程序 | 描述                                                         |
| ------- | ------------ | ------------------------------------------------------------ |
| close   | onclose      | 用于监听连接关闭的事件监听器，当WebSocket对象的readyState的状态变为CLOSED的时候，会触发该事件。会接受到一个close event对象 |
| error   | onerror      | 当错误发生时用于监听error事件的事件监听器，会接受到一个error event对象 |
| message | onmessage    | 用于消息事件的事件监听器，这一个事件当有小时到达的时候，该事件会触发，会接受到一个message event对象 |
| open    | onopen       | 一个用于连接打开事件的事件监听器。当readyState的值变为OPEN的时候会触发该事件。会接收一个open event对象 |
|         | readyState   | 连接的当前状态：0 连接未开启 ；1 连接已开启准备进行通信 ；2连接正在关闭的过程中 ；3 连接已经关闭 或者连接无法建立 |

##### 样例

```js
<script>
       // 打开一个 web socket  这里端口号和上面监听的需一致
        var ws = new WebSocket('ws://localhost:3000/');
   
        // Web Socket 已连接上，使用 send() 方法发送数据
        ws.onopen = function() {
        // 这里用一个延时器模拟事件
            setInterval(function() {
                ws.send('客户端消息');
            },2000);
        }
        // 这里接受服务器端发过来的消息
        ws.onmessage = function(e) {
            console.log(e.data)
        }

</script>
```

#### websocket在服务端使用（nodejs）

1、下载 nodejs-websocket 模块

```cmd
npm install nodejs-websocket --save
```

2、服务器端

```js
var ws = require('nodejs-websocket');
var server = ws.createServer(function(socket){
// 事件名称为text(读取字符串时，就叫做text)，读取客户端传来的字符串
　  var count = 1;
    socket.on('text', function(str) {
　　     // 在控制台输出前端传来的消息　　
        console.log(str);
        //向前端回复消息
        socket.sendText('服务器端收到客户端端发来的消息了！' + count++);
    });
}).listen(3000); 
```