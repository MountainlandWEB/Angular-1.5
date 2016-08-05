(function(){
    'use strict';

    angular.module('homeDirectives', ['ui.bootstrap'])

    .directive('tdNonefound', tdNonefound) // td-nonefound
    .directive('tdAddlistbutton', tdAddlistbutton) //td-addlistbutton
    .directive('tdItem', tdItem)
    .controller('tdItemController', tdItemController);

    function tdNonefound() {
        return {
            restrict: 'A', // <tr td-nonefound>
            replace: true,
            template: '<tr><td><i>No items in this list</i></td></tr>'
        };
    }

    function tdAddlistbutton() {
        return {
            restrict: 'E', // <td-addlistbutton>
            replace: true,
            template: '<button class="btn btn-xs btn-success" ng-click="hc.addList(newListText)">add list</button>'
        };
    }

    function tdItem() {
        return {
            scope: {}, // "isolate scope"
            restrict: 'A',
            templateUrl: 'templates/tdItem.html',
            bindToController: {
                item: '=', // item and index parameters are passed straight in from HTML directive
                index: '='
            },
            controller: 'tdItemController as tc'
        };
    }

    function tdItemController(homeService, $uibModal, $log) {
        var tc = this;

        tc.openEditModal = function (itemIndex) {
            var modalInstance = $uibModal.open({
                template: '<h3>modal</h3>',
                controller: function () {

                },
                size: 'sm',
                resolve: {
                    item: function () {
                        return homeService.storage.items[itemIndex].title;
                    }
                }
            });

            function onSuccess(editedTitle) {
                homeService.storage.items[itemIndex].title = editedTitle;
            }

            function onDismiss() {
                $log.info('Modal dismissed at: ' + new Date());
            }

            modalInstance.result.then(onSuccess, onDismiss);
        }

    }





}());
