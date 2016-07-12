(function(){

    angular.module('myApp')
        .component('myExample', { // the tag for using this is <my-example>
            templateUrl: "my-example/my-example.html",
            controller: myExampleController
        });

    function myExampleController($filter) {
        // put all code for this component in here (click handlers, component setup, UI-related code)
        var emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        var self = this;
        self.name = '';
        self.match = false;
        var myName = 'Matt';
        self.doChange = doChange;

        function doChange() {
            self.match = myName === self.name;
        }
    }

})();
