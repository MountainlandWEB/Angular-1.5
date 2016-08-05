(function() {
    angular.module('app')
        .directive('integer', function () {
            return {
                require: 'ngModel',
                link: function(scope, element, attributes, ctrl) {
                    ctrl.$validators.integer = integerValidator;

                    function integerValidator(modelValue, viewValue) {
                        if (ctrl.$isEmpty(modelValue)) {
                            // in this validator, consider empty models to be valid
                            return true;
                        }

                        if (/^\-?[0-9]+$/.test(viewValue)) {
                            // it is valid
                            return true;
                        }

                        // it is invalid
                        return false;
                    }
                }
            }
        });
})();