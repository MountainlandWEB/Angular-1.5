(function(){

    angular.module('myApp')
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

        vm.character = characterService.selectedChar;
        vm.close = close;
        vm.save = save;
        vm.deleteChar = deleteChar;

        function close() {
            vm.character = characterService.selectedChar = undefined;
        }

        function save() {
            console.log('saving...');
            console.log(JSON.stringify(vm.character));
            console.log('TODO: Finish save implementation here');
        }

        function deleteChar() {
            console.log('deleting...');
            console.log(JSON.stringify(vm.character));
            console.log('TODO: Finish delete implementation here');
        }
    }

})();
