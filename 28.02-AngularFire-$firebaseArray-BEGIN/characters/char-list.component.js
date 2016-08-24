(function(){

    angular.module('myApp')
        .component('charList', { // the tag for using this is <char-list>
            templateUrl: "characters/char-list.component.html",
            controller: charListController
        });

    function charListController(characterService, $state) {

        // variables
        var self = this;
        self.searchText = '';
        self.srv = characterService;

        // functions
        self.selectChar = selectChar;

        function selectChar(char) {
            characterService.selectedChar = char;
            $state.go('main', {}, {reload: true});
        }

    }

})();
