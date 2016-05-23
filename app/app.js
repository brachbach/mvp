console.log('loaded app.js');

angular.module('farmSanctuary', ['ui.router', 'farmSanctuary.ateToday']) //'ngRoute'
.config(function ($stateProvider, $urlRouterProvider) {
  console.log('configuring');
  $urlRouterProvider.otherwise('/ateToday');
  $stateProvider
    .state('ateToday', {
      url: '/ateToday',
      templateUrl: 'app/ateToday.html',
      controller: 'ateTodayController'
    });
});
