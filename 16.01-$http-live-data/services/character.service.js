(function () {

    angular.module('myApp')
        .service('characterService', characterService);

    function characterService($http, $log, $q) {
        var self = this;

        // SERVICE DATA
        self.characters = undefined;
        self.selectedChar = undefined;

        // SERVICE FUNCTIONS (PUBLIC)
        self.getRandomCharacterIndex = getRandomCharacterIndex;
        self.getCharacters = getCharacters;

        function getRandomCharacterIndex(length) {
            return Math.floor(Math.random() * length);
        }

        function getCharacters() {
            var deferred = $q.defer();
            if (self.characters === undefined) {
                $http.get("http://swapi.co/api/people/")
                    .then(function (response) {
                        $log.log(response);
                        self.characters = response.data.results;
                        self.selectedChar = self.characters[self.getRandomCharacterIndex(self.characters.length)];
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
