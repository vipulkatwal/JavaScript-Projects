// Get references to HTML elements
let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrlIcon = document.getElementById("ctrlIcon");
let currentTimeDisplay = document.getElementById("currentTime");
let durationDisplay = document.getElementById("duration");

// Event listener for metadata loading
song.addEventListener("loadedmetadata", function () {
	// Set the maximum value for the progress bar to the total duration of the song
	progress.max = song.duration;
	// Initialize the progress value to the current time
	progress.value = song.currentTime;
	// Update the displayed duration
	durationDisplay.textContent = formatTime(song.duration);
});

// Function for play/pause toggle
function playPause() {
	if (ctrlIcon.classList.contains("fa-pause")) {
		// Pause the song and update the icon
		song.pause();
		ctrlIcon.classList.remove("fa-pause");
		ctrlIcon.classList.add("fa-play");
	} else {
		// Play the song and update the icon
		song.play();
		ctrlIcon.classList.add("fa-pause");
		ctrlIcon.classList.remove("fa-play");
	}
}

// Interval for updating progress and current time display
setInterval(() => {
	// Update the progress bar value
	progress.value = song.currentTime;
	// Update the displayed current time
	currentTimeDisplay.textContent = formatTime(song.currentTime);
}, 500);

// Event listener for progress bar input
progress.oninput = function () {
	// Set the current time of the song to the selected position
	song.currentTime = progress.value;
	// Update the displayed current time
	currentTimeDisplay.textContent = formatTime(song.currentTime);
};

// Function to format time in MM:SS format
function formatTime(time) {
	let minutes = Math.floor(time / 60);
	let seconds = Math.floor(time % 60);
	// Ensure that single-digit seconds are prefixed with a zero
	seconds = seconds < 10 ? "0" + seconds : seconds;
	return `${minutes}:${seconds}`;
}
