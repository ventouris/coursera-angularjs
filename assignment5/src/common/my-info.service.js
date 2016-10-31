(function () {
"use strict";

angular.module('common')
.service('MyInfoService', MyInfoService);


MyInfoService.$inject = [];
function MyInfoService() {
  var service = this;

  service.saveUser = function (user) {
    service.user = user;
  };

  service.getUser = function () {
    return service.user;
  };

}



})();
