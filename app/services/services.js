angular.module('farmSanctuary.services', [])

.factory('Meals', function () {
  var meals = [];
  var submitMeals = function (mealCount) {
    for (var i = 0; i < mealCount; i++) {
      meals.push(i);
    }
  }
  var retrieveMeals = function () {
    return meals;
  };
  return {
    submitMeals: submitMeals,
    retrieveMeals: retrieveMeals
  };
});
