(function(){

    angular.module('myExampleModule', [])
        .component('myExample', { // the tag for this is <characters></characters>
            template: "<h1>My Example</h1>This is built on many modules -- one per component.",
            controller: myExampleController
        });

    function myExampleController() {
        // put all code for this component in here (click handlers, component setup, UI-related code)
    }

})();
