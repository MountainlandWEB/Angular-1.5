(function(){

    angular.module('myApp')
<<<<<<< HEAD
        .factory('Characters', CharacterFactory);
=======
        .factory('Character', CharacterFactory);
>>>>>>> 16354d4b820208f053a05cdedecd2da2c6f4dd05

    function CharacterFactory(Restangular) {
        return Restangular.all('customers');
    }

})();
