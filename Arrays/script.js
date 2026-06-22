//Arrays is Collection of data in JavaScript

// const students = ["Tasbiha", 22, "1234", "BSCS", "2023"]
// console.log(students)

// let marks = [70, 60, 80, 43, 22]
// console.log(marks)

//For Loop
// for (let i = 0; i < marks.length; i++) {
//     console.log(i, marks[i])
// }

//for of
// for (let mark of marks) {
//     console.log(mark)
// }

// ====================
// for of Loop
// ====================

// In a for of loop, you do not need to specify:
// - Starting index
// - Ending condition
// - Increment/Decrement

// The loop automatically starts from the first element
// and continues until the last element of the iterable.

//for in
// for (let index in marks) {
//     console.log(index, marks[index])

// }

//for each

// marks.forEach(
//     //Anonynous Function: outer funtion call it.
//     (mark) => {
//         if (mark >= 70) {
//             console.log(mark)
//         }

//     }
// )

// map, filter, reduce

//find a largest number in an array

// let marks = [70, 60, 80, 43, 22, 99]
// let largestNum = marks[0]

// for (mark of marks) {
//     if (mark > largestNum) {
//         largestNum = mark
//     }
// }
// console.log(largestNum)


// let marks = [70, 60, 80, 43, 22, 99]

// for (mark of marks) {
//     console.log(mark ** 2)
// }

// let marks = [70, 60, 80, 43, 22, 99]

// for (index in marks) {
//     console.log(marks[index] + 2)
// }

//sum of array

// let marks = [70, 60, 80, 43, 22, 99]
// let totalSum = 0
// for (mark of marks) {
//     totalSum += mark
// }

// console.log(totalSum)

// map, filter, reduce are Arrays Method
// let students = ['Tasbiha', "Sara", "Hira", "Dua"]

// //map return new array
// const newStudents = students.map((student) => {
//     return student
// })
// console.log(newStudents)

// let marks = [70, 60, 80, 43, 22, 99]

// marks.map((mark) => {
//     if (mark > 60) {
//         console.log(mark)
//     }
// })

//Filter

// marks.filter((mark) => {
//     // if (mark >= 70) {
//     //     console.log(mark)
//     // }
//     console.log(mark >= 70) //

// })

//In short filter use to apply filters and map use to print/display filtered data
//reduce to calculate sum

//How we can write it in one line

// let marks = [70, 60, 80, 43, 22, 99]
// marks.filter((mark) => console.log(mark > 70))
// let filteredMarks = marks.filter((mark) => mark > 70)
//console.log(filteredMarks)

//map filteredMarks
// filteredMarks.map((mark) => console.log(mark))

// let marks = [70, 60, 80, 43, 22, 99]
// //Most Recommended 
// const filteredMarks = marks.filter((mark) => mark >= 70).map((filteredMark) => console.log(filteredMark))

// ====================
// reduce()
// ====================

// Real-world Use Case:
// Calculate the subtotal of items in a shopping cart.
// reduce() combines all values into a single value.

// reduce() takes a callback function with two main parameters:
// acc -> Accumulator (stores the accumulated result)
// val -> Current value being processed
// acc is like a initial value. When we calculate total sum so we initialized totalSum = 0 
// let marks = [70, 60, 80, 43, 22, 99]
// let totalSum = marks.reduce((acc, val) => {
//     return acc + val
// }, 2)
// console.log(totalSum)

//dry run
//First Iteration
// acc = 2
// val = 70
// 2 + 70       => 72

// acc = 72
// 72 + 60      => 132

// acc = 132
// 132 + 80     => 212

// acc = 212
// 212 + 43     => 255

//acc = 255
// 255 + 22    => 277

//acc = 277
// 277 + 99   => 376



// const products = [500, 800, 700, 560, 340, 890, 322]

// const filteredItems = products.filter((product) => product > 500).map((filteredItem) => filteredItem).reduce((acc, val) => acc + val, 0)
// console.log(filteredItems)