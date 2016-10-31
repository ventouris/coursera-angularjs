(function () {

angular.module('public')
.controller('SignupController', SignupController);

SignupController.$inject = ['MenuService', 'MyInfoService'];
function SignupController(MenuService, MyInfoService) {
  var signupCtrl = this;
  signupCtrl.user = {};
  signupCtrl.submitted = false;

  signupCtrl.submit = function () {

    MenuService.getMenuItem(signupCtrl.user.favouritedish)
        .then(function(response) {
          signupCtrl.dishError = false;
          signupCtrl.submitted = true;
          MyInfoService.saveUser(signupCtrl.user);
        })
        .catch(function() {
          signupCtrl.dishError = true;
        });
  };
}

})();
