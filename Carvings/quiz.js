// Quiz logic, tracking, analytics export, and admin panel
//
// SETUP INSTRUCTIONS:
// 1. To enable the admin analytics button:
//    - Press Ctrl+Shift+A, OR triple-click the logo (RP) in the header
//    - The admin button will appear in the bottom-right corner
//
// 2. To link the admin button to your Google Sheet:
//    - Open quiz.js and find the activateAdminPanel() function (around line 120)
//    - Replace the googleSheetUrl variable with your Google Sheet URL
//    - To get your Google Sheet URL: Create a Google Sheet > Share > Get link > Copy URL
//
// 3. Tracking data is stored in browser localStorage and includes:
//    - Total quiz attempts
//    - Completion rate
//    - Average score
//    - You can export this data to your Google Sheet manually or via Google Apps Script
//
// 4. To automatically push each quiz submission into Google Sheets:
//    - Create a Google Apps Script Web App that writes incoming JSON to your sheet
//    - Deploy it (Deploy > New deployment > Web app > Anyone with the link)
//    - Copy the Web App URL and paste it into the `googleAnalyticsWebhook` variable below

// Google Apps Script Web App endpoint for automatic sheet updates
// ⚠️ Replace with your own Apps Script deployment URL (ends with /exec)
const googleAnalyticsWebhook = 'https://script.google.com/macros/s/AKfycbzAqfki9jCDflX-9jNyVhDAMKKUUIL_HaNxMV3KSm5RlXrsFucLl6DJdsAOt14T0ZWW/exec';

const correctAnswers = {
  q1: 'b',
  q2: 'b',
  q3: 'a',
  q4: 'c',
};

// ------------------------------
// TRACKING OBJECT
// ------------------------------
const Tracking = {
  stats: {},
  init() {
    this.loadStats();
  },
  loadStats() {
    const stored = localStorage.getItem('quizStats');
    this.stats = stored ? JSON.parse(stored) : this.getDefaultStats();
  },
  getDefaultStats() {
    return { totalAttempts: 0, totalCompletions: 0, totalScore: 0, averageScore: 0, completionRate: 0 };
  },
  recordAttempt(score, maxScore) {
    this.stats.totalAttempts++;
    if (score !== null) {
      this.stats.totalCompletions++;
      this.stats.totalScore += score;
      this.stats.averageScore = Math.round((this.stats.totalScore / this.stats.totalCompletions) * 100) / 100;
    }
    this.stats.completionRate = this.stats.totalAttempts > 0
      ? Math.round((this.stats.totalCompletions / this.stats.totalAttempts) * 100)
      : 0;
    this.saveStats();
    this.sendTrackingPixel();
  },
  saveStats() {
    localStorage.setItem('quizStats', JSON.stringify(this.stats));
  },
  sendTrackingPixel() {
    console.log('Tracking Stats:', this.stats);
  },
  getStats() {
    return { ...this.stats };
  },
};

// ------------------------------
// ADMIN PANEL ACTIVATION
// ------------------------------
let clickCount = 0;
let clickTimer = null;

function activateAdminPanel() {
  const adminBtn = document.getElementById('admin-btn');
  if (adminBtn) {
    adminBtn.classList.add('visible');
    const googleSheetUrl = 'https://docs.google.com/spreadsheets/d/1ifRWH4xjzDogB9U9TynRQQTycUI0bqqVjj4dCSurPBk/edit?usp=sharing';
    adminBtn.onclick = () => {
      if (googleSheetUrl && googleSheetUrl !== '#') window.open(googleSheetUrl, '_blank');
      else alert('Please update the Google Sheet URL in quiz.js');
    };
  }
}

// ------------------------------
// UTILITY FUNCTIONS
// ------------------------------
function getAnswers() {
  const answers = {};
  for (let i = 1; i <= 4; i++) {
    const selected = document.querySelector(`input[name="q${i}"]:checked`);
    answers[`q${i}`] = selected ? selected.value : null;
  }
  return answers;
}

function calculateScore(answers) {
  let score = 0;
  Object.keys(correctAnswers).forEach((q) => { if (answers[q] === correctAnswers[q]) score++; });
  return score;
}

function buildAnalyticsPayload(userInput, answers, score) {
  const visitorNickname = userInput && userInput.trim() !== '' 
    ? userInput.trim() 
    : `User-${Math.floor(Math.random() * 100000)}`;
  const answeredCount = Object.values(answers).filter(a => a !== null).length;
  const completionPercentage = Math.round((answeredCount / 4) * 100);
  return {
    Timestamp: new Date().toISOString(),
    VisitorNickname: visitorNickname,
    CompletionProgress: `${completionPercentage}%`,
    Score: score,
    Percentage: Math.round((score / 4) * 100),
    'Question 1': answers.q1 || 'Not answered',
    'Question 2': answers.q2 || 'Not answered',
    'Question 3': answers.q3 || 'Not answered',
    'Question 4': answers.q4 || 'Not answered'
  };
}

function sendToGoogleSheet(payload) {
  if (!googleAnalyticsWebhook || googleAnalyticsWebhook === '#') {
    console.warn('Google Analytics Webhook not configured.');
    return;
  }
  fetch(googleAnalyticsWebhook, {
    method: 'POST',
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  })
  .then(res => res.json())
  .then(data => console.log('Google Sheet updated:', data))
  .catch(err => console.error('Failed to send data to Google Sheet:', err));
}


// ------------------------------
// QUIZ RESULT HANDLING
// ------------------------------
function showResults(answers, score) {
  const quizContent = document.getElementById('quiz-content');
  const resultsContainer = document.getElementById('results-container');
  const scoreDisplay = document.getElementById('score-display');
  const resultsMessage = document.getElementById('results-message');
  const answersList = document.getElementById('answers-list');

  quizContent.classList.add('hidden');
  resultsContainer.classList.remove('hidden');
  scoreDisplay.textContent = `${score}/4`;

  const currentLang = (window.sessionStorage && sessionStorage.getItem('lang')) || 'en';
  const dict = typeof translations !== 'undefined' && translations[currentLang] 
    ? translations[currentLang] : translations.en;

  resultsMessage.textContent =
    score === 4 ? dict.excellentScore :
    score === 3 ? dict.goodScore :
    score === 2 ? dict.averageScore :
    dict.lowScore;

  answersList.innerHTML = '';
  for (let i = 1; i <= 4; i++) {
    const qKey = `q${i}`;
    const userAnswer = answers[qKey];
    const correctAnswer = correctAnswers[qKey];
    const isCorrect = userAnswer === correctAnswer;

    const resultItem = document.createElement('div');
    resultItem.className = 'result-item';

    const questionLabel = document.createElement('span');
    questionLabel.className = 'result-label';
    questionLabel.textContent = `${dict.questionLabel} ${i}:`;

    const answerStatus = document.createElement('span');
    answerStatus.className = `result-value ${isCorrect ? 'correct' : 'incorrect'}`;
    answerStatus.textContent = isCorrect
      ? `✓ ${dict.correctAnswer}`
      : `✗ ${dict.incorrectAnswer}`;

    resultItem.appendChild(questionLabel);
    resultItem.appendChild(answerStatus);
    answersList.appendChild(resultItem);
  }
}

function resetQuiz() {
  document.querySelectorAll('input[type="radio"]').forEach(radio => radio.checked = false);
  document.getElementById('quiz-content').classList.remove('hidden');
  document.getElementById('results-container').classList.add('hidden');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ------------------------------
// INIT
// ------------------------------
document.addEventListener('DOMContentLoaded', () => {
  Tracking.init();

  // Admin activation
  document.addEventListener('keydown', e => {
    if (e.ctrlKey && e.shiftKey && e.key === 'A') { e.preventDefault(); activateAdminPanel(); }
  });

  const logo = document.querySelector('.logo-mark');
  if (logo) logo.addEventListener('click', () => {
    clickCount++;
    if (clickTimer) clearTimeout(clickTimer);
    clickTimer = setTimeout(() => clickCount = 0, 500);
    if (clickCount >= 3) { activateAdminPanel(); clickCount = 0; }
  });

  const submitBtn = document.getElementById('submit-btn');
  const userIdInput = document.getElementById('user-id-input');
  const retakeBtn = document.getElementById('retake-btn');

  if (submitBtn) submitBtn.addEventListener('click', () => {
    const answers = getAnswers();
    const score = calculateScore(answers);
    showResults(answers, score);

    const userInput = userIdInput ? userIdInput.value.trim() : '';
    const payload = buildAnalyticsPayload(userInput, answers, score);
    sendToGoogleSheet(payload);

    Tracking.recordAttempt(score, 4);
  });

  if (retakeBtn) retakeBtn.addEventListener('click', resetQuiz);
});

// ------------------------------
// OPTIONAL: Real-time Stats Display
// ------------------------------
function displayLiveStats() {
  const statsContainer = document.getElementById('live-stats');
  if (!statsContainer) return;
  const stats = Tracking.getStats();
  statsContainer.innerHTML = `
    <p>Total Attempts: ${stats.totalAttempts}</p>
    <p>Total Completions: ${stats.totalCompletions}</p>
    <p>Average Score: ${stats.averageScore}</p>
    <p>Completion Rate: ${stats.completionRate}%</p>
  `;
  setTimeout(displayLiveStats, 1000); // Refresh every 1 second
}
document.addEventListener('DOMContentLoaded', displayLiveStats);