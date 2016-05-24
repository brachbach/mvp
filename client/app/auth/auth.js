angular.module('farmSanctuary.auth', [])

.controller('authController', function ($scope, $location, $window, Auth) {
  $scope.user = {};
  $scope.signup = () => {
    Auth.signup($scope.user.username)
      .then((token) => {
        $window.localStorage.setItem('com.farmSanctuary', token);
        $location.path('/ateToday');
      });
  };
  $scope.signin = () => {
    Auth.signin($scope.user.username)
      .then(function (token) {
        $window.localStorage.setItem('com.farmSanctuary', token);
        $location.path('/ateToday');
      });
  };
  $scope.goToSignup = () => {
    $location.path('signup');
  }
  $scope.goToSignin = () => {
    $location.path('signin');
  }
});