var app = angular.module('testApp');
		
app.filter('printUpper',function(){
	return function(data){
		return data.toUpperCase();
	}
});

app.filter('arrayFilter',function(){
	return function(arr,type){
		var evenNumbers = [];
		var oddNumbers = [];
		arr.forEach(function(number){
			if(number%2==0)
				evenNumbers.push(number);
			else
				oddNumbers.push(number);
		});
		if(type.toLowerCase() === 'even')
				return evenNumbers;
			else
				return oddNumbers;
	}
});