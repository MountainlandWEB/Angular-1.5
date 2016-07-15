(function() {
    "use strict";

    var module = angular.module("app");

    function fetchMovies($http) {
        return $http.get("resources/movies.json")
                    .then(function(response) {
                        return response.data;
                    });
    }

    function controller($http) {

        var model = this;
        model.movies = [];

        model.$onInit = function() {
            fetchMovies($http).then(function(movies) {
                model.movies = movies;    
            });
        };
        
        model.upRating = function(movie) {
            if(movie.rating < 5) {
                movie.rating += 1;
            }
        };
        
        model.downRating = function(movie) {
            if(movie.rating > 1) {
                movie.rating -= 1;
            }
        };
    }

    module.component("movieList", {
        templateUrl: "src/movie-list/movie-list.component.html",
        controllerAs: "model",
        controller: ["$http", controller]
    });

} ());