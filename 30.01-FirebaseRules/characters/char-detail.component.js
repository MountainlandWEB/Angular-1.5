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

    function charDetailController(characterService, $firebaseAuth, $log, $firebaseObject, $firebaseArray) {
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
        vm.saveProfile = saveProfile;
        vm.logout = logout;
        vm.hackProfile = hackProfile;

        function login(provider) {
            var auth = $firebaseAuth();

            // login with provider
            auth.$signInWithPopup(provider).then(function (firebaseUser) {
                $log.log(firebaseUser);
                vm.displayName = firebaseUser.user.displayName;
                vm.providerUser = firebaseUser.user;
                var ref = firebase.database().ref("users");
                var profileRef = ref.child(vm.providerUser.uid);
                vm.user = $firebaseObject(profileRef);
                $log.log(vm.user);
                $log.log(profileRef);
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
            }).catch(function (error) {
                $log.log("Authentication failed:", error);
            });
        }

        function saveProfile() {
            vm.user.$save();
        }

        function hackProfile() {
            var ref = firebase.database().ref("users");
            var users = $firebaseArray(ref);
            users.$loaded().then(function () {
                var index = Math.floor(Math.random() * users.length);
                vm.user = $firebaseObject(firebase.database().ref("users").child(users[index].$id));
            });
        }

        function logout() {
            var auth = $firebaseAuth();
            $log.log(vm.displayName + " logged out");
            auth.$signOut();
            vm.user = undefined;
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
