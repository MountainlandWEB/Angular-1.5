(function () {

    angular.module('myApp')
        .service('characterService', characterService);

<<<<<<< HEAD
    function characterService($log, Characters, $q, $localStorage) {
=======
    function characterService($log, Character, $q, $localStorage) {
>>>>>>> 16354d4b820208f053a05cdedecd2da2c6f4dd05
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
            if ($localStorage.characters === undefined) {
<<<<<<< HEAD
                Characters.getList()
=======
                Character.getList()
>>>>>>> 16354d4b820208f053a05cdedecd2da2c6f4dd05
                    .then(function (data) {
                        $log.log(data);
                        self.characters = $localStorage.characters = data;
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
                self.characters = $localStorage.characters;
                deferred.resolve(self.characters);
            }
            return deferred.promise;

        }

    }

})();
