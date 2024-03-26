外边距合并问题

```css
div {
        margin: 50px auto;
        width: 100px;
        border: 1px solid black;
    }
```

两个盒子都有上下为50px的外边距，理论上来讲，盒子应该上下库里100px。但是实际上，两个盒子的距离只有50px，这里出现了margin外边距合并的问题。

合并的外边距会取两个外边距中较大的那一个。

这里取的是50px。

![image-20210616164352855](03-margin合并.assets/image-20210616164352855.png)

