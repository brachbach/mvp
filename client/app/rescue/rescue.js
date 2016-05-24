angular.module('farmSanctuary.rescue', [])

.controller('rescueController', function ($scope, $location, Meals, Auth) { //$location
  $scope.yourVegBucks = 0;

  $scope.animalFunds = {
    cow: 5
  };

  $scope.getVegBucks = function () {
    Meals.retrieveVegBucks()
      .then(function(vegBucks) {
        $scope.yourVegBucks = vegBucks;
      });
  };

  $scope.goToSanctuary = function() {
    $location.path('/sanctuary');
  };

  $scope.rescue = function(animal) {
    Meals.rescue(animal, $scope.animalFunds[animal], $scope.yourVegBucks)   //using the local variable here introduces some dangers; should check it in the backend.
      .then(function(vegBucks) {
        $scope.VegBucks = vegBucks;
      });
  };

  $scope.getVegBucks();

});