(function(){

    angular.module('myApp')
        .component('myExample', { // the tag for using this is <characters>
            templateUrl: "characters/characters.component.html",
            controller: myExampleController
        });

    function myExampleController() {
        // put all code for this component in here (click handlers, component setup, UI-related code)
        var self = this;
        self.sort = 'name';
        self.getWeightInPounds = getWeightInPounds;
        self.setSort = setSort;

        function getWeightInPounds(character) {
            return character.mass * 2.20462;
        }

        function setSort(sort) {
            self.sort = sort;
        }

        // sample data from swapi.co
        self.characters = [
            {
                "name": "Luke Skywalker",
                "height": "172",
                "mass": 77,
                "hair_color": "blond",
                "skin_color": "fair",
                "eye_color": "blue",
                "birth_year": "19BBY",
                "gender": "male"
            },
            {
                "name": "C-3PO",
                "height": "167",
                "mass": 75,
                "hair_color": "n/a",
                "skin_color": "gold",
                "eye_color": "yellow",
                "birth_year": "112BBY",
                "gender": "n/a"
            },
            {
                "name": "R2-D2",
                "height": "96",
                "mass": 32,
                "hair_color": "n/a",
                "skin_color": "white, blue",
                "eye_color": "red",
                "birth_year": "33BBY",
                "gender": "n/a"
            },
            {
                "name": "Darth Vader",
                "height": "202",
                "mass": 136,
                "hair_color": "none",
                "skin_color": "white",
                "eye_color": "yellow",
                "birth_year": "41.9BBY",
                "gender": "male"
            },
            {
                "name": "Leia Organa",
                "height": "150",
                "mass": 49,
                "hair_color": "brown",
                "skin_color": "light",
                "eye_color": "brown",
                "birth_year": "19BBY",
                "gender": "female"
            }
        ];
    }

})();
