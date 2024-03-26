

> 以下代码实现了
>
> 在index1.html中将数据写入localStorage
>
> 在index2中修改数据
>
> 最后在index3中获取数据并显示
>
> 最后在index4.html 中清空localStorage中的数据
>
> ​	localStorage.removeItem("person");
>
> （入口是index1.html文件）

Index1.html

```html
<body>
    <button style="height: 30px;" onclick="jump()">跳转到localStorage2</button>
    <script>
       //本地存储使用的是key value数据结构
       //注意value值只能是字符串无法存储对象
       //数据并不会过期
       //如果想要存储对象需要将对象转换成字符串
       //JSON.stringify() 和 JSON.parse()
        var preson = {
            uname: '小明',
            age:'18'
        }
        //将对象转换成字符串
        var presonStr = JSON.stringify(preson);
        console.log(presonStr);
        //localStorage
        window.localStorage.setItem("person",presonStr);
        function jump(){
           //跳转tag页面
            location.replace('index2.html');

        }
    </script>
</body>
```

index2.html

```js
<body>
    <button style="height: 30px;" onclick="jump()">跳转到localStorage3</button>
    <script>
        var personStr = localStorage.getItem('person');
        var person = JSON.parse(personStr);
        person.uname = '小红'
        personStr = JSON.stringify(person);
        localStorage.setItem('person',personStr)
        function jump(){
            location.replace('index3.html');
        }
    </script>
</body>
```

index3.html

```js
<body>
    从localStorage获取到的名称为：<span id="span_data"> </span>
    <script>
        // 获取span标签
        var span_data = document.getElementById('span_data');
        // 获取localStorage中的数据
        var personStr = localStorage.getItem('person');
        var person = null;
        if(personStr != null && personStr.length > 0){
            person = JSON.parse(personStr)
            span_data.innerText=JSON.stringify(person.uname);
        }else{
            alert('没有获取到值');
        }
        console.log(personStr);
        
        
    </script>
</body>
```

Index4.html 清空localStorage

```js
<body>
    <script>
        localStorage.removeItem('person');
    </script>
</body>
```

