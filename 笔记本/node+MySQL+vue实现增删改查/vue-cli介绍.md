<h1>vue-cli介绍</h1>



### 目录介绍

   创建完成的“exprice”目录如下：![img](https://images2018.cnblogs.com/blog/1158910/201804/1158910-20180402144308583-1187979370.png)

　　简单说明下各个目录都是干嘛的：

![img](https://images2018.cnblogs.com/blog/1158910/201804/1158910-20180402144503205-1826635828.png)

#### 总体框架



一个vue-cli的项目结构如下，其中src文件夹是需要掌握的，所以本文也重点讲解其中的文件，至于其他相关文件，了解一下即可。

![img](https://images2018.cnblogs.com/blog/1158910/201804/1158910-20180402175800742-1696202686.png)

### 文件结构细分

#### 1、build——[webpack配置]

　　build文件主要是webpack的配置，主要启动文件是dev-server.js，当我们输入npm run dev首先启动的就是dev-server.js，它会去检查node及npm版本，加载配置文件，启动服务。

![img](https://images2018.cnblogs.com/blog/1158910/201804/1158910-20180402175936133-215127202.png)

#### 2、config——[vue项目配置]

　　config文件主要是项目相关配置，我们常用的就是当端口冲突时配置监听端口，打包输出路径及命名等

 ![img](https://images2018.cnblogs.com/blog/1158910/201804/1158910-20180402180007091-457573921.png)

#### 　　3、node_modules——[依赖包]

　　node_modules里面是项目依赖包，其中包括很多基础依赖，自己也可以根据需要安装其他依赖。

　　安装方法为打开cmd，进入项目目录，输入npm install [依赖包名称]，回车。

　　在两种情况下我们会自己去安装依赖：

　　（1）项目运行缺少该依赖包：例如项目加载外部css会用到的css-loader，路由跳转vue-loader等（安装方法示例：npm install css-loader）

　　（2）安装插件：如vux（基于WEUI的移动端组件库），vue-swiper（轮播插件）

　　注：有时会安装指定依赖版本，需在依赖包名称后加上版本号信息，如安装11.1.4版本的vue-loader，输入npm install vue-loader@11.1.4

#### 　　4、src——[项目核心文件]

　　项目核心文件前面已经进行了简单的说明，接下来重点讲解main.js，App.vue及router的index.js

###  脚手架代码详解

 　我们看下创建后的项目目录里的主要文件：![img](https://images2018.cnblogs.com/blog/1158910/201804/1158910-20180402154419059-1173519061.png)

#### 　　**1、index.html——[主页]**

　　这个没什么好说的，就是一个简单的html页面，这里id='app'，是为后面的设置vue作用域有关的。

　　index.html如其他html一样，但一般只定义一个空的根节点，在main.js里面定义的实例将挂载在根节点下，内容都通过vue组件来填充

![img](https://images2018.cnblogs.com/blog/1158910/201804/1158910-20180402180252353-953953869.png)

#### 　　**2、文件：Hello.vue**





　　说明：在*.vue文件，template标签里写html代码，且template直接子级只能有一个标签。style标签里写样式，script里面写js代码。

#### 　　**3、文件：App.vue——[根组件]**

```
<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/> //这里是用来展示路由页面内容的，如果想用跳转就用<router-link to='xxx'></router-link>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
```

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

　　一个vue页面通常由三部分组成:模板(template)、js(script)、样式(style)：

##### 　　**【template】**

　　其中模板只能包含一个父节点，也就是说顶层的div只能有一个（例如下图，父节点为#app的div，其没有兄弟节点）

　　<router-view></router-view>是子路由视图，后面的路由页面都显示在此处。打一个比喻吧，<router-view>类似于一个插槽，跳转某个路由时，该路由下的页面就插在这个插槽中渲染显示

![img](https://images2018.cnblogs.com/blog/1158910/201804/1158910-20180402180545281-1547484474.png)

##### 　　**【script】**

　　vue通常用es6来写，用export default导出，其下面可以包含数据data，生命周期(mounted等)，方法(methods)等，具体语法请看vue.js文档，在后面我也会通过例子来说明。

##### 　　**【style】**

　　样式通过style标签<style></style>包裹，默认是影响全局的，**如需定义作用域只在该组件下起作用，需在标签上加scoped，<style scoped></style>**

　　如要引入外部css文件，首先需给项目安装css-loader依赖包，打开cmd，进入项目目录，输入npm install css-loader，回车。安装完成后，就可以在style标签下import所需的css文件，例如：

```
<style>
    import './assets/css/public.css'
</style>
```

　　这样，我们就可以把style下的样式封装起来，写到css文件夹，再引入到页面使用，整个vue页面也看上去更简洁。

#### 　　**4、文件：main.js——[入口文件]**

　　这个js文件是主页面配置的主入口。主要是利用ES6的模块化引入模板

　　main.js主要是引入vue框架，根组件及路由设置，并且定义vue实例，下面代码中的components:{App}就是引入的根组件App.vue

　　后期还可以引入插件，当然首先得安装插件。

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

```
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue' // 引入vue文件
import App from './App'// 引入同目录下的App.vue模块
import router from './router'// 引入vue的路由

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',//定义作用范围就是index.html里的id为app的范围内
  router,//引入路由
  components: { App },//注册引入的组件App.vue
  template: '<App/>'//给Vue实例初始一个App组件作为template 相当于默认组件
})
```

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

#### 　　**5、router——[路由配置]**

　　router文件夹下，有一个index.js，即为路由配置文件

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

```
import Vue from 'vue'  //引用vue文件
import Router from 'vue-router'  //引用vue路由模块，并赋值给变量Router
import HelloWorld from '@/components/HelloWorld'  //英文HelloWorld.vue模版，并赋值给变量HelloWorld,这里是“@”相当于“../”

Vue.use(Router)  //使用路由

export default new Router({
  routes: [  //进行路由配置，规定“/”引入到HelloWorld组件
    {
      path: '/',
      name: 'HelloWorld',  //这个name暂时不知道用啥用，根据官方文档说的是方便排错的
      component: HelloWorld  //注册HelloWorld组件
    }
  ]
})
```

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

　　这里定义了路径为'/'的路由，该路由对应的页面是HelloWorld组件，所以当我们在浏览器url访问http://localhost:8080/#/时就渲染的Hello组件

　　类似的，我们可以设置多个路由，‘/index’,'/list'之类的，当然首先得引入该组件，再为该组件设置路由。

　　说明：如果需要增加组件那就在components文件下定义xx.vue文件并编写代码即可；如果需要配置路由就要在index.js进行路由“路径”配置；还需要点击跳转就要用到<router-link></router-link>标签了。