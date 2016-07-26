(function () {

    angular.module('myApp')
        .service('characterService', characterService);

    function characterService($http) {
        var self = this;
        self.selectedChar = undefined;
        self.getRandomCharacterIndex = getRandomCharacterIndex;

        function getRandomCharacterIndex(length) {
            return [Math.floor(Math.random() * length)];
        }

        function init() {
            for (var c = 0, clen = self.characters.length; c < clen; c++) {
                self.characters[c].weight = self.characters[c].mass * 2.20462;
            }
            //getRandomCharacterIndex().then(function(character) {
              //  self.selectedChar = character;
            //});
        }

        // sample data from swapi.co
        self.characters = function() {
            return $http.get("characters.json");
        };

        init();
    }

})();
