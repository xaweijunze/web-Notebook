g build  常规的压缩操作    代码体积最大

ng build --aot   angular预编译   对angular中浏览器结实的部分转化成浏览器能直接读取的内容    代码体积较小

ng build --prod   angular预编译    取消console等显示  尽可能合并相同功能代码    代码体积最小 

