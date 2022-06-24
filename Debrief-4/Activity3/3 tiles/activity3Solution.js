//Your code goes here

// 1. Click the button to display your name
let btnName = document.querySelector("#btnName");
let myName = document.querySelector("#myName");

btnName.addEventListener("click", displayName);

function displayName() {
    //alert("here");
    let msg = "Laize";
    myName.value = msg;
}



// 2. Traffic Lights

let btnStop = document.querySelector("#btnStop");
// let btnReady = document.querySelector("#btnReady");
// let btnGo = document.querySelector("#btnGo");
let stopDiv = document.querySelector("#stopDiv");
// let readyDiv = document.querySelector("#readyDiv");
// let goDiv = document.querySelector("#goDiv");

btnStop.addEventListener("click", changeLightsRed);
btnReady.addEventListener("click", changeLightsYellow);
btnGo.addEventListener("click", changeLightsGreen);

function changeLightsRed() {
    stopDiv.style.backgroundColor = "red";
    readyDiv.style.backgroundColor = "black";
    goDiv.style.backgroundColor = "black";
}

function changeLightsYellow() {
    readyDiv.style.backgroundColor = "yellow";
    stopDiv.style.backgroundColor = "black";
    goDiv.style.backgroundColor = "black";
}

function changeLightsGreen() {
    goDiv.style.backgroundColor = "green";
    readyDiv.style.backgroundColor = "black";
    stopDiv.style.backgroundColor = "black";
}

// 3.create a list of hobbies
let hobbyBtn = document.querySelector("#btnHobbies");
hobbyBtn.addEventListener("click", generateList);
function generateList() {
    let hobbiesList = document.querySelector("#hobbies > ul");
    //console.log(hobbiesList);
    for (i = 1; i <= 3; i++) {
        let hobbies = prompt("What are your hobbies");
        let li = document.createElement("li");
        //console.log(hobbies);
        li.innerHTML = hobbies;
        hobbiesList.appendChild(li);
    }
}

//4. validate the box [length should be more than 5 characters]
let btnSub2 = document.querySelector("#btnSub2");
let myName2 = document.querySelector("#myName2");
let errMsg = document.querySelector("#errMsg");
btnSub2.addEventListener("click", validateBox);
function validateBox() {
    if (myName2.value == "" && myName2.value.length < 8) {
        errMsg.innerHTML = "Length should be more than 8";
        document.querySelector("#errMsg").style.color = "#ff0000";
        myName2.focus();
    } else {
        errMsg.innerHTML = "All good ";
        document.querySelector("#errMsg").style.color = "#eeeeee";
    }
}


