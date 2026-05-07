// 01: Get Input Field

// Use 'document.getElementById' to get the HTML element with the id "inputField" and assign it to the variable 'inputField'.
// 02: Get Assign Button

// Similarly, use 'document.getElementById' to get the element with the id "assignButton" and assign it to the variable 'assignButton'.
// 03: Get Displayed Value

// Finally, use 'document.getElementById' to get the element with the id "displayedValue" and assign it to the variable 'displayedValue'.
// 04: Click Event Listener

// Add a click event listener to the "assignButton".
// 05: Inside Event Listener

// Inside the event listener perform the following operations:
// a: Retrieve Input Value

// Retrieve the value entered in the input field using 'inputField.value'.
// Assign the input value to a variable named 'inputValue'.
// b: Assign Value to Displayed Element

// Set the text content of 'displayedValue' is equal to 'inputValue'.

// JavaScript Code


// 1. Retrieve the input field:
let inputField = document.getElementById("inputField");


// 2. Retrieve the assign button:
let assignButton = document.getElementById("assignButton");

// 3. Retrieve the displayed value element:
let displayedValue = document.getElementById("displayedValue");

// 4. Add click event listener to the button:
assignButton.addEventListener("click", () => {
    // a. Retrieve the input value:
    let inputValue = inputField.value;
    // b. Assign the input value:
    displayedValue.innerHTML = inputValue;
})