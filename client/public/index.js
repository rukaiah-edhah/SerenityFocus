// pop up effect

let popup = document.getElementById("about")

function openPopup(){
	closeSignin();
	popup.classList.add("open-popup");
}

function closePopup(){
	popup.classList.remove("open-popup");
}

let signIn = document.getElementById("sign_in")

function openSignin(){
	closePopup();
	signIn.classList.add("open-sign_in")
}

function closeSignin(){
	signIn.classList.remove("open-sign_in")
}
