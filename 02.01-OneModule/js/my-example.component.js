(function(){

    angular.module('myApp')
        .component('myExample', { // the tag for this is <my-example></my-example>
            template: "<h1>My Example</h1>This is built on one main module.",
            controller: myExampleController
        });

    function myExampleController() {
        // put all code for this component in here (click handlers, component setup, UI-related code)
    }

})();
