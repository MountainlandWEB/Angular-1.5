(function () {

    angular.module('app')
        .service('User', User);

    function User($firebaseAuth, $firebaseObject, $log, $q) {
        var self = this;
        self.providerUser = undefined;
        self.displayName = undefined;

        self.login = login;
        self.loginWithEmail = loginWithEmail;
        self.logout = logout;
        self.getDisplayName = function() {return userData ? userData.displayName || userData.email : undefined; }

        // vm.userData = $localStorage['firebase:authUser:AIzaSyAypNYnz62ffGkJvpYPfQ1e23-CkT8XUCI:[DEFAULT]']; // doesn't work!
        var userData = JSON.parse(localStorage.getItem('firebase:authUser:AIzaSyAypNYnz62ffGkJvpYPfQ1e23-CkT8XUCI:[DEFAULT]'));
        // $log.log(vm.userData);

        function login(provider) {
            var auth = $firebaseAuth();

            // login with third-party provider
            return auth.$signInWithPopup(provider)
                .then(loginSuccess)
                .catch(loginError);
        }

        function loginWithEmail(email, password) {
            var auth = $firebaseAuth();
            return auth.$createUserWithEmailAndPassword(email, password)
                .then(function () {
                    auth.$signInWithEmailAndPassword(email, password)
                        .then(loginSuccess)
                        .catch(loginError);
                }, function (error) {
                    if (error.code === "auth/email-already-in-use" || error.code == 400) {
                        auth.$signInWithEmailAndPassword(email, password)
                            .then(loginSuccess)
                            .catch(loginError);
                    } else {
                        $log.error(error);
                    }
                })
                .catch(loginError);
        }

        function loginSuccess(firebaseUser) {
            var deferred = $q.defer();
            $log.log(firebaseUser);

            self.providerUser = firebaseUser.user ? firebaseUser.user : firebaseUser;
            var ref = firebase.database().ref("users");
            var profileRef = ref.child(self.providerUser.uid);
            self.user = $firebaseObject(profileRef);
            // $log.log(self.user);
            // $log.log(profileRef);
            self.user.$loaded().then(function () {
                if (!self.getDisplayName()) {
                    $log.log("creating user...");
                    profileRef.set({
                        displayName: self.providerUser.displayName,
                        email: self.providerUser.email,
                        photoURL: self.providerUser.photoURL
                    }).then(function () {
                        $log.log("user created.");
                    }, function () {
                        $log.log("user could not be created.");
                    });
                } else {
                    $log.log('user already created!');
                }
                deferred.resolve();
            });
            return deferred.promise;
        }

        function loginError(error) {
            $log.log("Authentication failed:", error);
        }

        function logout() {
            var auth = $firebaseAuth();
            $log.log(self.getDisplayName() + " logged out");
            auth.$signOut();
        }

    }

})();
