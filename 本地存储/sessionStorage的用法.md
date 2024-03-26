

> 以下代码实现了
>
> 在index1.html中将数据写入sessionStorage
>
> 在index2中修改数据
>
> 最后在index3中获取数据并显示
>
> （入口是index1.html文件）

Index1.html

```html
<body>
    <button style="height: 30px;" onclick="jump()">跳转到session2</button>
    <script>
       //临时存储使用的是key value数据结构
       //注意value值只能是字符串无法存储对象
       //关闭浏览器或者页面后数据会过期
       //如果想要存储对象需要将对象转换成字符串
       //JSON.stringify() 和 JSON.parse()
        var preson = {
            uname: '小明',
            age:'18'
        }
        //将对象转换成字符串
        var presonStr = JSON.stringify(preson);
        console.log(presonStr);
        //写入sessionStorage
        window.sessionStorage.setItem("person",presonStr);
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
    <button style="height: 30px;" onclick="jump()">跳转到session3</button>
    <script>
       //获取数据并转化成对象
        var personStr = sessionStorage.getItem('person');
        var person = JSON.parse(personStr);
			//修改数据
        person.uname = '小红'
        personStr = JSON.stringify(person);
			//再次写入输入
        sessionStorage.setItem('person',personStr)
        function jump(){
           //跳转页面
            location.replace('index3.html');
        }
    </script>
</body>
```

index3.html

```js
<body>
    从session获取到的名称为：<span id="span_data"> </span>
    <script>
        // 获取span标签
        var span_data = document.getElementById('span_data');
        // 获取sessionStorage中的数据
        var personStr = sessionStorage.getItem('person');
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

