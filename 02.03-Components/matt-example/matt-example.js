/**
 * Created by mattpowell on 7/6/16.
 */

(function () {
    angular.module('mattApp')
        .component('mattExample',  {
        templateUrl: "matt-example/index.html",
        controller: mattExampleController
});
    
// here we use "Dependency Injection" to inject the Angular $log service into this controller
function mattExampleController($log, $location) {
    // put all code for this component in here (click handlers, component setup, UI-related code)
    // this line prints the full URL to the console
    $log.debug($location.absUrl());
}

})();

