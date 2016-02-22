'use strict';

var mbcfWebApp = angular.module('mbcfWebApp', [
	'ui.router',
    'mbcfWebAppControllers'
]);

mbcfWebApp.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', 
        function($stateProvider, $urlRouterProvider, $locationProvider) {

    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });    

    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('/instrumentation', {
            url: '/instrumentation',
            templateUrl: '/app/partials/instrumentation.html'
        })
        .state('/', {
            url: '/',
            templateUrl: '/app/partials/instrumentation.html'
        });
}]);

