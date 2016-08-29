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

    function charDetailController(characterService, $firebaseAuth, $log, $firebaseObject) {
        var vm = this;
        vm.email = undefined;
        vm.password = undefined;
        // vm.userData = $localStorage['firebase:authUser:AIzaSyAypNYnz62ffGkJvpYPfQ1e23-CkT8XUCI:[DEFAULT]']; // doesn't work!
        vm.userData = JSON.parse(localStorage.getItem('firebase:authUser:AIzaSyAypNYnz62ffGkJvpYPfQ1e23-CkT8XUCI:[DEFAULT]'));
        // $log.log(vm.userData);
        if (vm.userData) {
            vm.displayName = vm.userData.displayName || vm.userData.email;
        }
        else {
            vm.displayName = undefined;
        }

        // Step #7: Load selected character once the promise is fullfilled
        characterService.characters.$loaded().then(function () {
            vm.character = characterService.selectedChar;
        });

        vm.close = close;
        vm.save = save;
        vm.add = add;
        vm.deleteChar = deleteChar;
        vm.login = login;
        vm.showLogin = false;
        vm.loginWithEmail = loginWithEmail;
        vm.showEmailLogin = showEmailLogin;
        vm.logout = logout;

        function login(provider) {
            var auth = $firebaseAuth();

            // login with third-party provider
            auth.$signInWithPopup(provider)
                .then(loginSuccess)
                .catch(loginError);
        }

        function showEmailLogin() {
            vm.showLogin = !vm.showLogin;
        }

        function loginWithEmail() {
            var auth = $firebaseAuth();
            auth.$createUserWithEmailAndPassword(vm.email, vm.password)
                .then(function () {
                    auth.$signInWithEmailAndPassword(vm.email, vm.password)
                        .then(loginSuccess)
                        .catch(loginError);
                }, function (error) {
                    if (error.code === "auth/email-already-in-use") {
                        auth.$signInWithEmailAndPassword(vm.email, vm.password)
                            .then(loginSuccess)
                            .catch(loginError);
                    } else {
                        $log.error(error);
                    }
                })
                .catch(loginError);
        }

        function loginSuccess(firebaseUser) {
            $log.log({firebaseUser});
            vm.displayName = firebaseUser.user ? firebaseUser.user.displayName : firebaseUser.email;
            vm.showLogin = false;
            vm.password = undefined;

            vm.providerUser = firebaseUser.user;
            var ref = firebase.database().ref("users");
            var profileRef = ref.child(vm.providerUser.uid);
            vm.user = $firebaseObject(profileRef);
            $log.log(vm.user);
            $log.log({profileRef});
            vm.user.$loaded().then(function () {
                if (!vm.user.displayName) {
                    $log.log("creating user...");
                    profileRef.set({
                        displayName: vm.providerUser.displayName,
                        email: vm.providerUser.email,
                        photoURL: vm.providerUser.photoURL
                    }).then(function () {
                        $log.log("user created.");
                    }, function () {
                        $log.log("user could not be created.");
                    });
                } else {
                    $log.log('user already created!');
                }
            });
        }

        function loginError(error) {
            $log.log("Authentication failed:", error);
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
