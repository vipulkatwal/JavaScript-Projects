// Get the HTML elements using their IDs
let imgBox = document.getElementById("imgBox"); // NOTE: The element ID is not present in the provided HTML code
let qrImage = document.getElementById("qrImage");
let qrText = document.getElementById("qrText");

// Function to generate a QR Code
function generateQR() {
	// Check if the input field has a value
	if (qrText.value.length > 0) {
		// Set the source of the QR Code image using the QR Code API
		qrImage.src =
			"https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
			qrText.value;

		// Add the "show-img" class to the image container to display the QR Code
		imgBox.classList.add("show-img");
	} else {
		// If the input field is empty, add the "error" class to highlight the error
		qrText.classList.add("error");

		// Remove the "error" class after a delay (1 second in this case)
		setTimeout(() => {
			qrText.classList.remove("error");
		}, 1000);
	}
}
