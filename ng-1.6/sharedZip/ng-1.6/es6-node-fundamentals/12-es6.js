/*ES6 Promise - Scenario */
var generateRandomNumber = function(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            try{
                var randomNumber = Math.round(Math.random()*10);
                if(randomNumber>=5)
                    resolve(randomNumber);
                else
                    throw `Number Less than 5 Exception Occured : ${randomNumber}`;
            }catch(err){
                reject(err);
            }
        },1000);
    });
}

/*generateRandomNumber().then(function(data){
    console.log(`Generate Number : ${data}`);
},function(err){
    console.log(`Exception : ${err}`);
});*/

/*using catch() */
generateRandomNumber().then(function(data){
    console.log(`Generate Number : ${data}`);
}).catch(function(err){
    console.log(`Exception : ${err}`);
});
