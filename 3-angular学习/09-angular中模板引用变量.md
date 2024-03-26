我在使用表单进行提交的时候，发现这个小东西，#f="ngForm" 模板引用变量。

```HTML
<form #form="ngForm" (submit)="signin()" class="form-signin"> 
```

重要的其实是#模板引用变量。这个名词我刚看到一脸懵逼。其实理解一下这个就是创建一个对元素的引用。即如果用在HTML中就可以在别处使用对这个页面元素的引用做一些事情。

我这个需求是，在表单未填入值的时候不允许点击提交按钮。

实现方式是，用#from引用表单元素的"ngForm"（这里的ngForm是创建一个顶级的FormGroup实例，并把它绑定到该表单元素上，来跟踪表单值的变化。具体去看angular官网的介绍），然后在提交按钮button使用这个引用，当表单的值为空的时候让按钮无法点击即可。

```HTML
<button
      class="btn btn-lg btn-primary btn-block"
      [disabled]="!form.form.valid"
      type="submit">Sign in
    </button>
```

在了解模板引用变量的时候，看到一篇不错的文章，可以帮助大家理解。

→【翻译】【教程】模版引用变量的魔法（  https://www.jianshu.com/p/ad9d375bf76b   ）

