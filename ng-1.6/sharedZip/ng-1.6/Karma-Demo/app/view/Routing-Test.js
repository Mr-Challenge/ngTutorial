describe("Testing Service", function() {
	var $scope;
	var $rootScope;
	
	beforeEach(module('testApp'));
	
	beforeEach(inject(function($controller,_$rootScope_){
		$rootScope =_$rootScope_;
		$scope = $rootScope.$new();
		$controller('RouteCtrl',{$scope:$scope});
	}));
	
	it('should have a scope with company as key deined with a value',function(){
		expect($scope.company).toBeDefined();
		expect($scope.company).toEqual('Microsoft');
		
	});
	
	
	describe('Testing Routing',function(){
		var $route,$location,$httpBackend;
		
		beforeEach(inject(function(_$route_,_$location_){
			$route = _$route_;
			$location = _$location_;
			
			$location.path('/')
			$rootScope.$digest();
			
		}));
	
		it('should load the route named country',function(){
			$scope.loadPage('country');
			$rootScope.$digest();
			expect($location.path()).toBe('/country');
		});
		
		it('should have RouteCtrl as root\'s controller',function(){
			expect($route.routes['/'].controller).toEqual('RouteCtrl');
			expect($route.current.controller).toEqual('RouteCtrl');
			
		});
		
		it('should have partials/trainer.html(partialview) as its tempalateUrl',function(){
			expect($route.routes['/trainer'].templateUrl).toEqual('partials/trainer.html');
		});
		
		it('should redirect to root page when passed with invalid route',function(){
			$location.path('/InvalidRoute')
			$rootScope.$digest();
			expect($location.path()).toBe('/');
		});
		
	});
});