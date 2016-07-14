(function(){

    angular.module('myApp')
        .component('myExample', { // the tag for using this is <characters>
            templateUrl: "characters/characters.component.html",
            controller: myExampleController
        });

    function myExampleController($filter) {
        // put all code for this component in here (click handlers, component setup, UI-related code)
        var emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        var self = this;
        self.email = '';
        self.name = '';
        self.hasError = true;
        self.nameMatches = false;
        self.doChange = doChange;
        self.changedName = changedName;
        var myName = 'Todd';

        function doChange() {
            self.email = $filter('lowercase')(self.email);
            self.hasError = !emailRegex.test(self.email);
        }

        function changedName() {
            self.nameMatches = myName === self.name;
        }
    }

})();
