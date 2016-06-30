(function(){

    angular.module('myApp')
        .component('myExample', { // the tag for using this is <my-example>
            templateUrl: "my-example/my-example.html",
            controller: myExampleController
        });

    function myExampleController($filter, $scope) {
        // put all code for this component in here (click handlers, component setup, UI-related code)
        var self = this;
        self.name = $filter('uppercase')('Hansel');
        self.doChange = doChange;

        function doChange() {
            self.name = $filter('uppercase')(self.name);
        }

        // $scope.$watch("$ctrl.name", function(newval, oldval) {
        //     self.name = $filter('uppercase')(newval);
        // });
    }

})();
