// 1. Define two constants:

// 'taskInput': Assign the reference to the HTML element with the ID "taskInput".
// 'taskList': Assign the reference to the HTML element with the ID "taskList".
// 2. Implement a function named 'addTask':

// Get the trimmed value of the 'taskInput' variable by using 'trim()'.
// Check if the trimmed value is not an empty string.
// If the value is not empty:
// Create a new list item ('<li>').
// Populate the list item with an input checkbox and the task text.
// Append the list item to the task list ('<ul>').
// 3. Add an event listener to the input field:

// Listen for the "keypress" event.
// When the Enter key is pressed, call the 'addTask' function.

// JavaScript Code:

// 1. Define two variables: 
let taskInput = document.getElementById("taskInput");
let taskList = document.getElementById("taskList");
// 2. Implement a function named 'addTask':
function addTask() {
    let trimmedValue = taskInput.value.trim();
    let listItems = taskList.querySelectorAll("li")
    let exists = false;
    listItems.forEach((item) => {
        if (item.textContent.trim() === trimmedValue){
            exists = true;
            console.log(item.textContent, "Already Exists.");
        }
    })
    if (trimmedValue != "" && !exists){
        let li = document.createElement("li");

        li.innerHTML = `<input type="checkbox">${trimmedValue}`;

        taskList.appendChild(li);

        taskInput.value = "";
    }
}
// 3. Add an event listener to the input field:
taskInput.addEventListener("keypress", (event) => {
    if (event.key == "Enter"){
        addTask();
    }
})
