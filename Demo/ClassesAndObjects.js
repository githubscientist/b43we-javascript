// Javascript is not object-oriented but Object-based language

// this keyword points to the current instance of the object

// let circle = {
//     radius: 6.5,
//     diameter: function () {
//         return 2 * this.radius;
//     },
//     area: function () {
//         return Math.PI * this.radius ** 2;
//     },
//     circumference: function () {
//         return 2 * Math.PI * this.radius;
//     }
// };

// console.log(circle.diameter());

// create a simple object -> function object

// classes are template or blue-print or collection of objects or custom datatype
// definition of members and methods

// function Student(name) {
//     this.name = name;
// }

// // create an object
// let student = new Student('krish');

// console.log(student.name);

// to create a class
// class Student {
//     constructor(name) {
//         this.name = name;
//     }
// }

// let krish = new Student('krish');
// console.log(krish.name);
// let star = new Student('star');

// console.log(star.name);

// class Book {
//     constructor(name, author, pages, price, copies) {
//         this.name = name,
//         this.author = author,
//         this.pages = pages,
//         this.price = price,
//         this.copies = copies
//     }
// }

// let book101 = new Book('ds', 'krish', 50, 324, 10);

// let book102 = new Book(102, 'sathish', 100, 834.56, 20);

// console.log(book101);
// console.log(book102);

// let number = 5;

// number = 'sathish';

// console.log(number);

// class Date {
//     constructor(day, month, year) {
//         this.day = day;
//         this.month = month;
//         this.year = year;
//     }
// }

// let date1 = new Date(12, 'Feb', 2023);

// console.log(date1.day, date1.month, date1.year);


// class A {
//     // uninitialized members
//     x = 0;
//     y = 0;

//     constructor(x, y) {
//         // initialize the members of the class
//         // this.x = 0;
//         // this.y = 0;

//         this.x = x;
//         this.y = y;
//     }
// }

// // let obj1 = new A();
// // let obj2 = new A();


// let obj1 = new A(2,3);
// let obj2 = new A(4,5);

// // obj1.x = 2;
// // obj1.y = 3;

// console.log(obj1);
// console.log(obj2);

// static keyword

// common shared memory
// it does not require an object instance to invoke or access

// static property

// class Area {
//     static votes = 0;
//     constructor(name, code, votes) {
//         this.name = name;
//         this.code = code;
//         this.areaVotes = votes;
//         Area.votes += votes;
//     }
// }

// let area1 = new Area('Area1', 101, 100);
// let area2 = new Area('Area2', 102, 200);
// let area3 = new Area('Area3', 103, 500);

// console.log(area1);
// console.log(area2);

// console.log(Area.votes);


// class Circle {
//     constructor(radius) {
//         this.radius = radius;
//     }

//     area() {
//         return Math.PI * this.radius ** 2;
//     }

//     circumference() {
//         return 2 * Math.PI * this.radius;
//     }

//     diameter() {
//         return 2 * this.radius;
//     }
// }

// let circle1 = new Circle(7.14);
// let circle2 = new Circle(5.36);

// console.log(circle1.diameter());

// class A {
//     constructor(x, y) {
//         this.x = x;
//         this.y = y;
//     }

//     static sum(obj1, obj2) {
//         let obj3 = new A(0, 0);
//         obj3.x = obj1.x + obj2.x;
//         obj3.y = obj1.y + obj2.y;
//         return obj3;
//     }
// }

// let obj1 = new A(2, 3);
// let obj2 = new A(4, 5);

// let obj3 = A.sum(obj1, obj2);

// console.log(obj1);
// console.log(obj2);
// console.log(obj3);

// destructors
// java and javascript has garbage collectors

// inheritance and method over-riding

// class Parent {
//     constructor(x, y) {
//         this.x = x;
//         this.y = y;
//     }
// }


// class Child extends Parent { 
//     constructor(x, y, z) {
//         super(x, y);
//         this.z = z;
//     }
// }

// let childObject = new Child(3, 4, 5);

// console.log(childObject);

// class Animal {
//     constructor(name) {
//         this.name = name;
//     }

//     speak() {
//         console.log(this.name, 'makes a noise');
//     }
// }

// class Dog extends Animal {
//     constructor(name) {
//         super(name);
//     }

//     speak() {
//         console.log(this.name, 'barks');
//     }
// }

// let dog = new Dog('Brite');

// let animal = new Animal('Axe');

// animal.speak();
// dog.speak(); // method over-riding

// class & functions hoisting
// class declarations are not hoisted

// let obj1 = new A();

// class A {

// }

// function declarations are hoisted

// sayHi();

// function sayHi() {
//     console.log('Hi');
// }