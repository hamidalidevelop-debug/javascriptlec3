// "use strict"; //treat all js code as newer version
// alert("hello") // we are using node.js ,not browser


// console.log(3+3);   // code rewadibility should be high
// console.log("Haider")



// let name="fahad"
// let age=18
// let isLoggedin=false

// Number => 2 to power 53
//bigint
//string =>""
//Bolean => true/false
// null=> standardlone value     mean temperature 0 hai yani null hai 
//undefined =>
// symbol=> unique


//object 

// console.log(typeof undefined)   //undefined

// console.log(typeof null)        //object



"use strict"; // Treat all JS code as newer version

// alert("Hello"); ❌ Not allowed in Node.js (browser function)

// ✅ Use console.log in Node.js
console.log("Hello");
console.log(3 + 3);   // Code readability should be high
console.log("Haider");


// =======================
// Variables & Data Types
// =======================

let name = "Fahad";        // String
let age = 18;              // Number
let isLoggedIn = false;    // Boolean

console.log(name);
console.log(age);
console.log(isLoggedIn);


// =======================
// Number
// =======================
let score = 100;
console.log(typeof score);   // number


// =======================
// BigInt (for very large numbers)
// =======================
let bigNumber = 123456789012345678901234567890n;
console.log(typeof bigNumber);  // bigint


// =======================
// String
// =======================
let city = "Faisalabad";
console.log(typeof city);   // string


// =======================
// Boolean
// =======================
let isActive = true;
console.log(typeof isActive);  // boolean


// =======================
// Null vs Undefined
// =======================

let temperature = null;   // Intentionally empty value
let userEmail;            // Undefined (value not assigned)

console.log(temperature);        // null
console.log(userEmail);          // undefined

console.log(typeof temperature); // ❗ object (JavaScript bug)
console.log(typeof userEmail);   // undefined


// =======================
// Symbol (unique value)
// =======================
let id = Symbol("123");
let anotherId = Symbol("123");

console.log(id === anotherId); // false (Symbols are always unique)
console.log(typeof id);        // symbol


// =======================
// Object
// =======================
let person = {
    name: "Fahad",
    age: 18,
    isLoggedIn: false
};

console.log(person);
console.log(typeof person); // object


// =======================
// Array (also an object in JS)
// =======================
let fruits = ["Apple", "Mango", "Banana"];
console.log(fruits);
console.log(typeof fruits); // object


// =======================
// Function (special type of object)
// =======================
function greet() {
    console.log("Hello from function");
}

greet();
console.log(typeof greet); // function
