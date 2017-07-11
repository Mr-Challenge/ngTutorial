/*Working with Objects - Associative Array (Key and Value Pairs) */
var employee = {id:1,name:'Karthik'};
employee.company = 'Capgemini';
employee['city'] = 'Bangalore';
console.log(employee);
console.log(employee.name);
console.log(employee['name']); //recommended

/*for..in loop it is used to iterate the keys or properties of object */
for(var prop in employee){
    console.log(prop,employee[prop]);
}
