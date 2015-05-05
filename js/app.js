var myApp = angular.module("myApp", ['ngRoute', 'ui.bootstrap']);

myApp.config(function($routeProvider){
	$routeProvider
		.when('/init', {
			templateUrl: 'partials/home.html',
		})
		.when('/html5', {
			templateUrl: 'partials/html5.html',
		})
		.when('/css3', {
			templateUrl: 'partials/css3.html',
		})
		.otherwise({
			redirectTo: '/init'
		});
});

myApp.factory('usersArray', function() {
	return [];
});

myApp.factory('reason', function(){
	return { tb: 'Trabajo', pt: 'Problemas tecnicos', gi: 'Problemas de Obesidad'};
});