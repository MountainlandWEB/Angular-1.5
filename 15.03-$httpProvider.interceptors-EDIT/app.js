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
        $httpProvider.interceptors.push(function() {
            return {
                // 'request': function (config) {
                //     console.log(config);
                //     return config;
                // },
                'response': function (response) {
                    console.log(response);
                    return response;
                }
            };
        });
    }

})();
