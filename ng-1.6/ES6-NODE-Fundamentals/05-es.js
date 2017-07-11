/*JavaScript Arrays */
var numbers = [];
numbers.push(10);
numbers.push(20);
numbers.push(30);
numbers.push(40);
numbers.push(50);
console.log(numbers.length);
numbers.pop(); //remove last added item
numbers.splice(numbers.indexOf(20),1);
console.log(numbers);



