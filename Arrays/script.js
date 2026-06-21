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

let marks = [70, 60, 80, 43, 22, 99]
let largestNum = marks[0]

for (mark of marks) {
    if (mark > largestNum) {
        largestNum = mark
    }
}
console.log(largestNum)