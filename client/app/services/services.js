angular.module('farmSanctuary.services', [])

.factory('Meals', function ($http) {
  // var meals = [];
  var submitMeals = function (mealCount) {
    return $http({
      method: 'POST',
      url: '/api/user/meals',
      data: {meals: mealCount}
    })
    .then(function(resp) {
      return resp;
    });
  };

  var rescue = function(animal, fund, yourVegBucks) {
    if (fund <= yourVegBucks) {
      return $http({
        method: 'POST',
        url: '/api/user/animals',
        data: {
          animal: animal,
          fund: fund
        }
      })
      .then(function(resp) {
        return resp.data;
      });
    }
  };

  return {
    submitMeals: submitMeals,
    rescue: rescue,
  };
})
.service('User', function($http) {
  this.getUser = () => {
    return $http({
      method: 'GET',
      url: '/api/user/animals'
    })
    .then(function(resp) {
      return resp.data;
    });
  }
})
.factory('Auth', function ($http) {
  var signin = function (username) {
    return $http({
      method: 'POST',
      url: '/api/auth/signin',
      data: {username: username}
    })
    .then(function (resp) {
      return resp.data.token;
    });
  };

  var signup = function (username) {
    return $http({
      method: 'POST',
      url: '/api/auth/signup',
      data: {username: username}
    })
    .then(function (resp) {
      return resp.data.token;
    });
  };

  return {
    signup: signup,
    signin: signin
  };
});
