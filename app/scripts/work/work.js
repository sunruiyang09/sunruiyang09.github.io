'use strict';

angular.module('myApp.work', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/work', {
    templateUrl: 'scripts/work/work.html',
    controller: 'WorkCtrl'
  });
}])

.controller('WorkCtrl', ['$scope', function($scope) {
  var workItem = [
    {
      'url':'http://xiaobandeng.palmdrive.cn/',
      'img':'img/work/2.jpg',
      'title':'Xiaobandeng',
      'content1':'Xiaobandeng is an app developed by PalmDrive engineers. It is a platform for mentors to give online talks and communicate with students.',
      'content2':'This is the homepage I designed using Ionic and AngularJS. I also wirte css code responsive to different media queries.'
    },
    {
      'url':'http://palmdrive.cn/',
      'img':'img/work/1.jpg',
      'title':'PalmDrive Inc.',
      'content1':'PalmDrive is an education technology start-up aiming to redefine the future of international education through technology. I have been working at PalmDrive as a web develop intern since January 2016. As a fresh graduated student, I am so lucky to have this chance to work with these talented people.',
      'content2':'My main contribution is to provide multi-languate support fot the website using Rails Internationalization API and Angular-translate. I have done several front-end design and start to write back-end codes now.'
    }
  ];
  $scope.workItem = workItem;
}]);