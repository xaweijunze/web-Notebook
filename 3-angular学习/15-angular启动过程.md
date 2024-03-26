angular启动过程

要弄清楚 Angular 的启动过程，就要弄明白 Angular 启动时加载了哪个页面，加载了哪些脚本，这些脚本做了哪些事？

通过 Angular 的编译依赖文件 .angular-cli.json 可以看到 apps 这个对象类的数组

![img](file:////Users/weijunze/Library/Group%20Containers/UBF8T346G9.Office/TemporaryItems/msohtmlclip/clip_image001.png)

这个对象中有 root 这个属性，这个是 Angular 应用的根目录，也即是 src 目录是 Angular 应用的根目录。

这个对象中有 index 这个属性，这个是 Angular 启动时加载的页面，也即是 src 目录下的 index.html 是 Angular 启动时加载的页面。

这个对象中有 main 这个属性，这个是 Angular 启动时加载的脚本，也既是 src 目录下的 main.ts 是 Angular 启动时加载的脚本。负责引导 Angular 的启动。

main.ts 文件内容如下

![img](file:////Users/weijunze/Library/Group%20Containers/UBF8T346G9.Office/TemporaryItems/msohtmlclip/clip_image002.png)

\1. 引入 enableProdMode 模块，可以通过这个方法来关闭 Angular 的开发者模式，if(environment.production){enableProdMode();}如果为生产环境则关闭开发者模式，

\2. Angular 导入 platformBrowserDynamic 模块来启动这个应用，

\3. 导入命令行工具生成的整个应用的主模块 AppModule，

\4. 导入环境配置文件 environment, 通过该目录下的 environment.prod.ts 配置文件配置生产环境，通过 environment.ts 文件来配置开发环境，还可以自定义测试环境，如 environment.test.ts

 

Angular 通过 AppModule 模块来启动应用，并加载该模块需要的子模块

app.module.ts 内容如下：

![img](file:////Users/weijunze/Library/Group%20Containers/UBF8T346G9.Office/TemporaryItems/msohtmlclip/clip_image003.png)

\1. 向外暴露了一个 AppModule 类。

\2. 使用 NgModule 装饰器生命了一个模块

\3. declarations 申明模块中有什么东西，该申明中只能声明组件、指令、管道

\4. imports 申明要让应用正常运转还需要什么东西，因为程序要运行在浏览器中，所以 BrowserModule 模块是必须要的。

\5. providers 申明模块中需要用到的服务

\6. bootstrap 属性申明了主组件

 

Angular 应用在加载时，会加载 AppModule 模块以及该模块所依赖的所有子模块。

为了弄明白加载的页面，分析 app.comonment.ts 这个组件：

![img](file:////Users/weijunze/Library/Group%20Containers/UBF8T346G9.Office/TemporaryItems/msohtmlclip/clip_image004.png)

\1. 从 angular 核心模块中引入 Component 组件模块，

\2. 在元数据装饰器中指明了选择器 app-root ，模板 app.comonent.html，样式 app.component.css，

\3. 在 AppComponent 类中，定义了 title 属性，并为其赋值。

 

在 index.html 中

![img](file:////Users/weijunze/Library/Group%20Containers/UBF8T346G9.Office/TemporaryItems/msohtmlclip/clip_image005.png)

<app-root></app-root> 这里的内容将会被替换，替换内容为选择器为 app-root 的模板内容，既是 app.component.html 的内容：

![img](file:////Users/weijunze/Library/Group%20Containers/UBF8T346G9.Office/TemporaryItems/msohtmlclip/clip_image006.png)

\1. 该模板中，{{title}} 是插值表达式，被其控制器的类的属性 title 值替换为 “app”。

于是，启动 Angular 应用并在浏览器中查看时，先显示“欢迎...”，随后被替换为 app.component.html 的内容：

![img](file:////Users/weijunze/Library/Group%20Containers/UBF8T346G9.Office/TemporaryItems/msohtmlclip/clip_image007.png)

![img](file:////Users/weijunze/Library/Group%20Containers/UBF8T346G9.Office/TemporaryItems/msohtmlclip/clip_image008.png)

 