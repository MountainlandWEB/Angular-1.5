(function(){

    angular.module('myApp')
        .factory('Character', CharacterFactory);

    function CharacterFactory(Restangular) {
        return Restangular.all('customers');
    }

})();
