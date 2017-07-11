/*Self invoking function */
(function(){
    console.log('1');
    console.log('2');
    //deferred Execution - delayed Execution
    //whenever it sees function as argument it should be sent to the callback queue when the appropriate event occurs
    setTimeout(function(){
         console.log('5');
    },10); //When the tick event(1 second) occurs it will place the function in callback queue
    setTimeout(function(){
         console.log('6');
    },0);
    //Since JS is single Thread it never waits
    console.log('3');
    console.log('4');
    //since there is no code to execute in the Main Stack. 
    //It will take function from callback queue and execute it
    //for(;;){} //if this code is uncommented callback never executes
})();