(function () {

    angular.module('app')
        .component('myTabs', {
            transclude: true,
            templateUrl: 'my-tabs/my-tabs.component.html',
            controller: MyTabsController
        });

    function MyTabsController() {
        var $ctrl = this;

        $ctrl.panes = [];

        $ctrl.select = function(pane) {
            angular.forEach($ctrl.panes, function(pane) {
                pane.selected = false;
            });
            pane.selected = true;
        };

        $ctrl.addPane = function(pane) {
            if ($ctrl.panes.length === 0) {
                $ctrl.select(pane);
            }
            $ctrl.panes.push(pane);
        };
    }

})();