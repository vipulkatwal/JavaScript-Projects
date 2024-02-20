const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// Function to add a task to the list
function addTask() {
	// Check if the input box is empty
	if (inputBox.value === "") {
		// Display an alert for an empty value
		alert("You must write something");
	} else {
		// Create a new list item and set its innerHTML to the input value
		let li = document.createElement("li");
		li.innerHTML = inputBox.value;
		listContainer.appendChild(li);

		// Create a cross icon (span) and append it to the list item
		let span = document.createElement("span");
		span.innerHTML = "\u00d7";
		li.appendChild(span);

		// Add click event listener to mark/unmark the task as completed
		li.addEventListener("click", function () {
			li.classList.toggle("checked");
			saveData();
		});

		// Add click event listener to remove the task
		span.addEventListener("click", function () {
			li.remove();
			saveData();
		});

		// Append the list item to the list container
		li.appendChild(span);
		listContainer.appendChild(li);
	}

	// Clear the input box after adding a value
	inputBox.value = "";
	// Save the updated data
	saveData();
}

// Event listener for clicking on list items or cross icons
listContainer.addEventListener(
	"click",
	function (e) {
		// Check if the clicked element is a list item
		if (e.target.tagName === "LI") {
			// Toggle the 'checked' class to mark/unmark the task as completed
			e.target.classList.toggle("checked");
			saveData();
		} else if (e.target.tagName === "SPAN") {
			// Remove the parent list item when the cross icon is clicked
			e.target.parentElement.remove();
			saveData();
		}
	},
	false
);

// Function to save the data in local storage
function saveData() {
	localStorage.setItem("data", listContainer.innerHTML);
}

// Function to display the saved tasks
function showTask() {
	listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
