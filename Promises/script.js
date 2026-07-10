// // https://fakestoreapi.com/products/               fake store api


// //Promises
// //Select Elements from HTML

// //loading state
// const loadingState = document.getElementById("loading")

// //products container
// const productContainer = document.getElementById("products")

// //fetch api

// fetch("https://fakestoreapi.com/products").then((response) => {

//     // console.log(response.json())
//     return response.json()
// }).then((procuts) => {
//     // console.log(procuts)

//     //remove loading .... state when we receive products and display products using map
//     loadingState.style.display = "none"

//     procuts.map((product) => {

//         // console.log(product)

//         productContainer.innerHTML += `
//         <div class="card">
//             <img src="${product.image}" alt="">
//             <p>${product.category}</p>
//             <h3>${product.title}</h3>
//             <h2>$${product.price}</h2>
//             <button>Add to Cart</button>
//         </div>
//         `
//     })
// }).catch((error) => {
//     loadingState.innerHTML = `something went wrong`
//     console.log(error)

// })

//using async await
//loading state
const loadingState = document.getElementById("loading")

//products container
const productContainer = document.getElementById("products")