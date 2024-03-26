// 定义有依赖的模块
define([
    'dataService',
    'jquery'
], function(dataService) {
    let msg = 'alerter.js';   
    function showMsg (){
        console.log(dataService.getName());
        console.log(msg);
    } 
    $('body').css('background','red');
    // 暴露模块
    return {showMsg};
});