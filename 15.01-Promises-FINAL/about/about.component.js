(function(){

    angular.module('myApp')
        .component('about', { // the tag for using this is <char-list>
            templateUrl: "about/about.component.html"
        })
        .config(aboutConfig);

    function aboutConfig($stateProvider) {
        $stateProvider.state('about', {
            url: '/about',
            template: '<about></about>'
        });
    }
    
})();
