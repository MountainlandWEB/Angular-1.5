(function(){

    angular.module('myApp')
<<<<<<< HEAD
<<<<<<< HEAD
        .component('myExample', { // the tag for using this is <my-example>
            templateUrl: "my-example/my-example.component.html",
=======
        .component('myExample', { // the tag for using this is <characters>
            templateUrl: "characters/characters.component.html",
>>>>>>> 58c113a863c78b2ec610c1de0035dd213cf5cb5d
=======
        .component('myExample', { // the tag for using this is <characters>
            templateUrl: "characters/characters.component.html",
>>>>>>> 16354d4b820208f053a05cdedecd2da2c6f4dd05
            controller: myExampleController
        });

    function myExampleController($filter) {
        // put all code for this component in here (click handlers, component setup, UI-related code)
        var emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        var self = this;
        self.myName = '';
        self.email = '';
<<<<<<< HEAD
<<<<<<< HEAD
        self.matches = false;
=======
        self.name = '';
>>>>>>> 58c113a863c78b2ec610c1de0035dd213cf5cb5d
        self.hasError = true;
        self.nameMatches = false;
        self.doChange = doChange;
<<<<<<< HEAD
        self.checkName = checkName; 
        var name = 'Blake';
=======
        self.changedName = changedName;
        var myName = 'Todd';
>>>>>>> 58c113a863c78b2ec610c1de0035dd213cf5cb5d
=======
        self.name = '';
        self.hasError = true;
        self.nameMatches = false;
        self.doChange = doChange;
        self.changedName = changedName;
        var myName = 'Todd';
>>>>>>> 16354d4b820208f053a05cdedecd2da2c6f4dd05

        function doChange() {
            self.email = $filter('lowercase')(self.email);
            self.hasError = !emailRegex.test(self.email);
        }
<<<<<<< HEAD
<<<<<<< HEAD
        function checkName() {
            self.matches = name === self.myName;
            console.log("this");
=======

        function changedName() {
            self.nameMatches = myName === self.name;
>>>>>>> 58c113a863c78b2ec610c1de0035dd213cf5cb5d
=======

        function changedName() {
            self.nameMatches = myName === self.name;
>>>>>>> 16354d4b820208f053a05cdedecd2da2c6f4dd05
        }
    }

})();
