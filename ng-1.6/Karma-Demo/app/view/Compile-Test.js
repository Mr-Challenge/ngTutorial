/* app/view/Compile-Test.js */

describe("Testing compile service", function() {
	var element;
	var $rootScope;
	beforeEach(inject(function($compile,_$rootScope_) {
		$rootScope = _$rootScope_;
		element = angular.element("<div>{{2 + 2}}</div>");
		element = $compile(element)($rootScope);
	}));
	
	it('should equal 4', function() {
		$rootScope.$digest();
		expect(element.html()).toBe("4");
	});
})