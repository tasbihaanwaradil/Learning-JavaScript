//Loops
// for, do while, while
//for each, for of, for in
//map, reduce, filter

// for (let i = 1; i <= 10; i++) {
//     console.log(i)
// }

// 1) starting point => Initialization
// 2) ending point   => Condition
// 3) way of move    => Increment/decrement

//Steps how program will execute

// 1) Initialization
// 2) Condition check
// 3) inside loop      //1
//

// Interview Question

// for (let i = 1; i <= 10; i++) {
//     console.log(i)
// }

// What is the final value of i in the memory
// The final value is 11

//Even Numbers

// for (let i = 2; i < 100; i++) {
//     if (i % 2 === 0) {
//         console.log(i)
//     }       
// }

//Odd Numbers
// for (let i = 1; i < 100; i++) {
//     if (i % 2 === 1) {
//         console.log(i)
//     }
// }

//Reverse Order 10,9,8,7...

// for(let i = 10; i>=0; i--){
//     console.log(i)
// }


//print table of a number entered by the user
// let table_no = Number(prompt("Enter a number: "))

// for (let i = 1; i <= 10; i++) {
//     //console.log(table_no * i)
//     console.log(`${table_no} X ${i} = ${table_no * i}`)

// Practice Question

// starting point => 3
// ending point => 89
// if number is divisible by 5 ( you have to add 2 in it)
// if number is divisible by 7 ( you have to subtract 2 from num)

// for (let i = 3; i <= 89; i++) {
//     if (i % 5 === 0) {
//         console.log(i + 2)
//     } if (i % 7 === 0) {
//         console.log(i - 2)
//     }

// }

// //print string in reverse order

// let new_str = "JavaScript"
// // let start = new_str[0]
// // let end = new_str.length

// for (let i = new_str.length - 1; i >= 0; i--) {
//     console.log(new_str[i])
// }
