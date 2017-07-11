//Creating a user defined Module
var Calculator = (function(){
    return {
        add:function(a,b){
            return a + b;
        },
        multiply:function(a,b){
            return a * b;
        }
    };
})();

//To export a module in node.js, so that it can be imported
module.exports = Calculator;