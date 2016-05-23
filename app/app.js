console.log('loaded app.js');

angular.module('farmSanctuary', ['ui.router', 'farmSanctuary.ateToday', 'farmSanctuary.services'])
.config(function ($stateProvider, $urlRouterProvider) {
  console.log('configuring');
  $urlRouterProvider.otherwise('/ateToday');
  $stateProvider
    .state('ateToday', {
      url: '/ateToday',
      templateUrl: 'app/ateToday.html',
      controller: 'ateTodayController'
    })
    .state('sanctuary', {
      url: '/sanctuary',
      templateUrl: 'app/sanctuary.html',
      controller: 'ateTodayController'
    });
});
