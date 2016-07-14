(function(){

    angular.module('myApp')
        .component('myExample', { // the tag for using this is <my-example>
            templateUrl: "my-example/my-example.component.html",
            controller: myExampleController
        });

    function myExampleController($filter) {
        // put all code for this component in here (click handlers, component setup, UI-related code)
        var emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        var self = this;
        self.myName = '';
        self.email = '';
        self.matches = false;
        self.hasError = true;
        self.doChange = doChange;
        self.checkName = checkName; 
        var name = 'Blake';

        function doChange() {
            self.email = $filter('lowercase')(self.email);
            self.hasError = !emailRegex.test(self.email);
        }
        function checkName() {
            self.matches = name === self.myName;
            console.log("this");
        }
    }

})();
