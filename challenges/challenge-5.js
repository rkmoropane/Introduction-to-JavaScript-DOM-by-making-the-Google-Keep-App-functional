// 01: Include the cuid Library

// Click on this 'Link' to copy the script tag.
// Paste the script tag in the HTML file to include the cuid library.
// 02: JavaScript File

// Open the 'script.js' file where your JavaScript code resides.
// 03: Select the Input

// Use the document.getElementById method to select the input element with the ID 'textInput'.
// Store the element in a constant variable named 'inputField'.
// 04: Select the Display Button

// Use the document.getElementById method to select the HTML button element with the ID 'displayButton'.
// Store the element in a constant variable named 'displayButton'.
// 05: Select the Text Display Container

// Use the same method to select the HTML element with the ID 'displayTextContainer'.
// Store the element in a constant variable named 'displayTextContainer'.
// 06: Attach a Click Event Listener

// Attach a click event listener to the 'displayButton' using the addEventListener method.
// 07: Inside the Event Listener

// Set the text content of 'displayTextContainer' is equal to 'cuid()'.
// Change the text color of 'displayTextContainer' to 'rgb(51, 51, 51)'.

// JavaScript Code 

// 1. Select input field: 

// 2. Select display button: 

// 3. Select display text container: 

// 4. Click event listener: 

// JavaScript Code 

// 1. Select input field: 
let inputField = document.getElementById("textInput");
// 2. Select display button: 
let displayButton = document.getElementById("displayButton");

// 3. Select display text container: 
let displayTextContainer = document.getElementById("displayTextContainer");

// 4. Click event listener: 
displayButton.addEventListener("click", () => {
    displayTextContainer.textContent = cuid();
    displayTextContainer.style.color = "rgb(51, 51, 51)";
})