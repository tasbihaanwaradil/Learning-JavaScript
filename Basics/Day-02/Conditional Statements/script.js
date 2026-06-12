//Conditional Statements (Basic Introduction)

// if (10 < 5) {
//     console.log(true)
// } else {
//     console.log(false)
// }

// var age = prompt("Enter your age: ")


// if (age > 18) {
//     console.log("You can vote")
// } else {
//     console.log("You can't vote")
// }


// let age = 60;                                                   //You are allowed to use LinkedIn
//                                                                 //end
// if (age >= 13 && age <= 60) {
//     console.log('You are allowed to use LinkedIn')
// } else {
//     console.log('You are not allowed to use LinkedIn')
// }

// console.log('end')


// Find Positive and Negative Number

// let num = 0;

// if (num < 0) {
//     console.log(num + " is a negative number")
// } else if (num === 0) {
//     console.log("Number is zero")

// } else {
//     console.log(num + " is a positive number")
// }

// console.log('end of program')


//Write a program to check a number is Even Or Odd

// let num = 0;

//check number must be greater than 0
// if (num === 0) {
//     console.log("Please enter a number greater than 0 to check even or odd")
// }
// else if (num % 2 === 0) {
//     console.log(num, "is an Even Number")
// } else {
//     console.log(num, "is a Odd Number")
// }


//Calculator

// let a = 10;
// let b = 5;
// let op = "-";

// if (op === "+") {
//     console.log(a + b)
// } else if (op === "-") {
//     console.log(a - b)
// } else if (op === "*") {
//     console.log(a * b)
// } else if (op === "/") {
//     console.log(a / b)
// } else {
//     console.log("Invalid Operator")
// }


//Grading System

// let std_marks = -1;

// let std_marks = Number(prompt("Enter your marks"));

// if (std_marks < 0) {
//     console.log("Enter valid marks")
// }
// else if (std_marks >= 90 && std_marks <= 100) {
//     console.log("A+")
// } else if (std_marks >= 80 && std_marks <= 89) {
//     console.log("A")
// } else if (std_marks >= 70 && std_marks <= 79) {
//     console.log("B")
// } else if (std_marks >= 60 && std_marks <= 69) {
//     console.log("C")
// } else {
//     console.log("F")
// }


//Nested if else 

// let age = 10;
// let entry_ticket = false;

// if (age >= 13) {
//     console.log("You are Eligible")

//     if (entry_ticket == true) {
//         console.log("You can watch the show now")
//     } else {
//         console.log("You are not allowed to enter in hall")
//     }
// } else {
//     console.log("You are not Eligible")
// }


//Switch Case
// let num1 = 20;
// let num2 = 10;
// let op = "-";

// switch (op) {
//     case "+":
//         console.log(num1 + num2)
//         break
//     case "-":
//         console.log(num1 - num2)
//         break
//     case "*":
//         console.log(num1 * num2)
//         break
//     case "/":
//         console.log(num1 / num2)
//         break
//     case "%":
//         console.log(num1 % num2)
//         break
//     default:
//         console.log("Invalid Operator")
//         break
// }




//Ternary Operator
let age = 15;
age >= 12 ? console.log("You are Eligible") : console.log("You are not eligible")
