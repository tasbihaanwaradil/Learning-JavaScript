// ==========================
// Browser Storage Revision
// ==========================

// Local Storage
//  Stores data permanently in the browser.
//  Data remains even after closing or refreshing the browser.
//  Used for: Theme preference, Shopping Cart, User Settings.

// Session Storage
//  Stores data only for the current browser tab/session.
//  Data is deleted when the tab or browser is closed.
//  Used for: Temporary form data, OTP verification, Multi-step forms.

// Cookies
//  Small pieces of data stored in the browser.
//  Can have an expiry date.
//  Sent to the server with every HTTP request.
//  Used for: Authentication, Session Management, User Tracking.

//localStorage 
//What to learn
//How to store  ->  setItem
//How to fetch  ->  getItem
//How to remove ->  removeItem
//How to update

// localStorage.setItem("Name","Tasbiha")              //store in local storage
// let getName = localStorage.getItem("Name")          //fetch from local storage

// // console.log(getName) //Tasbiha

// //Update value by setItem
// let getNewName = localStorage.setItem("Name","Anwar Adil")

// // localStorage.removeItem("Name")

// ==========================
// Local Storage + JSON Notes
// ==========================

// localStorage can ONLY store strings.
// Arrays and objects must be converted to a string before storing.

// JSON.stringify()
//  Converts JavaScript arrays/objects into a JSON string.

// Example:
// ["Tasbiha", "Dua"]  →  '["Tasbiha","Dua"]'

// localStorage.setItem("friends", JSON.stringify(["Tasbiha", "Dua"]));


// localStorage.getItem()
//  Retrieves data as a string.

// Example:
// localStorage.getItem("friends")
// Returns: '["Tasbiha","Dua"]'


// JSON.parse()
//  Converts the JSON string back into its original JavaScript array/object.

// Example:
// const friends = JSON.parse(localStorage.getItem("friends"));
// Result: ["Tasbiha", "Dua"]



// localStorage.setItem("friends", JSON.stringify(['Tasbiha','Dua']))


//Theme Preference
// ==========================
// Theme Preference Notes
// ==========================

// window.matchMedia()
//  Checks if a CSS media query matches the user's system settings.

// prefers-color-scheme: dark
//  Detects whether the user's operating system is using Dark Mode.

// Returns a MediaQueryList object.

// The .matches property:
// true  → User's system theme is Dark 🌙
// false → User's system theme is Light ☀️

// Detect user's system theme preference.
// matches === true  → Dark Mode
// matches === false → Light Mode

if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    document.body.classList.add("dark")
} else {
    document.body.classList.add("light")
}

//Click Toggle Button to change Theme 

