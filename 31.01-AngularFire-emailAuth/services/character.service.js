(function () {

    angular.module('app')
        .service('characterService', characterService);

    function characterService($firebaseArray /* <-- Step #4: inject $firebaseArray service */) {
        var self = this;

        // Step #5: create a firebase ref object using your own firebase database:
        var ref = firebase.database().ref().child("characters");

        // Step #6: Wrap the ref object with $firebaseArray to create the synchronized array
        self.characters = $firebaseArray(ref);

        self.selectedChar = undefined;
        self.getRandomCharacter = getRandomCharacter;

        function getRandomCharacter() {
            return self.characters[Math.floor(Math.random() * self.characters.length)];
        }

        function init() {
            for (var c = 0, clen = self.characters.length; c < clen; c++) {
                self.characters[c].weight = self.characters[c].mass * 2.20462;
            }
            self.selectedChar = getRandomCharacter();
        }

        self.characters.$loaded().then(function () {
            init();
        })
    }

})();
