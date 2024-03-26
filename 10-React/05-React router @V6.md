

### 1. 安装

在当前项目的路径进行安装

```
npm install react-router-dom@6
```

### 2. 路由的基本配置

创建两个页面

```jsx
//Home/index.js
import React from 'react'

export default function Home() {
    return (
        <div>
            <h2>
                首页
            </h2>
        </div>
    )
}
```

```jsx
//Login/index.js
import React from 'react'

export default function Login() {
    return (
        <div>
            <h2>
                登录页
            </h2>
        </div>
    )
}
```

创建根页面（根组件）

```jsx
//App.js
import React, { Component, useLayoutEffect } from 'react';
// 路由管理工具 router
import { Routes, Route, Link } from "react-router-dom";
import Login from "./views/Login/index"
import Home from "./views/Home/index"
export default function App(){
    return (
        <div>
            <h1>App</h1>
            <ul>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/inbox">Inbox</Link></li>
            </ul>
        </div>
    )
}

```

创建router文件

```jsx
//router/index.js
// 引入页面组件
import App from 'App'
import Home from 'views/Home/index'
import Login from 'views/Login/index'
// 引入路由组件
// BrowserRouter相当于路由模式中的history模式，可以让url不带#
// HashRouter相当于路由模式中的hash模式，url携带#
// 所有的Router组件都必须包括在Routers组件当中
import {BrowserRouter ,Routes ,Route} from 'react-router-dom'

// 写一个路由组件
const MyRouter = ()=>{
    return (
        <BrowserRouter>
         <Routes>
             <Rotue path="/" element={<App />}></Rotue>
             <Rotue path="/home" element={<Home />}></Rotue>
             <Rotue path="/Login" element={<Login />}></Rotue>

         </Routes>
        </BrowserRouter>
    )
}

export default MyRouter

```

修改入口文件 src/index.js

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import MyRouter from './router'; //

ReactDOM.render(
        <MyRouter />
    , document.getElementById('root'))
```

### 3.Link 标签

使用Link标签进行跳转

```jsx
import React, { Component, useLayoutEffect } from 'react';
// 路由管理工具 router
import { Routes, Route, Link } from "react-router-dom";
import Login from "./views/Login/index"
import Home from "./views/Home/index"
export default function App() {
    return (
        <div>
            <h1>App</h1>
            <ul>
                <li>
                    <Link to={'/home'}>首页</Link>
                </li>
                <li>
                    <Link to={'/login'}>登录页</Link>
                </li>
            </ul>
        </div>
    )
}
```

### 4. 路由嵌套Outlet 和index

Outlet 标签类似于vue中的router-view标签

路由跳转后会将Outlet部分的空间置换为路由对应的页面

### 5. 携带参数

### 6. 事件跳转页面和携带参数

```jsx
import React from 'react'
import {useNavigate} from 'react-router-dom'
export default function Login() {
    const navigate = useNavigate()
    const goHome = ()=>{
        navigate('/',{
           state: {id:789}
        });
    }
    return (
        <div>
            <h2>
                登录页
            </h2>
            <button onClick={goHome}> 跳转首页</button>
        </div>
    )
}
```

```jsx
import React, { Component, useLayoutEffect } from 'react';
// 路由管理工具 router
import { Routes, Route, Link, Outlet  ,useLocation} from "react-router-dom";
import Login from "./views/Login/index"
import Home from "./views/Home/index"
export default function App() {
    console.log(useLocation());
    return (
        <div>
            <h1>App</h1>
            <ul>
                <li>
                    <Link to={'/'}>首页</Link>
                </li>
                <li>
                    <Link to={'/home'}>主页</Link>
                </li>
                <li>
                    <Link to={'/login'}>登录页</Link>
                </li>
            </ul>
            <Outlet></Outlet>
        </div>
    )
}
```

