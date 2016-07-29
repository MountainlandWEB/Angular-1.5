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
        self.close = close;
        self.save = save;

        function close() {
            self.onClose(); // call output binding
        }

        function save() {
            self.character.name.first = self.first;
            self.character.save();
            self.first = '';
        }

    }

})();
