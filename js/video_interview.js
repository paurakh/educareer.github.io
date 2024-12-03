// video_interview.js
const questions = [
    "Can you tell us about a challenging project you've worked on and how you approached solving the problem?",
    "What motivates you to work in this industry?",
    "How do you handle tight deadlines or high-pressure situations?",
    "Describe a time you worked in a team. What was your role, and how did you contribute?",
    "What are your long-term career goals, and how does this role align with them?",
];

let currentQuestionIndex = 0;

// Update the interview question
function updateQuestion() {
    const questionElement = document.getElementById("interview-question");
    questionElement.textContent = questions[currentQuestionIndex];
}

// Navigate to the previous question
document.getElementById("prev-question-btn").addEventListener("click", () => {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        updateQuestion();
    }
});

// Navigate to the next question
document.getElementById("next-question-btn").addEventListener("click", () => {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        updateQuestion();
    }
});

// Initialize the first question
updateQuestion();
