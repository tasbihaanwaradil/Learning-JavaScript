console.log("Tasbiha")
console.log("JavaScript Learning")

console.warn("This is warning")
console.error("This is error")


// Variables
// Variables are use to store values or some data 


// variable Declaration
var a;

// variable Initialization
a = 12;

// We can declare and initialize variable in a same line
var a = 12;

// Arithmetic Operators +,-,*,/,%

var b = 12;
console.log(a + b);  //24
console.log(a - b);  //0
console.log(a * b);  //144
console.log(a / b);  //1
console.log(a % b);  //0   12 % 12 = 0 Reminder


// ALERT
// alert() displays a message in a pop-up box.
// It is used to show information, warnings, or notifications to the user.

alert("Hello! This is an Alert in JavaScript");


// CONFIRM
// confirm() displays a confirmation dialog with "OK" and "Cancel" buttons.
// It returns a Boolean value:
// OK     → true
// Cancel → false

confirm("Is your age greater than 18?");


// STORING THE RESULT OF CONFIRM
// We can store the user's response in a variable
// and use it to make decisions in our website/application.

var ans = confirm("Is your age greater than 18?");


// DISPLAYING THE RESULT
// console.log() prints output in the browser console.
// It will display:
// true  → if the user clicks OK
// false → if the user clicks Cancel

console.log(ans);


// PROMPT
// prompt() displays an input box and asks the user to enter a value.

prompt("Enter your name?");

// Storing user input in a variable
var prompt_output = prompt("Enter your name?");

// Displaying the entered value in the console
console.log(prompt_output);