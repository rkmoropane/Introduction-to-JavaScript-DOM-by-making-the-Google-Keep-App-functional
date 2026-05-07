// 01: Document Ready Event

// Use 'addEventListener' method to ensure that the JavaScript code runs after the DOM has fully loaded by using the 'DOMContentLoaded' event.
// 02: Get HTML Elements

// Retrieve the 'form' element by using the ID 'subscriptionForm'.
// Retrieve the 'email' input element using the ID 'email'.
// Retrieve the 'hoverMessage' div by using the ID 'hoverMessage'.
// 03: Submit Event Listener

// Add a 'submit' event listener to the 'subscriptionForm' with the parameter of 'event'.
// Inside the Submit Event Listener

// Use event.preventDefault() to prevent the default form submission behavior.
// Declare a variable named 'userEmail' and assign the value of email (email.value).
// Set the text content of 'hoverMessage' is equal to (`Thanks for subscribing, ${userEmail}!`).
// Set the background color of 'hoverMessage' is equal to 'rgb(76, 175, 80)'.
// Set the display property of 'hoverMessage' div to 'block'.
// 04: Mouseover Event Listener

// Add a 'mouseover' event listener to the "hoverMessage" div.
// When the mouse is over the "hoverMessage" div, execute a function that changes its background color to 'rgb(221, 221, 221)'.
// 05: Mouseout Event Listener

// Add a 'mouseout' event listener to the "hoverMessage" div.
// When the mouse leaves the "hoverMessage" div, execute a function that changes its background color to 'rgb(240, 240, 240)'.
// 06: Reset Event Listener

// Add a reset event listener to the subscription form.
// When the form is reset, execute a function that hides the "hoverMessage" div by setting its display property to 'none'.

// JavaScript Code 

// JavaScript Code 

document.addEventListener("DOMContentLoaded", function () {

  // 02: Get HTML Elements
  const subscriptionForm = document.getElementById("subscriptionForm");
  const email = document.getElementById("email");
  const hoverMessage = document.getElementById("hoverMessage");

  // 03: Submit Event Listener
  subscriptionForm.addEventListener("submit", function (event) {
    event.preventDefault();

    // Declare userEmail
    const userEmail = email.value;

    // Set text content
    hoverMessage.textContent = `Thanks for subscribing, ${userEmail}!`;

    // Set background color
    hoverMessage.style.backgroundColor = "rgb(76, 175, 80)";

    // Set display to block
    hoverMessage.style.display = "block";
  });

  // 04: Mouseover Event Listener
  hoverMessage.addEventListener("mouseover", function () {
    hoverMessage.style.backgroundColor = "rgb(221, 221, 221)";
  });

  // 05: Mouseout Event Listener
  hoverMessage.addEventListener("mouseout", function () {
    hoverMessage.style.backgroundColor = "rgb(240, 240, 240)";
  });

  // 06: Reset Event Listener
  subscriptionForm.addEventListener("reset", function () {
    hoverMessage.style.display = "none";
  });

});
