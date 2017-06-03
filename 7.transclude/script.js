'use strict';
angular.module('docsSimpleDirective', [])
    .controller('Controller', ['$scope', function ($scope) {
        $scope.name = 'Tobias';
        $scope.guest = 'James';
    }])
    .directive('myDialog', function () {
        return {
            restrict: 'E',
            transclude: true,
            scope: {},
            templateUrl: 'my-dialog.html'
        };
    });
