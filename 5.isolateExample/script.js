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
    .controller('Controller', ['$scope', function($scope) {
        $scope.naomi = { name: 'Naomi', address: '1600 Amphitheatre' };
        $scope.vojta = { name: 'Vojta', address: '3456 Somewhere Else' };
    }])
    .directive('myCustomer', function() {
        return {
            restrict: 'E',
            scope: {
                customerInfo: '=info'
            },
            templateUrl: 'my-customer-plus-vojta.html'
        };
    });