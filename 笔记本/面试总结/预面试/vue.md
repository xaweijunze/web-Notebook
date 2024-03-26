vue的响应式原理（问到reflect，不了解）

 vue的nexttick原理 

用 vue 写一个[百度]()搜索框组件（可以不写样式，只写业务逻辑，用 fetch 模拟请求） 

```
@keyup.enter 回车
@keyup.enter="searchFile(params)"
@click 点击
```

Vue 中 data 为什么是一个函数 

> Object是引用数据类型，如果不用function返回，每个组件的data都是内存的同一个地址，一个数据改变了其他也改变了；
>
> JavaScript只有函数构成作用域(注意理解作用域，**只有函数{}构成作用域**,对象的{}以及if(){}都不构成作用域),data是一个函数时，每个组件实例都有自己的作用域，每个实例相互独立，不会相互影响。

怎么实现白天黑夜主题切换 

对 Vue 还有哪些了解？生命周期说一下？父子组件的生命周期呢？ 

 有用过 vuex 吗？简单介绍一下 vuex 

 为什么 vue 不建议在 action 中修改 state 而是在 mutation 中修改？有什么好处？ 

 vue 的原理有了解吗 

Vue的数据双向绑定的实现，响应式原理 

 Vue3中对响应式原理的优化（Proxy），有哪些优势 

 Vue路由守卫，有哪些钩子 

vue组件通信方式 

 vue的响应式原理，它是怎么操作数据更新的，$watch()内部是怎么操作的 