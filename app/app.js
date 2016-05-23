angular.module('farmSanctuary', [ui.router])
.config(function()){
  $urlRouterProvider.otherwise('/ateToday');
  $stateProvider
    .state('ateToday', {
      url: '/ateToday',
      templateUrl: 'app/ateToday.html',
      controller: 'ateTodayController'
    })
}