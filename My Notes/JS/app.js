// Selecting elements from the DOM
const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");

// Retrieve notes from local storage and display them
let notes = document.querySelectorAll(".input-box");
function showNotes() {
	notesContainer.innerHTML = localStorage.getItem("notes");
}
showNotes();

// Update local storage with the current state of notes
function updateStorage() {
	localStorage.setItem("notes", notesContainer.innerHTML);
}

// Event listener for the "Create Notes" button
createBtn.addEventListener("click", () => {
	// Create new input box and delete image elements
	let inputBox = document.createElement("p");
	let img = document.createElement("img");
	inputBox.className = "input-box";
	inputBox.setAttribute("contenteditable", "true");
	img.src = "/My Notes/Images/delete.png";
	notesContainer.appendChild(inputBox);
	inputBox.appendChild(img); // Append img as a child of inputBox
});

// Event listener for clicks within the notes container
notesContainer.addEventListener("click", function (e) {
	if (e.target.tagName === "IMG") {
		// If the clicked element is an image, remove its parent (input box) and update storage
		e.target.parentElement.remove();
		updateStorage();
	} else if (e.target.tagName === "P") {
		// If the clicked element is a paragraph (input box), update notes on keyup
		notes = document.querySelectorAll(".input-box");
		notes.forEach((nt) => {
			nt.onkeyup = function () {
				updateStorage();
			};
		});
	}
});

// Event listener for the "Enter" key to insert line breaks in contenteditable elements
document.addEventListener("keydown", (event) => {
	if (event.key === "Enter") {
		document.execCommand("insertLineBreak");
		event.preventDefault();
	}
});
