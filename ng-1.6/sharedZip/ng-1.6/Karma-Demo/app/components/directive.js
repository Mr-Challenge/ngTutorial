var app = angular.module('testApp');

app.directive('customMouseEnter',function(){
	return {
		restrict:'EA',
		link:function(scope,element,attrs){
			element.bind('mouseenter',function(){
				element.addClass(attrs.customStyle);
			});
		}
	}
});

app.directive('customMouseLeave',function(){
	/*Link function*/
	return function(scope,element,attrs){
		 element.bind('mouseleave',function(){
				element.removeClass(attrs.customStyle);
		});
	}
});


		