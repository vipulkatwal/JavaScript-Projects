// Variables to store error message elements
var nameError = document.getElementById("name-error");
var phoneError = document.getElementById("phone-error");
var emailError = document.getElementById("email-error");
var messageError = document.getElementById("message-error");
var submitError = document.getElementById("submit-error");

// Function to validate the name input
function validateName() {
	var name = document.getElementById("contact-name").value;
	var namePattern = /^[A-Za-z]*\s{1}[A-Za-z]*$/;

	// Check if the name is empty
	if (name.length == 0) {
		nameError.innerHTML = "Name is required";
		return false;
	}

	// Check if the name matches the specified pattern
	if (!name.match(namePattern)) {
		nameError.innerHTML = "Write full name";
		return false;
	}

	// If name is valid, display a success icon
	nameError.innerHTML = '<i class="fas fa-check-circle"></i>';
	return true;
}

// Function to validate the phone number input
function validatePhone() {
	var phone = document.getElementById("contact-phone").value;
	var phonePattern = /^[0-9]{10}$/;

	// Check if the phone number is empty
	if (phone.length == 0) {
		phoneError.innerHTML = "Phone no is required";
		return false;
	}

	// Check if the phone number has exactly 10 digits
	if (phone.length !== 10) {
		phoneError.innerHTML = "Phone no should be 10 digits";
		return false;
	}

	// Check if the phone number contains only digits
	if (!phone.match(phonePattern)) {
		phoneError.innerHTML = "only digits please";
		return false;
	}

	// If phone number is valid, display a success icon
	phoneError.innerHTML = '<i class="fas fa-check-circle"></i>';
	return true;
}

// Function to validate the email input
function validateEmail() {
	var email = document.getElementById("contact-email").value;
	var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

	// Check if the email is empty
	if (email.length == 0) {
		emailError.innerHTML = "Email is required";
		return false;
	}

	// Check if the email matches the specified pattern
	if (!email.match(emailPattern)) {
		emailError.innerHTML = "Invalid email format";
		return false;
	}

	// If email is valid, display a success icon
	emailError.innerHTML = '<i class="fas fa-check-circle"></i>';
	return true;
}

// Function to validate the message input
function validateMessage() {
	var messageInput = document.getElementById("contact-message").value;
	var wordCount = 25;
	var left = wordCount - messageInput.length;

	// Check if the message has exceeded the word limit
	if (left > 0) {
		messageError.innerHTML = left + `more characters required`;
		return false;
	}

	// If message is valid, display a success icon
	messageError.innerHTML = '<i class="fas fa-check-circle"></i>';
	return true;
}

// Function to validate the entire form before submission
function validateForm() {
	// Check if any of the validation functions return false
	if (
		!validateName() ||
		!validatePhone() ||
		validateEmail() ||
		validateMessage()
	) {
		// Display a submit error message
		submitError.style.display = "block";
		submitError.innerHTML = "please fix error to submit";

		// Hide the error message after 2 seconds
		setTimeout(function () {
			submitError.style.display = "none";
		}, 2000);

		// Prevent form submission
		return false;
	}
}
