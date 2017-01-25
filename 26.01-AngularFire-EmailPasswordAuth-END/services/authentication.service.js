(function () {
	angular.module('myApp')
		.service('auth', function ($firebaseAuth) {
			var self = this;

			self.registerUser = function (user) {
				return $firebaseAuth().$createUserWithEmailAndPassword(user.email, user.password);
			};

			self.loginUser = function (email, password){
				return $firebaseAuth().$signInWithEmailAndPassword(email, password);
			}
		})


})();