let btnFirstName = document.querySelector("#btnFirstName"); // grab the element
let firstName = document.querySelector("#firstName");
let errMsg = document.querySelector("#errMsg");


//console.log(btnFirstName);


//Add eventListener
btnFirstName.addEventListener("click", displaySecond);

//define the function
function displaySecond() {
    // write the function
    if (firstName.value === "") {
        errMsg.innerHTML = "Please enter your name in the box";
        // document.querySelector("#errMsg").style.color = "blue";
    } else {
        document.querySelector("#smileyDiv").style.display = "block";
        document.querySelector("#welcomeText").innerHTML = `Welcome! How do you feel today?`;
    }
}


///----------------
let sad = document.querySelector("#sad");
let displayMood = document.querySelector("#displayMood");
let displayMessage = document.querySelector("#displayMessage");

sad.addEventListener("mouseover", displayAlt);

function displayAlt() {
    displayMood.innerHTML = sad.getAttribute("alt");
    displayMood.style.color = "red";
}

// -----
let btnMessage = document.querySelector("#btnMessage");
btnMessage.addEventListener("click", displayLastMessage);
function displayLastMessage() {
    displayMessage.style.display = "block";
    displayMessage.innerHTML = 'You need to take a vacation';
}