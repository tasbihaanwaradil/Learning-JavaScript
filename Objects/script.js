// const student = {
//     name: 'Ali',
//     age: 21,
//     qualification: "BSCS",
//     address: {
//         sector: "F-11",
//         city: "Karachi"
//     }

// }

// console.log(student.name, student.age, student.address.sector)

//Real life object example from Amazon

// const product = {
//     img : "dummyimg.img"
// }

//Array of objects

// const products = [
//     {
//         title: "T-shirt",
//         category: 'clothes',
//         color: 'red',
//         price: '2500',
//         stocks: 5
//     },
//     {
//         title: "Shoes",
//         category: 'clothes',
//         color: 'black',
//         price: '5000',
//         stocks: 5
//     },
//     {
//         title: "Ring",
//         category: 'Jewellery',
//         color: 'black',
//         price: '600',
//         stocks: 5
//     },
//     {
//         title: "Shoes",
//         category: 'clothes',
//         color: 'black',
//         price: '5000',
//         stocks: 5
//     }
// ]

// console.log(products)

//for of
//for off
//for each
//map, filter, reduce

// for (product of products) {
//     console.log(product)
// }

// let newProducts = products.map((product) => {
//     return product
// })
// console.log(newProducts)

//filter
// show item price < 20000

// const filter_products = products.filter((product) => {
//     return product.price > 1000

// })

// console.log(filter_products)

// products.filter(product => product.color === 'red').map

// const total = products.filter(product => product.color === "black").map(fProduct => fProduct).reduce((acc, val) => acc + val.price, 0 )
// console.log(total)

// const products = [
//     {
//         title: "Sauvage",
//         category: "perfume",
//         color: "black",
//         price: 45000,
//         stocks: 5
//     },
//     {
//         title: "T shirt",
//         category: "dressing",
//         color: "blue",
//         price: 15000,
//         stocks: 2
//     },
//     {
//         title: "Pant",
//         category: "dressing",
//         color: "white",
//         price: 12000,
//         stocks: 7
//     },
//     {
//         title: "Ndure Shoe",
//         category: "shoes",
//         color: "black",
//         price: 16000,
//         stocks: 7
//     }
// ]

// color first characyter start from b
// price < 20000

// const digits = [8, 6, 9, 4, 23, 7, 5, 8];

// // // find cube of all these elements
// // // if digits > 350 then minus 7 from it
// // // use reduce to sum all filtered elements

// const newArr = digits.map((digit => digit ** 3))
// const filteredArray = newArr.filter((digit) => digit > 350)
// // console.log(filteredArray)

// const totalSum = filteredArray.map((digit) => digit - 7).reduce((acc, val) => acc + val, 0)
// console.log(totalSum)


// find avg of marks
// const students = [
//     {
//         name: "abc",
//         marks: 89
//     },
//     {
//         name: "def",
//         marks: 49
//     },
//     {
//         name: "ghi",
//         marks: 78
//     }
// ]

// const avgMarks = students.map((student) => student.marks).reduce((acc, val) => acc + val, 0) / students.length
// // console.log(avgMarks / 3)
// console.log(avgMarks)