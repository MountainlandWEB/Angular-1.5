(function () {

    angular.module('app')
        .component('charDetail', { // the tag for using this is <char-detail>
            templateUrl: "components/char-detail.component.html",
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

    function charDetailController(Character, User) {

        // component properties
        var vm = this;
        vm.showLogin = false;
        vm.email = undefined;
        vm.password = undefined;
        vm.displayName = User.displayName;
        vm.errorMessage = undefined;
        vm.character = Character.selectedChar;

        // component functions
        vm.showEmailLogin = showEmailLogin;
        vm.login = login;
        vm.loginWithEmail = loginWithEmail;
        vm.logout = logout;
        vm.close = close;
        vm.save = save;
        vm.add = add;
        vm.deleteChar = deleteChar;

        function showEmailLogin() {
            vm.showLogin = !vm.showLogin;
        }

        function login(provider) {
            vm.errorMessage = undefined;
            User.login(provider)
                .then(function () {
                    vm.displayName = User.displayName;
                    vm.showLogin = false;
                });
        }

        function loginWithEmail() {
            vm.errorMessage = undefined;
            User.loginWithEmail(vm.email, vm.password)
                .then(function () {
                    if (User.displayName) {
                        vm.displayName = User.displayName;
                        vm.showLogin = false;
                        vm.password = undefined;
                    } else {
                        vm.errorMessage = "Error. Please try again.";
                    }
                }, function(error) {
                    vm.errorMessage = error.message;
                });
        }

        function logout() {
            User.logout();
            vm.displayName = undefined;
        }

        function close() {
            vm.character = undefined;
            Character.selectedChar = undefined;
        }

        function save() {
            console.log('saving...');
            console.log(JSON.stringify(vm.character));
            Character.save(vm.character);
        }

        function add() {
            console.log('saving...');
            console.log(JSON.stringify(vm.character));
            Character.add(vm.character);
        }

        function deleteChar() {
            console.log('deleting...');
            console.log(JSON.stringify(vm.character));
            Character.remove(vm.character);
        }
    }

})();
