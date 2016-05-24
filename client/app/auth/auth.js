angular.module('farmSanctuary.auth', [])

.controller('authController', function ($scope, $location, $window, Auth) {
  $scope.user = {};
  $scope.signup = function() {
    Auth.signup($scope.user.username)
      .then(function (token) {
        // console.log('signup response received');
        $window.localStorage.setItem('com.farmSanctuary', token);
        // console.log($window.localStorage.getItem('com.farmSanctuary', token));
        $location.path('/ateToday');
      });
  };
});