angular.module('farmSanctuary.services', [])

.factory('Meals', function () {
  var meals = 0;
  var submitMeals = function (mealCount) {
    this.meals = mealCount;
  };
  var retrieveMeals = function () {
    return this.meals;
  };
  return {
    submitMeals: submitMeals,
    retrieveMeals: retrieveMeals
  };
});
