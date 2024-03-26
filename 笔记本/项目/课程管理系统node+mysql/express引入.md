Express是目前最流行的基于Node.js的Web开发框架，可以快速地搭建一个完整功能的网站。

Express上手非常简单，首先新建一个项目目录，假定叫做hello-world。

```
$ mkdir hello-world
```

进入该目录，新建一个package.json文件，内容如下。

```
{
  "name": "hello-world",
  "description": "hello world test app",
  "version": "0.0.1",
  "private": true,
  "dependencies": {
    "express": "4.x"
  }
}
```

上面代码定义了项目的名称、描述、版本等，并且指定需要4.0版本以上的Express。

然后，就可以安装了。

```
$ npm install
```

执行上面的命令以后，在项目根目录下，新建一个启动文件，假定叫做index.js。

```
var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

app.listen(8080);
```

然后，运行上面的启动脚本。

```
$ node index
```

现在就可以访问`http://localhost:8080`，它会在浏览器中打开当前目录的public子目录（严格来说，是打开public目录的index.html文件）。如果public目录之中有一个图片文件`my_image.png`，那么可以用`http://localhost:8080/my_image.png`访问该文件。