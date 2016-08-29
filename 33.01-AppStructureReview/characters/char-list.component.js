(function(){

    angular.module('app')
        .component('charList', { // the tag for using this is <char-list>
            templateUrl: "characters/char-list.component.html",
            controller: charListController
        });

    function charListController(Character, $state) {

        // variables
        var self = this;
        self.searchText = '';
        self.characters = Character.getList();
        self.selectedChar = Character.getSelected();

        // functions
        self.selectChar = selectChar;

        function selectChar(char) {
            Character.setSelected(char);
            $state.go('main', {}, {reload: true});
        }

    }

})();
