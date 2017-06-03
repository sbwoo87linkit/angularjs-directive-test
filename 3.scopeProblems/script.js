// (function(angular) {
//     'use strict';
//     angular.module('docsSimpleDirective', [])
//         .controller('NaomiController', ['$scope', function($scope) {
//             $scope.customer = {
//                 name: 'Naomi',
//                 address: '1600 Amphitheatre'
//             };
//         }])
//         .controller('IgorController', ['$scope', function($scope) {
//             $scope.customer = {
//                 name: 'Igor',
//                 address: '123 Somewhere'
//             };
//         }])
//         .directive('myCustomer', function() {
//             return {
//                 restrict: 'E',
//                 templateUrl: 'my-customer.html'
//             };
//         });
// })(window.angular);

angular.module('docsSimpleDirective', [])
    .controller('NaomiController', ['$scope', function($scope) {
        console.log('NaomiController')
        $scope.customer = {
            name: 'Naomi',
            address: '1600 Amphitheatre'
        };
    }])
    .controller('IgorController', ['$scope', function($scope) {
        console.log('IgorController')
        $scope.customer = {
            name: 'Igor',
            address: '123 Somewhere'
        };
    }])
    .directive('myCustomer', function() {
        return {
            restrict: 'E',
            templateUrl: 'my-customer.html'
        };
    });