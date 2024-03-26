1.HTML语义化

> 语义化可以让搜索引擎的爬虫程序更容易地理解代码(SEO:搜索引擎优化)

```js
//使用superagent + cheerio

//爬取一个网页url的全部内容
const result = superagent.get(url);
//获取HTML字符串
const html  = result.text;

//读取HTML字符串
const $ = cheerio.load(html)

//获取所有的div.product元素
const products = $('.product');
```

2.块级元素和行内元素

> 块级元素： display: block|table
>
> 特点：独占一行，无论内容的长度是多少
>
> ​	div p h1 ul li table form
>
> 行内元素： display: inline|inline-block
>
> 特点：不会独占一行，会顺序排列，直到没有足够的空间（排不下就换行）
>
> 如果不想要换行的话就需要给父元素设置宽度
>
> ​	span a img input select textarea iframe

