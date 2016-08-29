(function(){

    // this CREATES the myApp module (because it has the second, array parameter)
    angular.module('app', [
        /* listed imported modules here */
        'ui.router'
    ])
        .config(myAppConfig);

    function myAppConfig($urlRouterProvider) {
        $urlRouterProvider.otherwise('/main');
    }

})();
