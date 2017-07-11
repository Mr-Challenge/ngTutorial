/*ES6 - Class */
class Foo{
    constructor(id,name){
        this.id = id;
        this.name = name;
    }
    printIdAndName(){
        console.log(`Id:${this.id} Name:${this.name}`);
    }
}
var fooObj = new Foo(10,'Karthik');
fooObj.printIdAndName();