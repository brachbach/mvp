angular.module('farmSanctuary.ateToday', [])

.controller('ateTodayController', function ($scope, $location, Meals) { //$location
  $scope.meals = Meals.retrieveMeals ();
  $scope.mealsInput = 0;
  $scope.submitMeals = function() {
    Meals.submitMeals($scope.mealsInput);
    $location.path('/sanctuary');
  }
});