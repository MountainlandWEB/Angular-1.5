(function(){

    // this CREATES the myApp module (because it has the second, array parameter)
    angular.module('myApp', ['ui.router'])
        .config(function($stateProvider, $urlRouterProvider) {
        //
        // For any unmatched url, redirect to /state1
        $urlRouterProvider.otherwise("/component2");
        //
        // Now set up the states
        $stateProvider
            .state('component1', {
                url: "/component1",
                template: "<component-one></component-one>",
            })
            .state('component2', {
                url: "/component2",
                template: "<component-two></component-two>"
            });
    });

})();
