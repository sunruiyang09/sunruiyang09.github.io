'use strict';

angular.module('myApp.gallery', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/gallery', {
    templateUrl: 'scripts/gallery/gallery.html',
    controller: 'GalleryCtrl'
  });
}])

.controller('GalleryCtrl', ['$scope', function($scope) {
  $scope.myInterval = 5000;
  $scope.noWrapSlides = false;
  $scope.active = 0;

  $scope.graphSlides = [
    {
      'id':0,
      'img':'img/gallery/graphic/1.jpg',
      'text':'Cover design for my personal video cut of THU Dance Troupe in the THU centenary celebration.'
    },
    {
      'id':1,
      'img':'img/gallery/graphic/2.jpg',
      'text':'Poster for the performance of THU Dance Troupe.'
    },
    {
      'id':2,
      'img':'img/gallery/graphic/3.jpg',
      'text':'Cover design of THU Dance Troupe Journal.'
    },
    {
      'id':3,
      'img':'img/gallery/graphic/4.png',
      'text':'T-shirt picture design for PalmDrive.'
    },
    {
      'id':4,
      'img':'img/gallery/graphic/5.jpg',
      'text':'Design for THU Dance Troupe. Male Version. Hand drawing back image.'
    },
    {
      'id':5,
      'img':'img/gallery/graphic/6.jpg',
      'text':'Design for THU Dance Troupe. Female Version. Hand drawing back image.'
    }
  ];

  $scope.sketchSlides = [
    {
      'id':0,
      'img':'img/gallery/sketching/1.jpg',
      'text':'Mater Shifu from Kung Fu Panda.'
    },
    {
      'id':1,
      'img':'img/gallery/sketching/2.jpg',
      'text':'Lich King from World of Warcraft.'
    },
    {
      'id':2,
      'img':'img/gallery/sketching/3.jpg',
      'text':'Blademaster from Warcraft lll.'
    },
    {
      'id':3,
      'img':'img/gallery/sketching/4.jpg',
      'text':'Pandaren Brewmaster from Warcraft lll. Painted for my best friend in THU.'
    },
    {
      'id':4,
      'img':'img/gallery/sketching/6.jpg',
      'text':'Painted for my roomates in THU who is a big comics fan.'
    }
  ];
}]);