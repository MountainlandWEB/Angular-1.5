(function(){

    angular.module('myApp')
        .factory('Character', CharacterFactory);

    function CharacterFactory($resource) {
        return $resource('http://jsonplaceholder.typicode.com/photos/:id');
    }

})();
