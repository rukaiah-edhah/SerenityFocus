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
let minutesElement = document.getElementById('minutes');
let secondsElement = document.getElementById('seconds');
let totalSeconds = 0;
let secondsRemaining;
let countdownInterval;
let paused = false;

function addFive() {
	if (totalSeconds < 3600) {  // 60 minutes in seconds
		totalSeconds += 300; // 5 minutes in seconds
		updateDisplay();
	}
}

function subFive() {
	if (totalSeconds >= 300) {  // 5 minutes in seconds
		totalSeconds -= 300; // 5 minutes in seconds
		updateDisplay();
	}
}

function startCountdown() {
	if (!countdownInterval && totalSeconds > 0) {
		secondsRemaining = totalSeconds;
		countdownInterval = setInterval(updateCountdown, 1000);
	}
	paused = false;
}

function pauseCountdown() {
	clearInterval(countdownInterval);
	countdownInterval = null;
	paused = true;
}

function resetCountdown() {
	clearInterval(countdownInterval);
	countdownInterval = null;
	totalSeconds = 0;
	paused = false;
	updateDisplay();
}

function updateCountdown() {
	if (!paused && secondsRemaining > 0) {
		const minutes = Math.floor(secondsRemaining / 60);
		const seconds = secondsRemaining % 60;

		minutesElement.textContent = formatTime(minutes);
		secondsElement.textContent = formatTime(seconds);
		secondsRemaining--;
	} else {
		clearInterval(countdownInterval);
		countdownInterval = null;
	}
}

function updateDisplay() {
	const minutes = Math.floor(totalSeconds / 60);
	const seconds = totalSeconds % 60;

	minutesElement.textContent = formatTime(minutes);
	secondsElement.textContent = formatTime(seconds);
}

function formatTime(time) {
	return time < 10 ? `0${time}` : time;
}

//Circle
const semicircles = document.querySelectorAll('.semicircle');

function countDownTimer() {
	const currentTimer = 10;
	const angle = (currentTimer) * 360;

	if(angle > 180) {
		semicircles[2].style.display = 'none';
		semicircles[0].style.transform = 'rotate(180deg)';
		semicircles[1].style.transform = `rotate(${angle}deg)`;
	} else {
		semicircles[2].style.display = 'black';
		semicircles[0].style.transform = `rotate(${angle}deg)`;
		semicircles[1].style.transform = `rotate(${angle}deg)`;
	}
}