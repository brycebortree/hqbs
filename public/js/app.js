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
  .state('newpost', {
    url: '/newpost',
    templateUrl: 'views/newpost.html',
    controller: 'NewCtrl'
  })
  .state('showpic', {
    url: '/pics/:id',
    templateUrl: 'views/showpic.html',
    controller: 'ShowCtrl'
  })
  .state('allpics', {
    url: '/all',
    templateUrl: 'views/allpics.html',
    controller: 'AllCtrl'
  });


  // $httpProvider.interceptors.push('AuthInterceptor')
  $locationProvider.html5Mode(true);
}]);