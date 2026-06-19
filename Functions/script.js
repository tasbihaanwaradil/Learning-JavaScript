//Functions

// function greet_user(user_name) {
//     console.log(`Good Morning ${user_name}`)
// }

// greet_user("John");

//function as a variable
// const greeting = function(){
//     console.log("Good Morning!")
// }

// greeting()

//Arrow Function

// const sum = (a, b) => {
//     return a + b

// }
// const result = sum(2, 2)
// console.log(result)

//Above Arrow function we can write in one line
// const sum = (a, b) => console.log(a + b)
// sum(2, 2)

//if you want to return a+b no need to write return keyword
// const sum = (a, b) => a + b
// let result = sum(2, 2)
// console.log(result)


//Practice Question
//Print table using function which takes two arguments table_no and limit

// const printTable = (table_no, table_limit) => {
//     for (let i = 1; i <= table_limit; i++) {
//         console.log(`${table_no} X ${i} = ${table_no * i}`)
//     }
// }

// printTable(2, 10)

//function with default
// const greet_user = (name = 'test') => {
//     console.log(`Good Morning ${name}`)
// }
// greet_user('Tasbiha')
// greet_user()

//Anonymous function : a function that does not have a name. Its parent function call it
//setTimeout() is a parent function
//setTimeout() call a function inside it
// setTimeout(() => {
//     console.log('inside timer')

// }, 10000)