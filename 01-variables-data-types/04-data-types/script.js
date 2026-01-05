// Data types

// Primitive data types in JavaScript:

// 1. String
// 2. Number
// 3. Boolean
// 4. Undefined
// 5. Null
// 6. Symbol
// 7. BigInt

// Examples:

const myString = "Hello, World!";   // String
const myNumber = 42;                // Number
const myTemp = 98.9;                // Number
const myBoolean = true;             // Boolean
let myUndefined;                    // Undefined
const myNull = null;                // Null
const mySymbol = Symbol('id');      // Symbol
const myBigInt = 9007199254740991n; // BigInt

// Reference Types in JavaScript:

// 1. Object literals
// 2. Array
// 3. Function

// Javascript is a dynamically typed language.

const person = {
  name: "Alice",
  age: 30
};

const numbers = [1,2,3,4];

function greet(name) {
    return `Hello, ${name}!`;
}