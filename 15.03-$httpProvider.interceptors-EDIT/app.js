(function(){

    // this CREATES the myApp module (because it has the second, array parameter)
    angular.module('myApp', [
        /* listed imported modules here */
        'ui.router'
    ])
        .config(myAppConfig)
        .config(interceptors);

    function myAppConfig($urlRouterProvider) {
        $urlRouterProvider.otherwise('/main');
    }

    function interceptors($httpProvider) {
        $httpProvider.interceptors.push(function() {
            return {
                // 'request': function (config) {
                //     console.log(config);
                //     return config;
                // },
                'response': function (response) {
                    console.log(response);
                    return response;
                }
            };
        });
    }

})();

// Factory is an angular service that can be a global service to be called many times. Once you create a function for
// your promise, you must then add it to the service by creating a self variable under the service.

function getPhoto(id) { // This takes the id input and returns the promise with photo data.
    var photo = undefined;
    var deferred = $q.defer(); // This creates the promise. $q is a wrapper that includes the promise functionality
                                // and other functionality. The promise is the variable deferred.
    var photo = Character.get({id: photoId}) // This uses our $resource factory(service).
        .$promise.then(function(data) { // This gets the data from the $resource promise
        deferred.resolve(data); // This stores the data in the promise.
    });
    return deferred.promise; // This sends the promise back with the data.
}