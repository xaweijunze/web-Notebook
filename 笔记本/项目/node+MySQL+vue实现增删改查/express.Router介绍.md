

Express专门提供了路由功能用来封装请求

创建一个路由，express.Router()

```javascript
var express = require('express')

// 1. 创建一个路由容器
var router = express.Router()

router.get('/get', function(req, res) {
  res.send('请求了/get')
})
router.get('/list', function(req, res) {
  res.send('请求了 /list')
})
router.post('/add', function(req, res) {
  res.send('请求了 /add')
})
//最后导出
module.exports = router

//自己设计路由
// module.export=function(app){
//   app.get('/get', function(req, res) {
//     res.send('请求了/get')
//   })
//   app.get('/list', function(req, res) {
//     res.send('请求了 /list')
//   })
//   app.post('/add', function(req, res) {
//     res.send('请求了 /add')
//   })
// }

```

导入路由

```javascript
/**

 * 根据单一职责
 * 入口文件做请求处理不太好，可以用路由来解决
    */
   var express = require('express')
   //引入路由模块文件
   var router = require('./03router')
   var bodyParser = require('body-parser')

var app = express()
app.use('/public/', express.static('./public'))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//自己设计的
//router(app)

//导入路由
app.use(router)

app.listen(4000, function() {
  console.log('server is running...')
})
```

