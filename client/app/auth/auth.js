angular.module('farmSanctuary.auth', [])

.controller('authController', function ($scope, $location, Auth) {
  $scope.user = {};
  $scope.signup = function() {
    Auth.signup($scope.user.username)
      .then(function(resp) {
        $location.path('/ateToday');
      });
  };
});