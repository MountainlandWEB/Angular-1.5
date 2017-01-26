(function(){

    angular.module('myApp')
        .component('charDetail', { // the tag for using this is <char-detail>
            templateUrl: "characters/char-detail.component.html",
            controller: charDetailController,
            bindings: {
                character: '<',
                onClose: '&'
            }
        });

    function charDetailController() {
        var self = this;
        self.char
        self.close = close;
        self.$onChanges = onChanges;

        function close() {
            self.onClose(); // call output binding
        }

        function onChanges(changes) {
            if (changes.character) {

            }
        }
    }

})();
