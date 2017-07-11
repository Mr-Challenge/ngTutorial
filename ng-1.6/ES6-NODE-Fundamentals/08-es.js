var addNumbers = function (a, b, fn) {
    var result;
    //Result is generated in a deferred manner
    setTimeout(function(){
         result = a + b;
         fn(result);
    },0);
}
/*The only way to get the results of  the deferred execution */
addNumbers(5,6,function(data){
    console.log('Result : '+data);
});
