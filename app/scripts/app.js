'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.home',
  'myApp.work',
  'myApp.gallery',
  'myApp.about',
  'myApp.version',
  'ui.bootstrap'
])

.run(function($window, $rootScope) {
  angular.element($window).bind('scroll', function(){
  	var nav = document.getElementById('navbar');
  	if(document.body.scrollTop > 50) {
  	  angular.element(nav).removeClass('navbar-show');
  	  angular.element(nav).addClass('navbar-hidden');
  	}else{
  	  angular.element(nav).removeClass('navbar-hidden');
  	  angular.element(nav).addClass('navbar-show');
  	}
  });
  angular.element(document).ready(function(){
    $rootScope.myOpacity = 1;
  })
})

.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/home'});
}]);
