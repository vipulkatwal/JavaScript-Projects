// Array of quiz questions with associated answers
const questions = [
	{
		question: "Which is the largest mammal in the earth?",
		answers: [
			{ text: "Shark", correct: false },
			{ text: "Blue Whale", correct: true },
			{ text: "Elephant", correct: false },
			{ text: "Tiger", correct: false },
		],
	},
	{
		question: "Which is the largest desert in the world?",
		answers: [
			{ text: "Kalahari", correct: false },
			{ text: "Gobi", correct: false },
			{ text: "Sahara", correct: true },
			{ text: "Thar", correct: false },
		],
	},
	{
		question: "Which is the smallest continent in the world?",
		answers: [
			{ text: "Asia", correct: false },
			{ text: "Africa", correct: false },
			{ text: "Australia", correct: true },
			{ text: "Antarctica", correct: false },
		],
	},
];

// DOM elements
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

// Variables to track current question index and score
let currentQuestionIndex = 0;
let score = 0;

// Function to start the quiz
function startQuiz() {
	currentQuestionIndex = 0;
	score = 0;
	nextButton.innerHTML = "Next";
	showQuestion();
}

// Function to display a question
function showQuestion() {
	resetState();

	let currentQuestion = questions[currentQuestionIndex];
	let questionNo = currentQuestionIndex + 1;
	questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

	currentQuestion.answers.forEach((answer) => {
		const button = document.createElement("button");
		button.innerHTML = answer.text;
		button.classList.add("btn");
		answerButtons.appendChild(button);
		if (answer.correct) {
			button.dataset.correct = answer.correct;
		}
		button.addEventListener("click", selectAnswer);
	});
}

// Function to reset the state of the quiz
function resetState() {
	nextButton.style.display = "none";
	while (answerButtons.firstChild) {
		answerButtons.removeChild(answerButtons.firstChild);
	}
}

// Function to handle the selection of an answer
function selectAnswer(e) {
	const selectBtn = e.target;
	const isCorrect = selectBtn.dataset.correct === "true";
	if (isCorrect) {
		selectBtn.classList.add("correct");
		score++;
	} else {
		selectBtn.classList.add("incorrect");
	}
	Array.from(answerButtons.children).forEach((button) => {
		if (button.dataset.correct === "true") {
			button.classList.add("correct");
		}
		button.disabled = true;
	});
	nextButton.style.display = "block";
}

// Function to display the final score
function showScore() {
	resetState();
	questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
	nextButton.innerHTML = "Play Again";
	nextButton.style.display = "block";
}

// Function to handle the "Next" button
function handleNextButton() {
	currentQuestionIndex++;
	if (currentQuestionIndex < questions.length) {
		showQuestion();
	} else {
		showScore();
	}
}

// Event listener for the "Next" button
nextButton.addEventListener("click", () => {
	if (currentQuestionIndex < questions.length) {
		handleNextButton();
	} else {
		startQuiz();
	}
});

// Start the quiz when the page loads
startQuiz();
