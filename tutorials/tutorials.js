(function(){
    var app = angular.module('list-directives', []);

    app.directive("listDescription", function() {
      return {
        restrict: 'E',
        templateUrl: "list-description.html"
      };
    });

    app.directive("listReviews", function() {
      return {
        restrict: 'E',
        templateUrl: "list-reviews.html"
      };
    });

    app.directive("listSpecs", function() {
      return {
        restrict:"A",
        templateUrl: "list-specs.html"
      };
    });

    app.directive("listTabs", function() {
      return {
        restrict: "E",
        templateUrl: "list-tabs.html",
        controller: function() {
          this.tab = 1;

          this.isSet = function(checkTab) {
            return this.tab === checkTab;
          };

          this.setTab = function(activeTab) {
            this.tab = activeTab;
          };
        },
        controllerAs: "tab"
      };
    });

    app.directive("listGallery", function() {
      return {
        restrict: "E",
        templateUrl: "list-gallery.html",
        controller: function() {
          this.current = 0;
          this.setCurrent = function(imageNumber){
            this.current = imageNumber || 0;
          };
        },
        controllerAs: "gallery"
      };
    });
  })();