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

- Event > A specific occurrence that happens in the browser, like a button click

- Focus() > it is an input provided function that sets the focus on a specified HTML element, such as an input field, making it active for user input


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

- **