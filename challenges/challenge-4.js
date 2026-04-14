// 02: Input Field

// Use the 'document.getElementById' method to select the HTML input element with the ID (textInput).
// And store it in a constant variable 'inputField'.
// 03: Display Button

// Use the same to select the HTML button element with the ID (displayButton).
// And store it in a constant variable 'displayButton'.
// 04: Text Display Container

// Use the same method to select the HTML element with the ID (displayTextContainer).
// And store it in a constant variable 'displayTextContainer'.
// 05: Click Event Listener

// Attach a click event listener to the 'displayButton' button using the 'addEventListener' method.
// 06: Inside the Event Listener

// Retrieve the text entered in the input field using 'inputField.value' and store it in a constant variable 'enteredText'.
// Set the text content of 'displayTextContainer' to the 'enteredText'.
// Change the text color of 'displayTextContainer' to 'rgb(51, 51, 51)'.

// Select Input Field 
let inputField = document.getElementById("textInput");
// Select Display Button 
let displayButton = document.getElementById("displayButton");
// Select Display Text Container 
let displayTextContainer = document.getElementById("displayTextContainer");

// Modify Event Listener 
displayButton.addEventListener("click", function () {
    // Retrieve the text from the input field
    let enteredText = inputField.value;
    // Apply styles to the text display container
    displayTextContainer.textContent = enteredText;
    displayTextContainer.style.color = "rgb(51, 51, 51)";

});

