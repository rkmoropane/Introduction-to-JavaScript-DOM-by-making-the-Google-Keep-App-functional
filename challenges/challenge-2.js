
// Button selection

// Use 'document.querySelector' method to select the HTML button with the ID (#toggleButton).
// Store the selected button in a constant variable named 'toggleButton'.
// 03: Event listener

// Use 'addEventListener' method on 'toggleButton'.
// This method should be called when the 'toggleButton' is clicked.
// 04: Current background color

// Inside the event listener:

// Get the current background color of the body by using:
// window.getComputedStyle(document.body).backgroundColor;
// Store the selected background color in a constant variable named 'currentColor'.
// 05: Toggle between red and green

// Below currentColor variable:

// Declare another variable using 'let' with the name of 'newColor'.
// Note: Don't use an equal sign simply declare it.
// Use an if statement to check if the 'currentColor' is equal to 'rgb(255, 0, 0)'.
// If true, set 'newColor' to 'rgb(0, 255, 0)' otherwise, set it to 'rgb(255, 0, 0).
// 06: Set the new background color

// Below if statement:

// Finally, set the background color of the body:
// document.body.style.backgroundColor
// is equal to 'newColor'.
// Select the button
let toggleButton = document.querySelector("#toggleButton");
// Event listener
toggleButton.addEventListener("click", function () {

  // Current background color of the body
  let currentColor = window.getComputedStyle(document.body).backgroundColor;
  // Toggle between red and green
  let newColor;
  if (currentColor === "rgb(255, 0, 0)"){
    console.log(currentColor);
    newColor = "rgb(0, 255, 0)";
  } else {
    newColor = "rgb(255, 0, 0)";
  }
  // New background color
  document.body.style.backgroundColor = newColor;
});
