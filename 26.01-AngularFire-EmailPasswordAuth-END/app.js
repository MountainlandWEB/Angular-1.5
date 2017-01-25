(function(){

    // this CREATES the myApp module (because it has the second, array parameter)
    angular.module('myApp', [
        /* listed imported modules here */
        'ui.router',
        'ngMaterial',
        'firebase'
    ])
        .config(myAppConfig);

    function myAppConfig($urlRouterProvider, $mdThemingProvider) {
        $urlRouterProvider.otherwise('/main');
        $mdThemingProvider.theme('default')
            .primaryPalette('blue')
            .accentPalette('red');
    }

})();
