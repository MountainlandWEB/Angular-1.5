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

    function myExampleController($filter, $scope, $cacheFactory) {
        // put all code for this component in here (click handlers, component setup, UI-related code)
        var self = this;
        self.name = $filter('uppercase')('Hansel');
        self.name2 = '';
        self.doChange = doChange;
        self.loadName = loadName;
        self.saveName = saveName;
        self.amount = 500;
        self.cache = $cacheFactory('myApp');

        function doChange() {
            self.name = $filter('uppercase')(self.name);
        }

        function loadName() {
            self.name2 = self.cache.get('name');
        }

        function saveName() {
            self.cache.put('name', self.name);
        }

        // $scope.$watch("$ctrl.name", function(newval, oldval) {
        //     self.name = $filter('uppercase')(newval);
        // });
    }

})();
