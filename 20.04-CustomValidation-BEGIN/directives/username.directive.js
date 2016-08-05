(function() {
    angular.module('app')
        .directive('username', function ($q, $http) {
            return {
                require: 'ngModel',
                link: function(scope, element, attributes, ctrl) {
                    ctrl.$asyncValidators.username = usernameValidator;

                    function usernameValidator(modelValue, viewValue) {
                        if (ctrl.$isEmpty(modelValue)) {
                            // in this validator, consider empty models to be valid
                            return $q.when();
                        }

                        var deferred = $q.defer();

                        $http.get('https://test-usernames.firebaseio.com/usernames.json')
                            .then(function(response) {
                                var usernames = response.data;
                                if (usernames.indexOf(modelValue) === -1) {
                                    // the username is available
                                    deferred.resolve();
                                } else {
                                    // the username is not available
                                    deferred.reject();
                                }
                            })

                        return deferred.promise;
                    }
                }
            }
        });
})();