angular.module('farmSanctuary.services', [])

.factory('Meals', function ($http) {
  // var meals = [];
  var submitMeals = function (mealCount) {
    return $http({
      method: 'POST',
      url: '/api/meals',
      data: {meals: mealCount}
    })
    .then(function(resp) {
      return resp;
    });
  }
  var retrieveMeals = function () {
    return $http({
      method: 'GET',
      url: '/api/meals',
    })
    .then(function(resp) {
      // console.log(resp.data.meals);
      return resp.data.meals;
    });
  };
  return {
    submitMeals: submitMeals,
    retrieveMeals: retrieveMeals
  };
});
