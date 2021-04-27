```javascript
// To illustrate the concept of callback
var doit = function(callback)
{
  var a = 1,
    b = 2,
    c = 3;
  var t = callback(a,b,c);
  return t + 10;
};
var d = doit(function(x,y,z){
  return (x+y+z);
});
console.log(d);
```


先定义 doit 函数，有一个参数 callback。这个 callback 就是回调函数，名字可以任意取。看函数体，先定义三个变量 a,b,c。然后调用 callback 函数。最后返回一个值。



下面就调用 doit 函数了。要注意的是，刚才定义 doit 时，callback 并没有定义，所以刚才并不知道 callback 是干什么用的。这其实很好理解，我们平时定义函数的时候，参数也只是给出了一个名字，比如 a,在函数体中使用 a，但整个过程也并不知道 a 到底是什么，只有在调用那个函数的时候才指定 a 的具体值，比如2.回过头来，在调用 doit 的时候，我们就需要指定 callback 究竟是个什么东西了。可以看到，这个函数完成了一个 sum 功能。

上述代码的执行过程是：

调用 doit函数，参数是一个匿名函数；进入 doit 的函数体中，先定义 a,b,c，然后执行刚才的匿名函数，参数是 a,b,c，并返回一个 t，最后返回一个 t+10给 d。

回到最初的例子，app.use(...)是函数调用。我们可以想象，之前一定定义了一个 use 方法，只是这里没有给出。这两个例子一对比，就可以马上理解了。

在使用nodejs、express 的时候，不可能每个方法或函数我们都要找到它的函数定义去看一看。所以只要知道那个定义里面给 callback 传递了什么参数就行了。然后在调用方法或函数时，在参数里我们自己定义匿名函数来完成某些功能。