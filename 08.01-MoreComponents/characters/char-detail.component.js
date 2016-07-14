(function(){

    angular.module('myApp')
        .component('charDetail', { // the tag for using this is <char-detail>
            templateUrl: "characters/char-detail.component.html",
            controller: charDetailController,
            bindings: {
                character: '<'
            }
        });

    function charDetailController() {
        var self = this;
        self.close = close;

        function close() {
            self.character = undefined;
        }
    }

})();
