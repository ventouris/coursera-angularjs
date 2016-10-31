(function () {

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['MenuService', 'MyInfoService', 'ApiPath', 'user'];
function MyInfoController(MenuService, MyInfoService, ApiPath, user) {
  var myinfoCtrl = this;

  myinfoCtrl.basePath = ApiPath;

  if ( user ) {
    myinfoCtrl.user = user;
    MenuService.getMenuItem(myinfoCtrl.user.favouritedish)
      .then(function(response) {
        myinfoCtrl.menuItem = response;
      });
  }


}

})();
