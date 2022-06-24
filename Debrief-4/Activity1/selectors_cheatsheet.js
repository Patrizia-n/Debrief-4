

//QUERY SELECTORS

document.querySelector('.my-class-name'); // returns first instance of a class, needs dot before class name
document.querySelector('#id-of-element'); // returns first instance of a id, needs 



//GET ELEMENT 
// getElementById
document.getElementById('id-of-element-goes-here'); // returns entire DOM node and whatever is included inside

// getElementByClassName
document.getElementsByClassName('class-name-here'); // returns an array of all dom nodes with that class
document.getElementsByClassName('class-name-here')[0]; // returns the first element with the class name 'class-name-here
// the weird [0] thing says to grab the first thing in the array. Don't worry for now!



// basic text and style manipulation
const hello = document.getElementById('hello');
hello.textContent = "good afternoon"; // applies text to an element
hello.style.backgroundColor = "yellow" // applies a style to the page, must access style property, then CSS property written in camelCase
hello.classList.add('blue'); // adds the class 'blue' to an element
hello.classList.remove('time-of-day'); // removes the class 'time-of-day' from an element
hello.classList.toggle('class-name'); // toggles a class on and off of an element

const newParagraph = document.createElement("p") // creates an HTML element of the given tag type
newParagraph.innerText = "hi im just a child"
document.body.appendChild(newParagraph); // adds a child HTML element to the end of the body of the page
const greatDiv = document.createElement('div') // creates a div 
greatDiv.style.border = "2px solid gold";
greatDiv.innerHTML = '<p>something great goes here</p>'; // sets the inner content of the div
document.body.appendChild(greatDiv); // adds the div to the end of the body of the page
const greatChild = document.createElement("p"); // creates a p tag
greatChild.id = "child-element";
greatChild.innerText = "I'm inside the greatest div of all"; // sets the text of the p tag
greatDiv.appendChild(greatChild); // adds the p tag to the previously created div

// removeChild()
const getTheKid = document.getElementById('child-element')
// comment this next line in and out to see the element get removed/not removed!
// greatDiv.removeChild(getTheKid);

// Attribute changing
hello.setAttribute('class', 'great-class-name'); // sets an attribute 'great-class-name' on an element
hello.removeAttribute('id', 'what-an-id'); // removes 'what-an-id' id from element

// console
console.log() // outputs a single line of text to console
console.table() // outputs a table of data into the console

