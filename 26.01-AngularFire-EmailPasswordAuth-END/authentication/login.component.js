angular.module('myApp')
	.component('login', {
		templateUrl: 'authentication/login.template.html',
		controllerAs: 'vm',
		controller: LoginController
	});

function LoginController(auth, $mdToast){
	var vm = this;
	vm.email = null;
	vm.password = null;
	vm.login = function () {
		auth.loginUser(vm.email, vm.password).then(function (user) {
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
