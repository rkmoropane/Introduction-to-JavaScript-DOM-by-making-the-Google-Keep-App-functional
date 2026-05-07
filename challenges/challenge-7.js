// Define an array of users:

// Create an array named 'users' that contains the following three objects representing individual users.

// User One:

// id: 1
// name: "John Doe"
// age: 28
// User Two:

// id: 2
// name: "Jane Smith"
// age: 35
// User Three:

// id: 3
// name: "Bob Johnson"
// age: 42
// Create a function to generate user cards:

// Define a function named 'generateUserCard' that takes a 'user' object as a parameter and returns the following HTML string inside template literals representing a user card:
// <div class="user-card">
//   <h2>${user.name}</h2>
//   <p>Age: ${user.age}</p>
// </div>
// Create a function to update the user list on the page:

// Define a function named 'updateUserList' that performs the following:

// Retrieve the HTML container element with the id "userContainer" using 'document.getElementById'.
// Set the 'innerHTML' property of the container to the result of mapping over the 'users' array and calling 'generateUserCard' for each user, then joining the resulting array of HTML strings into a single string.
// Perform an initial update of the user list:

// Call the 'updateUserList' function to initially populate the user list on the page with user cards.

// JavaScript Code 

// 1. Create users array: 
let users = [
    {
        id: 1, 
        name: "John Doe", 
        age: 28
        },
    {
        id: 2, 
        name: "Jane Smith", 
        age: 35
        },
    {
        id: 3, 
        name: "Bob Johnson", 
        age: 42
        },
    ]
// 2. Function to generate user cards:
function generateUserCard(user) {
    return `
    <div class="user-card" id=${user.id}>
        <h2>${user.name}</h2>
        <p>Age: ${user.age}</p>
    </div>
    `;
}

// 3. Function to update the user list:
function updateUserList(){
    let userContainer = document.getElementById("userContainer");
    userContainer.innerHTML = users.map(generateUserCard).join("");
    console.log(userContainer.textContent);   
}
// 4. Initial update:
updateUserList();
