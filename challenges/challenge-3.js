// 02: Selecting Buttons

// Use 'document.querySelector' to select the button with the ID (#btn1) and assign it to the constant variable 'btnOne'.
// 03: Button Click Event (Button 1)

// Add an event listener to 'btnOne' that listens for a click event.
// Inside the event listener, call the 'setFocus' function with the argument 'input1'.
// 04: Selecting Other Buttons

// Repeat the above two steps for two more buttons:

// Replace 'btn1' with 'btn2' and 'btn3'.
// Update the 'setFocus' argument to 'input2' and 'input3'.
// Rename the variable 'btnOne' to 'btnTwo' and 'btnThree' and also update the event listeners accordingly.
// 05: setFocus Function

// Define a 'setFocus' function that takes a parameter (elementId).
// 06: Selecting Target Element

// Inside the setFocus function:

// Use 'document.getElementById' with the parameter of the function (elementId).
// Assign this selection to a constant variable 'targetElement'.
// 07: Check if targetElement is truthy

// Below targetElement variable:

// Use the if statement to check if the 'targetElement' variable is truthy by using:
// if (targetElement) {
// If true: Apply the focus() method on 'targetElement' to shift focus to it.
// If not true: Log an error message 'Element not found' to the console.

// Button and click event for Input 1
let btnOne = document.querySelector("#btn1");
btnOne.addEventListener("click", () => {
  setFocus("input1");
})
// Button and click event for Input 2
let btnTwo = document.querySelector("#btn2");
btnTwo.addEventListener("click", () => {
  setFocus("input2");
})

// Button and click event for Input 3
let btnThree = document.querySelector("#btn3");
btnThree.addEventListener("click", () => {
  setFocus("input3");
})
// setFocus funtion
function setFocus(elementID) {

  // Target element
  let targetElement = document.getElementById(elementID);
  // If else statement
  if (targetElement) {
    // Apply focus() method
    targetElement.focus();
  } else {
    // Log an error message
    console.log("Element not found!");
  }
}
