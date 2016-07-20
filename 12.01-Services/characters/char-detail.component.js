(function(){

    angular.module('myApp')
        .component('charDetail', { // the tag for using this is <char-detail>
            templateUrl: "characters/char-detail.component.html",
            controller: charDetailController,
            bindings: {
                characters: '<',
                onClose: '&'
            }
        });

    function charDetailController() {
        var self = this;
        self.close = close;

        for (ch in characters)

        function close() {
            self.onClose(); // call output binding
        }
    }

})();
