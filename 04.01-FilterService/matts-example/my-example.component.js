(function(){
    
    angular.module('myApp')
        .component('mattsExample', {
            templateUrl: "matts-example/mattsExample.html",
            controller: mattsController
        });
            
    function mattsController($log, $filter) {
        var two = this;
        two.money2 = money2;
        two.amount = 500;
        
        function money2() {
            two.amount = $filter('currency')(two.amount);
        }
    }
})();

 