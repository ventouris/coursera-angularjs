(function() {
    'use strict';

    angular.module('LunchCheck', [])

    .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope) {
        $scope.dishes = "";

        $scope.count = function() {
          $scope.infoText = "";

            if ( $scope.dishes === "" ) {
              $scope.infoText = "Please enter data first";
              $scope.textColor = "red";
              $scope.borderColor = "red";
            } else if ($scope.dishes.split(',').length > 3) {
              $scope.infoText = "Too much!";
              $scope.textColor = "green";
              $scope.borderColor = "green";
            } else if ($scope.dishes.split(',').length > 0) {
                $scope.infoText = "Enjoy!";
                $scope.textColor = "green";
                $scope.borderColor = "green";
            }

        };
    }

})();
