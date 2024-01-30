// pop up effect

let popup = document.getElementById("about")

function openPopup() {
    closeSignUp();
    closeSignIn();
    popup.classList.add("open-popup");
}

function closePopup() {
    popup.classList.remove("open-popup");
}

let signUp = document.getElementById("sign_up");
let signIn = document.getElementById("sign_in");

function openSignUp() {
    closePopup();
    closeSignIn();  
    signUp.classList.add("open-sign_up");
}

function closeSignUp() {
    signUp.classList.remove("open-sign_up");
}

function openSignIn() {
    closePopup();
    closeSignUp();  
    signIn.classList.add("open-sign_in");  
}

function closeSignIn() {
    signIn.classList.remove("open-sign_in");  
}

function goBack() {
    closeSignUp();  
    openSignIn();  
}

//Themes

const toggleButton = document.getElementById('toggleButton');
toggleButton.addEventListener('click', toggleTheme);

function toggleTheme() {
	const body = document.body;
    body.classList.toggle('theme1');
    body.classList.toggle('theme2');
		body.classList.toggle('theme3');
}



// Timer

const minutes = document.querySelector('.minutes'); //interface
const secounds = document.querySelector('.seconds');

const start = document.querySelector('.btn-start'); //controls
const add = document.getElementById('btn-plus');
const subt = document.getElementById('btn-subt');

