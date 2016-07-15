(function() {
    "use strict";

    var module = angular.module("app");
    
    module.component("movieRating", {
        templateUrl: "src/movie-rating/movie-rating.component.html",
        bindings: {
            value: "<"
        },
        controllerAs: "model",
        controller: function() {
            var model = this;
            
            model.$onInit = function() {
                model.entries = new Array(model.value);  
            };
            
            model.$onChanges = function() {
                model.entries = new Array(model.value);
            };
        }        
    });

}());