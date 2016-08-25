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

    function charDetailController(characterService, $firebaseAuth, $log) {
        var vm = this;
        vm.displayName = undefined;

        // Step #7: Load selected character once the promise is fullfilled
        characterService.characters.$loaded().then(function () {
            vm.character = characterService.selectedChar;
        });

        vm.close = close;
        vm.save = save;
        vm.add = add;
        vm.deleteChar = deleteChar;
        vm.login = login;
        vm.logout = logout;

        function login(provider) {
            var auth = $firebaseAuth();

            // login with Facebook
            auth.$signInWithPopup(provider).then(function(firebaseUser) {
                $log.log(firebaseUser);
                vm.displayName = firebaseUser.user.displayName;
            }).catch(function(error) {
                $log.log("Authentication failed:", error);
            });
        }

        function logout() {
            var auth = $firebaseAuth();
            $log.log(vm.displayName + " logged out");
            auth.$signOut();
            vm.displayName = undefined;
        }

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
