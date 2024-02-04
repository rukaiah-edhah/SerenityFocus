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
const initialTotalSeconds = 0; //fixed the one sec error

function addFive() {
	if (totalSeconds < 3600) {  // 60 minutes in seconds
		totalSeconds += 10; // 5 minutes in seconds// change this later to 300
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
	if (countdownInterval) {
		clearInterval(countdownInterval);
		countdownInterval = null;
		paused = true;
	} else {
		if (secondsRemaining > 0) {
			countdownInterval = setInterval(updateCountdown, 1000);
			paused = false;
		}
	}
}

function resetCountdown() {
	clearInterval(countdownInterval);
	countdownInterval = null;
	totalSeconds = 0;
	paused = false;
	updateDisplay();
	resetProgressRing();
}

function updateCountdown() {
	if (!paused && secondsRemaining > 0) {
		const minutes = Math.floor(secondsRemaining / 60);
		const seconds = secondsRemaining % 60;

		minutesElement.textContent = formatTime(minutes);
		secondsElement.textContent = formatTime(seconds);
		
		updateProgressRing();

		secondsRemaining--;

	} else {
		minutesElement.textContent = '00';
		secondsElement.textContent = '00';
		clearInterval(countdownInterval);
		countdownInterval = null;
		updateProgressRing();
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

function updateProgressRing() {
	const currentTimer = secondsRemaining;
	const angle = ((totalSeconds - currentTimer) / totalSeconds) * 360;

	if (angle >= 180) {
		semicircles[0].style.transform = 'rotate(180deg)';
		semicircles[1].style.transform = `rotate(${angle - 180}deg)`;
	} else {
		semicircles[0].style.transform = `rotate(${angle}deg)`;
		semicircles[1].style.transform = 'rotate(0deg)';
	}
}