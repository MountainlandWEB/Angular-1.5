(function(){

    angular.module('app')
        .component('contact', {
            template: "<h1>Contact Page</h1>"
        })
        .config(aboutConfig);

    function aboutConfig($stateProvider) {
        $stateProvider.state('contact', {
            url: '/contact',
            template: '<contact></contact>'
        });
    }

})();
