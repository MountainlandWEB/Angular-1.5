(function(){

    // this CREATES the myApp module (because it has the second, array parameter)
    angular.module('app', [
        /* listed imported modules here */
        'ui.router',
        'ngMaterial',
        /* Step #3: include the firebase module in the module dependency list for your app */
        'firebase',
        'ngDialog'
    ])
        .config(myAppConfig);

    function myAppConfig($urlRouterProvider, $mdThemingProvider) {
        $urlRouterProvider.otherwise('/main');
        $mdThemingProvider.theme('default')
            .primaryPalette('blue')
            .accentPalette('red');
    }

})();
