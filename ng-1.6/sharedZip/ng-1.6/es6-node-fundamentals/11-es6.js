/*ES6 - Promise */
//var promiseObj = Promise.resolve(5); //resolving Promise with the value 5
//var promiseObj = Promise.reject('Error Occured'); //rejected Promise

var promiseObj = new Promise(function(resolve,reject){
    resolve(5);
    //reject('Error occured');
});

//once we get a promise object we can use then method on it
promiseObj.then(function(data){
    //Executed when the promise is resolved
    console.log(`Promise Fullfilled : ${data}`);
},function(err){
     //Executed when the promise is rejected
     console.log(`Promise Rejected : ${err}`);
});

