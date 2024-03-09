// Get the reference to the element with the id "toastBox"
let toastBox = document.getElementById("toastBox");

// Define messages for success, error, and invalid scenarios
let successMsg =
	'<i class="fa-solid fa-circle-check"></i> Successfully submitted.';
let errorMsg = '<i class="fa-solid fa-circle-xmark"></i> Please fix the error!';
let invalidMsg =
	'<i class="fa-solid fa-circle-exclamation"></i> Invalid input, check again!';

// Function to display toast messages
function showToast(msg) {
	// Create a new div element for the toast
	let toast = document.createElement("div");

	// Add the "toast" class to the newly created div
	toast.classList.add("toast");

	// Set the inner HTML content of the toast to the provided message
	toast.innerHTML = msg;

	// Append the toast to the element with the id "toastBox"
	toastBox.appendChild(toast);

	// Check if the message includes "error" and add the "error" class accordingly
	if (msg.includes("error")) {
		toast.classList.add("error");
	}

	// Check if the message includes "Invalid" and add the "invalid" class accordingly
	if (msg.includes("Invalid")) {
		toast.classList.add("invalid");
	}

	// Set a timeout to remove the toast after 6000 milliseconds (6 seconds).
	setTimeout(() => {
		toast.remove();
	}, 6000);
}
