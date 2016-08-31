(function(){

    angular.module('app', [
        /* listed imported modules here */
        'ui.router',
        'ngMaterial',
        'firebase'
    ])
        .config(myAppConfig)
        .run(myAppRun);


    // config is for setting defaults for components
    function myAppConfig($urlRouterProvider, $mdThemingProvider) {
        $urlRouterProvider.otherwise('/main');
        $mdThemingProvider.theme('default')
            .primaryPalette('blue')
            .accentPalette('red');
    }

    // run is for code you want to run when the app starts up
    function myAppRun() {
        var config = {
            apiKey: "AIzaSyAypNYnz62ffGkJvpYPfQ1e23-CkT8XUCI",
            authDomain: "matcexample.firebaseapp.com",
            databaseURL: "https://matcexample.firebaseio.com",
            storageBucket: "matcexample.appspot.com",
        };
        firebase.initializeApp(config);
    }

})();
