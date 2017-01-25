(function () {
    angular.module('app')
        .component('myForm', {
            templateUrl: 'my-form/my-form.component.html',
            controller: MyFormController,
            controllerAs: 'vm'
        });

    function MyFormController() {
        var vm = this;
        
        vm.master = {};

        vm.update = function (user) {
            vm.master = angular.copy(user);
        };

        vm.reset = function () {
            vm.user = angular.copy(vm.master);
        };

        vm.reset();
    }
})();