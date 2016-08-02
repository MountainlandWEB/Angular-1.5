(function() {
    angular.module('app')
        .directive('overwriteEmail', function () {
            return {
                require: 'ngModel',
                link: function(scope, element, attributes, ctrl) {
                    // only apply the validator if ngModel is present and Angular has added the email validator
                    if (ctrl && ctrl.$validators.email) {

                        // this will overwrite the default Angular email validator
                        ctrl.$validators.email = function(modelValue) {
                            return ctrl.$isEmpty(modelValue) || /^[a-z0-9]+@example\.com$/i.test(modelValue);
                        };
                    }
                }

                }
        });
})();