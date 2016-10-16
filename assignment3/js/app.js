(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', foundItemsDirective)
.constant('ApiBasePath', "http://davids-restaurant.herokuapp.com");



function foundItemsDirective() {
  var ddo = {
    templateUrl: 'foundItems.html',
    scope: {
      foundItems: '<',
      onRemove: '&'
    },
    controller: NarrowItDownController,
    controllerAs: 'narrow',
    bindToController: true
  };

  return ddo;
}

function foundItemsDirectiveController() {
  var narrow = this;
  
}



NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {

  var narrowIt = this;

  narrowIt.searchMenu = function () {
    var found = MenuSearchService.getMatchedMenuItems(narrowIt.searchTerm);
  }

}

MenuSearchService.$inject = ['$http', 'ApiBasePath']
function MenuSearchService($http, ApiBasePath) {

  var service = this;

  service.getMatchedMenuItems = function (searchTeam) {
    return $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json")
    }).then(function (result) {
      var foundItems = [];

      for (var i = 0; i < result.data.menu_items.length; i++) {
        var descr = result.data.menu_items[i].description;
        if (descr.toLowerCase().indexOf(searchTeam) !== -1) {
          foundItems.push(result.data.menu_items[i]);
        }
      }
      return foundItems;
    })

  }
}

})();
