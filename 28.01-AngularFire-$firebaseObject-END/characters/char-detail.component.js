(function () {

    angular.module('app')
        .component('charDetail', { // the tag for using this is <char-detail>
            templateUrl: "characters/char-detail.component.html",
            controller: charDetailController,
            controllerAs: 'vm',
            bindings: {
                character: '<',
                onClose: '&'
            }
        })
        .config(charListConfig);

    function charListConfig($stateProvider) {
        $stateProvider.state('char-detail', {
            views: {
                'char-detail': {
                    template: '<char-detail></char-detail>'
                }
            }
        });
    }

    function charDetailController($firebaseObject /* <-- Step #4: inject $firebaseObject service into your controller or service or wherever you'd like to use it */
                                 ,$scope          /* <-- Step #7: Inject $scope to help with 3-way data binding */
    ) {
        // Step #5: create a firebase ref object using your own firebase database:
        var ref = firebase.database().ref().child("character");

        // Step #6: Wrap the ref object with $firebaseObject to download the data into a local object
        var syncObject = $firebaseObject(ref);

        // Step #8: Synchronize the object with 3-way data binding
        syncObject.$bindTo($scope, "vm.form");

        var vm = this;

        vm.char = {};

        // Step #9: Use the $loaded promise (no pun intended) to load data into object
        syncObject.$loaded().then(function() {
            vm.char = vm.form;
        });

        vm.save = function() {
            console.log('saving...');
            console.log(JSON.stringify(vm.char));

            // Step #10: Save changes made to our view by making out syncObject equal to that. NOTE: This will either create an object or update it in your database.
            vm.form = vm.char;
        }

        vm.delete = function() {
            console.log('deleting...');
            console.log(JSON.stringify(vm.char));

            // Step #11: call the $delete method to remove the object form the database
            syncObject.$remove().then(function() {
                console.log('Object removed!');
                vm.char = {};
            }, function() {
                console.log('Object could not be removed.');
            });
        }
    }

})();
