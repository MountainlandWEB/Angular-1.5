(function () {

    angular.module('app')
        .service('Character', Character);

    function Character($firebaseArray, $log) {
        var self = this;

        var ref = firebase.database().ref().child("characters");
        var characters = $firebaseArray(ref);
        var selectedChar = undefined;

        self.getList = getList;
        self.setSelected = function(char) { selectedChar = char; }
        self.getSelected = function() { return selectedChar; }
        self.getRandomCharacter = getRandomCharacter;
        self.save = save;
        self.add = add;
        self.remove = remove;

        function getList() {
            return characters;
        }

        function getRandomCharacter() {
            return characters[Math.floor(Math.random() * characters.length)];
        }

        function init() {
            $log.log(characters);
            for (var c = 0, clen = characters.length; c < clen; c++) {
                characters[c].weight = characters[c].mass * 2.20462;
            }
            selectedChar = getRandomCharacter();
        }

        function save(char) {
            characters.$save(char);
        }

        function add(char) {
            characters.$add(char);
        }

        function remove(char) {
            characters.$remove(char);
        }

        characters.$loaded().then(function () {
            init();
        })
    }

})();
