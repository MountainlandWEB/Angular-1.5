(function(){

    angular.module('app')
        .component('about', {
            template: "<h1>About Page</h1>"
        })
        .config(aboutConfig);

    function aboutConfig($stateProvider) {
        $stateProvider.state('about', {
            url: '/about',
            template: '<about></contact>'
        });
    }

})();
