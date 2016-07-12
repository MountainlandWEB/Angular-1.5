(function () {

    angular.module('myApp')
        .component('thClickable', { // the tag for using this is <th-clickable>
            templateUrl: "my-example/th-clickable.component.html",
            controller: thClickableController,
            bindings: {
                field: '@',
                label: '@',
                sortClass: '=',
                orderBy: '@'
            }
        });

    function thClickableController() {
        var self = this;
        self.sort = sort;
        
        function sort() {
            
        }
    }

    })();