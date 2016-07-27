(function(){

    angular.module('myApp')
        .component('charDetail', { // the tag for using this is <char-detail>
            templateUrl: "characters/char-detail.component.html",
            controller: charDetailController,
            bindings: {
                charId: '<',
                onClose: '&'
            }
        });

    function charDetailController($log, characterService, $timeout) {
        var self = this;
        self.close = close;
        self.photo = undefined;
        self.$onChanges = onChanges;
        self.save = save;

        function close() {
            self.onClose(); // call output binding
        }

        function onChanges(changes) {
            if (changes.charId && changes.charId.currentValue) {
                characterService.getPhoto(changes.charId.currentValue)
                    .then(function(data) {
                        $log.log(data);
                        self.photo = data;
                    });
            }
        }

        function save() {
            self.photo.photographer = 'Todd';
            characterService.savePhoto(self.photo)
                .then(function () {
                    self.saved = true;
                    $timeout(function () {
                        self.saved = false;
                    }, 3000);
                }, function (error) {
                    $log.error(error);
                });
        }
    }

})();
