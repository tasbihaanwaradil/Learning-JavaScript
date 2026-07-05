// ==========================
// Quick Revision Notes
// ==========================

// setTimeout()
//  Executes a callback function ONLY ONCE after the specified delay.

// setInterval()
//  Executes a callback function repeatedly after every specified interval.

// clearInterval()
//  Stops a running setInterval() using its interval ID.


// Example: Prints "Hello" once after 5 seconds.
// setTimeout(() => {
//     console.log("Hello");
// }, 5000);


// Store the interval ID returned by setInterval().
// let interval = setInterval(() => {
//     console.log("Hello");
// }, 5000);

// // Stop the interval using its ID.
// console.log(interval)
// clearInterval(interval);

//Example usecase: Create a counter 10 - 0
// let counter = 10

// let interval = setInterval(() => {
//     if (counter >= 0) {
//         console.log(counter)
//         counter--
//     } else {
//         clearInterval(interval)
//     }
// }, 1000)

//Progress Bar 



//Progress Fill
const progressFill = document.getElementById("progressFill")

//Progress Text 0% - 100%
const progressText = document.getElementById("progressText")

//Download Heading
const downloadHeading = document.querySelector("h1")

let progress = 0;
let interval = setInterval(() => {
    if (progress < 100) {
        progress++
        progressFill.style.width = `${progress}%`
        progressText.innerText = `${progress}%`
    } else {
        downloadHeading.innerText = "Download Complete"
        clearInterval(interval)
    }
}, 20)