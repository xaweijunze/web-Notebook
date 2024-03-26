> 在用vue的兄弟们始终绕不开vue的数据双向绑定，在vue的2.x版本中用object.defineProperty来实现双向数据绑定原理，而在vue3.0版本中用Proxy这个对象来代替object.defineProperty实现数据的双向绑定。但是换汤不换药，这俩种数据双向绑定都是基于数据劫持来实现的。

　　**数据劫持：**当访问或者设置对象的属性的时候，触发相应的函数，并且返回设置属性的值。

　　**1.VUE2.0通过Object.defineProperty来劫持对象属性的getter和setter操作，当数据发生变化时发出通知**

　　**2.VUE3.0通过Proxy来劫持数据，当数据发生变化时发出通知**

#### 　**数据劫持的优势：**

　　①不需要进行显示调用，vue的双向绑定原理就是通过数据劫持+发布订阅来实现的，比如angular的脏检查需要通过显示调用markForCheck，react则需要通过setState来进行显示调用

　　②通过属性的劫持可以精准获得变化的内容，这部分不需要额外的diff操作，减少性能消耗

### proxy相较于object.defineProperty的优势

- 直接监听对象而非属性
- 直接监听数组的变化
- 拦截方式较多（有13种方式）
- Proxy返回一个新对象，可以只操作新对象达到目的，而Object.defineProperty只能遍历对象属性直接修改（需要用深拷贝进行修改）
- Proxy作为新标准将受到浏览器厂商重点持续的性能优化

##### Vue2.0

```html
<body>
    <h1></h1>
    <input type="text" />
</body>

<!-- 发布者 订阅者模式 -->
<script>
    var book = {
        name :''
    };
    var input = document.getElementsByTagName('input')[0];
    var h1 = document.getElementsByTagName('h1')[0];
   
    Object.defineProperty(book, "name", {
        set: function (value) {
            name = value;
            // 检测到数据变化的时候, 更新一下dom
            h1.innerText = value;
        },

        get: function (value) {
            return name;
        }
    });
    //input事件: 只要文本框内容发生了变化, 就会执行回调函数
    input.addEventListener("input", function () {
        book.name = input.value;
    })
</script>
```

##### vue3.0

```js
<body>
 9     <div>
10         <input type="text" id="input">
11         <span id="text"></span>
12     </div>
13 </body>
14 </html>
15 <script>
16     var obj = {};
17     var obj1 = new Proxy(obj, {
18         // target就是第一个参数obj, receive就是返回的obj(返回的proxy对象)
19         get: function (target, key, receive) {
20             // 返回该属性值
21             return target[key];
22         },
23         set: function (target, key, newVal, receive) {
24             // 执行赋值操作
25             target[key] = newVal;
26             document.getElementById('text').innerHTML = target[key];
27         }
28     })
29     document.addEventListener('keyup', function (e) {
30         obj1[0] = e.target.value;
31     });
32 </script>
```

