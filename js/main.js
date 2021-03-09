// alert('Hello world!');
// console.log('Hello world!');
console.log (123);
console.log (123123123123123123);
console.log(-321); //integer / int

00001111
255

console.log (3.14) // floating point number / float
console.log (3.11112222333334444455555);
console.log (0.34);

console.log ('hello world'); // string
console.log ("hello world"); // string
console.log (`hello world`); // string ES6 / ES2015

console.log ("Foo's car");
console.log ('Foo\'s car'); // add backslash to escape / treat a symbol as actual symbol
console.log (' // ') //escape backslash
console.log('<span class="foo"></span>');

console.log(true); //bool
console.log(false); //bool
console.log(null); //null - there is absolutely no data
console.log(undefined); // undefined

var someVar;
console.log(someVar);

var someNumber = 123;
console.log(someNumber);

someNumber = 321;
console.log(someNumber);
someNUmber='someText';
console.log ('someNumber'); // string

let someOtherNumber = 123;
console.log(someOtherNumber);
someOtherNumber = 321;
console.log(someOtherNumber);

// let someOtherNumber = 321;
// console.log(someOtherNumber); let does not allow you to redefine

const someConstant = 'foo';
console.log(someConstant);

let cars = ['vaz', 'zaz', 'gaz', 'maz', 'uaz', 'bmw'];
console.log(cars);
console.log(cars[2]);

cars[1]='audi';
console.log(cars);

cars.push('tesla'); //add new value to array
console.log(cars); 
console.log(cars.length);

console.log('foo' + 'bar'); //concatenation = merging strings together
console.log('foo' + 'bar');
let name = 'Janis';
console.log('Hello, ' + name);
console.log(window);

console.log(`Hello, ${name}, go and drive ${cars[1]}`); //interpolation / template literals

let person = {
    name: 'John',
    lastName: 'Doe',
    age: '42',

};
console.log(person);
console.log(person.lastName);
person.name = 'Billy';
console.log(person.name);
console.log(person['name']);

const people = [
    {name: 'John',
    lastName: 'Doe',
    age: '42',
    },
    {
    name: 'Jane',
    lastName: 'Doe',
    age: '42',
    }
]
console.log(people[1].name);
console.log(people[1]['name']);

