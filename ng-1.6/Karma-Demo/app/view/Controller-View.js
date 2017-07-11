/* app/view/Controller-View.js */

var app = angular.module('testApp');
app.controller('MyCtrl',function($scope){
	$scope.employee = {name:'Karthik'};
	$scope.changeName = function(){
		$scope.employee.name = "Ashik";
	}
});