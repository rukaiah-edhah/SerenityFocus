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
    // closePopup();
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

function resetProgressRing() {
	semicircles[2].style.display = 'block';
	semicircles[0].style.transform = 'rotate(0deg)';
	semicircles[1].style.transform = 'rotate(0deg)';
}

//tasks
document.addEventListener('DOMContentLoaded', function () {
	const addButton = document.getElementById('add');
	const inputField = document.querySelector('.tasks input[type="text"]');
	const taskContainer = document.querySelector('.tasks .field-group');

	function addTask() {
		const taskText = inputField.value.trim();
		
		if (taskText !== "") {
			// Create new task element
			const taskElement = document.createElement('div');
			taskElement.classList.add('field-group');
			
			// Create checkbox and label
			const checkbox = document.createElement('input');
			checkbox.type = 'checkbox';
			checkbox.name = 'checkbox';
			checkbox.className = 'checkbox-field';
			
			const label = document.createElement('label');
			label.className = 'checkbox-label';
			label.textContent = taskText;
			
			// Append checkbox and label to the task element
			taskElement.appendChild(checkbox);
			taskElement.appendChild(label);
			
			// Append the task element to the task container
			taskContainer.appendChild(taskElement);

			// Clear the input field
			inputField.value = '';
		}
	}

	addButton.addEventListener('click', addTask);

	inputField.addEventListener('keyup', function(event) {
		// Check if the Enter key is pressed
		if (event.key === 'Enter') {
			addTask();
		}
	});
});

// sign up form submission 
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('signup-form').addEventListener('submit', function(event) {
        event.preventDefault();

        const formData = {
            firstName: document.getElementById('signup_first_name').value,
            lastName: document.getElementById('signup_last_name').value,
            username: document.getElementById('signup_username').value,
            email: document.getElementById('signup_email').value,
            password: document.getElementById('signup_password').value,
        };

        fetch('/api/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        })
        .then(response => {
            if(response.ok) {
                return response.json();
            }
            throw new Error('Signup failed');
        })
        .then(data => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    });
}); 