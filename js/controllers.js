myApp.controller('globalCtrl', function($scope){
	$scope.menu = {
		home: true,
		html: false,
		css: false
	};
	$scope.submenu = {
		basic: true,
		styles: false,
		forms: false
	};
	$scope.collapseMenu = [
		{
			active: false,
			name: "Estructura Básica",
			link: 'body'
		},
		{
			active: false,
			name: "Elementos html",
			link: 'tags'
		},
		{
			active:false,
			name: "Atributos",
			link: 'attributes'
		},
		{
			active:false,
			name: "DOCTYPE",
			link: 'doctype'
		}
	];
	$scope.setMenu = function(item, sItem){
		if(item !== undefined){		
			angular.forEach($scope.menu, function(value, key) {
				$scope.menu[key] = false;
			});
			$scope.menu[item] = true;
		}
		if(sItem !== undefined){
			angular.forEach($scope.submenu, function(value, key) {
				$scope.submenu[key] = false;
			});
			$scope.submenu[sItem] = true;
		}
	};
	$scope.setMenuItem = function(item){
		scrollTo(item);
	};
});

myApp.controller('initCtrl', function ($scope, $http, usersArray) {
	$scope.setMenu('home');
	$scope.myInterval = 10000;
});

myApp.controller('htmlCtrl', function ($scope, $location, $anchorScroll) {
	$scope.setMenu('html', 'basic');
	$scope.scrollTo = function(id) {
		$location.hash(id);
		$anchorScroll();
	}
});

myApp.controller('ccs3Ctrl', function ($scope) {
	$scope.setMenu('css');
});

myApp.controller('editCtrl', function ($scope, $routeParams, $location, usersArray, reason) {
		$scope.user = usersArray[$routeParams.id];
		$scope.why = reason;
		$scope.editContact = function(){
			usersArray[$routeParams.id] = $scope.user;
			$location.path("/init");
			$scope.$apply();
			//console.log($scope);
		}
  	}
);
