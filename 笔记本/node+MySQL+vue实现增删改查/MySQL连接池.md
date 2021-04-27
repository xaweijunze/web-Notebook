Mysql

mysql 是一个第三方的数据库模块，使用前需要安装 npm i mysql。

```javascript
const mysql = require('mysql')

// 连接 mysql 服务器

const connection = mysql.createConnection({
host: '127.0.0.1',

port: '3306',

user: 'root',

password: ''

})

// 执行SQL

connection.query(sql, function (err, result) {
err // 错误信息

result // 结果

})

// 销毁连接 | 由于 JS 是异步的，所以当前代码会在执行 SQL 之前就销毁了连接

connection.destroy()
```

Pool 连接池

用 createConnection 创建 Mysql 连接，每执行一次 connection.query 都是一个全新的连接，会造成一个资源的极大浪费，降低性能。

连接池是另外的一种执行方法，它一次性的创建了多个连接，然后根据客户端的查询，自动的 分发、复用、管理 这些连接。

```javascript
const mysql = require('mysql')

// 链接池：创建多个链接、复用与分发链接

const pool = mysql.createPool({
host: '127.0.0.1',

port: '3306',

user: 'root',

password: ''

})

// 封装

var query = function(sql,callback){
pool.getConnection(function(err,connection){
	connection.query(sql,function(err,results){
		callback(err, results) // 结果回调
		connection.release() // 释放连接资源 | 跟 connection.destroy() 不同，它是销毁

})

}

})

}

// 随机分配一个连接

pool.query(sql, function (err, result) {
// ...

}
```

SQL 注入

在写 SQL 语句的时间尽量不要使用 SQL 拼装，因为很容易被 SQL注入，从而引发安全问题，如果数据和 SQL 语句需要分离，那么请使用 **占位符** 的方式。

```javascript
connection.query("select * from users where id = ? and name = ?", [1, 'jmjc'], (err, result)=>{}) 

// 这种方式 mysql 模块内部会调用 escape 方法，过滤掉一些非法的操作

/*

当前我们也可以自己使用 escape 方法

*/

connection.query('select * from users where id = ' + connection.escape(userId), (err, result) => {
   
})

/*

或者 format 方法

*/

const sql = "select * from ?? where ?? = ?"

const inserts = ['users', 'id', 1]

sql = mysql.format(sql, inserts) // select * from users where id = 1
```

