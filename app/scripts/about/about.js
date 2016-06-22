'use strict';

angular.module('myApp.about', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/about', {
    templateUrl: 'scripts/about/about.html',
    controller: 'AboutCtrl'
  });
}])

.controller('AboutCtrl', ['$scope', function($scope) {
  $scope.experiences = [
    {
      'title':'PalmDrive Inc.',
      'content':'Web Developer (Jan 2016 - May 2016)'
    },
    {
      'title':'Oracle Corporation',
      'content':'Web Developer (May 2016 - Present)'
    }
  ];
}]);