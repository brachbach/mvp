angular.module('farmSanctuary.auth', [])

.controller('authController', function ($scope, $location, $window, Auth) {
  $scope.user = {};
  $scope.signup = function() {
    Auth.signup($scope.user.username)
      .then(function (token) {
        $window.localStorage.setItem('com.farmSanctuary', token);
        $location.path('/ateToday');
      });
  };
  $scope.signin = function() {
    Auth.signin($scope.user.username)
      .then(function (token) {
        $window.localStorage.setItem('com.farmSanctuary', token);
        $location.path('/ateToday');
      });
  };
  $scope.goToSignup = function() {
    $location.path('signup');
  }
  $scope.goToSignin = function() {
    $location.path('signin');
  }
});