(function(){

    angular.module('myApp')
        .component('myExample', { // the tag for using this is <characters></characters>
            templateUrl: "characters/characters.component.html",
            controller: myExampleController
        });

    // here we use "Dependency Injection" to inject the Angular $log service into this controller
    function myExampleController($log, $location, $filter) {
        // put all code for this component in here (click handlers, component setup, UI-related code)
        var self = this;
        self.name = $filter('uppercase')('Hello');
        self.doChange = doChange;
        self.doMoney = doMoney;
        self.amount = 500;
        
        function doChange() {
            self.name =$filter('uppercase')(self.name);
        }
        // this line prints the full URL to the console
        $log.debug($location.absUrl());

        function doMoney() {
            self.amount = $filter('currency')(self.amount);
        }
    }

})();
