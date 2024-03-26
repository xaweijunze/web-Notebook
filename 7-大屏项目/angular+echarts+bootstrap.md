

1. 参照07-deviceonlinemonitor-master进行数据可视化大屏demo项目开发（测试地址http://www.forus616.cn/visibility_demo/）

2. 整个页面结构

   1. container
      1. container-header
      2. container-left
      3. container-center
         1. container-center-header
         2. container-center-map
         3. container-center-bottom
      4. container-right

3. 注意点：

   1. 使用的echarts数据是通过http请求assets中的json文件得来，echarts初始化在container.component中进行，通过组件传值将对应的option传给子组件
   2. map的绘制（option）和数据获取在container-center-map.coponent中进行

4. 解决的问题：

   1. 使用bootstrap进行整体页面的横向排布，使用flex弹性布局进行相应的纵向布局。这样可以解决页面适配的问题（适应不同的屏幕尺寸）。
   2. 使用rem适配方式，对文字和模块的距离进行伸缩控制。改变根元素font-size的方法（直接拿来用了）
   3. 最大化显示效果良好

5. 待解决问题

   1. 还没有进行过大屏测试，在电脑屏幕测试的结果是屏幕过小会出现echarts图被切割（显示不完全）这一点和参照样例中的测试效果一样。、
   2. 对于设备告警组件（container--center-bottom）和echarts的option的设计没有深入，今天只熟悉和完成了页面适配的操作。

   

总结

1. 使用百分比控制echarts的大小时，要注意继承关系。
2. 下一部分继续熟悉echarts的option设计和angular的使用。



​	

