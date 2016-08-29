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

    function charDetailController(Character, User) {
        var vm = this;
        vm.showLogin = false;
        vm.email = undefined;
        vm.password = undefined;
        vm.displayName = User.getDisplayName();

        vm.character = Character.getSelected();

        vm.close = close;
        vm.save = save;
        vm.add = add;
        vm.deleteChar = deleteChar;
        vm.showEmailLogin = showEmailLogin;
        vm.login = login;
        vm.loginWithEmail = loginWithEmail;
        vm.logout = logout;

        function showEmailLogin() {
            vm.showLogin = !vm.showLogin;
        }

        function loginWithEmail() {
            User.loginWithEmail(vm.email, vm.password)
                .then(function () {
                    vm.displayName = User.getDisplayName();
                    vm.showLogin = false;
                    vm.password = undefined;
                });
        }

        function login(provider) {
            User.login(provider)
                .then(function () {
                    vm.displayName = User.getDisplayName();
                    vm.showLogin = false;
                });
        }

        function logout() {
            User.logout();
            vm.displayName = undefined;
        }

        function close() {
            vm.character = undefined;
            Character.setSelected(undefined);
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
