请求后端数据的方式在任何框架中都非常重要。

在angular中注入HttpClient可以来请求后端数据。

### 1.在app.module.ts中注入依赖

```js
//app.module.ts
import {HttpClientModule} from "@angular/common/http";
...

imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule //声明
  ],
```

### 2.在组件中引入并使用

1. 首先需要在组件的component.ts文件中引入

```ts
//signin.component.ts
import { HttpClient } from '@angular/common/http'
...

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

```

2. 在组件component.ts中使用

```js
//signin.component.ts

signin () {
    this.http.post('http://www.forus616.cn:3010/session', this.SigninForm)
      .toPromise()
      .then((data: any) => {
        window.localStorage.setItem('auth_token', data.token)
        window.localStorage.setItem('user_info', JSON.stringify(data.user))
        this.router.navigate(['/'])
      })
      .catch(err => {
        if (err.status === 401) {
          this.err_message = '登陆失败，邮箱或密码错误'
           alert("登陆失败，邮箱或密码错误");
        }
      })
  }
```

### 注意事项

Angular 9默认启用的Ivy在使用HttpClientModule时将导致编译失败

编辑`./tsconfig.json`，在`angularCompilerOptions`中添加`"enableIvy": false`，相关部分代码如下所示。

```json
  "angularCompilerOptions": {
    "enableIvy": false
  }
```
