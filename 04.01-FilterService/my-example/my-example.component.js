(function(){
    angular.module('myApp')
        .component('myExample', { // the tag for using this is <my-example></my-example>
            templateUrl: "my-example/my-example.html",
            controller: myExampleController
        });

    // here we use "Dependency Injection" to inject the Angular $log service into this controller
    function myExampleController($log, $filter) {
        // put all code for this component in here (click handlers, component setup, UI-related code)
        var self = this;
        self.name = $filter('uppercase')('Hello');
        self.doChange = doChange;
        self.money = money;
        self.amount = 500;

        function doChange() {
            self.name = $filter('uppercase')(self.name);
        }

        function money() {
            self.amount = $filter('currency')(self.amount);
        }
    }

})();
