// 01: DOM Content Loaded

// Use 'addEventListener' with the 'DOMContentLoaded' event to ensure the DOM is fully loaded before applying JavaScript.
// 02: Resizable Element

// Use the 'getElementById' method to get the HTML element with the ID 'resizableElement'.
// Store the selected element in a constant variable named 'resizableElement'
// 03: Mouseover Event Listener

// Add a 'mouseover' event listener on 'resizableElement'.
// Inside the event listener, perform the following operations:
// a: Set Width

// Set the width of Set the width of 'resizableElement' is equal to '150px'.
// b: Set innerHTML

// Set the inner HTML of 'resizableElement' equal to '150px'
// 04: Mouseout Event Listener

// Again, add a 'mouseout' event listener on 'resizableElement'.
// Inside the event listener, perform the following operations:
// a: Set Width

// Set the width of Set the width of 'resizableElement' is equal to '100px'.
// b: Set innerHTML

// Set the inner HTML of 'resizableElement' equal to '100px'

// JavaScript Code:

// 1. Wait for the DOM to be fully loaded:
document.addEventListener("DOMContentLoaded", () =>{

  // 2. Get a resizable element using its id:
  const resizableElement = document.getElementById("resizableElement");
  // 3. Add mouseover event listener:
  resizableElement.addEventListener("mouseover", (event) => {
    // a. Increase the width:
    resizableElement.style.width = '150px';
    // b. Update the inner HTML:
    resizableElement.innerHTML = "150px";
  });

  // 4. Add mouseout event listener:
  resizableElement.addEventListener("mouseouot", (event) => {

      // a. Reset the width:
      resizableElement.style.width = '100px';

      // b. Update the inner HTML:
      resizableElement.innerHTML = "150px";
  });
})
