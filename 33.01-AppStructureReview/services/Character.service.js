(function () {

    angular.module('app')
        .service('Character', Character);

    function Character($firebaseArray) {

        // private properties
        var ref = firebase.database().ref().child("characters");

        // Character properties
        var self = this;
        self.characters = $firebaseArray(ref);
        self.selectedChar = undefined;

        // Character functions
        self.getRandomCharacter = getRandomCharacter;
        self.save = save;
        self.add = add;
        self.remove = remove;

        function getRandomCharacter() {
            return self.characters[Math.floor(Math.random() * self.characters.length)];
        }

        function save(char) {
            self.characters.$save(char);
        }

        function add(char) {
            self.characters.$add(char);
        }

        function remove(char) {
            self.characters.$remove(char);
        }

        // Character private functions
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
