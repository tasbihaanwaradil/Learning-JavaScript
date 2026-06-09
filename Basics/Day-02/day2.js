// ====================
// Data Types in JavaScript
// ====================

// Primitive Data Types (store a single value)
// - Number (1, 2, 3, 2.0, 3.555)
// - String ("Hello")
// - Boolean (true, false)
// - Undefined
// - Null
// - Symbol

// NaN (Not a Number) is a special value of the Number type,
// not a separate data type.


// Reference (Non-Primitive) Data Types
// - Array
// - Object
// - Function


// Number
var a = 10;
var b = 10.5;
console.log(a + b); // 20.5


// String
var std_name = "Sara";
console.log(std_name);


// Undefined
var my_age; // Declared but not assigned a value
console.log(my_age); // undefined


// Null
var std_CGA = null; // Intentionally empty value
console.log(std_CGA);


let num1 = 10;
let num2 = 30;
let num3 = "10";
let str1 = "Hello world";

console.log(num2 + num1); // 40
console.log(num2 * num1); // 300
console.log(num2 % num1); // 0

console.log(num1 * num3); // 100 (string converted to number)
console.log(typeof (num3)); // "string"

console.log(num1 - str1); // NaN
console.log(num1 + str1); // "10Hello world"
console.log(num1 * str1); // NaN
console.log(num1 / str1); // NaN