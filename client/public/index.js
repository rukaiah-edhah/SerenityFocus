// pop up effect

let popup = document.getElementById("about")

function openPopup() {
    closeSignIn();
    popup.classList.add("open-popup");
}

function closePopup() {
    popup.classList.remove("open-popup");
}

let signIn = document.getElementById("sign_in");


function openSignIn() {
    closePopup();
    signIn.classList.add("open-sign_in");  
}

function closeSignIn() {
	signIn.classList.remove("open-sign_in");  
}

function goBack() {
    openSignIn();  
}

//Themes

const toggleButton = document.getElementById('toggleButton');
toggleButton.addEventListener('click', toggleTheme);

function toggleTheme() {
	const body = document.body;
    body.classList.toggle('theme1');
    body.classList.toggle('theme2');
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
	if (!paused && !countdownInterval && totalSeconds < 3600) {  // 60 minutes in seconds
		totalSeconds += 10; // 5 minutes in seconds// change this later to 300
		updateDisplay();
	}
}

function subFive() {
	if (!paused && !countdownInterval && totalSeconds >= 300) {  // 5 minutes in seconds
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

const timerLoop = setInterval(updateProgressRing);
updateProgressRing();

function updateProgressRing() {
	const currentTimer = secondsRemaining;
	const angle = (currentTimer / totalSeconds) * 360;

	if (angle > 180) {
		semicircles[2].style.display = 'none';
		semicircles[0].style.transform = 'rotate(180deg)';
		semicircles[1].style.transform = `rotate(${angle}deg)`;
	} else {
		semicircles[2].style.display = 'block';
		semicircles[0].style.transform = `rotate(${angle}deg)`;
		semicircles[1].style.transform = `rotate(${angle}deg)`;
	}

	//end
	if(currentTimer < 1) {
		clearInterval(timerLoop);
		semicircles[0].style.display = 'none';
		semicircles[1].style.display = 'none';
		semicircles[2].style.display = 'none';
	}
}



//tasks
document.addEventListener('DOMContentLoaded', function () {
	const addButton = document.getElementById('add');
	const taskInput = document.getElementById('taskInput');
	const taskContainer = document.querySelector('.tasks .field-group');
	const existingCheckbox = document.querySelector('.tasks .field-group .checkbox-field');

	taskContainer.innerHTML = '';

	function addTask() {
			const taskText = taskInput.textContent.trim();
			
			if (taskText !== "") {
					const taskElement = document.createElement('div');
					taskElement.classList.add('field-group');
					
					// Create checkbox and label
					const checkbox = document.createElement('input');
					checkbox.type = 'checkbox';
					checkbox.name = existingCheckbox.name; 
					checkbox.id = 'test' + (taskContainer.children.length - 1); // Increment the ID to ensure uniqueness
					checkbox.className = 'checkbox-field';
					
					const label = document.createElement('label');
					label.className = 'checkbox-label';
					label.textContent = taskText;
					label.htmlFor = checkbox.id; // Use the checkbox's ID for the label's htmlFor attribute
					
					// Append checkbox and label to the task element
					taskElement.appendChild(checkbox);
					taskElement.appendChild(label);
					
					// Append the task element to the task container
					taskContainer.appendChild(taskElement);

					// Clear the input field
					taskInput.textContent = '';
			}
	}

	addButton.addEventListener('click', addTask);

	taskInput.addEventListener('keypress', function(event) {
			// Check if the Enter key is pressed
			if (event.key === 'Enter') {
					event.preventDefault(); // Prevent line break
					addTask();
			}
	});
});