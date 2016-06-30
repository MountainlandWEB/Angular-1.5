(function(){

    angular.module('myApp')
        .component('myExample', { // the tag for using this is <my-example></my-example>
            templateUrl: "my-example/my-example.html",
            controller: myExampleController
        });

    // here we use "Dependency Injection" to inject the Angular $log service into this controller
    function myExampleController($log, $location) {
        // put all code for this component in here (click handlers, component setup, UI-related code)
        // this line prints the full URL to the console
        $log.debug($location.absUrl());
    }

})();
