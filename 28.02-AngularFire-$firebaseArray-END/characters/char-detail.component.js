(function () {

    angular.module('app')
        .component('charDetail', { // the tag for using this is <char-detail>
            templateUrl: "characters/char-detail.component.html",
            controller: charDetailController,
            controllerAs: 'vm'
        })
        .config(charListConfig);

    function charListConfig($stateProvider) {
        $stateProvider.state('main', {
            url: '/main',
            template: '<char-detail></char-detail>'
        });
    }

    function charDetailController(characterService) {
        var vm = this;

        // Step #7: Load selected character once the promise is fullfilled
        characterService.characters.$loaded().then(function () {
            vm.character = characterService.selectedChar;
        });

        vm.close = close;
        vm.save = save;
        vm.add = add;
        vm.deleteChar = deleteChar;

        function close() {
            vm.character = characterService.selectedChar = undefined;
        }

        function save() {
            console.log('saving...');
            console.log(JSON.stringify(vm.character));

            // Step #8: Call the $save method to save changes in array
            characterService.characters.$save(vm.character);
        }

        function add() {
            console.log('saving...');
            console.log(JSON.stringify(vm.character));

            // Step #8: Call the $save method to save changes in array
            characterService.characters.$add(vm.character);
        }

        function deleteChar() {
            console.log('deleting...');
            console.log(JSON.stringify(vm.character));

            // Step #9: Call the $remove method
            characterService.characters.$remove(vm.character);
        }
    }

})();
