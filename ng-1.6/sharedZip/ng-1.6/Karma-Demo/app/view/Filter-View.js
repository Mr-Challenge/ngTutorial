app.controller('FilterCtrl',function($scope,$filter){
	$scope.name = "KARTHIK";
	$scope.names = ["Janani","Logith","anulekha"];
	$scope.today = new Date();
	$scope.time = $filter('date')(new Date(),'hh:mm:ss')
	$scope.favTrainer = $filter('printUpper')('karthik');
	$scope.results = $filter('arrayFilter')([1,2,4,5,7,8,9],'even');
});