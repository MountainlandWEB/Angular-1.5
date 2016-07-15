(function(){

    angular.module('myApp')
        .component('componentTwo', { // the tag for using this is <my-example></my-example>
            templateUrl: "component-two/component-two.html",
            // template: '<h2>Controller One Title</h2>',
            controller: ControllerTwo
        });

    // here we use "Dependency Injection" to inject the Angular $log service into this controller
    function ControllerTwo($log, $location) {
        // put all code for this component in here (click handlers, component setup, UI-related code)
        // this line prints the full URL to the console
        $log.debug($location.absUrl());
    }

})();
