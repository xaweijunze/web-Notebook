(function () {
    requirejs.config({
        baseUrl: 'js/',
        paths: {
            dataService: './modules/dataService',
            alerter: './modules/alerter', //自定义库
            jquery: './libs/jquery-3.6.0' //第三方库
        }
    });
    requirejs(['alerter'], function (alerter) {
        alerter.showMsg();
    })
})()