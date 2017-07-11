describe("Testing Service", function() {
	var rootScope;
	var scope;
	var serviceController;
	
	var getModelCount = function(obj){
		var modelCount = 0;
		for(prop in obj){
			if(prop.charAt(0) !== '$' && obj.hasOwnProperty(prop))
				modelCount++;
		}		
		return modelCount;
	}
	
	beforeEach(module('testApp'));
	
	beforeEach(inject(function($controller,$rootScope){
		rootScope = $rootScope;
		scope = rootScope.$new();
		serviceController = $controller('ServiceCtrl',{$scope:scope});
	}));
	
	it('should have a scope with 1 Model',function(){
		expect(getModelCount(scope)).toEqual(1);
	});
	
	describe('Testing Add Service',function(){
		var AddService;
		beforeEach(inject(function(_AddService_){
			AddService = _AddService_;
		}));
	
		it('should add two numbers',function(){
			expect(AddService.add(2,3)).toEqual(5);
		});
	});
});