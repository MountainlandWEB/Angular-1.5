(function () {

	angular.module('myApp')
		.component('register', {
			templateUrl: 'authentication/register.template.html',
			controller: RegisterController,
			controllerAs: 'vm'
		});

	function RegisterController(auth, $mdToast) {
		var vm = this;
		vm.user = {};
		vm.registerUser = registerUser;

		function registerUser() {
			var user = auth.registerUser(vm.user).then(function (user) {
					$mdToast.show(
						$mdToast.simple()
							.textContent('Success!')
							.hideDelay(3000)
					);
			}).catch(function (error) {
				$mdToast.show(
					$mdToast.simple()
						.textContent('Error: ' + error.message)
						.hideDelay(3000)
				);
			});
		}
	}
})();