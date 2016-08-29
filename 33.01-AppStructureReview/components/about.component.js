(function(){

    angular.module('app')
        .component('about', { // the tag for using this is <about>
            templateUrl: "components/about.component.html"
        })
        .config(aboutConfig);

    function aboutConfig($stateProvider) {
        $stateProvider.state('about', {
            url: '/about',
            template: '<about></about>'
        });
    }
    
})();
