(function () {
    angular.module('app')
        .component('myForm', {
            templateUrl: 'my-form/my-form.component.html',
            controller: MyFormController,
            controllerAs: 'vm'
        });

    function MyFormController($scope) {
        var vm = this;
        
        vm.master = {};

        vm.update = function (user) {
            vm.master = angular.copy(user);
        };

        vm.reset = function () {
            vm.user = angular.copy(vm.master);
        };

        vm.reset();

        vm.messages = {
            'required': 'Age is required.',
            'integer': 'Number must be an integer.',
            'max': 'Number must be no greater than 150.',
            'min': 'Number must be no less than 0.'
        };

        vm.getIntegerErrorMessage = function() {
            return vm.messages[Object.keys($scope.form.inputAge.$error)[0]] || '';
        }
    }
})();