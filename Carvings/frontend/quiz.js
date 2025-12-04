
const CORRECT_ANSWERS = {
  q1: "b", // Beauty and harmony with nature
  q2: "b", // Fauna
  q3: "a", // Connection between humans and the universe
  q4: "c"  // Plants and flowers 
};

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("submit-btn").addEventListener("click", submitQuiz);
  document.getElementById("retake-btn").addEventListener("click", resetQuiz);
});

async function submitQuiz() {
  const visitorID =
    document.getElementById("user-id-input").value.trim() || "Anonymous";

  const answers = {
    q1: document.querySelector("input[name='q1']:checked")?.value || null,
    q2: document.querySelector("input[name='q2']:checked")?.value || null,
    q3: document.querySelector("input[name='q3']:checked")?.value || null,
    q4: document.querySelector("input[name='q4']:checked")?.value || null
  };

  if (!answers.q1 || !answers.q2 || !answers.q3 || !answers.q4) {
    alert("Please answer all questions before submitting.");
    return;
  }

  let score = 0;
  for (let q in CORRECT_ANSWERS) {
    if (answers[q] === CORRECT_ANSWERS[q]) score++;
  }

  const percentage = (score / 4) * 100;

  // Send to server
  const payload = {
    visitorID,
    question1: answers.q1.toUpperCase(),
    question2: answers.q2.toUpperCase(),
    question3: answers.q3.toUpperCase(),
    question4: answers.q4.toUpperCase(),
    score,
    percentage,
    currentClicks: 1
  };

  try {
    await fetch("http://localhost:3000/submit-quiz", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
  } catch (err) {
    console.error("Server error:", err);
  }

  showResults(score, answers);
}

function showResults(score, answers) {
  document.getElementById("quiz-content").classList.add("hidden");
  document.getElementById("results-container").classList.remove("hidden");

  document.getElementById("score-display").textContent = `${score}/4`;

  const message =
    score === 4 ? "Excellent! You got all correct!" :
    score === 3 ? "Great job!" :
    score === 2 ? "Good try!" :
    score === 1 ? "Keep learning!" :
    "Try again!";

  document.getElementById("results-message").textContent = message;

  const answersList = document.getElementById("answers-list");

  answersList.innerHTML = `
    <p><strong>Q1:</strong> Your answer: ${answers.q1.toUpperCase()} —
      ${answers.q1 === CORRECT_ANSWERS.q1 ? "✔ Correct" : "✖ Wrong (Correct: B)"}
    </p>

    <p><strong>Q2:</strong> Your answer: ${answers.q2.toUpperCase()} —
      ${answers.q2 === CORRECT_ANSWERS.q2 ? "✔ Correct" : "✖ Wrong (Correct: B)"}
    </p>

    <p><strong>Q3:</strong> Your answer: ${answers.q3.toUpperCase()} —
      ${answers.q3 === CORRECT_ANSWERS.q3 ? "✔ Correct" : "✖ Wrong (Correct: A)"}
    </p>

    <p><strong>Q4:</strong> Your answer: ${answers.q4.toUpperCase()} —
      ${answers.q4 === CORRECT_ANSWERS.q4 ? "✔ Correct" : "✖ Wrong (Correct: C)"}
    </p>
  `;
}

function resetQuiz() {
  document.getElementById("results-container").classList.add("hidden");
  document.getElementById("quiz-content").classList.remove("hidden");

  document.querySelectorAll("input[type=radio]").forEach(r => (r.checked = false));
  document.getElementById("user-id-input").value = "";
}
