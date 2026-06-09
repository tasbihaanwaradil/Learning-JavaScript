// Loops in JavaScript

// while Loop

// let a = 10;
// while (a >= 0) {
//     console.log(a)
//     a--
// }

//For Loop

// for (num = 0; num < 10; num++) {
//     console.log(num)
// }

//By Sir Affaq

//print a table
// let num = 2;
// for (let i = 1; i <= 0; i++) {
//     console.log(`${num * i}`)

// }

// starting point => 3
// ending point => 89
// if number is divisible by 5 ( you have to add 2 in it)
// if number is divisible by 7 ( you have to subtract 2 from num)

for (let i = 3; i <= 89; i++) {
    if (i % 5 == 0) {
        console.log(i + 2)
    } else if (i % 7 == 0) {
        console.log(i - 2)
    }
}