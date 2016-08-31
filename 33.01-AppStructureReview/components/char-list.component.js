(function(){

    angular.module('app')
        .component('charList', { // the tag for using this is <char-list>
            templateUrl: "components/char-list.component.html",
            controller: charListController
        });

    function charListController(Character, $state) {

        // component properties
        var self = this;
        self.searchText = '';
        self.characters = Character.characters;
        self.selectedChar = Character.selectedChar;

        // component functions
        self.selectChar = selectChar;

        function selectChar(char) {
            Character.selectedChar = self.selectedChar = char;
            $state.go('main', {}, {reload: true});
        }

    }

})();
