angular.module('farmSanctuary.ateToday', [])

.controller('ateTodayController', function ($scope, $location, Meals, Auth) { //$location
  $scope.mealsInput = 0;
  $scope.submitMeals = () => {
    Meals.submitMeals($scope.mealsInput)
      .then((resp) => {
        $location.path('/rescue');  //do I actually want to wait on the server for this? I think for now I'll just wait on the server for everything, but there's probably a smarter refactor possible
      });
  };
  $scope.goToSanctuary = () => {
    $location.path('/sanctuary');
  }
});