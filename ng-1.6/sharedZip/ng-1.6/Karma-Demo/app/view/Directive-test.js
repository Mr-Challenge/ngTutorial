describe("Testing Custom Directive", function() {
	var $scope;
	var element;
	beforeEach(module('testApp'));
	
	beforeEach(inject(function($compile,$controller,$rootScope){
		var dom = '<input type="button" data-custom-mouse-enter data-custom-mouse-leave value="Click" data-custom-style="custom"/>'
		element = $compile(dom)($rootScope);
	}));
	
	it('should add a custom class named \'custom\' when the mouse pointer enter the element',function(){
		element.trigger('mouseenter');
		expect(element.hasClass('custom')).toBe(true);
	});
	
	it('should remove the custom class named \'custom\' when the mouse pointer leaves the element',function(){
		element.trigger('mouseleave');
		expect(element.hasClass('custom')).toBe(false);
	});
	
	
});