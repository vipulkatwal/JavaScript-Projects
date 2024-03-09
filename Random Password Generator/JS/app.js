// Get the HTML element representing the password input field
const passwordBox = document.getElementById("password");

// Set the desired length for the generated password
const length = 12;

// Define character sets for different types of characters
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "@#$%^&*()_=-{}[]/<>|";

// Combine all character sets into a single string
const allChar = upperCase + lowerCase + number + symbol;

// Function to generate a random password
function createPassword() {
	// Initialize the password with one character from each character set
	let password = "";
	password += upperCase[Math.floor(Math.random() * upperCase.length)];
	password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
	password += number[Math.floor(Math.random() * number.length)];
	password += symbol[Math.floor(Math.random() * symbol.length)];

	// Continue adding random characters until the desired length is reached
	while (length > password.length) {
		password += allChar[Math.floor(Math.random() * allChar.length)];
	}

	// Set the generated password as the value of the password input field
	passwordBox.value = password;
}

// Function to copy the generated password to the clipboard
function copyPassword() {
	// Select the text within the password input field
	passwordBox.select();
	// Execute the copy command to copy the selected text to the clipboard
	document.execCommand("copy");
}
