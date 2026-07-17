// Closure in JavaScript

// Variables inside a function have local scope.

// Normally, local variables are removed from memory
// after the function finishes execution.

// If an inner function is returned,
// JavaScript keeps the outer variables alive.

// The inner function "closes over" the outer variables.
// This is called a Closure.

// Example:
// Outer Function → Creates variable
// Inner Function → Uses variable
// Return Inner Function → Variable stays in memory

// Closure = Inner Function + Remembered Outer Variables

let name = "tasbiha";

const outerFunction = () => {
  let name = "anwar adil";
  console.log(name);

  const innerFunction = () => {
    return name;
  };

  return innerFunction();
};

const result = outerFunction();

console.log(result); // anwar adil
