'use strict';

var mbcfWebAppControllers = angular.module('mbcfWebAppControllers', []);

mbcfWebAppControllers.controller( 'EmailController', ['$scope', '$http', function( $scope, $http ) {
	$scope.user_name = "";
	$scope.user_email = "";
	$scope.message = "";
	$scope.sendEmail = function( ) {
        if( ! $scope.user_name ){
            alert("Name field is required");
        }
        else if( ! $scope.user_email ) {
            alert("Email field is required");
        }
        else if( ! $scope.message ) {
            alert("Please enter a message");
        }
        else {
		//console.log( "Name: " + $scope.user_name + ";" + "Email: " + $scope.user_email + ": Message: " + $scope.message )
		var data = ({
			contact_name : $scope.user_name,
			contact_email : $scope.user_email,
			contact_message : $scope.message
		});
		$http.post('/', data).
			success(function(data, status, header, config) {
				alert("Thanks for submitting your question. We will respond to you as soon as possible.");
                $scope.user_name = "";
                $scope.user_email = "";
                $scope.message = "";
			}).
           	error(function(data, status, headers, config) {
            	alert("The email is not sent. Error code: " + status);
            });
        }
	};
}]);
