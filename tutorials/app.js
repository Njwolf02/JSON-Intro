(function() {
  var app = angular.module('turtorialpage', ['list-directives']);

  app.controller('ListController', ['$http', function($http){
  var list = this;
  list.tutorials = [];

  $http.get('tutorials.json').success(function(data){
    list.tutorials = data;
  });
}]);
  app.controller('ReviewController', function() {
    this.review = {};

    this.addReview = function(list) {
      list.reviews.push(this.review);

      this.review = {};
    };
  });
})();