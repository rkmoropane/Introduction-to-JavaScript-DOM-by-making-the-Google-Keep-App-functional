// 01: File Selection

// Open the 'script.js' file.
// 02: Button Selection

// Use 'document.querySelector' to select the button element with the ID (#clickButton).
// Assign the selection to a constant variable named 'clickButton'.
// 03: Counter Selection

// Again, use 'document.querySelector' to select the counter div with the ID (#counter).
// Assign the selection to a constant variable named 'counter'.
// 04: Click Count Initialization

// Declare a variable using 'let' with the name 'clickCount' and set its initial value to zero.
// 05: Event Listener Setup

// Use the 'addEventListener' method on 'clickButton' to attach a click event listener.
// 06: Increment Operation

// Inside the event listener:

// Increment the 'clickCount' variable using (clickCount++).
// Update the text content of the counter element (counter.textContent) and set it to 'clickCount'.


// Select the button element
let clickButton = document.querySelector("#clickButton")
// Initialize a counter
let clickCount = 0;
// Select the counter element
let counter = document.querySelector("#counter");
// Event listener 
clickButton.addEventListener("click", function() {
    
    // Increment the counter
    clickCount++;
    // Update the text content
    counter.textContent = `${clickCount}`;

});