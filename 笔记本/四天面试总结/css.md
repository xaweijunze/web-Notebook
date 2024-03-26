### 几道前端经典css面试题

#### 1.掌握盒子水平垂直居中的五大方案

回答：这种问题在我之前的项目当中经常遇到，最开始我用的方法是display：flex，后来了解到css3之后，

- 定位：三种

```css
/* 定位1 
	需要知道子盒子的宽高
*/
		body {
			position: relative;
		}

		.box {
			position: absolute;
			top: 50%;
			left: 50%;
			margin-top: -25px;
			margin-left: -50px;
		}

/* 定位2 
	子盒子必须有宽高，可以不知道，但是必须有宽高
*/
		.box {
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			margin: auto;
		}

/* 定位3  
	不需要具体宽高，可以由内容撑开
	css3新增transform
	有兼容问题
*/
		.box {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
		}
```



- display:flex

```css
/* display: flex; 
	不兼容，移动端经常用这种方法
	不过当前不考虑兼容，vue
*/
		body {
			display: flex;
			justify-content: center;
			align-items: center;
		} 
```



- javascript

```JavaScript
// JavaScript方法
// 这种方法也是通过获取盒子宽高，设置盒子位置完成
		let HTML = document.documentElement,
          winW = HTML.clientWidth,
          winH = HTML.clientHeight,
          boxW = box.offsetWidth,
          boxH = box.offsetHeight;
		box.style.position = "absolute";
		box.style.left = (winW - boxW) / 2 + 'px';
		box.style.top = (winH - boxH) / 2 + 'px'; 
```



- display:table-cell

```css
body {
			display: table-cell;
			vertical-align: middle;
			text-align: center;
			/* 固定宽高 */
			width: 500px;
			height: 500px;
		}

		.box {
			display: inline-block;
		}
```



#### 2.关于css3中盒模型的几道题

##### 标准盒子模型

![image-20210511150446342](/Users/weijunze/Desktop/webNotebook/笔记本/四天面试总结/css.assets/image-20210511150446342.png)

**标准盒模型下盒子的大小** = **content** + **border** + **padding** + **margin**

##### IE（怪异）盒子模型

![image-20210511150510209](/Users/weijunze/Desktop/webNotebook/笔记本/四天面试总结/css.assets/image-20210511150510209.png)

**怪异盒模型下盒子的大小=width（content + border + padding） + margin**

可以通过属性box-sizing来设置盒子模型的解析模式

可以为**box-sizing**赋三个值：

**content-box**： *默认值*，border和padding不算到width范围内，可以理解为是W3c的标准模型(default)

**border-box**：border和padding划归到width范围内，可以理解为是IE的怪异盒模型

**padding-box：**将padding算入width范围 

- 当设置为box-sizing:content-box时，将采用标准模式解析计算（默认模式）；
- 当设置为box-sizing:border-box时，将采用怪异模式解析计算；

##### **FLEX盒模型**

![image-20210511152439286](/Users/weijunze/Desktop/webNotebook/笔记本/四天面试总结/css.assets/image-20210511152439286-0717880.png)

https://www.ruanyifeng.com/blog/2015/07/flex-grammar.html



##### 多列布局

![image-20210511152413347](/Users/weijunze/Desktop/webNotebook/笔记本/四天面试总结/css.assets/image-20210511152413347.png)

#### 3.掌握几大经典布局方案

圣杯布局 双飞翼布局=>左右固定，中间自适应

##### 圣杯布局：浮动和负margin

一个奖杯，左右把手和奖杯杯体是一体的

```html
<style>
    html,
    body {
        height: 100%;
        overflow: hidden;
    }

    .container {
        height: 100%;
        padding: 0 200px;
    }

    .left,
    .right {
        width: 200px;
        min-height: 200px;
        background: lightblue;
    }

    .center {
        width: 100%;
        min-height: 400px;
        background: lightsalmon;
    }

    .left,
    .center,
    .right {
        float: left;
    }

    .left {
        margin-left: -100%;
        position: relative;
        left: -200px;
    }

    .right {
        margin-right: -200px;
    }
</style>

<div class="container clearfix">
    <div class="center"></div>
    <div class="left"></div>
    <div class="right"></div>
</div>
```



##### 双飞翼布局：

一个人体和两个翅膀，翅膀可分离，并非一体

```html
<style>
    html,
    body {
        height: 100%;
        overflow: hidden;
    }

    .container,
    .left,
    .right {
        float: left;
    }
    .container {
        width: 100%;
    }
    .container .center {
        margin: 0 200px;
        min-height: 400px;
        background: lightsalmon;
    }
    .left,
    .right {
        width: 200px;
        min-height: 200px;
        background: lightblue;
    }
    .left {
        margin-left: -100%;
    }
    .right {
        margin-left: -200px;
    }
</style>

<body class="clearfix">
    <div class="container">
        <div class="center"></div>
    </div>
    <div class="left"></div>
    <div class="right"></div>
</body>
```

##### CALC 

```css
.center {
    /* 兼容到IE9  css尽量少些表达式 */
    width: calc(100% - 400px);
    min-height: 400px;
    background: #ffa07a;
}
......
```

##### flex



| 属性            | 内容               | 属性值                                 |
| --------------- | ------------------ | -------------------------------------- |
| flex-direction  | 主轴方向           | 水平方向、垂直方向                     |
| justify-content | 主轴上的对齐方式   | 开始对齐、结束对齐、居中对齐、两端对齐 |
| align-items     | 交叉轴上的对齐方式 | 开始对齐、结束对齐、居中对齐           |
| flex-wrap       | 是否换行           |                                        |

##### 子元素相关

| 属性                    | 内容                       | 属性值                       |
| ----------------------- | -------------------------- | ---------------------------- |
| align-self              | 子元素在交叉轴上的对齐方式 | 开始对齐、结束对齐、居中对齐 |
| 可以覆盖align-items属性 |                            |                              |



父元素

- flex-direction  属性决定主轴的方向（即项目的排列方向）。
  - `row`（默认值）：主轴为水平方向，起点在左端。
  - `row-reverse`：主轴为水平方向，起点在右端。
  - `column`：主轴为垂直方向，起点在上沿。
  - `column-reverse`：主轴为垂直方向，起点在下沿。
- flex-wrap  属性定义，如果一条轴线排不下，如何换行。
  - `nowrap`（默认）：不换行。
  - `wrap`：换行，第一行在上方。
  - `wrap-reverse`：换行，第一行在下方。
- flex-flow属性是`flex-direction`属性和`flex-wrap`属性的简写形式，默认值为`row nowrap`
  - 
- justify-content 属性定义了项目在主轴上的对齐方式。
  - `flex-start`（默认值）：左对齐
  - `flex-end`：右对齐
  - `center`： 居中
  - `space-between`：两端对齐，项目之间的间隔都相等。
  - `space-around`：每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍。
- align-items 属性定义项目在交叉轴上如何对齐。
  - `flex-start`：交叉轴的起点对齐。
  - `flex-end`：交叉轴的终点对齐。
  - `center`：交叉轴的中点对齐。
  - `baseline`: 项目的第一行文字的基线对齐。
  - `stretch`（默认值）：如果项目未设置高度或设为auto，将占满整个容器的高度。
- align-content 属性定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。
  - `flex-start`：与交叉轴的起点对齐。
  - `flex-end`：与交叉轴的终点对齐。
  - `center`：与交叉轴的中点对齐。
  - `space-between`：与交叉轴两端对齐，轴线之间的间隔平均分布。
  - `space-around`：每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍。
  - `stretch`（默认值）：轴线占满整个交叉轴。

子元素的属性

- `order` 属性定义项目的排列顺序。数值越小，排列越靠前，默认为0。
- `flex-grow`  属性定义项目的放大比例，默认为`0`，即如果存在剩余空间，也不放大。
- `flex-shrink` 属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。
- `flex-basis` 属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为`auto`，即项目的本来大小。
- `flex` 属性是`flex-grow`, `flex-shrink` 和 `flex-basis`的简写，默认值为`0 1 auto`。后两个属性可选。
- `align-self` 属性允许单个项目有与其他项目不一样的对齐方式，可覆盖`align-items`属性。默认值为`auto`，表示继承父元素的`align-items`属性，如果没有父元素，则等同于`stretch`。

```css
html,
body {
    overflow: hidden;
}

.container {
    display: flex;
    justify-content: space-between;
    height: 100%;
}

.left,
.right {
    flex: 0 0 200px;
    height: 200px;
    background: lightblue;
}

.center {
    flex: 1;
    min-height: 400px;
    background: lightsalmon;
}
```

##### 定位方式

```css
<style>
    html,
    body {
        height: 100%;
        overflow: hidden;
    }

    .container {
        position: relative;
        height: 100%;
    }

    .left,
    .right {
        position: absolute;
        top: 0;
        width: 200px;
        min-height: 200px;
        background: lightblue;
    }

    .left {
        left: 0;
    }

    .right {
        right: 0;
    }

    .center {
        margin: 0 200px;
        min-height: 400px;
        background: lightsalmon;
    }
</style>
```

#### 4.移动端响应式布局开发的三大方案

- media
- rem
- flex
- vh / vw
- ……

#### 
