module.exports 对象是由模块系统创建的。在我们自己写模块的时候，需要在模块最后写好模块接口，声明这个模块对外暴露什么内容，module.exports 提供了暴露接口的方法。

1、返回一个JSON Object

```javascript
var app = {
    name: 'app',
    version: '1.0.0',
    sayName: function(name){
        console.log(this.name);
    }
}
module.exports = app;
```

这种方法可以返回全局共享的变量或者方法。
调用方法：

```javascript
var app = require('./app.js');
app.sayName('hello');//hello

```

