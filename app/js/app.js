'use strict';

var mbcfWebApp = angular.module('mbcfWebApp', [
	'ui.router'
]);

mbcfWebApp.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', 
        function($stateProvider, $urlRouterProvider, $locationProvider) {

    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });    

    $urlRouterProvider.otherwise('/instrumentation');
    $stateProvider
        .state('/instrumentation', {
            url: '/instrumentation',
            templateUrl: '/app/partials/instrumentation.html'
        });
}]);
