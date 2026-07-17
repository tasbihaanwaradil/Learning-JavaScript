// // https://fakestoreapi.com/products               fake store api

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
// const loadingState = document.getElementById("loading");

// //products container
// const productContainer = document.getElementById("products");

// const getProducts = async () => {
//   try {
//     const response = await fetch("https://dummyjson.com/products");
//     // console.log(response.json()) //return promise

//     const products = await response.json();
//     console.log(products.products);

//     //remove loadingState
//     loadingState.style.display = "none";

//     //show products

//     products.products.map((product) => {
//       productContainer.innerHTML += `
//             <div class="card">
//              <img src="${product.images[0]}" alt="">
//              <p>${product.category}</p>
//              <h3>${product.title}</h3>
//              <h2>$${product.price}</h2>
//              <button>Add to Cart</button>
//          </div>

//           `;
//     });
//   } catch (error) {
//     loadingState.innerHTML = `something went wrong`;
//     console.log(error);
//   }
// };

// getProducts(); //products will display

//Project Async await

// // Select Products Container
const productContainer = document.getElementById("products");

//loading state
const loadingState = document.getElementById("loading");

//Filters
//Search products
const searchInput = document.getElementById("search");

//Search products by category
const categorySelectOption = document.getElementById("category");

//Search products by priceRange
const priceRange = document.getElementById("priceRange");

let allProducts = [];

const categories = [
  "men's clothing",
  "jewelery",
  "electronics",
  "women's clothing",
];

//Inject Categories in HTML option tag
categories.map((category) => {
  categorySelectOption.innerHTML += `
  <option value="${category}">${category}</option>
  `;
});

//API call function using async await
//API call return promise

//Return Array of 20 Objects stored in allProducts empty array
async function getProducts() {
  try {
    const response = await fetch("https://fakestoreapi.com/products"); //return promise
    // console.log(response);

    const products = await response.json();
    // console.log(products);

    //laoding state display none after display products
    loadingState.style.display = "none";

    //allProducts empty array fill with products object we get from api call
    allProducts = products;
    console.log(allProducts); //It has 20 array of objects we will pass it to displayProducts function

    //displayProducts function
    displayProducts(allProducts);
  } catch (error) {
    //loadingState
    loadingState.innerHTML = "something went wrong";
    console.log(error);
  }
}

getProducts();

//displayProducts
function displayProducts(products) {
  productContainer.innerHTML = "";

  products.map((product) => {
    productContainer.innerHTML += `
     <div class="card">
            <img src="${product.image}" alt="">
            <h3>${product.title}</h3>
            <h2>Price : $${product.price}</h2>
            <button>Add to Cart</button>
        </div>`;
  });
}

//Events
searchInput.addEventListener("input", filterProducts);
categorySelectOption.addEventListener("change", filterProducts);
priceRange.addEventListener("input", () => {
  priceValue.innerText = `$${priceRange.value}`;
  filterProducts();
});

function filterProducts() {
  //convert user type value in input field convert into lowercase
  const searchInputValue = searchInput.value.toLowerCase();
  const categorySelected = categorySelectOption.value;
  const priceSelected = Number(priceRange.value);

  // console.log(searchInputValue, categorySelected, priceSelected);

  const filteredProducts = allProducts.filter((product) => {
    const matchSearch = product.title.toLowerCase().includes(searchInputValue);
    const matchCategory =
      categorySelected === "all" || product.category === categorySelected;
    const matchPrice = product.price <= priceSelected;

    return matchSearch && matchCategory && matchPrice;
  });

  displayProducts(filteredProducts);
}

//change event: wait for complete word
//input event: character by character filter
