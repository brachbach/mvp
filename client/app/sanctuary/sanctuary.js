angular.module('farmSanctuary.sanctuary', [])

.controller('sanctuaryController', function ($scope, $location, Meals) { //$location
  $scope.data = {};
  Meals.retrieveMeals()
    .then(function(meals) {
      var mealsArray = [];
      for (var i = 0; i < meals; i++) {
        mealsArray.push(i);
      }
      $scope.data.meals = mealsArray;
    });
});