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
        self.getPhoto = getPhoto;
        self.savePhoto = savePhoto;

        function getRandomCharacterIndex(length) {
            return Math.floor(Math.random() * length);
        }

        function getPhoto(photoId) { // take id input and return promise with photo data
            var deferred = $q.defer(); // 1. create promise
            Character.get({id: photoId}) // 2. use our $resource factory (service)
                .$promise.then(function(data) { // 3. get data from $resource promise
                    deferred.resolve(data); // 4. store data in our promise
                });
            return deferred.promise; // 5. send promise back with data
        }

        function savePhoto(photo) { // take id input and return promise with photo data
            var deferred = $q.defer(); // 1. create promise
            Character.get(photo) // 2. use our $resource factory (service)
                .$promise.then(function(data) { // 3. get data from $resource promise
                    deferred.resolve(data); // 4. store data in our promise
                }, function() {
                    deferred.reject(error);
            });
            return deferred.promise; // 5. send promise back with data
        }

        // THIS KEEPS THEM CACHED IN THIS SERVICE
        function getCharacters() {
            var deferred = $q.defer();
            if (self.characters === undefined) {
                Character.query().$promise
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
