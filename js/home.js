function() {
	'use strict';
	var recentWork = [
	    {
	    	img: 'img/work/palmdrive.jpg',
	    	name: 'PalmDrive Website',
	    	url: 'https://www.palmdrive.cn'
	    }
	];

	var ctrl = function($scope) {
		$scope.recentWork = recentWork;
	};

	ctrl.$inject['$scope'];
};