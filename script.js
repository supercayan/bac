function createQuestionSet(termLabel, count) {
  const questions = [];

  for (let index = 1; index <= count; index += 1) {
    const correctIndex = (index + 1) % 5;
    const correctYear = 1800 + index;
    const options = Array.from({ length: 5 }, (_, optionIndex) => `${correctYear + (optionIndex - correctIndex) * 3}`);

    questions.push({
      question: `${termLabel} - Question ${index}: Choose the correct date for this history revision card.`,
      options,
      correctIndex
    });
  }

  return questions;
}

function shuffleArray(list) {
  const copy = [...list];

  for (let index = copy.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[randomIndex]] = [copy[randomIndex], copy[index]];
  }

  return copy;
}

const term1Questions = createQuestionSet("First Term", 50);
const term2Questions = createQuestionSet("Second Term", 30);
const term3Questions = createQuestionSet("Third Term", 20);

function buildRevisionRows(termLabel, questions) {
  return questions.map((item, index) => ({
    date: item.options[item.correctIndex],
    event: `${termLabel} historical event ${index + 1}`
  }));
}

function buildQuickRows(rows) {
  return rows.slice(0, 10);
}

const revisionSets = {
  term1: {
    title: "First Term",
    rows: buildRevisionRows("First Term", term1Questions)
  },
  term2: {
    title: "Second Term",
    rows: buildRevisionRows("Second Term", term2Questions)
  },
  term3: {
    title: "Third Term",
    rows: buildRevisionRows("Third Term", term3Questions)
  }
};

const questionSets = {
  term1: {
    title: "First Term",
    questions: term1Questions
  },
  term2: {
    title: "Second Term",
    questions: term2Questions
  },
  term3: {
    title: "Third Term",
    questions: term3Questions
  },
  allTerms: {
    title: "All Terms",
    questions: shuffleArray([...term1Questions, ...term2Questions, ...term3Questions]).slice(0, 60)
  }
};

const menuScreen = document.getElementById("menu-screen");
const quizScreen = document.getElementById("quiz-screen");
const reviseScreen = document.getElementById("revise-screen");
const termLabel = document.getElementById("term-label");
const questionCounter = document.getElementById("question-counter");
const questionText = document.getElementById("question-text");
const answerButtons = document.getElementById("answer-buttons");
const feedbackSheet = document.getElementById("feedback-sheet");
const feedbackTitle = document.getElementById("feedback-title");
const feedbackMessage = document.getElementById("feedback-message");
const feedbackCorrectAnswer = document.getElementById("feedback-correct-answer");
const nextButton = document.getElementById("next-button");
const backButton = document.getElementById("back-button");
const termButtons = document.querySelectorAll("[data-term]");
const reviseButtons = document.querySelectorAll("[data-revise-term]");
const reviseSections = document.getElementById("revise-sections");
const reviseBackButton = document.getElementById("revise-back-button");
const retryButton = document.getElementById("retry-button");

let currentTerm = null;
let currentQuestionIndex = 0;
let audioContext = null;

function showScreen(screenToShow) {
  menuScreen.classList.remove("screen-active");
  quizScreen.classList.remove("screen-active");
  reviseScreen.classList.remove("screen-active");
  screenToShow.classList.add("screen-active");
}

function startQuiz(termKey) {
  currentTerm = termKey;
  currentQuestionIndex = 0;

  if (termKey === "allTerms") {
    questionSets.allTerms.questions = shuffleArray([
      ...term1Questions,
      ...term2Questions,
      ...term3Questions
    ]).slice(0, 60);
  }

  hideFeedbackSheet();
  showScreen(quizScreen);
  renderQuestion();
}

function renderQuestion() {
  const term = questionSets[currentTerm];
  const currentQuestion = term.questions[currentQuestionIndex];

  termLabel.textContent = term.title;
  questionCounter.textContent = `Question ${currentQuestionIndex + 1} of ${term.questions.length}`;
  questionText.textContent = currentQuestion.question;
  hideFeedbackSheet();
  answerButtons.innerHTML = "";

  currentQuestion.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "answer-button";
    button.textContent = option;
    button.addEventListener("click", () => handleAnswer(index));
    answerButtons.appendChild(button);
  });
}

function lockAnswers() {
  const buttons = [...answerButtons.querySelectorAll(".answer-button")];
  buttons.forEach((button) => {
    button.disabled = true;
  });
  return buttons;
}

function handleAnswer(selectedIndex) {
  const term = questionSets[currentTerm];
  const currentQuestion = term.questions[currentQuestionIndex];
  const buttons = lockAnswers();
  const isCorrect = selectedIndex === currentQuestion.correctIndex;

  buttons[currentQuestion.correctIndex].classList.add("correct");

  if (isCorrect) {
    showFeedbackSheet({
      state: "correct",
      title: "Correct",
      message: "Nice job. Click next to continue.",
      correctAnswer: "",
      showRetry: false
    });
    playSound("good");
    return;
  }

  buttons[selectedIndex].classList.add("wrong");
  showFeedbackSheet({
    state: "wrong",
    title: "Wrong answer",
    message: "You can continue, or choose to see this question again.",
    correctAnswer: `Correct answer: ${currentQuestion.options[currentQuestion.correctIndex]}`,
    showRetry: true
  });
  playSound("bad");
}

function goToNextQuestion() {
  hideFeedbackSheet();
  currentQuestionIndex += 1;

  if (currentQuestionIndex >= questionSets[currentTerm].questions.length) {
    goToMenu();
    return;
  }

  renderQuestion();
}

function retryCurrentQuestion() {
  hideFeedbackSheet();
  renderQuestion();
}

function goToMenu() {
  currentTerm = null;
  currentQuestionIndex = 0;
  hideFeedbackSheet();
  showScreen(menuScreen);
}

function renderRevisionSections(termKey) {
  reviseSections.innerHTML = "";

  const section = revisionSets[termKey];
  const sectionElement = document.createElement("section");
  sectionElement.className = "revise-section";

  const heading = document.createElement("h3");
  heading.textContent = section.title;
  sectionElement.appendChild(heading);

  const tableWrap = document.createElement("div");
  tableWrap.className = "table-wrap";

  const table = document.createElement("table");
  table.className = "revision-table";

  const headRow = document.createElement("tr");
  ["Date", "What It Corresponds To"].forEach((title) => {
    const th = document.createElement("th");
    th.textContent = title;
    headRow.appendChild(th);
  });

  const thead = document.createElement("thead");
  thead.appendChild(headRow);
  table.appendChild(thead);

  const tbody = document.createElement("tbody");

  section.rows.forEach((row) => {
    const tr = document.createElement("tr");
    const dateCell = document.createElement("td");
    const eventCell = document.createElement("td");

    dateCell.textContent = row.date;
    eventCell.textContent = row.event;
    tr.appendChild(dateCell);
    tr.appendChild(eventCell);
    tbody.appendChild(tr);
  });

  table.appendChild(tbody);
  tableWrap.appendChild(table);
  sectionElement.appendChild(tableWrap);

  const quickBox = document.createElement("div");
  quickBox.className = "quick-box";

  const quickTitle = document.createElement("h4");
  quickTitle.textContent = "Quick 10 Dates";
  quickBox.appendChild(quickTitle);

  const quickTableWrap = document.createElement("div");
  quickTableWrap.className = "table-wrap";

  const quickTable = document.createElement("table");
  quickTable.className = "revision-table";

  const quickHeadRow = document.createElement("tr");
  ["Date", "What It Corresponds To"].forEach((title) => {
    const th = document.createElement("th");
    th.textContent = title;
    quickHeadRow.appendChild(th);
  });

  const quickThead = document.createElement("thead");
  quickThead.appendChild(quickHeadRow);
  quickTable.appendChild(quickThead);

  const quickTbody = document.createElement("tbody");

  buildQuickRows(section.rows).forEach((row) => {
    const tr = document.createElement("tr");
    const dateCell = document.createElement("td");
    const eventCell = document.createElement("td");

    dateCell.textContent = row.date;
    eventCell.textContent = row.event;
    tr.appendChild(dateCell);
    tr.appendChild(eventCell);
    quickTbody.appendChild(tr);
  });

  quickTable.appendChild(quickTbody);
  quickTableWrap.appendChild(quickTable);
  quickBox.appendChild(quickTableWrap);
  sectionElement.appendChild(quickBox);

  reviseSections.appendChild(sectionElement);
}

function openRevisionScreen(termKey) {
  hideFeedbackSheet();
  renderRevisionSections(termKey);
  showScreen(reviseScreen);
}

function showFeedbackSheet({ state, title, message, correctAnswer, showRetry }) {
  feedbackSheet.hidden = false;
  feedbackSheet.classList.remove("correct-state", "wrong-state", "feedback-sheet-visible");
  feedbackSheet.classList.add(`${state}-state`);
  feedbackTitle.textContent = title;
  feedbackMessage.textContent = message;
  feedbackCorrectAnswer.textContent = correctAnswer;
  feedbackCorrectAnswer.hidden = !correctAnswer;
  retryButton.hidden = !showRetry;

  window.requestAnimationFrame(() => {
    feedbackSheet.classList.add("feedback-sheet-visible");
  });
}

function hideFeedbackSheet() {
  feedbackSheet.classList.remove("feedback-sheet-visible", "correct-state", "wrong-state");
  feedbackSheet.hidden = true;
}

function ensureAudioContext() {
  if (!audioContext) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (AudioContextClass) {
      audioContext = new AudioContextClass();
    }
  }

  if (audioContext && audioContext.state === "suspended") {
    audioContext.resume();
  }
}

function playSound(type) {
  ensureAudioContext();

  if (!audioContext) {
    return;
  }

  const oscillator = audioContext.createOscillator();
  const gainNode = audioContext.createGain();

  oscillator.connect(gainNode);
  gainNode.connect(audioContext.destination);

  const now = audioContext.currentTime;

  if (type === "good") {
    oscillator.type = "triangle";
    oscillator.frequency.setValueAtTime(523.25, now);
    oscillator.frequency.linearRampToValueAtTime(783.99, now + 0.18);
  } else {
    oscillator.type = "sawtooth";
    oscillator.frequency.setValueAtTime(220, now);
    oscillator.frequency.linearRampToValueAtTime(146.83, now + 0.22);
  }

  gainNode.gain.setValueAtTime(0.0001, now);
  gainNode.gain.exponentialRampToValueAtTime(0.18, now + 0.03);
  gainNode.gain.exponentialRampToValueAtTime(0.0001, now + 0.35);

  oscillator.start(now);
  oscillator.stop(now + 0.36);
}

termButtons.forEach((button) => {
  button.addEventListener("click", () => startQuiz(button.dataset.term));
});

reviseButtons.forEach((button) => {
  button.addEventListener("click", () => openRevisionScreen(button.dataset.reviseTerm));
});

nextButton.addEventListener("click", goToNextQuestion);
retryButton.addEventListener("click", retryCurrentQuestion);
backButton.addEventListener("click", goToMenu);
reviseBackButton.addEventListener("click", goToMenu);
