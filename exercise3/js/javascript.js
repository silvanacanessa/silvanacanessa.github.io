let score = 0;
let questionIndex = 0;
const questions = [
    { question: "In a website browser address bar, what does WWW stand for?", answer: ["world wide web"] },
    { question: "What does CAPTCHA stand for?", answer: ["completely automated public turing test to tell computers and humans apart"] },
    { question: "What was the first item sold on the internet?", answer: ["cd", "a cd"] },
    { question: "What is the name of the first Web Browser?", answer: ["mosaic"] },
    { question: "What was the name of the first message ever sent over ARPANET, the precursor to the modern internet?", answer: ["lo"] }
];

const questionElement = document.getElementById("question");
const answerElement = document.getElementById("answer");
const submitButton = document.getElementById("submit");
const scoreElement = document.getElementById("score");
const answerComment = document.getElementById("answer-comment");

// Function to check if the answer is correct
function checkAnswer(userAnswer, correctAnswers) {
    return Array.isArray(correctAnswers) ? correctAnswers.includes(userAnswer) : userAnswer === correctAnswers;
}

submitButton.addEventListener("click", () => {
    let userAnswer = answerElement.value.trim().toLowerCase();
    let correctAnswers = questions[questionIndex].answer;

    if (checkAnswer(userAnswer, correctAnswers)) {
        score += 10; // Correct answer: add 10 points
        answerComment.textContent = "Correct!";
    } else {
        answerComment.textContent = "Wrong! The correct answer is: " + correctAnswers.join(", ");
    }

    questionIndex++;

    if (questionIndex < questions.length) {
        questionElement.textContent = questions[questionIndex].question;
        answerElement.value = "";
    } else {
        questionElement.textContent = "Thanks for playing :)";
        submitButton.disabled = true;
    }

    scoreElement.textContent = "Your Score: " + score + " points";
});
