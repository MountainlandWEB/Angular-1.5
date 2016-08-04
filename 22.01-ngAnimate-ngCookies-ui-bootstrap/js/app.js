(function(){
    'use strict';

    angular.module('basicApp', [
        "ui.router",
        "navController",
        "homeController",
        "homeService",
        "homeDirectives",
        "ngAnimate",
        "ngStorage"
    ])

    .config(AppConfig);

    AppConfig.$inject = ["$stateProvider", "$urlRouterProvider", "$localStorageProvider"];
    function AppConfig($stateProvider, $urlRouterProvider, $localStorageProvider) {

        // pick a unique app prefix for local storage
        $localStorageProvider.setKeyPrefix('tdapp-');

        // define all app states (pages)
        $stateProvider
            .state("home", {
                url: "/home",
                templateUrl: "templates/home.html",
                controller: "homeController as hc"
            })
            .state("about", {
                url: "/about",
                templateUrl: "templates/about.html"
            });

        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise("/home");
    }

}());
