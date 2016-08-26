(function(){

    // this CREATES the myApp module (because it has the second, array parameter)
    angular.module('myApp', [
        /* listed imported modules here */
        'ui.router',
        'ngDialog',
        'toastr'
    ])
        .config(myAppConfig);

    function myAppConfig($urlRouterProvider) {
        $urlRouterProvider.otherwise('/main');
    }

})();
