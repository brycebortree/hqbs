var app = angular.module('hqbsApp', ['hqbsCtrls', 'ui.router']);

app.config(['$stateProvider', 
  '$urlRouterProvider', 
  '$locationProvider',
  '$httpProvider',
 function($stateProvider, 
          $urlRouterProvider, 
          $locationProvider, 
          $httpProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: 'views/home.html',
    controller: 'HomeCtrl'
  })
  .state('login', {
    url: '/login',
    templateUrl: 'views/login.html',
    controller: 'LoginCtrl'
  })
  .state('signup', {
    url: '/signup',
    templateUrl: 'views/signup.html',
    controller: 'SignupCtrl'
  })
  .state('about', {
    url: '/about',
    templateUrl: 'views/about.html',
  })  
  .state('newpic', {
    url: '/thereareflowers',
    templateUrl: 'views/newpic.html',
    controller: 'NewCtrl'
  })
  .state('showpic', {
    url: '/pics/:id',
    templateUrl: 'views/showpic.html',
    controller: 'ShowCtrl'
  })


  // $httpProvider.interceptors.push('AuthInterceptor')
  $locationProvider.html5Mode(true);
}]);