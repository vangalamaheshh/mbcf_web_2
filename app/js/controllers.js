'use strict';

var mbcfWebAppControllers = angular.module('mbcfWebAppControllers', []);

mbcfWebAppControllers.controller( 'EmailController', ['$scope', '$http', function( $scope, $http ) {
	$scope.user_name = "";
	$scope.user_email = "";
	$scope.message = "";
	$scope.sendEmail = function( ) {
		console.log( "Name: " + $scope.user_name + ";" + "Email: " + $scope.user_email + ": Message: " + $scope.message )
		var data = ({
			contact_name : $scope.user_name,
			contact_email : $scope.user_email,
			contact_message : $scope.message
		});
		$http.post('/', data).
			success(function(data, status, header, config) {
				alert("Thanks for submitting your question. We will respond to you as soon as possible.");
			}).
           	error(function(data, status, headers, config) {
            	alert("The email is not sent. Error code: " + status);
            });
	};
}]);
