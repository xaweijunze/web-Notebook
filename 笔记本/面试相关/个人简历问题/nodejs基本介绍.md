#### 一、NodeJS基本介绍

 1、NodeJS是为了开发高性能的服务器而诞生的一种技术

 2、是运行在服务端的 JavaScript，基于V8（谷歌浏览器的版本）进行运行 

 3、使用了一个事件驱动、非阻塞式 I/O 的模型，使其轻量又高效

#### 二、前端学习node的意义

 1、 开发沟通：开发时更容易理解后端实现，降低交流成本
 2、 后端开发：想写些自己感兴趣的项目时，可以自己独立完成，即使没有后端支持，且成本特别低。
 3、 中间层开发：为了进一步的前后端分离，提高性能，使用nodejs做中间层是一个非常好的实践（由于nodejs具有异步io的特点）

#### 三、使用node的方式

 1、 在node交互模式下运行（类似于命令窗口），这种方式类似于浏览器控制台，一般是用于运行单独的代码段。
 2、 单独创建一个node文件，其实就是一个不包含bom与dom的js文件，然后使用node 文件名.js来运行，当然你也可以不给js后缀，这种方式一般是用于运行一个独 立的nodejs文件

#### 四、前端要掌握的nodejs核心内容

 1、file模块 + http模块

 2、File+http模块 构建静态的webserver

 3、使用nodejs的web框架express构建主流的ApiServer

#### 五、file模块

1、创建文件夹--fs.mkdir(path[, options], callback)　

　　path - 要创建的文件夹路径

　　options 参数可以是：

　　　　recursive - 是否以递归的方式创建目录，默认为 false。

　　　　mode - 设置目录权限，默认为 0777。

　　callback - 文件夹创建完成后的回调函数，创建成功是没有参数的，如果创建失败会有个错误对象作为参数

2、读取文件夹--fs.readdir(path, callback)

3、 删除空文件夹--fs.rmdir(path, callback)

4、写入(创建)文件---fs.writeFile(filename,data,callback)

　　filename:写入文件名

　　data:写入文件的数据(String|Buffer)

　　callback(err):错误信息参数

5、读取文件内容--fs.readFile(filename,callback)

6、向文件中追加内容--fs.appendFile(filename,data,callback)

7、删除文件--fs.unlink(path,callback)

#### 六、HTTP模块构建流程

 1、导入http模块   var http = require('http')
 2、使用http模块创建一个服务器 http.creatServer(fn).listen(端口号)
 3、给服务器添加请求处理函数fn-->绑定端口 