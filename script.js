function shuffleArray(list) {
  const copy = [...list];

  for (let index = copy.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[randomIndex]] = [copy[randomIndex], copy[index]];
  }

  return copy;
}

function sampleRows(list, count) {
  return shuffleArray(list).slice(0, Math.min(count, list.length));
}

function extractYear(dateText) {
  const matches = dateText.match(/\d{4}/g);
  return matches ? Number(matches[matches.length - 1]) : 0;
}

function buildRows(prefix, entries) {
  return entries.map(([event, date], index) => ({
    id: `${prefix}-${index + 1}`,
    event,
    date,
    year: extractYear(date)
  }));
}

const termContent = {
  term1: {
    title: "First Term",
    sections: {
      main: {
        title: "First Section",
        rows: buildRows("term1-main", [
          ["مؤتمر يالطا (و.م.أ - السوفيات - بريطانيا)", "4-11 فيفري 1945"],
          ["مؤتمر بوتسدام (تقسيم ألمانيا)", "17 جويلية - 2 أوت 1945"],
          ["تفجير هيروشيما وناغازاكي", "6-9 أوت 1945"],
          ["تأسيس هيئة الأمم المتحدة", "24 أكتوبر 1945"],
          ["الإعلان عن مبدأ ترومان", "12 مارس 1947"],
          ["الإعلان عن مشروع مارشال", "5 جوان 1947"],
          ["الإعلان عن مبدأ جدانوف", "22 سبتمبر 1947"],
          ["إنشاء مكتب الكومنفورم", "6 أكتوبر 1947"],
          ["تأسيس منظمة الكوميكون", "25 جانفي 1949"],
          ["تأسيس حلف الشمال الأطلسي (الناتو)", "4 أفريل 1949"],
          ["وفاة الزعيم السوفياتي ستالين", "5 مارس 1953"],
          ["تأسيس حلف جنوب شرق حلف آسيا (السياتو)", "8 سبتمبر 1954"],
          ["تأسيس حلف بغداد", "24 فيفري 1955"],
          ["مؤتمر باندونغ", "18-24 أفريل 1955"],
          ["تأسيس حلف وارسو", "14 ماي 1955"],
          ["حل مكتب الكومنفورم", "17 أفريل 1956"],
          ["العدوان الثلاثي على مصر", "29 أكتوبر 1956"],
          ["الإعلان عن مشروع أيزنهاور", "5 جانفي 1957"],
          ["بناء جدار برلين", "13 أوت 1961"],
          ["تأسيس حركة عدم الانحياز ببلغراد", "1-6 سبتمبر 1961"],
          ["إنشاء الخط الهاتفي الأحمر", "20 جوان 1963"],
          ["توقيع اتفاقية سالت الأولى", "26 ماي 1972"],
          ["المؤتمر الرابع لعدم الانحياز بالجزائر", "5-9 سبتمبر 1973"],
          ["توقيع اتفاقية سالت الثانية", "18 جوان 1979"],
          ["تدخل السوفيات في أفغانستان", "27 ديسمبر 1979"],
          ["مؤتمر مالطا وزوال القطبية الثنائية", "3-4 ديسمبر 1989"],
          ["تحطيم جدار برلين", "9 نوفمبر 1989"],
          ["توحيد الألمانيتين", "3 أكتوبر 1990"],
          ["مؤتمر باريس ونهاية الحرب الباردة", "19-21 نوفمبر 1990"],
          ["حل منظمة الكوميكون", "28 جوان 1991"],
          ["حل حلف وارسو", "1 جويلية 1991"],
          ["مؤتمر ألما آتا وزوال الاتحاد السوفياتي", "21 ديسمبر 1991"],
          ["استقالة غورباتشوف وظهور روسيا", "25 ديسمبر 1991"]
        ])
      },
      fast: {
        title: "Fast Dates",
        rows: buildRows("term1-fast", [
          ["اجتماع لندن وتأسيس حكومة في بون", "3 جوان 1948"],
          ["حصار السوفيات لبرلين", "23 جوان 1948"],
          ["إنشاء جسر جوي إلى برلين", "25 جوان 1948"],
          ["تأسيس ألمانيا الغربية الرأسمالية", "8 ماي 1949"],
          ["رفع الحصار عن برلين", "12 ماي 1949"],
          ["تأسيس ألمانيا الشرقية الشيوعية", "7 أكتوبر 1949"],
          ["نجاح الثورة الشيوعية الصينية", "1 أكتوبر 1949"],
          ["اندلاع الحرب الكورية", "25 جوان 1950"],
          ["تأسيس حلف الأنزيس", "1 سبتمبر 1951"],
          ["نهاية الحرب الأهلية الكورية", "27 جويلية 1953"],
          ["اعتراف السوفيات بألمانيا الغربية", "5 ماي 1955"],
          ["تبني خروتشوف سياسة التعايش السلمي", "14 فيفري 1956"],
          ["تهديد السوفيات بالسلاح النووي (العدوان الثلاثي)", "5 نوفمبر 1956"],
          ["زيارة خروتشوف إلى واشنطن", "15-18 سبتمبر 1959"],
          ["فرض الحصار الاقتصادي الأمريكي على كوبا", "7 فيفري 1962"],
          ["فرض الحصار العسكري الأمريكي على كوبا", "22 أكتوبر 1962"],
          ["قرار سحب الصواريخ من كوبا ونهاية الأزمة", "28 أكتوبر 1962"],
          ["حل الحزب الشيوعي السوفياتي", "5 سبتمبر 1991"]
        ])
      }
    }
  },
  term2: {
    title: "Second Term",
    sections: {
      main: {
        title: "First Section",
        rows: buildRows("term2-main", [
          ["بيان الشعب الجزائري", "3 فيفري 1943"],
          ["مظاهرات ومجازر 8 ماي", "8 ماي 1945"],
          ["إنشاء المنظمة الخاصة", "15-16 فيفري 1947"],
          ["القانون الخاص (دستور الجزائر)", "20 سبتمبر 1947"],
          ["إنشاء اللجنة الثورية للوحدة والعمل", "23 مارس 1954"],
          ["اجتماع مجموعة 22 التاريخية", "23 جوان 1954"],
          ["اجتماع لجنة الستة الأول", "10 أكتوبر 1954"],
          ["اجتماع لجنة الستة الثاني (الحسم)", "23 أكتوبر 1954"],
          ["هجومات الشمال القسنطيني", "20 أوت 1955"],
          ["تأسيس الإتحاد العام للعمال الجزائريين", "24 فيفري 1956"],
          ["إضراب الطلبة والتحاقهم بالثورة", "19 ماي 1956"],
          ["انعقاد مؤتمر الصومام", "20 أوت 1956"],
          ["اختطاف طائرة قادة الوفد الخارجي", "22 أكتوبر 1956"],
          ["إضراب الثمانية أيام", "28 جانفي - 4 فيفري 1957"],
          ["قصف ساقية سيدي يوسف (تونس)", "8 فيفري 1958"],
          ["تمرد جنرالات فرنسا في الجزائر", "13 ماي 1958"],
          ["انتخاب ديغول وتأسيس الجمهورية الخامسة", "1 جوان 1958"],
          ["تأسيس الحكومة الجزائرية المؤقتة", "19 سبتمبر 1958"],
          ["الإعلان عن مشروع قسنطينة", "3 أكتوبر 1958"],
          ["الإعلان عن مشروع سلم الشجعان", "23 أكتوبر 1958"],
          ["مظاهرات الشعب بالمدن الكبرى", "11 ديسمبر 1960"],
          ["مظاهرات الجزائريين في المهجر (فرنسا)", "17 أكتوبر 1961"],
          ["توقيع اتفاقيات إيفيان الثانية", "18 مارس 1962"],
          ["وقف إطلاق النار", "19 مارس 1962"],
          ["انعقاد مؤتمر طرابلس", "27 ماي - 4 جوان 1962"],
          ["استفتاء تقرير المصير", "1 جويلية 1962"],
          ["الاستقلال الرسمي للجزائر", "5 جويلية 1962"],
          ["انضمام الجزائر لجامعة الدول العربية", "16 أوت 1962"],
          ["انضمام الجزائر للأمم المتحدة", "8 أكتوبر 1962"],
          ["التصحيح الثوري وعزل بن بلة", "19 جوان 1965"],
          ["تأميم المحروقات", "24 فيفري 1971"],
          ["وفاة الرئيس هواري بومدين", "27 ديسمبر 1978"]
        ])
      },
      fast: {
        title: "Fast Dates",
        rows: buildRows("term2-fast", [
          ["المؤتمر الإسلامي", "7 جوان 1936"],
          ["إعادة بناء الحركة الوطنية", "16 مارس 1946"],
          ["سقوط حكومة مانديس فرانس", "5 فيفري 1955"],
          ["تعيين جاك سوستال حاكما عاما للجزائر", "15 فيفري 1955"],
          ["إعلان حالة الطوارئ", "3 أفريل 1955"],
          ["حل الإتحاد الديمقراطي للبيان الجزائري", "22 أفريل 1956"],
          ["مفاوضات ليفيان الأولى", "20 ماي 1961"]
        ])
      }
    }
  },
  term3: {
    title: "Third Term",
    sections: {
      main: {
        title: "First Section",
        rows: buildRows("term3-main", [
          ["إنشاء منظمة الكومنوولث", "11 ديسمبر 1931"],
          ["استقلال الهند", "15 أوت 1947"],
          ["مشروع التقسيم الأممي لفلسطين", "29 نوفمبر 1947"],
          ["الثورة المصرية", "23 جويلية 1952"],
          ["معركة ديان بيان فو بالهند الصينية", "13 مارس - 7 ماي 1954"],
          ["مؤتمر جنيف الخاص بالهند الصينية", "20 جويلية 1954"],
          ["تأميم قناة السويس", "26 جويلية 1956"],
          ["الإعلان عن قيام دولة فلسطين بالجزائر", "15 نوفمبر 1988"],
          ["قيام الثورة الفلسطينية (فتح)", "1 جانفي 1965"],
          ["تأسيس المنظمة الفرانكفونية", "20 مارس 1970"]
        ])
      },
      fast: {
        title: "Fast Dates",
        rows: buildRows("term3-fast", [
          ["صدور وعد بلفور", "2 نوفمبر 1917"],
          ["إنهاء الانتداب البريطاني على فلسطين", "14 ماي 1948"],
          ["الإعلان عن قيام دولة الاحتلال", "15 ماي 1948"],
          ["الحرب العربية الإسرائيلية الأولى", "16 ماي 1948"],
          ["الحرب العربية الإسرائيلية الثانية", "5 جوان 1967"],
          ["الحرب العربية الإسرائيلية الثالثة", "6 أكتوبر 1973"],
          ["إصدار القرار الأممي رقم 338", "21 أكتوبر 1973"],
          ["توقيع معاهدة كامب ديفيد", "17 سبتمبر 1978"],
          ["اندلاع الانتفاضة الأولى (أطفال الحجارة)", "8 ديسمبر 1987"],
          ["مؤتمر مدريد للسلام حول فلسطين", "30 أكتوبر 1991"],
          ["توقيع اتفاقية الحكم الذاتي غزة-أريحا", "13 سبتمبر 1993"],
          ["الإطاحة بنظام باتيستا ونجاح الثورة الكوبية", "8 جانفي 1959"]
        ])
      }
    }
  }
};

function getAllTermsMainRows() {
  return [
    ...termContent.term1.sections.main.rows,
    ...termContent.term2.sections.main.rows,
    ...termContent.term3.sections.main.rows
  ];
}

const menuScreen = document.getElementById("menu-screen");
const quizScreen = document.getElementById("quiz-screen");
const reviseScreen = document.getElementById("revise-screen");
const termLabel = document.getElementById("term-label");
const questionCounter = document.getElementById("question-counter");
const questionText = document.getElementById("question-text");
const answerButtons = document.getElementById("answer-buttons");
const sectionPrompt = document.getElementById("section-prompt");
const sectionPromptTitle = document.getElementById("section-prompt-title");
const sectionPromptText = document.getElementById("section-prompt-text");
const sectionContinueButton = document.getElementById("section-continue-button");
const sectionMenuButton = document.getElementById("section-menu-button");
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

let currentModeKey = null;
let currentSectionKey = null;
let currentPoolRows = [];
let currentRows = [];
let currentQuestionIndex = 0;
let currentQuestion = null;
let audioContext = null;
let continueAction = null;

function showScreen(screenToShow) {
  menuScreen.classList.remove("screen-active");
  quizScreen.classList.remove("screen-active");
  reviseScreen.classList.remove("screen-active");
  screenToShow.classList.add("screen-active");
}

function getSectionLabel(modeKey, sectionKey) {
  if (modeKey === "allTerms") {
    return "All Terms";
  }

  return `${termContent[modeKey].title} - ${termContent[modeKey].sections[sectionKey].title}`;
}

function setupQuizRows(modeKey, sectionKey) {
  if (modeKey === "allTerms") {
    currentPoolRows = getAllTermsMainRows();
    currentRows = sampleRows(currentPoolRows, 50);
    return;
  }

  currentPoolRows = termContent[modeKey].sections[sectionKey].rows;
  currentRows = shuffleArray(currentPoolRows);
}

function startQuiz(modeKey) {
  currentModeKey = modeKey;
  currentSectionKey = modeKey === "allTerms" ? "mixed" : "main";
  currentQuestionIndex = 0;
  currentQuestion = null;
  hideFeedbackSheet();
  hideSectionPrompt();
  setupQuizRows(modeKey, currentSectionKey);
  showScreen(quizScreen);
  renderQuestion();
}

function buildOptionRows(targetRow, poolRows) {
  const otherRows = poolRows.filter((row) => row.id !== targetRow.id);
  const selected = [];

  const nearRows = [...otherRows].sort((left, right) => {
    return Math.abs(left.year - targetRow.year) - Math.abs(right.year - targetRow.year);
  });

  nearRows.forEach((row) => {
    if (selected.length < 2 && !selected.some((item) => item.id === row.id)) {
      selected.push(row);
    }
  });

  let remaining = otherRows.filter((row) => !selected.some((item) => item.id === row.id));

  if (remaining.length > 0) {
    const farAnchor = [...remaining].sort((left, right) => {
      return Math.abs(right.year - targetRow.year) - Math.abs(left.year - targetRow.year);
    })[0];

    selected.push(farAnchor);
    remaining = remaining.filter((row) => row.id !== farAnchor.id);

    if (remaining.length > 0) {
      const farBuddy = [...remaining].sort((left, right) => {
        return Math.abs(left.year - farAnchor.year) - Math.abs(right.year - farAnchor.year);
      })[0];

      selected.push(farBuddy);
      remaining = remaining.filter((row) => row.id !== farBuddy.id);
    }
  }

  while (selected.length < 4 && remaining.length > 0) {
    selected.push(remaining.shift());
  }

  return [targetRow, ...selected.slice(0, 4)];
}

function createQuestionFromRow(row, poolRows) {
  const asksForDate = Math.random() < 0.5;
  const optionRows = buildOptionRows(row, poolRows);
  const optionValues = shuffleArray(
    optionRows.map((item) => (asksForDate ? item.date : item.event))
  );
  const correctValue = asksForDate ? row.date : row.event;

  return {
    prompt: asksForDate
      ? `ما هو تاريخ: ${row.event} ؟`
      : `ما هو الحدث الموافق للتاريخ: ${row.date} ؟`,
    options: optionValues,
    correctIndex: optionValues.indexOf(correctValue),
    correctValue
  };
}

function renderQuestion() {
  hideFeedbackSheet();
  hideSectionPrompt();

  const row = currentRows[currentQuestionIndex];
  currentQuestion = createQuestionFromRow(row, currentPoolRows);

  termLabel.textContent = getSectionLabel(currentModeKey, currentSectionKey);
  questionCounter.textContent = `Question ${currentQuestionIndex + 1} of ${currentRows.length}`;
  questionText.textContent = currentQuestion.prompt;
  questionText.dir = "auto";
  questionText.hidden = false;
  answerButtons.hidden = false;
  answerButtons.innerHTML = "";

  currentQuestion.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "answer-button";
    button.textContent = option;
    button.dir = "auto";
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
    correctAnswer: `Correct answer: ${currentQuestion.correctValue}`,
    showRetry: true
  });
  playSound("bad");
}

function handleSectionComplete() {
  hideFeedbackSheet();

  if (currentModeKey !== "allTerms" && currentSectionKey === "main") {
    const fastCount = termContent[currentModeKey].sections.fast.rows.length;
    continueAction = () => {
      currentSectionKey = "fast";
      currentQuestionIndex = 0;
      setupQuizRows(currentModeKey, currentSectionKey);
      renderQuestion();
    };

    showSectionPrompt({
      title: "First Section Finished",
      text: `Do you want questions for the fast dates section too? There are ${fastCount} questions.`,
      continueLabel: "Start Fast Dates"
    });
    return;
  }

  goToMenu();
}

function goToNextQuestion() {
  hideFeedbackSheet();
  currentQuestionIndex += 1;

  if (currentQuestionIndex >= currentRows.length) {
    handleSectionComplete();
    return;
  }

  renderQuestion();
}

function retryCurrentQuestion() {
  hideFeedbackSheet();
  renderQuestion();
}

function showSectionPrompt({ title, text, continueLabel }) {
  questionText.hidden = true;
  answerButtons.hidden = true;
  sectionPrompt.hidden = false;
  sectionPromptTitle.textContent = title;
  sectionPromptText.textContent = text;
  sectionContinueButton.textContent = continueLabel;
}

function hideSectionPrompt() {
  sectionPrompt.hidden = true;
  questionText.hidden = false;
  answerButtons.hidden = false;
}

function continueFromPrompt() {
  if (typeof continueAction === "function") {
    const action = continueAction;
    continueAction = null;
    action();
  }
}

function goToMenu() {
  currentModeKey = null;
  currentSectionKey = null;
  currentRows = [];
  currentPoolRows = [];
  currentQuestionIndex = 0;
  currentQuestion = null;
  continueAction = null;
  hideFeedbackSheet();
  hideSectionPrompt();
  showScreen(menuScreen);
}

function renderRevisionSections(termKey) {
  reviseSections.innerHTML = "";
  const term = termContent[termKey];

  Object.values(term.sections).forEach((section) => {
    const sectionElement = document.createElement("section");
    sectionElement.className = "revise-section";

    const heading = document.createElement("h3");
    heading.textContent = `${section.title} (${section.rows.length})`;
    sectionElement.appendChild(heading);

    const tableWrap = document.createElement("div");
    tableWrap.className = "table-wrap";

    const table = document.createElement("table");
    table.className = "revision-table";

    const thead = document.createElement("thead");
    const headRow = document.createElement("tr");

    ["Date", "What It Corresponds To"].forEach((title) => {
      const th = document.createElement("th");
      th.textContent = title;
      headRow.appendChild(th);
    });

    thead.appendChild(headRow);
    table.appendChild(thead);

    const tbody = document.createElement("tbody");

    section.rows.forEach((row) => {
      const tr = document.createElement("tr");
      const dateCell = document.createElement("td");
      const eventCell = document.createElement("td");

      dateCell.textContent = row.date;
      eventCell.textContent = row.event;
      dateCell.dir = "auto";
      eventCell.dir = "auto";

      tr.appendChild(dateCell);
      tr.appendChild(eventCell);
      tbody.appendChild(tr);
    });

    table.appendChild(tbody);
    tableWrap.appendChild(table);
    sectionElement.appendChild(tableWrap);
    reviseSections.appendChild(sectionElement);
  });
}

function openRevisionScreen(termKey) {
  hideFeedbackSheet();
  hideSectionPrompt();
  renderRevisionSections(termKey);
  showScreen(reviseScreen);
}

function showFeedbackSheet({ state, title, message, correctAnswer, showRetry }) {
  feedbackSheet.hidden = false;
  feedbackSheet.classList.remove("correct-state", "wrong-state", "feedback-sheet-visible");
  feedbackSheet.classList.add(`${state}-state`);
  feedbackTitle.textContent = title;
  feedbackMessage.textContent = message;
  feedbackMessage.dir = "auto";
  feedbackCorrectAnswer.textContent = correctAnswer;
  feedbackCorrectAnswer.dir = "auto";
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
sectionContinueButton.addEventListener("click", continueFromPrompt);
sectionMenuButton.addEventListener("click", goToMenu);
