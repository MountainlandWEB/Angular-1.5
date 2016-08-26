(function(){

    angular.module('myApp')
        .component('charList', { // the tag for using this is <char-list>
            templateUrl: "characters/char-list.component.html",
            controller: charListController
        })
        .config(charListConfig)
        .controller('charDetailController', charDetailController);

    function charListConfig($stateProvider) {
        $stateProvider.state('main', {
            url: '/main',
            template: '<char-list></char-list>'
        });
    }

    function charListController(characterService, ngDialog, toastr) {

        // variables
        var self = this;
        self.orderBy = 'name';
        self.sortClass= 'sort-asc';
        self.columns = ['name','gender','mass'];
        self.selectedChar = characterService.selectedChar;
        self.characters = characterService.characters;
        self.toastr = toastr;

        // functions
        self.sort = sort;
        self.selectChar = selectChar;
        self.close = close;

        function sort(attribute) {
            self.sortClass = 'sort-asc'; // down arrow
            var newOrderBy = attribute;
            if (self.orderBy === attribute) {
                newOrderBy = '-' + attribute;
                self.sortClass = 'sort-desc'; // up arrow, reverse sort
            }
            self.orderBy = newOrderBy;
        }

        function selectChar(char) {
            self.selectedChar = characterService.selectedChar = char;
            var dialog = ngDialog.open({
                template: 'characters/char-detail.component.html',
                controller: 'charDetailController',
                controllerAs: '$ctrl',
                data: {
                    character: char
                }
            });
            dialog.closePromise.then(close);
        }

        function close() {
            self.selectedChar = characterService.selectedChar = undefined;
        }

    }

    function charDetailController() {
        var self = this;
        self.close = close;

        function close() {
            self.onClose(); // call output binding
        }
    }


})();
