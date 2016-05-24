angular.module('farmSanctuary', ['ui.router', 'farmSanctuary.ateToday', 'farmSanctuary.services', 'farmSanctuary.sanctuary', 'farmSanctuary.auth'])
.config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/ateToday');
  $stateProvider
    .state('ateToday', {
      url: '/ateToday',
      templateUrl: 'app/ateToday/ateToday.html',
      controller: 'ateTodayController'
    })
    .state('sanctuary', {
      url: '/sanctuary',
      templateUrl: 'app/sanctuary/sanctuary.html',
      controller: 'sanctuaryController'
    })    
    .state('signup', {
      url: '/signup',
      templateUrl: 'app/auth/signup.html',
      controller: 'authController'
    });
});
