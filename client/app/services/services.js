angular.module('farmSanctuary.services', [])

.factory('Meals', function ($http) {
  const submitMeals = (mealCount) => {
    return $http({
      method: 'POST',
      url: '/api/user/meals',
      data: {meals: mealCount}
    })
    .then((resp) => {
      return resp;
    });
  };

  const rescue = (animal, fund, yourVegBucks) => {
    if (fund <= yourVegBucks) {
      return $http({
        method: 'POST',
        url: '/api/user/animals',
        data: {
          animal: animal,
          fund: fund
        }
      })
      .then((resp) => {
        return resp.data;
      });
    }
  };

  return {
    submitMeals: submitMeals,
    rescue: rescue,
  };
})
.service('User', function ($http) {
  this.getUser = () => {
    return $http({
      method: 'GET',
      url: '/api/user'
    })
    .then((resp) => {
      return resp.data;
    });
  }
})
.factory('Auth', function ($http) {
  var signin = (username) => {
    return $http({
      method: 'POST',
      url: '/api/auth/signin',
      data: {username: username}
    })
    .then((resp) => {
      return resp.data.token;
    });
  };

  var signup = (username) => {
    return $http({
      method: 'POST',
      url: '/api/auth/signup',
      data: {username: username}
    })
    .then((resp) => {
      return resp.data.token;
    });
  };

  return {
    signup: signup,
    signin: signin
  };
});
