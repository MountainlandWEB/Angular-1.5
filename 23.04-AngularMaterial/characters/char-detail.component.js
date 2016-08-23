(function(){

    angular.module('myApp')
        .component('charDetail', { // the tag for using this is <char-detail>
            templateUrl: "characters/char-detail.component.html",
            controller: charDetailController,
            bindings: {
                character: '<',
                onClose: '&'
            }
        })
        .config(charListConfig);

    function charListConfig($stateProvider) {
        $stateProvider.state('main', {
            url: '/main',
            template: '<char-detail></char-detail>'
        });
    }

    function charDetailController(characterService) {
        var self = this;

        self.character = characterService.selectedChar;
        self.close = close;

        function close() {
            self.onClose(); // call output binding
        }
    }

})();
