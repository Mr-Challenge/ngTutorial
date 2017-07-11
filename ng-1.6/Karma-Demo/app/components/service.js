var app = angular.module('testApp');
		
app.config(function($provide){
	$provide.provider('AddService',function(){
		return {
			$get : function(){
				return {
					add: function(a,b){
						return a+b;
					}
				}
			}
		}
	});
});