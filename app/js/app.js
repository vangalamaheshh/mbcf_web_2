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
        .state('/ngs', {
            url: '/ngs',
            templateUrl: '/app/partials/ngs.html'
        })
        .state('/ngs-lib-prep', {
            url: '/ngs-lib-prep',
            templateUrl: '/app/partials/ngs-lib-prep.html'
        })
        .state('/microarray', {
            url: '/microarray',
            templateUrl: '/app/partials/microarray.html'
        })
        .state('/nano', {
            url: '/nano',
            templateUrl: '/app/partials/nano.html'
        })
        .state('/sanger', {
            url: '/sanger',
            templateUrl: '/app/partials/sanger.html'
        })
        .state('/maldi', {
            url: '/maldi',
            templateUrl: '/app/partials/maldi.html'
        })
        .state('/ms', {
            url: '/ms',
            templateUrl: '/app/partials/ms.html'
        })
        .state('/amino', {
            url: '/amino',
            templateUrl: '/app/partials/amino.html'
        })
        .state('/peptide-synthesis', {
            url: '/peptide-synthesis',
            templateUrl: '/app/partials/peptide-synthesis.html'
        })
        .state('/biacore', {
            url: '/biacore',
            templateUrl: '/app/partials/biacore.html'
        })
        .state('/adv-tech', {
            url: '/adv-tech',
            templateUrl: '/app/partials/adv-tech.html'
        })
        .state('/', {
            url: '/',
            templateUrl: '/app/partials/ngs.html'
        });
}]);

