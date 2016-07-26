(function(){

    // this CREATES the myApp module (because it has the second, array parameter)
    angular.module('myApp', [
        /* listed imported modules here */
        'ui.router'
    ])
        .config(myAppConfig)
        .config(interceptors);

    function myAppConfig($urlRouterProvider) {
        $urlRouterProvider.otherwise('/main');
    }

    function interceptors($httpProvider) {
        $httpProvider.interceptors.push(function (/* inject any dependencies needed here */) {
            return {
                'request': function(config) {
                    console.log('Intercepting a request');
                    console.log(config);
                    /* IMPORTANT: always return config */
                    return config;
                },
                'response': function(response) {
                    console.log('Intercepting a response');
                    console.log(response);
                    /* IMPORTANT: always return response */
                    return response;
                }
            }
        });
    }

})();
