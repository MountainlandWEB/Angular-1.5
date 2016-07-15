(function () {

    angular.module('app')
        .component('myPane', {
            transclude: true,
            require: {
                tabsCtrl: '^myTabs'
            },
            bindings: {
                title: '@'
            },
            templateUrl: 'my-pane/my-pane.component.html',
            controller: MyPaneController
        });

    function MyPaneController() {
        var $ctrl = this;
        
        $ctrl.$onInit = function() {
            $ctrl.tabsCtrl.addPane(this);
            console.log(this);
        };
    }

})();
