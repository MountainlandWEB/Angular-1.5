(function () {

    angular.module('myApp')
        .service('characterService', characterService);

    function characterService($log, Character, $q) {
        var self = this;

        // SERVICE DATA
        self.characters = undefined;
        self.selectedChar = [];

        // SERVICE FUNCTIONS (PUBLIC)
        self.getRandomCharacterIndex = getRandomCharacterIndex;
        self.getCharacters = getCharacters;

        function getRandomCharacterIndex(length) {
            return Math.floor(Math.random() * length);
        }

        // THIS KEEPS THEM CACHED IN THIS SERVICE
        function getCharacters() {
            var deferred = $q.defer();
            if (self.characters === undefined) {
                Character
                    .then(function (data) {
                        $log.log(data);
                        self.characters = data;
                        self.selectedChar = self.characters[
                            self.getRandomCharacterIndex(Math.min(self.characters.length, 10))];
                        deferred.resolve(self.characters);

                    }, function(error) {
                        $log.error(error);
                        deferred.reject(error);
                    });
            }
            else {
                deferred.resolve(self.characters);
            }
            return deferred.promise;

        }

    }

})();
