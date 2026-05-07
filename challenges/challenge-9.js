// 01: Document Ready Event

// Ensure the JavaScript code executes after the DOM fully loads with 'DOMContentLoaded' event listener.
// 02: Select Highlight Buttons

// Use 'document.querySelectorAll' to select all elements with the class "highlight-button".
// Store the selected buttons in the variable 'highlightButtons'.
// 03: Button Click Event Listeners

// For each button in 'highlightButtons', add a click event listener.
// When a button is clicked, execute a function.
// Inside the function

// Inside the function add the following operations:

// 04: Remove 'active' Class

// Use 'document.querySelectorAll' to select all list items within the navigation ('.navigation li').
// For each selected list item, execute a function using 'forEach' with the parameter of 'li'.
// Inside the function, use 'li.classList.remove('active')' to remove the "active" class and reset highlighting.
// 05: Find Closest List Item

// Use 'button.closest('li')' to find the closest ancestor list item of the clicked button.
// Store the closest list item in the variable 'closestListItem'.
// 06: Add 'active' Class

// Add the 'active' class to the 'closestListItem' by using the 'classList.add' method.
// This visually highlights the active link.
// JavaScript Code

// 1. Wait for the DOM to load:
document.addEventListener("DOMContentLoaded", () => {
  // 2. Select all elements with class 'highlight-button':
  const highlightButtons = document.querySelectorAll(".highlight-button");
  // 3. Add click event listener to each 'highlight-button':
  highlightButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      // a. Remove "active" class from all list items to reset highlighting:
      const navListItems = document.querySelectorAll(".navigation li");
      navListItems.forEach((li) => {
          li.classList.remove("acitve");
      });
      // 05: Find Closest List Item
      const closestListItem = button.closest("li");

      // 06: Add 'active' Class
      closestListItem.classList.add("active");

  })


  })
})