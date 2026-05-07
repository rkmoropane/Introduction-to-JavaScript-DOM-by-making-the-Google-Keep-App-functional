# Introduction to Javascript DOM by making the Google Keep App Functional.

## Whats cooking?
- DOM
- Getting single and multiple HTML elements
- Creating HTML elements
- Modifying HTML elements
- Dynamically adding CSS styles
- Working with events
- Building the Google Keep Functionality

## Document Object Model

- All the HTML document as objects. A tree of nodes.
- Each element on the document are nodes, the text inside is known as text nodes.
- Dynamically add HTML

### DOM functions:
- querySelector() > Selects the first element in the document that matches a specified CSS selector
- addEventListeners() > A DOM function which listens for an event and take action you want to happen in the innerHTML document.
 > Takes two paramenters = type of event and action you want to happen as soon you pass through this 
 > https://www.w3schools.com/jsref/met_element_addeventlistener.asp

- Event > A specific occurrence that happens in the browser, like a button click.

- Focus() > it is an input provided function that sets the focus on a specified HTML element, such as an input field, making it active for user input.

- event.preventDefault() > function of the event that cancels the default behavior of an event.

- You can directly add events on the HTML element,
 > ` <div class="note" id=${note.id} onclick="alert('hi')">`

- Mouseover event > is an event that gets triggered when the mouse pointer enters an element.


- LocalStorage in Javascript: Storing data locally in the user's browser. Tutorials on [localStorage](https://www.w3schools.com/Jsref/prop_win_localstorage.asp)

## Questions and Answers:

- **In web development, what does DOM stand for?**
 > Document Object Model

- **What is the role of the DOM in web development?**
 > It provides a way to access and manipulate the structure and content of a web page

- **Which programming language is commonly used to manipulate the DOM?**
 > JavaScript

- **How can you link an external JavaScript file to an HTML document?**
 > Using the `<script>` element with the src attribute

- **Where is the recommended location to include the `<script>` element for linking JavaScript in an HTML file?**
 > At the end of the `<body>` section

- **What does the alert() function do in JavaScript?**
 > Displays a dialog box with a message and an OK button

- **What does the `querySelector()` method in JavaScript do?**
 > Selects the first element in the document that matches a specified CSS selector

- **How do you select an element with the class name "example" using querySelector()?**
 > `document.querySelector('.example')`

- **Which of the following is true about the `querySelector()` method?**
 > It can select elements using CSS-like selectors

- **What is the purpose of the addEventListener() method in JavaScript?**
 > To attach an event handler to an HTML element

- **Which parameter(s) does the addEventListener() method typically take?**
 > Event type and event handler function

- **When does the event handler function specified in addEventListener() get executed?**
 > When the specified event type occurs on the HTML element

- **In JavaScript, what is an "event"?**
 > A specific occurrence that happens in the browser, like a button click

- **In the context of addEventListener(), what is an "event" in JavaScript?**
 > A specific occurrence or happening, like a button click or keypress, that can trigger an action

- **What is the purpose of event.target in an event handler?**
 > It refers to the HTML element on which the event was triggered

- **What does the contains() function in JavaScript do?**
 > Checks if an HTML element contains another specified HTML element and returns a boolean indicating the result

- **In the context of the DOM, which element is being checked when using the contains() function?**
 > The parent element

- **What does the contains() function return if the specified element is a descendant of the calling element?**
 > true

- **What does the focus() function in JavaScript do?**
 > It sets the focus on a specified HTML element, such as an input field, making it active for user input

- **How can you use the focus() function on an HTML element with the ID "example"?**
 > `document.getElementById('example').focus();`
 
- **What is the typical use case for the focus() function in web development?**
 > When you want to automatically place the cursor in a text input field for user input

- **What does "CUID" stand for in the context of a JavaScript library?**
 > Collision-resistant Unique Identifier

- **Which of the following statements is true about CUIDs in JavaScript?**
 > CUIDs guarantee absolute uniqueness across all systems

- **How are CUIDs typically generated in a JavaScript environment?**
 > Using a combination of timestamp and random numbers

- **In a JavaScript class method, what does the this keyword refer to?**
 > The instance of the class that invoked the method

- **In a JavaScript class, what is the purpose of using input.value?**
 > It is used to get or set the value of an input element

- **What does the != selector represent in JavaScript?**
 > It represents the "not equal to" comparison operator in JavaScript

- **In JavaScript, what does the join() function do when called on an array?**
 > It concatenates the elements of an array into a string, using a specified separator

- **What does the map() function do in JavaScript?**
 > It creates a new array with the results of calling a provided function on every element in the calling array

- **What does the innerHTML property do in JavaScript?**
 > It sets or gets the HTML content within an HTML element

- **In CSS, what is the purpose of using padding?**
 > It adds space between the element's content and its border

- **Which of the following statements is true regarding the flex-wrap property in CSS?**
 > flex-wrap controls whether the flex container should wrap its items onto multiple lines

- **Which CSS property is used to set padding for all sides of an element simultaneously?**
 > padding

- **In JavaScript, what does the preventDefault() function do?**
 > It cancels the default behavior of an event

- **Which event object method is used to prevent the default behavior of an event in JavaScript?**
 > `preventDefault()`

- **When should you use the preventDefault() function in JavaScript?**
 > To prevent the default behavior of an event

- **What is the difference between display: none and visibility: hidden in CSS?**
 > display: none completely hides the element, removing it from the layout, while visibility: hidden hides the element but keeps its space in the layout

- **Which of the following CSS properties completely removes an element from the layout and does not leave any empty space?**
 > display: none

- **In CSS, what is the purpose of the :hover pseudo-class?**
 > It applies styles to an element when it is being hovered over

- **In JavaScript, what does the mouseover event do?**
 > It is triggered when the mouse pointer enters an element

- **In JavaScript, what does the mouseout event do?**
 > It is triggered when the mouse pointer leaves an element

- **In JavaScript, how can you change the visibility of an element to "hidden" using the .style.visibility property?**
 > `element.style.visibility = "hidden";`

- **Which of the following represents a CSS descendant selector?**
 > white space

- **To style all `<p>` elements that are descendants of a `<div>` element, which CSS rule would you use?**
 > `div p { ... }`

- **In JavaScript, what does the closest() function do?**
 > It returns the nearest parent element that matches a specified CSS selector

- **Which of the following represents a correct usage of the closest() function in JavaScript?**
 > `element.closest('.class-name')`

- **In JavaScript, what does the classList.add() method do?**
 > It adds a new class to an element

- **In JavaScript, what does the classList.remove() method do?**
 > It removes a class from an element

- **In JavaScript, what does .children[1] refer to when used with an HTML element?**
 > It refers to the second child element of the parent element

- **What does the id attribute in HTML do?**
 > It provides a unique identifier for an HTML element

- **When passing an object as an argument to a function in programming, what is being passed?**
 > The object's reference/address

- **In object-oriented programming, what is the advantage of passing an object as an argument to a function?**
 > It allows for better code organization and readability

- **What happens if an object is modified within a function that takes the object as an argument?**
 > The modifications affect the original object

- **Which method is used to call the closest() function on a DOM element?**
 > `.closest()`

- **What type of selector can be passed to the closest() function?**
 > CSS selector

- **In JavaScript, what is the purpose of the `classList.add()` method?**
 > Adds one or more classes to an element

- **Which of the following is the correct syntax for using classList.add() to add a class "active" to an element with ID "myElement" in JavaScript?**
 > `document.getElementById('myElement').classList.add('active');`

- **Which method is used to remove a class from an HTML element in JavaScript?**
 > `classList.remove()`

- **In JavaScript, what is localStorage used for?**
 > Storing data locally in the user's browser

- **Which method is used to store data in localStorage in JavaScript?**
 > `.setItem()`

- **Which method is used to retrieve data from localStorage in JavaScript?**
 > `.getItem()`

- **What is the correct syntax to store a value "John" with the key "username" in localStorage using .setItem()?**
 > `localStorage.setItem('username', 'John');`

- **How do you retrieve a value from localStorage using JavaScript?**
 > `.getItem()`

- **What is the correct syntax to retrieve the value associated with the key "username" from localStorage using .getItem()?**
 > `localStorage.getItem('username');`