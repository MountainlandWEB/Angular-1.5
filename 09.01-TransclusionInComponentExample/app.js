(function () {

    angular.module('app', [])
        .component('card', {
            bindings: {
                artist: '@myArtist'
            },
            template:
                '<div>' +
                '  <h3>{{$ctrl.artist || "No artist name"}}</h3>' +
                '  <i><ng-transclude>No song title</ng-transclude></i>' +
                '</div>',
            transclude: true
        });

})();
