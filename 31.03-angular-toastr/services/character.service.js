(function () {

    angular.module('myApp')
        .service('characterService', characterService);

    function characterService() {
        var self = this;
        self.selectedChar = undefined;
        self.getRandomCharacter = getRandomCharacter;

        function getRandomCharacter() {
            return self.characters[Math.floor(Math.random()*self.characters.length)];
        }

        function init() {
            for (var c=0, clen=self.characters.length; c<clen; c++) {
                self.characters[c].weight = self.characters[c].mass * 2.20462;
            }
            // self.selectedChar = getRandomCharacter();
        }

        // sample data from swapi.co
        self.characters = [
            {
                "name": "Luke Skywalker",
                "height": 172,
                "mass": 77,
                "hair_color": "blond",
                "skin_color": "fair",
                "eye_color": "blue",
                "birth_year": "19BBY",
                "gender": "male"
            },
            {
                "name": "C-3PO",
                "height": 167,
                "mass": 75,
                "hair_color": "n/a",
                "skin_color": "gold",
                "eye_color": "yellow",
                "birth_year": "112BBY",
                "gender": "n/a"
            },
            {
                "name": "R2-D2",
                "height": 96,
                "mass": 32,
                "hair_color": "n/a",
                "skin_color": "white, blue",
                "eye_color": "red",
                "birth_year": "33BBY",
                "gender": "n/a"
            },
            {
                "name": "Darth Vader",
                "height": 202,
                "mass": 136,
                "hair_color": "none",
                "skin_color": "white",
                "eye_color": "yellow",
                "birth_year": "41.9BBY",
                "gender": "male"
            },
            {
                "name": "Leia Organa",
                "height": 150,
                "mass": 49,
                "hair_color": "brown",
                "skin_color": "light",
                "eye_color": "brown",
                "birth_year": "19BBY",
                "gender": "female"
            }
        ];

        init();
    }

})();
