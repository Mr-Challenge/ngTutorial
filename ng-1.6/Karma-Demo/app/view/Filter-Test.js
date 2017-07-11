describe("Testing Custom Filter", function() {
	var $scope;
	
	var getModelCount = function(obj){
		var modelCount = 0;
		for(prop in obj){
			if(prop.charAt(0) !== '$' && obj.hasOwnProperty(prop))
				modelCount++;
		}		
		return modelCount;
	}
	
	beforeEach(module('testApp'));
	
	beforeEach(inject(function(_$controller_){
		$scope = {};
		$controller = _$controller_;
		$controller('FilterCtrl',{$scope:$scope});
	}));
	
	it('should have a scope with 6 Models',function(){
		expect(getModelCount($scope)).toEqual(6);
	});
	
	describe('Testing Filters',function(){
		var $filter;
		beforeEach(inject(function(_$filter_){
			$filter = _$filter_;
		}));
	
		it('should convert the given input to uppercase',function(){
			expect($filter('printUpper')('hello')).toBe('HELLO');
		});
		
		it('should filter the even numbers from the given array',function(){
			expect($filter('arrayFilter')([1,2,3,4,5,6],"even")).toEqual([2,4,6]);
		});
		
		it('should filter the odd numbers from the given array',function(){
			expect($filter('arrayFilter')([1,2,3,4,5,6],"odd")).toEqual([1,3,5]);
		});
	});
	
	
});