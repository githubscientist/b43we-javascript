// class - template or blueprint
// we can then create multiple objects with the same structure as that of the class

// define a class Person
class Person {

    // class has two members
    // two key value pairs
    // name & age
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // methods to a class
    greet() {
        console.log('hello, my name is', this.name);
    }
}

// create an object to the class Person
let krish = new Person('Krish', 10);
let sathish = new Person('Sathish', 25);

sathish.greet();