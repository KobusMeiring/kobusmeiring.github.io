


let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName(){
    let myName = prompt('what is your name bro.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'surelynotthis' + myName;
}


if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'surelynotthis' + myName;
}

myButton.onclick = function() {
    setUserName();
  }