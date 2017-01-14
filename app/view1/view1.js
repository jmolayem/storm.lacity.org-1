'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', [function() {

	   document.addEventListener("DOMContentLoaded", function(event) {

      d3.selectAll('.download-data').on('click', function() {
        var link = this.href;
        var text = this.text;
        ga('send','event','Download Data', link, text);
      });

      d3.selectAll('.external-link').on('click', function() {
        var link = this.href;
        var text = this.text;
        ga('send','event','External Link', link, text);
      });

      d3.selectAll('.top-download-page').on('click', function() {
        var link = this.href;
        var text = this.text;
        ga('send','event','Top-Download Page', link, text);
      });

      d3.selectAll('.top-download-file').on('click', function() {
        var link = this.href;
        var text = this.text;
        ga('send','event','Top-Download File', link, text);
      });

    });

}]);