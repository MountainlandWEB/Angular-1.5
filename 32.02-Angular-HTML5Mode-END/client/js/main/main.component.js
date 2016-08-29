(function(){

    angular.module('app')
        .component('main', {
            template: "<h1>Main Page</h1>"
        })
        .config(aboutConfig);

    function aboutConfig($stateProvider) {
        $stateProvider.state('main', {
            url: '/main',
            template: '<main></main>'
        });
    }

})();
