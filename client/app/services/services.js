angular.module('farmSanctuary.services', [])

.factory('Meals', function ($http) {
  var meals = [];
  var submitMeals = function (mealCount) {
    for (var i = 0; i < mealCount; i++) {
      meals.push(i);
    }
  }
  var retrieveMeals = function () {
    return $http({
      method: 'GET',
      url: '/api/meals',
    })
    .then(function(resp) {
      console.log(resp.data.meals);
      return resp.data.meals;
    });
  };
  return {
    submitMeals: submitMeals,
    retrieveMeals: retrieveMeals
  };
});
