/*ES6 - Inheritance */
class Foo{
    constructor(){
        console.log('Foo Constructor Invoked');
    }   
}

class Quax extends Foo{
    constructor(){
        super();
        console.log('Quax Constructor Invoked');
    }   
}

new Quax();
