var app = angular.module('app', []);

app.controller('mainPageController', ['$scope', function($scope) {
  $scope.greeting = "Hello World!";
}]);