app.config(function($routeProvider){
	$routeProvider.when('/',{
		template:'<h1>{{company}}</h1>',
		controller:'RouteCtrl'
	}).when('/country',{
		template:'<h1>India</h1>'
	}).when('/country/state',{
		template:'<h1>India&rsaquo;Karnataka</h1>'
	}).when('/country/state/city',{
		template:'<h1>India&rsaquo;Karnataka&rsaquo;Bengaluru</h1>'
	}).when('/trainer',{
		templateUrl:'partials/trainer.html'
	}).otherwise({
		redirectTo:'/'
	});
});

app.controller('RouteCtrl',function($scope,$location){
	$scope.company = "Microsoft";
	$scope.loadPage = function(page){
		//Clears the history
		$location.replace();
		$location.url("/"+page);
	}
});