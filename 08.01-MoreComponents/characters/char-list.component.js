(function(){

    angular.module('myApp')
        .component('charList', { // the tag for using this is <char-list>
            templateUrl: "characters/char-list.component.html",
            controller: charListController
        })
        .config(charListConfig);
    
    function charListConfig($stateProvider) {
        $stateProvider.state('main', {
            url: '/main',
            template: '<char-list></char-list>'
        });
    }

    function charListController() {
        // variables
        var self = this;
        self.orderBy = 'name';
        self.sortClass= 'sort-asc';
        self.columns = ['name','gender','mass'];
        self.selectedChar = undefined;
        // functions
        self.getWeightInPounds = getWeightInPounds;
        self.sort = sort;
        self.selectChar = selectChar;

        function getWeightInPounds(character) {
            return character.mass * 2.20462;
        }
        
        function sort(attribute) {
            self.sortClass = 'sort-asc'; // down arrow
            var newOrderBy = attribute;
            if (self.orderBy === attribute) {
                newOrderBy = '-' + attribute;
                self.sortClass = 'sort-desc';
            }
            self.orderBy = newOrderBy;
        }

        function selectChar(char) {
            self.selectedChar = char;
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
    }

})();
