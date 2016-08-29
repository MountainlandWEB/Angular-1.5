(function(){

    // this CREATES the myApp module (because it has the second, array parameter)
    angular.module('app', [
        /* listed imported modules here */
        'ui.router'
    ])
        .config(myAppConfig);

    function myAppConfig($urlRouterProvider,
                         $locationProvider /* <-- Step #2: Inject $locationProvider */) {

        // Step #3: Turn on Html5 Mode
        $locationProvider.html5Mode(true);

        $urlRouterProvider.otherwise('/main');
    }

})();
