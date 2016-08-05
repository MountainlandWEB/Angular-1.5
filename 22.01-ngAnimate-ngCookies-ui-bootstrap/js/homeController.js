(function () {
	'use strict';

	angular.module('homeController', ['ngCookies'])
		.controller('homeController', homeController);

	homeController.$inject = ['homeService', '$cookies'];

	function homeController(homeService, $cookies) {

		// list everything
		var hc = this;
		hc.addItem = addItem;
		hc.lists = homeService.storage.lists;
		//var tempMaster = $cookies.getObject('master');
		//if (angular.isDefined(tempMaster)) {
		//	hc.lists = hc.lists.concat(tempMaster);
		//}
		hc.items = homeService.storage.items;
		hc.currentList = 0;
		hc.keyPress = keyPress;
		hc.removeCompleted = homeService.removeCompleted;

		// public functions
		function addItem() {
			// only add item if text isn't blank
			if (hc.newItemText && hc.newItemText.trim() !== '') {
				homeService.addItem(hc.newItemText, hc.currentList);
				hc.newItemText = '';
			}
		}

		// add list
		hc.addList = function (listName) {
			var master = $cookies.getObject('master');
			if (!angular.isDefined(master)) {
				master = [];
			}
			else {
				$cookies.remove('master');
			}
			master.push(listName);
			$cookies.putObject('master', master);
			hc.lists.push(listName);
		};

		function keyPress(event) {
			if (event.keyCode == 13) {
				hc.addItem();
			}
			else if (event.keyCode == 27) {
				hc.newItemText = '';
			}
		}

	}

}());
