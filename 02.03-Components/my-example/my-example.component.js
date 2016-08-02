(function(){

    angular.module('myApp')
<<<<<<< HEAD
        .component('myExample', { // the tag for using this is <my-example></my-example>
            templateUrl: "my-example/my-example.component.html",
=======
        .component('myExample', { // the tag for using this is <characters></characters>
            templateUrl: "characters/characters.component.html",
>>>>>>> 58c113a863c78b2ec610c1de0035dd213cf5cb5d
            controller: myExampleController
        });

    // here we use "Dependency Injection" to inject the Angular $log service into this controller
    function myExampleController($log, $location) {
        // put all code for this component in here (click handlers, component setup, UI-related code)
        // this line prints the full URL to the console
        $log.debug($location.absUrl());
    }

})();
