//定义没有依赖的模块
define(function(){
    var name = 'dataService.js';
    function getName(){
        console.log(name);
    }
    //暴露
    return {getName};
});