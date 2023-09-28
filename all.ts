// import './style.css'


// // let character = 'mario';
// // let age = 30;
// // let isBlackBelt = false;

// // // character = 20;
// // character = 'luigi';

// // // age = 'yoshi';
// // age = 40;

// // // isBlackBelt = 'yes';
// // isBlackBelt = true;

// // const circ = (diameter: number) => {
// //   return diameter * Math.PI;
// // };

// // // console.log(area('hello'));
// // console.log(circ(7.5)); 


// // Assignment 1 : Variable Declaration
// // Declare variables to store a name and age.
// const name: string = "John Doe";
// const age: number = 25;

// console.log(`My name is ${name} and I am ${age} years old.`);


// // Assignment 2 : Type Annotation and Inference
// // Infer types and explicitly annotate types for variables.
// let favoriteMovie = "Inception"; // Infer type
// let releaseYear: number = 2010; // Explicitly annotated type

// console.log(`My favorite movie is ${favoriteMovie} released in ${releaseYear}.`);



// // Assignment 3 : Functions and Parameters
// // Create a function that calculates the area of a rectangle.
// function calcDistance(speed: number, time: number): number {
//   return speed * time;
// }

// const speed = 5;
// const time = 10;
// console.log(`The distance travelled is ${calcDistance(speed, time)}.`);



// //Assignment 3.5 : Object Params, add two numbers 
// //Create a function that takes an object with two number properties as arguments and prints the sum of those numbers.
// let AddNumbers = (obj: { a: number, b: number }) => {
//   return obj.a + obj.b
//   //console.log(obj.a + obj.b);
// }

// const obj = { a: 1, b: 2 };
// console.log(AddNumbers(obj));




// // Assignment 4 : Arrays and Loops
// // Create an array of favorite colors and print each color using a loop.
// const favoriteColors: string[] = ["Red", "Blue", "Green"];

// for (const color of favoriteColors) {
//   console.log(color);
// }




// // Assignment 5 : Conditional Logic
// // Create a function that checks if a number is positive.
// function isPositive(num: number): boolean {
//   return num > 0;
// }

// const num: number = 1;
// console.log(`Is ${num} positive? ${isPositive(num) ? 'Yes' : 'No'}`);


// // Assignment 6 : Objects and Interfaces
// // Create an interface for a person and use it to define an object.
// interface Person { // interface can only be used to define an object, not a primitive type, like string, number, boolean, etc.
//   firstName: string;
//   lastName: string;
//   age: number;
// }

// const person: Person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 30
// };

// console.log(`Person: ${person.firstName} ${person.lastName}, Age: ${person.age}`);



// // Assignment 7.0: Union Type
// // Define a type that can be either a number or a string.
// type NumberOrString = number | string;

// const value1: NumberOrString = 10;
// const value2: NumberOrString = "hello";

// console.log(value1);
// console.log(value2);



// // Assignment 7.1 : Union Type and Intersection Types 
// // Create a union and intersection type for a person object.

// // Union Type
// type UnionPerson = {
//   firstName: string;
//   lastName: string;
//   age: number;
// } | undefined;

// const unionPerson: UnionPerson = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 30
// };

//  console.log(`Union Person: ${unionPerson?.firstName} ${unionPerson?.lastName}, Age: ${unionPerson?.age}`);



// // Example 1: 
// // Define a function that can handle different argument types and print the type of the argument.
// function display(input: string): void;
// function display(input: number): void;
// function display(input: any): void {
//   console.log(input, typeof input);
// }

// display("Hello, world!");
// display(42);


// // Assignment 8 : Optional Properties
// // Define an interface for a book with an optional author property.
// interface Book {
//   title: string;
//   author?: string;
// }

// const book1: Book = {
//   title: "The Great Gatsby",
//   author: "F. Scott Fitzgerald"
// };

// const book2: Book = {
//   title: "To Kill a Mockingbird"
// };

// // One Flew Over the Cuckoo's Nest - Af Ken Kesey

// console.log(book1);
// console.log(book2);




// // Assignment 9 : Generics
// // Create a generic function that takes an array of any type and prints each element to the console.
// function printArray(arr: any[]) {
//   for (const element of arr) {
//     console.log(element);
//   }
// }

// const arr1: number[] = [1, 2, 3];
// const arr2: string[] = ["a", "b", "c"];

// printArray(arr1);
// printArray(arr2);



// // Assignment 9.1 : Generic Functions
// // Create a generic function that reverses an array.
// function reverse(arr: any[])  {
//   return arr.reverse();
// }

// const numbersArray: number[] = [1, 2, 3, 4, 5];
// const reversedNumbers: number[] = reverse(numbersArray);
// console.log(reversedNumbers);

// const stringsArray: string[] = ["apple", "banana", "cherry"];
// const reversedStrings: string[] = reverse(stringsArray);
// console.log(reversedStrings);

/* 
class Product {
  public productName: string;

  constructor(name: string) {
    this.productName = name;
  }

  displayProductName(): void {
    console.log(`Product Name: ${this.productName}`);
  }
}

const product = new Product("Laptop");
console.log(product.productName); // Accessible: public property
product.displayProductName();     // Accessible: public method
 */

/* 
class Product {
  private productId: number;

  constructor(id: number) {
    this.productId = id;
  }

  displayProductId(): void {
    console.log(`Product ID: ${this.productId}`);
  }
}

const product = new Product(123);
console.log(product.productId); // Error: Property 'productId' is private
product.displayProductId();     // Accessible: private method */

/* 
class Product {
  public productName: string;    // Public
  private productId: number;     // Private
  readonly price: number;       // Readonly

  constructor(name: string, id: number, price: number) {
    this.productName = name;
    this.productId = id;
    this.price = price;
  }

  displayDetails(): void {
    console.log(`Product ID: ${this.productId}, Name: ${this.productName}, Price: $${this.price}`);
  }
}

const product = new Product("Laptop", 123, 800);
product.productName = "Desktop"; // Accessible: public property
product.price = 900;             // Error: Cannot assign to 'price' because it is a read-only property
product.productId = 456;         // Error: Property 'productId' is private
console.log(product); // Error: Property 'productId' is private
product.displayDetails();
 */
/* class Employee {
  readonly empCode: number;
  empName: string;
  
  constructor(code: number, name: string)     {
      this.empCode = code;
      this.empName = name;
  }
}
let emp = new Employee(10, "John");
emp.empCode = 20; //Compiler Error
emp.empName = 'Bill'; 
console.log(emp) */


// Day Two

// // Example 1: Function Signatures
// type AddNumbersFunction = (a: number, b: number) => number;
// const addNumbers: AddNumbersFunction = (a, b) => a + b;
// const result: number = addNumbers(5, 10);
// console.log("Ex1: Sum:", result);


// // Example 2 : DOM & Type Casting
// const targetElement = document.getElementById("app") as HTMLElement;
// targetElement.style.backgroundColor = "blue";
// targetElement.style.height = "100px";


// // Example 3 : Classes
// class Customer {
//   name: string;
//   age: number;
//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
//   greet(): void {
//     console.log(`Ex3: Hello, my name is ${this.name} and I am ${this.age} years old.`);
//   }
// }

// const customer = new Customer("Emily", 25);
// customer.greet();


// //Example 4 : Public, Private, and Readonly
// class Item {
//   public itemName: string;
//   private itemId: number;
//   readonly price: number;
//   constructor(name: string, id: number, price: number) {
//     this.itemName = name;
//     this.itemId = id;
//     this.price = price;
//   }
//   displayDetails(): void {
//     console.log(`Ex4: Item ID: ${this.itemId}, Name: ${this.itemName}, Price: $${this.price}`);
//   }
// }

// const item = new Item("Smartwatch", 123, 150);
// item.itemName = "Desktop"; // Accessible: public property
// item.price = 900;             // Error: Cannot assign to 'price' because it is a read-only property
// item.itemId = 456;         // Error: Property 'productId' is private
// console.log(item); // Error: Property 'productId' is private
// item.displayDetails();

// /**
//  * 
//  * IMPORTANT
//  * We can still do testing and actually make it work, but it will not work in the browser.
//  * Once we compile it, it will prompt errors.
//  * 
//  */




// // Example 5: Modules
// /**
//  * Must make sure to add "type": "module" to package.json file. And make the folder and files
//  */


// // myModule.ts file (or just this file)
// // export function doubleNumber(num: number): number {
// //   return num * 2;
// // }

// // // main.ts file
//  import { doubleNumber } from './dn.js';

//  const resultModules: number = doubleNumber(5);
//  console.log("Ex5: Doubled:", resultModules);




// /**
//  * Assignment 6: Interface
//  * Interfaces are essential in TypeScript. Define an interface YourInterface with properties yourProperty1 and yourProperty2. Create a class YourClass that implements this interface and uses these properties. Instantiate a YourClass object and display its properties.
//  */
// // Example

// interface Shape {
//   name: string;
//   calculateArea(): number;
// }

// class Square implements Shape {
//   name: string;
//   sideLength: number;

//   constructor(name: string, sideLength: number) {
//     this.name = name;
//     this.sideLength = sideLength;
//   }

//   calculateArea(): number {
//     return this.sideLength ** 2;
//   }
// }

// const square = new Square("Square A", 5);
// console.log(`Ex6: ${square.name} Area:`, square.calculateArea());



// /**
//  * 
//  * Assignment 7: Interface with Classes
//  * Assignment Description:
//  * Understanding how interfaces work with classes is crucial. Define an interface YourInterface with properties property1, property2, and a method yourMethod. Create a class YourClass that implements this interface and displays the properties using the yourMethod. Instantiate a YourClass object and call the yourMethod.
//  */

// //Examples for Showing Students:

// // Example
// interface Vehicle {
//   brand: string;
//   model: string;
//   startEngine(): void;
// }

// class Car implements Vehicle {
//   brand: string;
//   model: string;

//   constructor(brand: string, model: string) {
//     this.brand = brand;
//     this.model = model;
//   }

//   startEngine(): void {
//     console.log(`Ex7: ${this.brand} ${this.model} engine started.`);
//   }
// }

// const myCar = new Car("Toyota", "Camry");
// myCar.startEngine();












// Day Two Start

// Example 1 : Function Signatures
type AddNumbersFunction = (a: number, b: number) => number;
const addNumbers: AddNumbersFunction = (a, b) => a + b;
const result: number = addNumbers(5, 10);
console.log("Ex1: Sum:", result);

// Example 2 : DOM & Type Casting
const targetElement = document.getElementById("app") as HTMLElement;
targetElement.style.backgroundColor = "blue";
targetElement.style.height = "100px";

// Example 3 : Classes
class Customer {
  name: string;
  age: number;
  constructor(name:string, age:number) {
    this.name = name;
    this.age = age; 
  }
  greet(): void {
    console.log(`Ex3: Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

const customer = new Customer("Dude", 42)
customer.greet();

// Example 4 : Public, Private, and Readonly
class Item {
  public itemName: string;
  private itemId: number;
  readonly price: number;

  constructor(name: string, id: number, price: number) {
    this.itemName = name;
    this.itemId = id;
    this.price = price;
  }

  displayDetails(): void {
    console.log(`Ex4: Item ID: ${this.itemId}, Name: ${this.itemName}, Price: $${this.price}`);
  }
}

const item = new Item("Smartwatch", 123, 150);
item.itemName = "Desktop"; // Accessible: public property
//item.itemId = 436;         // Error: Property 'productId' is private
//item.price = 900;          // Error: Cannot assign to 'price' because it is a read-only property
item.displayDetails()

// Example 5 : Modules
import { doubleNumber } from './dn.js';

const resultModules: number = doubleNumber(5);
console.log("Ex5: Doubled:", resultModules);


// Example 6 : Interface


// Example 7 : Interface with Classes
interface Vehicle {
  brand: string;
  model: string;
  startEngine(): void;
}

class Car implements Vehicle {
  brand: string;
  model: string;

  constructor(brand: string, model: string) {
    this.brand = brand;
    this.model = model;
  }

  startEngine(): void {
    console.log(`Ex7: ${this.brand} ${this.model} engine started.`);
  }
}

const myCar = new Car("Toyota", "Camry");
myCar.startEngine();

