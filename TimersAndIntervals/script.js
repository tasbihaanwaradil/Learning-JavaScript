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
let counter = 10

let interval = setInterval(() => {
    if (counter >= 1) {
        counter--
        console.log(counter)
    } else {
        clearInterval(interval)
    }
}, 1000)