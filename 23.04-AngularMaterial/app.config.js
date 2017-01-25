
angular.module('myApp')
	.config(charListConfig);

function charListConfig($stateProvider) {
	$stateProvider.state('main', {
			url: '/main',
			template: '<char-detail></char-detail>'
		});
}