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

        //this function talks to the parent component on the 'char-list.component.js' page and tells it to run the closeDetail function when this one is run.
        function close() {
            //self.character = undefined;
            self.onClose();
        }
    }

})();
