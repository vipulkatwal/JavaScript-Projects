let timer; // Variable to hold the timer
let isRunning = false; // Flag to track if the stopwatch is running
let seconds = 0; // Seconds counter
let minutes = 0; // Minutes counter
let hours = 0; // Hours counter

// Function to start or stop the stopwatch
function startStop() {
	if (isRunning) {
		clearInterval(timer); // Stop the timer
		document.getElementById("startStopBtn").textContent = "Start"; // Change button text to "Start"
		isRunning = false;
	} else {
		timer = setInterval(updateDisplay, 1000); // Start the timer
		document.getElementById("startStopBtn").textContent = "Stop"; // Change button text to "Stop"
		isRunning = true;
	}
}

// Function to update the stopwatch display
function updateDisplay() {
	seconds++; // Increment seconds
	if (seconds >= 60) {
		seconds = 0;
		minutes++; // Increment minutes
		if (minutes >= 60) {
			minutes = 0;
			hours++; // Increment hours
		}
	}
	let displayString = pad(hours) + ":" + pad(minutes) + ":" + pad(seconds); // Format display string
	document.querySelector(".display").textContent = displayString; // Update display
}

// Function to reset the stopwatch
function reset() {
	clearInterval(timer); // Stop the timer
	document.querySelector(".display").textContent = "00:00:00"; // Reset display
	document.getElementById("startStopBtn").textContent = "Start"; // Change button text to "Start"
	isRunning = false;
	seconds = 0;
	minutes = 0;
	hours = 0;
}

// Function to pause the stopwatch
function pause() {
	clearInterval(timer); // Stop the timer
	document.getElementById("startStopBtn").textContent = "Start"; // Change button text to "Start"
	isRunning = false;
}

// Function to pad single digit numbers with leading zeros
function pad(number) {
	return number < 10 ? "0" + number : number;
}
