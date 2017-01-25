
angular.module('myApp')
	.config(charListConfig);

function charListConfig($stateProvider) {
	$stateProvider.state('main', {
			url: '/main',
			template: '<char-detail></char-detail>'
		})
		.state('register', {
			url: '/register',
			template: '<register></register>'
		})
		.state('login', {
			url: '/login',
			template: '<login></login>'
		});
}