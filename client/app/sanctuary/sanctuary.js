angular.module('farmSanctuary.sanctuary', [])

.controller('sanctuaryController', function ($scope, $location, Meals, Auth, User) {
  $scope.animals = {};
  User.getUser()
    .then((user) => {
      const cows = user.animals.cows;
      let cowsArray = [];
      for (let i = 0; i < cows; i++) {
        cowsArray.push(i);
      }
      $scope.animals.cows = cowsArray;
    });
  $scope.goToAteToday = function() {
    $location.path('ateToday');
  };
});