console.log('Hello node js');
var promise = Promise.resolve();
console.log(promise.__proto__.constructor.name);
