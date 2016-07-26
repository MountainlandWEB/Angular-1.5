(function () {

    angular.module('myApp')
        .service('characterService', characterService);

    function characterService($http) {
        var self = this;
        self.selectedChar = undefined;
        self.getRandomCharacterIndex = getRandomCharacterIndex;

        function getRandomCharacterIndex(length) {
            return Math.floor(Math.random() * length);
        }

        // sample data from swapi.co
        self.characters = function () {
            return $http.get("characters.json");
        };

    }

})();
