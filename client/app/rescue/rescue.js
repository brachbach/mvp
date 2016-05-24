angular.module('farmSanctuary.rescue', [])

.controller('rescueController', function ($scope, $location, Meals, Auth, User) { //$location
  $scope.yourVegBucks = 0;

  $scope.animalFunds = {
    cows: 5
  };

  $scope.getVegBucks = () => {
    User.getUser()
      .then((user) => {
        $scope.yourVegBucks = user.vegBucks;
      });
  };

  $scope.goToSanctuary = () => {
    $location.path('/sanctuary');
  };

  $scope.rescue = (animal) => {
    console.log('rescue function called');
    Meals.rescue(animal, $scope.animalFunds[animal], $scope.yourVegBucks)   //using the local variable here introduces some dangers; should check it in the backend.
      .then(function(data) {
        $scope.yourVegBucks = data.vegBucks;
      });
  };

  $scope.getVegBucks();

});