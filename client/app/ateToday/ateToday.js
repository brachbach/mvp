angular.module('farmSanctuary.ateToday', [])

.controller('ateTodayController', function ($scope, $location, Meals, Auth) { //$location
  $scope.mealsInput = 0;
  $scope.submitMeals = function() {
    Meals.submitMeals($scope.mealsInput)
      .then(function(resp) {
        $location.path('/rescue');  //do I actually want to wait on the server for this? I think for now I'll just wait on the server for everything, but there's probably a smarter refactor possible
      });
  };
  $scope.goToSanctuary = function() {
    $location.path('/sanctuary');
  }
});