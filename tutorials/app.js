(function() {
  var app = angular.module('turtorialpage', ['list-directives']);

  app.controller('ListController', ['$http', function($http){
  var list = this;
  list.tutorials = [];

  $http.get('tutorials.json').success(function(data){
    list.tutorials = data;
  });
}]);
  
	  app.controller('ExampleController', ['$scope', '$http', '$filter', function($scope, $http,$filter) {
		var orderBy = $filter('orderBy');
		$scope.tutorials = [];
		
		
		$http.get('tutorials.json').success(function(data) {
			$scope.items = data;
		});
		
		$scope.order = function(predicate, reverse) {
		  $scope.tutorials = orderBy($scope.tutorials, predicate, reverse);
		};
		
		
		$scope.order('-author',false);
	  }]);
})();