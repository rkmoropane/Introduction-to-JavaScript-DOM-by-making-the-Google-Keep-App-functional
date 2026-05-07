// 01: Select Input Field

// Use the 'document.getElementById' method to select the HTML input element with the ID 'inputField'.
// Store the selected input in a variable named 'inputField'.
// 02: Select Store Button

// Use the 'document.getElementById' method to select the HTML button element with the ID 'storeButton'.
// Store the selected input in a variable named 'storeButton'.
// 03: Select Clear Button

// Use the 'document.getElementById' method to select the HTML button element with the ID 'clearButton'.
// Store the selected input in a variable named 'clearButton'.
// 04: Select Message Paragraph

// Use the 'document.getElementById' method to select the HTML paragraph element with the ID 'message'.
// Store the selected input in a variable named 'message'.
// 05: Click Event for Storing Text

// Add click event listener on 'storeButton'.
// Inside the event listener, perform the following operations:
// a: Store the Value of Input

// Get the value of 'inputField' by using 'inputField.value'.
// Store the selected value in a variable named 'enteredText'.
// b: Use If-else Statement

// Condition:
// Check if the variable 'enteredText' contains any non-empty string by using 'if (enteredText)'.
// If text exists:
// Stores the entered text in the Local Storage with the key 'storedText'.
// Set the content of the 'message' is equal to "Text successfully stored in Local Storage!".
// If text doesn't exists:
// Set the content of the 'message' is equal to "Please enter text before storing."
// 06: Click Event for Clear Button

// Sets up an event listener on the 'clearButton'.
// Inside the event listener:
// Remove the previously stored text from Local Storage.
// Update the text content of the 'message' paragraph to "Local Storage cleared."
// 07: Retrieving Stored Text

// Retrieve the text stored in Local Storage with the key 'storedText' by using 'localStorage.getItem'.
// Store the retrieved text in a variable named 'storedText'.
// 08: Displaying Stored Text

// Use if statement to check check if there is any stored text:
// If there is, updates the text content of the message paragraph to (`Stored Text: ${storedText}`

/// JavaScript Code

// 1. Select Input Field:
const inputField = document.getElementById("inputField");
// 2. Select Store Button:
const storeButton = document.getElementById("storeButton");

// 3. Select Clear Button:
const clearButton = document.getElementById("clearButton");

// 4. Select Message Paragraph:
const message = document.getElementById("message");

// 5. Event listener for Store Button:
storeButton.addEventListener("click", () => {
    const enteredText = inputField.value;
    if (enteredText != ""){
        localStorage.setItem("storedText", enteredText);
        message.innerHTML = "Text successfully stored in Local Storage!";
    } else {
        message.innerHTML = "Please enter text before storing.";

    }
})
// 6. Event listener for Clear Button:
clearButton.addEventListener("click", () => {
    localStorage.removeItem("storedText");

    message.innerHTML = "Local Storage cleared.";

});
// 7. Display stored text on page load:
const storedText = localStorage.getItem("storedText");

if (storedText){
    message.innerHTML = `Stored Text: ${storedText}`;
}