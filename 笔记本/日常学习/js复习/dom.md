

### 获取网页中的元素

document.getElementById();

document.getElementsByTagName();

document.getElementsByClassName();



### 获取网页中元素的属性

document.getAttribute();



### 设置属性值

document.setAttribute();



```javascript
var op = document.getElementsByTagName('p')[0];//获取标签
var title = op.getAttribute('title'); //获取title属性值
var className = op.getAttribute('class'); //获取class属性值

op.setAttribute('id','box'); //设置属性值
```

### 节点属性和方法

在文档对象模型（DOM）中，每一个节点都是一个对象，dom节点有三个重要的属性：

##### nodeName：节点的名称（只读）

注意点：

1.	元素节点的nodeName与标签名相同
2.	属性节点的nodeName与属性名相同
3.	文本节点的nodeName永远是#text
4.	文档节点的nodeName永远是#document
5.	注释节点的nodeName永远是#comment

##### nodeValue：节点的值 

1. 元素节点的nodeValue是undefined或者null
2. 文本节点的nodeValue是文本自身
3. 属性节点的nodeValue是属性的值

##### nodeType属性：节点的类型，只读的

| 元素类型 | 节点类型 |
| :------: | :------: |
|   元素   |    1     |
|   属性   |    2     |
|   文本   |    3     |
|   注释   |    8     |
|   文档   |    9     |

##### 节点对象的常用属性和方法

```javascript
var nodeFather = document,getElementById('father');
nodeFather.childNodes;//获取所有子节点 返回数组 (无法获取属性节点)
nodeFather.firstChild;//获取第一个节点
nodeFather.lastChilld;//获取最后一个节点
nodeFather.parentNode;//获取父节点
nodeFather.nextSibling;//获取下一个兄弟
nodeFather.previousSibling;//获取上一个兄弟
nodeFather.getAttributeNode("class");//获取名为class的属性节点

```

| **方法/****属性** |                           **描述**                           |
| :---------------: | :----------------------------------------------------------: |
|    Attributes     | 如果该节点是一个Element,则以NamedNodeMap形式返回该元素的属性 |
|    childNodes     | 以Node[]的形式存放当前节点的子节点，如果没有节点，则返回空数组 |
|    firstChild     | 以Node的形式返回当前节点的第一个节点，如果没有节点则返回NULL |
|     lastChild     | 以Node的形式返回当前节点的最后一个节点，如果没有节点则返回NULL |
|    parentNode     |   以Node的形式返回当前节点的父节点，如果没有节点则返回NULL   |
|  previousSibling  | 以Node的形式返回紧挨当前节点，位于它之前的兄弟节点，如果没有这样的节点则返回NULL |
|    nextSibling    | 以Node的形式返回当前节点的下一个兄弟节点，如果没有节点则返回NULL |
|     nodeName      |        节点的名字，Element节点则代表Element标记的名称        |
|     nodeType      |                        代表节点的类型                        |
|   appendChild()   | 通过把一个节点增加到当前节点的childNode[]组，给文档树增加节点 |
|    cloneNode()    |      复制当前节点，或者复制当前节点以及它的所有子孙节点      |
|  hasChildNodes()  |              如果当前节点拥有子结点，则返回true              |
|  insertBefore()   | 给文档树插入一个节点，位置在当前节点的指定位置之前，如果该节点已经存在，则删除之，然后再将节点插入到它的位置。 |
|   removeChild()   |               从文档树中删除并返回指定的子结点               |
|  replaceChild()   |    从文档树中删除并返回指定的子结点，用另一个节点替代它。    |

###### 属性节点的特性

属性节点是包含在元素节点内的，但是他的父节点并不是该元素节点，是一种特殊的节点，只能通过getAttributeNode("属性名")来获取。

##### 节点对象常用属性在不同浏览器中的兼容性问题

因为获取所有节点，会将文本节点和注释节点在内的所有节点全部获取

封装dom操作去除text节点和其他节点达到只剩下元素节点的目的

```javascript
function getChildNodes(fatherNode){ //获取全部元素节点
	var nodes = fatherNode.childNodes;
   var arr = [];
   for(var i = 0;i < nodes.length; i++){
      if(nodes[i].nodeType === 1){
         arr.push(nodes[i]);
      }
   }
	return arr;
}
var childnodes = getChildNodes(oFather);
```

```javascript
function getChildNodes(didi){ //获取下一个兄弟元素节点
	var bro = didi.nextSibling;
   while(bro&& bro.nodeType !=1){
		bro = bro.nextSibling;
   }
	return bro;
}
var bro = getChildNodes(didi);
```

##### 元素节点的增删改查方法

1. 创建节点 cerateElement();

2. 插入节点 appendchild()   

   ​	insertBefore(newNode,node) 第一个参数是新插入的节点，第二个参数是参考的节点

3. 删除节点 removeChild()

4. 替换节点 replaceChild(newNode,node)

5. 创建文本节点 createTextNode()

node.innerHTML = '';将引号内的代码加入到节点内，可以渲染标签

node.innerText = '';  将引号内的文本加入到节点内，以文本的形式添加

###### 使用方法

```javascript
var oDiv = document.getElementById('box');
var newNode = document.createElement('p');
var newNode2 = document.createElement('p'); 
newNode.setAttribute('class','active');//给元素新增属性
oDiv.appendChild(newNode); //插入元素

var textNode = document.createTextNode('alex');//新建文本节点
newNode.appendChild(textNode);//将节点插入元素节点

newNode2.innerHTML = '<a href="#" >qq.com </a>'; 
oDiv.insertBefore(newNode2,textNode);//添加节点在某节点之前

oDiv.removerChild(newNode);   //删除
oDiv.replaceChild(newNode,newNode2)//newNode替换newNode2
```

### 设置样式

##### 动态操作样式（直接操作样式属性 优先级高，加到行内了）

元素的style属性

```javascript
var op = document.getElementById('box');
console.log(op.style);
op.style.backgroundColor = "black";
op.style.width = "200px";
op.style.height = "200px";
```

##### 通过控制属性的类名来控制样式（常用）

```html
<html>
   <head>
         <style>
            .highLight {
               background-color: black;
               color: white;
               width: 200px;
               height: 200px;
               line-height: 250px;
               text-align: center;
               font-size: 20px;
            }
      	</style>
   </head>
   <body>
      <p id="box">
         MJJ
      </p>
      <script>
      	var para = document.getElementById("box");
         para.setAttribute('class','highLight');
      </script>
   </body>
</html>
```

### 事件介绍

|    事件     |         说明         |
| :---------: | :------------------: |
|   onclick   |     鼠标单击事件     |
| onmouseover |     鼠标经过事件     |
| onmouseout  |     鼠标移开事件     |
|  onchange   |  文本框内容改变事件  |
|  onselect   | 文本框内容被选中事件 |
|   onfocus   |     光标聚焦事件     |
|   onblur    |     光表失焦事件     |
|   onload    |     网页加载事件     |

##### onclick

```html
<body>
   <div id="box"> </div>
   <script> 
      var oDov = document.getElementById('box');
      //方式1，直接添加
      oDIv.onclick = function() {
         alert('触发事件')；
      }
      
      //方式2，声明函数（推荐）
      var add = function() {
         alert('触发事件');
      }
      oDiv.onclick = add();
   </script>
</body>
```

##### onmouseover & onmouseout

```html
<body>
   <div id="box"> </div>
   <script> 

      //1.找到触发的事件对象 2.事件 3.事件处理程序
      
      //1.找到事件对象
      var oDov = document.getElementById('box');
		//2.鼠标滑过事件
		oDiv.onmouseover = fucntion(){
         //3.事件处理程序
         this.style.backgroundColor = "black";
      }
      //2.鼠标移开事件
		oDiv.onmouseout = fucntion(){
         //3.事件处理程序
         this.style.backgroundColor = "black";
      }
   </script>
</body>
```

##### onfocus & onblur

```html
<body>
   <form>
      <div id="input_userName">
         <input type="userName" name="userName" id="userName">
      </div>
      <div id="input_pwd">
          <input type="password" name="pwd" id="pwd">
      </div>
   </form>
   <script> 

      //1.找到触发的事件对象 2.事件 3.事件处理程序
      
      //1.找到事件对象
      var inputDiv = document.getElementById('input_userName');
		//2.光标聚焦事件
		inputDiv.onfocus = fucntion(){
         //3.事件处理程序
         this.innerHTML = '请输入用户名'；
      }
      //2.光标失焦事件
		inputDiv.onblur = fucntion(){
         //3.事件处理程序
         this.innerHTML = '请输入正确的用户名'；
      }
   </script>
</body>
```

##### 文本选中事件和文本框修改事件

```HTML
<body>
   <textarea cole="30" rows="10"> </textarea>
   <script> 
		var textArea = document.getElementByTagName("textArea")[0];
      teatArea.onselect = function() {
			textArea.style.border = "10px soild #00a0dc";
      }
      teatArea.onchange = function() {
			console.log("内容被修改");
         console.log("修改后的内容"+this.value);


      }
   </script>
</body>
```

##### 窗口加载对象

```HTML
<head>
   <title> 窗口加载事件 </title>
   <script> 
      //等待文档元素加载完毕之后，才会调用
      //覆盖现象：多个onload事件，只会执行最后一个onload事件
		window.onload = function(){
         //操作
      }
   </script>
</head>
<body>
   
</body>
```

