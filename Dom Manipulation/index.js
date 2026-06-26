//select element by id
// const heading1 = document.getElementById("heading-1")
// heading1.innerText = "I am Learning DOM Manipulation in JavaScript"
// heading1.style.color = "orange"
// heading1.style.backgroundColor = "black"
// heading1.style.fontSize= "50px"
// console.log(heading1)


//Select element by class name
// const heading1 = document.getElementsByClassName("head-1")
// // console.log(heading1)
// heading1[0].style.color = "red"
// heading1[1].style.color = "blue"

//query selector
// const heading = document.querySelector(".heading-1")
// const red = document.querySelector(".red")
// const green = document.querySelector(".green")

// // console.log(heading, red, green)

// function changeColorRed() {
//     heading.innerHTML = "I am red"
//     heading.style.color = "red"
// }

// //events
// red.addEventListener("click", changeColorRed)
// green.addEventListener("click", () => {
//     heading.innerHTML = "I am green"
//     heading.style.color = "green"
// })

//change background and change its color

// const body = document.querySelector("body")
// // body.style.backgroundColor = "lightblue"

//generate random number

// const number = Math.floor(Math.random() * 255)
// console.log(number)

//Color Generator project

// const body = document.querySelector("body")
// const btn = document.querySelector(".change-color-btn")

// const changeBackgroundColor = () => {
//     let red = Math.floor(Math.random() * 255)
//     let green = Math.floor(Math.random() * 255)
//     let blue = Math.floor(Math.random() * 255)
//     // console.log(red, green, blue)
//     //random color generation 
//     let randomColor = `rgb(${red}, ${green}, ${blue})`
//     // console.log(randomColor)
//     body.style.backgroundColor = randomColor
// }

// changeBackgroundColor()
// btn.addEventListener("click", () => {
//     changeBackgroundColor();
// })

// setTimeout(() => {
//     changeBackgroundColor();

// }, 1000) // This will not work

// setInterval(() => {
//     changeBackgroundColor();

// }, 5000)

//Asynchronous
//Synchronous

// console.log("Line 1")
// // for (i = 0; i < 100000; i++) {
// //     console.log("Line 2")
// // }

// setTimeout(() => {
//     console.log("Line 2")
// }, 5000)
// for (i = 0; i < 50000; i++) {
//     console.log("Line 2.5")
// }
// console.log("Line 3")

// //event loop