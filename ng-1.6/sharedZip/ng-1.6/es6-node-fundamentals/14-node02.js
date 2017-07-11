/*Using Inbuilt modules */
var path = require('path'); //no need to provide the relative reference
console.log(path.resolve('13-node01.js'));
console.log(path.join(__dirname, 'public', 'index.html')); //__dirname will give the current path

var fs = require('fs'); //file System module

console.log('Reading the File Synchronously...');
var contents = fs.readFileSync('01-es.js', 'utf-8'); //Blocking the Thread
console.log(contents);
console.log('Completed Synchronously');

//recommended way
fs.readFile('01-es.js', 'utf-8', function (err, data) {
    if (err) {
        console.log(err);
    }
    else {
        console.log('Reading the File Asynchronously...');
        console.log(data);
        console.log('Completed Asynchronously');
    }
});
