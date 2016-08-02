(function(){

    angular.module('myApp')
        .factory('Characters', CharacterFactory);

    function CharacterFactory(Restangular) {
        return Restangular.all('customers');
    }

})();
