/* app/view/Controller-Test.js */

describe("Testing Controller", function() {
	var $controller;
	var $scope;
		
	beforeEach(module('testApp'));
	
	beforeEach(inject(function(_$controller_){
		$controller = _$controller_;
		$scope = {};
		$controller('MyCtrl',{$scope:$scope});
	}));
	
	it('should have controller named MyCtrl',function(){
		expect($controller).toBeDefined();
	});
	
	it('should have the value Karthik for name key in the employee model attached to scope',function(){
		
		expect($scope.employee.name).toEqual('Karthik');
	});
	
	it('should change the name from Karthik to Ashik when changeName function is called',function(){
		$scope.changeName();
		expect($scope.employee.name).toEqual('Ashik')
	});
});