// Question bank data is loaded from question-banks/manifest.json.
let questions = [];

const knownSubjectMeta = {
  "cs0075-code-snippets": { title: "CS0075 Machine Learning Algorithms", desc: "Code snippets and concepts from linear regression, logistic regression, Naive Bayes, imports, data preprocessing, KNN, and regularization", icon: "⌘", color: "coral" }
};

let questionBankStatus = 'loading';

function getSubjects() {
  const subjectMap = new Map();
  questions.forEach((q) => {
    if (!q.subject) return;
    const subjectId = q.subject;
    if (!subjectMap.has(subjectId)) {
      const meta = knownSubjectMeta[q.subject] || {
        title: q.label || (q.subject.charAt(0).toUpperCase() + q.subject.slice(1).replace(/-/g, ' ')),
        desc: 'Review questions and key exercises',
        icon: '✦',
        color: 'blue'
      };
      subjectMap.set(subjectId, {
        id: subjectId,
        title: meta.title,
        desc: meta.desc,
        icon: meta.icon,
        color: meta.color,
        count: 0
      });
    }
    subjectMap.get(subjectId).count += 1;
  });

  return Array.from(subjectMap.values()).map((s) => ({
    ...s,
    count: `${s.count} question${s.count === 1 ? '' : 's'}`
  }));
}

const state = {
  view: 'dashboard',
  sessionSubject: 'all',
  sessionQuestionIds: null,
  sessionSetIds: null,
  quizSetupStep: 'subjects',
  questionTypes: ['multiple-choice', 'fill-blank', 'code-fill', 'multi-answer'],
  shuffleQuestions: false,
  optionOrders: {},
  answerMode: 'immediate',
  quizActive: false,
  showResults: false,
  results: null,
  questionIndex: 0,
  selected: null,
  checked: false,
  answers: JSON.parse(localStorage.getItem('midtermAnswers') || '{}'),
  dark: localStorage.getItem('midtermDark') === 'true'
};

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

function setView(view) {
  state.view = view;
  $$('.view').forEach((panel) => panel.classList.toggle('active', panel.dataset.viewPanel === view));
  $$('.nav-link[data-view]').forEach((link) => link.classList.toggle('active', link.dataset.view === view));
  $('#breadcrumbCurrent').textContent = view === 'quizzer' ? 'Quizzer' : view === 'answer-key' ? 'Answer key' : 'Dashboard';
  $('#sidebar')?.classList.remove('open');
  if (view === 'quizzer') renderQuiz();
  if (view === 'answer-key') renderAnswerKey();
}

function ensureAnswerKeyView() {
  const nav = $('.main-nav');
  const quizzerView = $('#quizzerView');
  if (!nav || !quizzerView || $('#answerKeyView')) return;

  const quizzerButton = nav.querySelector('[data-view="quizzer"]');
  const answerKeyButton = document.createElement('button');
  answerKeyButton.className = 'nav-link';
  answerKeyButton.dataset.view = 'answer-key';
  answerKeyButton.type = 'button';
  answerKeyButton.innerHTML = '<span class="nav-icon">✓</span><span>Answer key</span>';
  quizzerButton.after(answerKeyButton);

  const answerKeyView = document.createElement('section');
  answerKeyView.className = 'view';
  answerKeyView.id = 'answerKeyView';
  answerKeyView.dataset.viewPanel = 'answer-key';
  answerKeyView.innerHTML = `
    <div class="quiz-header">
      <div>
        <p class="eyebrow accent">Reference library</p>
        <h1>Answer key</h1>
        <p class="view-intro">Completed code snippets and fill-in answers, in quiz format.</p>
      </div>
    </div>
    <div class="quiz-layout">
      <div class="quiz-main" id="answerKeyList"></div>
      <aside class="quiz-sidebar panel">
        <p class="eyebrow">In this answer key</p>
        <div class="question-list" id="answerKeyNavigation"></div>
        <div class="session-tip"><span>✦</span><p><strong>Reference</strong><br />Each blank is filled with its expected answer.</p></div>
      </aside>
    </div>
  `;
  quizzerView.after(answerKeyView);
}

function renderSidebarSubjects() {
  const sidebarSection = $('.sidebar-section');
  if (!sidebarSection) return;
  const currentSubjects = getSubjects();
  if (!currentSubjects.length) {
    sidebarSection.innerHTML = `<p class="eyebrow">Subjects</p><p class="muted">${questionBankStatus === 'error' ? 'Question bank unavailable.' : 'Loading subjects…'}</p>`;
    return;
  }
  sidebarSection.innerHTML = `
    <p class="eyebrow">Subjects</p>
    ${currentSubjects.map((s) => `
      <button class="subject-link ${state.sessionSubject === s.id ? 'active' : ''}" data-sidebar-subject="${s.id}" type="button">
        <span class="subject-dot ${s.color}"></span>${escapeHtml(s.title)}
      </button>
    `).join('')}
  `;
  $$('[data-sidebar-subject]').forEach((button) => {
    button.addEventListener('click', () => {
      state.sessionSubject = button.dataset.sidebarSubject;
      state.sessionSubjects = [state.sessionSubject];
      state.sessionQuestionIds = null;
      state.quizSetupStep = 'subjects';
      state.quizActive = false;
      state.showResults = false;
      setView('quizzer');
      renderSidebarSubjects();
    });
  });
}

function renderSubjects() {
  const currentSubjects = getSubjects();
  const grid = $('#subjectGrid');
  if (!grid) return;
  if (!currentSubjects.length) {
    grid.innerHTML = `<article class="subject-card"><p>${questionBankStatus === 'error'
      ? 'Could not load the question bank. Check the connection and try again.'
      : 'Loading question bank…'}</p></article>`;
    return;
  }
  grid.innerHTML = currentSubjects.map((subject) => `
    <article class="subject-card" data-subject-card="${subject.id}">
      <div class="subject-card-top">
        <div class="subject-card-icon ${subject.color}">${subject.icon}</div>
        <span class="card-count">${subject.count}</span>
      </div>
      <h3>${escapeHtml(subject.title)}</h3>
      <p>${escapeHtml(subject.desc)}</p>
    </article>
  `).join('');
  $$('[data-subject-card]').forEach((card) => {
    card.addEventListener('click', () => {
      state.sessionSubject = card.dataset.subjectCard;
      state.sessionSubjects = [state.sessionSubject];
      state.sessionQuestionIds = null;
      state.quizSetupStep = 'subjects';
      state.quizActive = false;
      state.showResults = false;
      setView('quizzer');
      renderSidebarSubjects();
    });
  });
}

function subjectQuestions() {
  return state.sessionSubject === 'all' ? questions : questions.filter((q) => q.subject === state.sessionSubject);
}

function filteredQuestions() {
  const available = subjectQuestions();
  return state.sessionQuestionIds ? available.filter((q) => state.sessionQuestionIds.includes(q.id)) : available;
}

function getCodeAnswers(question) {
  return question.code.flat().filter((part) => part.blank).map((part) => part.blank);
}

function shuffleArray(items) {
  const shuffled = [...items];
  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[index]];
  }
  return shuffled;
}

function optionOrderFor(question) {
  if (!state.optionOrders[question.id]) {
    state.optionOrders[question.id] = shuffleArray(question.options.map((_, index) => index));
  }
  return state.optionOrders[question.id];
}

function isQuestionAnswered(q) {
  const ans = state.answers[q.id];
  if (!ans) return false;
  if (q.type === 'multiple-choice') return Number.isInteger(ans.selected);
  if (q.type === 'multi-answer') return Array.isArray(ans.selected) && ans.selected.length > 0;
  if (q.type === 'fill-blank') return typeof ans.value === 'string' && ans.value.trim().length > 0;
  if (q.type === 'code-fill') return Array.isArray(ans.values) && ans.values.some((v) => v && v.trim().length > 0);
  return false;
}

function renderMultipleChoiceReview(question) {
  const answer = state.answers[question.id];
  const selected = answer && Number.isInteger(answer.selected) ? answer.selected : null;
  return `<div class="result-options-grid">${optionOrderFor(question).map((originalIndex, displayIndex) => {
    const isCorrect = originalIndex === question.answer;
    const isSelected = originalIndex === selected;
    const status = isCorrect ? 'correct' : (isSelected ? 'incorrect' : '');
    return `<span class="result-option ${status} ${isSelected ? 'selected' : ''}">
      <span class="option-letter">${String.fromCharCode(65 + displayIndex)}</span>
      <span>${escapeHtml(question.options[originalIndex])}</span>
    </span>`;
  }).join('')}</div>`;
}

function renderResultItems(filter = 'all') {
  const list = filteredQuestions().filter((question) => {
    const answer = state.answers[question.id];
    const answered = isQuestionAnswered(question);
    if (filter === 'correct') return Boolean(answer?.correct);
    if (filter === 'incorrect') return answered && !answer.correct;
    return true;
  });

  const resultsList = $('#resultsList');
  if (!resultsList) return;
  if (!list.length) {
    resultsList.innerHTML = `<div class="empty-results">No ${filter} answers in this session.</div>`;
    return;
  }

  resultsList.innerHTML = list.map((question) => {
    const answer = state.answers[question.id];
    const isCorrect = Boolean(answer?.correct);

    let reviewMarkup = '';
    if (question.type === 'multiple-choice') {
      reviewMarkup = renderMultipleChoiceReview(question);
    } else if (question.type === 'multi-answer') {
      const selected = Array.isArray(answer?.selected) ? answer.selected : [];
      const given = selected.length ? selected.map((idx) => question.options[idx]).join(', ') : 'Skipped';
      const expected = question.answers.map((idx) => question.options[idx]).join(', ');
      reviewMarkup = `<small>Your choice: ${escapeHtml(given)}${isCorrect ? '' : ` · Correct: ${escapeHtml(expected)}`}</small>`;
    } else if (question.type === 'fill-blank') {
      const given = answer?.value?.trim() || 'Skipped';
      reviewMarkup = `<small>Your answer: ${escapeHtml(given)}${isCorrect ? '' : ` · Correct: ${escapeHtml(question.answer)}`}</small>`;
    } else if (question.type === 'code-fill') {
      const given = answer?.values?.join(' · ') || 'Skipped';
      const expected = getCodeAnswers(question).join(' · ');
      reviewMarkup = `<small>Your answer: ${escapeHtml(given)}${isCorrect ? '' : ` · Correct: ${escapeHtml(expected)}`}</small>`;
    }

    return `
      <div class="result-row">
        <span class="result-index ${isCorrect ? 'correct' : 'wrong'}">${isCorrect ? '✓' : '!'}</span>
        <div>
          <strong>${escapeHtml(question.title)}</strong>
          ${reviewMarkup}
        </div>
      </div>
    `;
  }).join('');
}

function showResultsScreen() {
  const setup = $('#quizSetup');
  const session = $('#quizSession');
  const result = state.results;
  const incorrectCount = result.incorrectIds.length;
  setup.hidden = false;
  session.hidden = true;

  setup.innerHTML = `
    <div class="quiz-header results-header">
      <div>
        <p class="eyebrow accent">Session complete</p>
        <h1>Review locked in.</h1>
        <p class="view-intro">Your answers are ready to review.</p>
      </div>
      <div class="quiz-score">
        <span class="eyebrow">Score</span>
        <strong>${result.correct} / ${result.total}</strong>
      </div>
    </div>
    <section class="panel results-panel">
      <div class="results-summary">
        <strong>${result.correct} correct</strong>
        <span>${result.answered} answered · ${result.total - result.answered} skipped</span>
      </div>
      <div class="result-filter-row" role="tablist" aria-label="Filter answer review">
        <button class="result-filter active" data-result-filter="all" type="button">All <span>${result.total}</span></button>
        <button class="result-filter" data-result-filter="correct" type="button">Correct <span>${result.correct}</span></button>
        <button class="result-filter" data-result-filter="incorrect" type="button">Incorrect <span>${incorrectCount}</span></button>
      </div>
      <div id="resultsList"></div>
      <div class="results-actions">
        <button class="primary-button" id="retryQuizButton" type="button">Retry all <span>↻</span></button>
        <button class="secondary-button" id="retryIncorrectButton" type="button" ${incorrectCount ? '' : 'disabled'}>Retry all incorrect <span>↻</span></button>
        <button class="text-button" id="chooseSubjectButton" type="button">Choose another subject</button>
      </div>
      <p class="results-note">${incorrectCount ? `${incorrectCount} question${incorrectCount === 1 ? '' : 's'} available to retry.` : 'No incorrect answers to retry.'}</p>
    </section>
  `;

  renderResultItems('all');

  $$('[data-result-filter]').forEach((button) => {
    button.addEventListener('click', () => {
      $$('.result-filter').forEach((item) => item.classList.toggle('active', item === button));
      renderResultItems(button.dataset.resultFilter);
    });
  });

  $('#retryQuizButton').addEventListener('click', () => {
    state.sessionQuestionIds = [...(result.fullQuestionIds || result.questionIds)];
    state.showResults = false;
    startQuiz(true);
  });

  $('#retryIncorrectButton').addEventListener('click', () => {
    if (!incorrectCount) return;
    state.sessionQuestionIds = [...result.incorrectIds];
    state.showResults = false;
    startQuiz(true);
  });

  $('#chooseSubjectButton').addEventListener('click', () => {
    state.showResults = false;
    state.sessionQuestionIds = null;
    state.quizSetupStep = 'subjects';
    renderQuiz();
  });
}

function renderQuizSetup() {
  const currentSubjects = getSubjects();
  const setupSubjects = [
    { id: 'all', title: 'All subjects', desc: 'A mixed review across every topic', count: `${questions.length} questions`, icon: '✦', color: 'blue' },
    ...currentSubjects
  ];

  $('#quizSetup').innerHTML = `
    <div class="quiz-header setup-header">
      <div>
        <p class="eyebrow accent">Practice mode</p>
        <h1>Choose what to lock in.</h1>
        <p class="view-intro">Pick a subject to begin your review session.</p>
      </div>
    </div>
    <div class="setup-subject-layout">
      <section class="setup-subjects">
        <p class="eyebrow">Subject</p>
        <div class="setup-subject-grid">
          ${setupSubjects.map((s) => `
            <button class="setup-subject-card ${state.sessionSubject === s.id ? 'selected' : ''}" data-setup-subject="${s.id}" type="button">
              <span class="subject-card-icon ${s.color}">${s.icon}</span>
              <span><strong>${escapeHtml(s.title)}</strong><small>${escapeHtml(s.desc)}</small></span>
              <em>${s.count}</em>
            </button>
          `).join('')}
        </div>
      </section>
      <aside class="panel setup-start-panel">
        <p class="eyebrow">Ready?</p>
        <h2>Lock in and go.</h2>
        <p>The answer setting is available in the bottom bar during the quiz.</p>
        <button class="primary-button start-quiz-button" id="startQuizButton" type="button">Start quiz <span>→</span></button>
      </aside>
    </div>
  `;

  $$('[data-setup-subject]').forEach((button) => {
    button.addEventListener('click', () => {
      state.sessionSubject = button.dataset.setupSubject;
      renderQuizSetup();
      renderSidebarSubjects();
    });
  });

  $('#startQuizButton').addEventListener('click', () => startQuiz(false));
}

function startQuiz(keepScope = false) {
  let quizQuestions;
  if (keepScope) {
    quizQuestions = filteredQuestions();
  } else {
    quizQuestions = subjectQuestions();
    const questionIds = quizQuestions.map((question) => question.id);
    state.sessionQuestionIds = state.shuffleQuestions ? shuffleArray(questionIds) : questionIds;
    state.sessionSetIds = [...state.sessionQuestionIds];
    state.optionOrders = {};
    quizQuestions.forEach((question) => {
      if (question.options) optionOrderFor(question);
    });
    quizQuestions = filteredQuestions();
  }
  if (!quizQuestions.length) {
    showToast('No questions are available for that format and subject selection.');
    return;
  }
  quizQuestions.forEach((q) => delete state.answers[q.id]);
  state.quizActive = true;
  state.showResults = false;
  state.results = null;
  state.questionIndex = 0;
  state.selected = null;
  state.checked = false;
  saveAnswers();
  renderQuiz();
  updateDashboard();
}

function finishSession() {
  const list = filteredQuestions();
  const answered = list.filter((q) => isQuestionAnswered(q));
  const correct = answered.filter((q) => state.answers[q.id]?.correct).length;
  state.results = {
    total: list.length,
    answered: answered.length,
    correct,
    questionIds: list.map((q) => q.id),
    fullQuestionIds: state.sessionSetIds || list.map((q) => q.id),
    incorrectIds: answered.filter((q) => !state.answers[q.id]?.correct).map((q) => q.id)
  };
  state.quizActive = false;
  state.showResults = true;
  state.questionIndex = 0;
  showResultsScreen();
  updateDashboard();
}

function codeMarkup(question) {
  const saved = state.answers[question.id]?.values || [];
  let blankIndex = 0;
  const buttonLabel = state.answerMode === 'end' ? 'Save answer' : 'Check answer';
  return `
    <div class="code-editor">
      <div class="code-toolbar"><span>javascript</span><span>Fill in the blanks</span></div>
      <div class="code-body">${question.code.map((line, lineIndex) => `
        <span class="code-line"><span class="line-no">${lineIndex + 1}</span>${line.map((part) => {
          if (!part.blank) return `<span class="${part.className || ''}">${escapeHtml(part.text)}</span>`;
          const index = blankIndex++;
          const value = saved[index] || '';
          const status = state.checked ? (value.trim().toLowerCase() === part.blank.toLowerCase() ? 'correct' : 'incorrect') : '';
          return `<input class="code-blank ${status}" value="${escapeHtml(value)}" data-answer="${part.blank}" aria-label="${part.aria || 'code blank'}" autocomplete="off" spellcheck="false" />`;
        }).join('')}</span>
      `).join('')}</div>
    </div>
    <div class="code-actions">
      <button class="primary-button" id="checkCodeButton" type="button">${buttonLabel} <span>✓</span></button>
    </div>
  `;
}

function completedCodeMarkup(question) {
  return `
    <div class="code-editor">
      <div class="code-toolbar"><span>python</span><span>Completed code</span></div>
      <div class="code-body">${question.code.map((line, lineIndex) => `
        <span class="code-line"><span class="line-no">${lineIndex + 1}</span>${line.map((part) => part.blank
          ? `<span class="code-blank correct answer-key-code-blank" aria-label="${escapeHtml(part.aria || 'code answer')}">${escapeHtml(part.blank)}</span>`
          : `<span class="${escapeHtml(part.className || '')}">${escapeHtml(part.text)}</span>`
        ).join('')}</span>
      `).join('')}</div>
    </div>
  `;
}

function renderAnswerKey() {
  const answerKeyList = $('#answerKeyList');
  const answerKeyNavigation = $('#answerKeyNavigation');
  if (!answerKeyList || !answerKeyNavigation) return;

  const answerKeyQuestions = questions.filter((question) => question.type === 'code-fill' || question.type === 'fill-blank');
  if (!answerKeyQuestions.length) {
    const message = questionBankStatus === 'error'
      ? 'Could not load the question bank. Check that the app is served over HTTP and the bank file is available.'
      : 'Loading question bank…';
    answerKeyList.innerHTML = `<article class="question-card"><p class="eyebrow">Answer key</p><h2>${message}</h2></article>`;
    answerKeyNavigation.innerHTML = '';
    return;
  }

  answerKeyList.innerHTML = answerKeyQuestions.map((question, index) => {
    const answerMarkup = question.type === 'code-fill'
      ? completedCodeMarkup(question)
      : `<div class="fill-blank-card"><div class="fill-blank-input-wrap"><input class="fill-blank-input correct" type="text" value="${escapeHtml(question.answer)}" aria-label="Correct answer" readonly /></div></div>`;
    return `
      <article class="question-card answer-key-question" id="answer-key-question-${escapeHtml(question.id)}">
        <div class="question-meta">
          <span class="question-type">${escapeHtml(question.label || 'Question')}</span>
          <span>${index + 1} of ${answerKeyQuestions.length}</span>
        </div>
        <h2>${escapeHtml(question.title)}</h2>
        ${answerMarkup}
      </article>
    `;
  }).join('');

  answerKeyNavigation.innerHTML = answerKeyQuestions.map((question, index) => `
    <button class="question-number" data-answer-key-number="${escapeHtml(question.id)}" type="button" aria-label="Go to answer ${index + 1}">${index + 1}</button>
  `).join('');
  $$('[data-answer-key-number]').forEach((button) => button.addEventListener('click', () => {
    $(`#answer-key-question-${CSS.escape(button.dataset.answerKeyNumber)}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }));
}

function multiAnswerMarkup(question) {
  const saved = state.answers[question.id] || {};
  const selectedIndices = Array.isArray(saved.selected) ? saved.selected : [];
  const buttonLabel = state.answerMode === 'end' ? 'Save selection' : 'Check answer';
  const needCount = Math.min(question.selectCount || question.answers?.length || 1, question.options.length);
  const selectionLimitReached = selectedIndices.length >= needCount;

  return `
    <span class="multi-instruction">Select ${needCount} answer${needCount > 1 ? 's' : ''}</span>
    <div class="answer-options">
      ${optionOrderFor(question).map((originalIndex) => {
        const option = question.options[originalIndex];
        const isSelected = selectedIndices.includes(originalIndex);
        let statusClass = '';
        if (state.checked) {
          const isExpected = question.answers.includes(originalIndex);
          if (isExpected) statusClass = 'correct';
          else if (isSelected && !isExpected) statusClass = 'incorrect';
        }
        return `
          <button class="answer-option ${isSelected ? 'selected' : ''} ${statusClass}" data-multi-option="${originalIndex}" type="button" ${selectionLimitReached && !isSelected ? 'disabled' : ''}>
            <span class="checkbox-mark">${isSelected ? '✓' : ''}</span>
            <span>${escapeHtml(option)}</span>
          </button>
        `;
      }).join('')}
    </div>
    <div class="multi-check-action">
      <button class="primary-button" id="checkMultiButton" type="button" ${selectedIndices.length === 0 ? 'disabled' : ''}>
        ${buttonLabel} <span>✓</span>
      </button>
    </div>
  `;
}

function fillBlankMarkup(question) {
  const saved = state.answers[question.id] || {};
  const currentVal = saved.value || '';
  const buttonLabel = state.answerMode === 'end' ? 'Save answer' : 'Check answer';
  let inputStatus = '';
  if (state.checked) {
    inputStatus = saved.correct ? 'correct' : 'incorrect';
  }

  return `
    <div class="fill-blank-card">
      <div class="fill-blank-input-wrap">
        <input class="fill-blank-input ${inputStatus}" id="blankInput" type="text" placeholder="Type your answer here..." value="${escapeHtml(currentVal)}" autocomplete="off" spellcheck="false" ${state.checked && state.answerMode === 'immediate' ? 'disabled' : ''} />
        <button class="primary-button" id="checkBlankButton" type="button">
          ${buttonLabel} <span>✓</span>
        </button>
      </div>
    </div>
  `;
}

function selectOption(index, question) {
  if (state.answerMode === 'end') {
    state.selected = index;
    state.checked = false;
    state.answers[question.id] = { selected: index, checked: false, correct: index === question.answer };
  } else {
    if (state.checked) return;
    state.selected = index;
    state.answers[question.id] = { selected: index, checked: true, correct: index === question.answer };
    state.checked = true;
  }
  saveAnswers();
  renderQuiz();
  updateDashboard();
}

function toggleMultiOption(index, question) {
  if (state.checked && state.answerMode === 'immediate') return;
  const current = state.answers[question.id] || {};
  let selected = Array.isArray(current.selected) ? [...current.selected] : [];
  if (selected.includes(index)) {
    selected = selected.filter((i) => i !== index);
  } else {
    const needCount = Math.min(question.selectCount || question.answers?.length || 1, question.options.length);
    if (selected.length >= needCount) return;
    selected.push(index);
  }
  state.answers[question.id] = { ...current, selected, checked: false };
  saveAnswers();
  renderQuiz();
}

function checkMultiAnswer(question) {
  const saved = state.answers[question.id] || {};
  const selected = Array.isArray(saved.selected) ? [...saved.selected].sort() : [];
  const expected = [...question.answers].sort();
  const correct = selected.length === expected.length && selected.every((val, idx) => val === expected[idx]);

  state.answers[question.id] = {
    selected,
    checked: true,
    correct
  };
  state.checked = state.answerMode === 'immediate';
  saveAnswers();
  renderQuiz();
  updateDashboard();
}

function checkBlankAnswer(question) {
  const input = $('#blankInput');
  const val = input ? input.value.trim() : '';
  const expected = question.answer.trim();
  const correct = question.caseSensitive ? val === expected : val.toLowerCase() === expected.toLowerCase();

  state.answers[question.id] = {
    value: val,
    checked: true,
    correct
  };
  state.checked = state.answerMode === 'immediate';
  saveAnswers();
  renderQuiz();
  updateDashboard();
}

function checkCode(question) {
  const blanks = $$('.code-blank');
  const values = blanks.map((input) => input.value);
  const correct = blanks.length > 0 && blanks.every((input) => input.value.trim().toLowerCase() === input.dataset.answer.toLowerCase());
  state.answers[question.id] = { checked: true, correct, values };
  state.checked = true;
  saveAnswers();
  renderQuiz();
  updateDashboard();
}

function saveCodeAnswer(question) {
  const values = $$('.code-blank').map((input) => input.value);
  const correct = values.length > 0 && values.every((value, index) => value.trim().toLowerCase() === getCodeAnswers(question)[index].toLowerCase());
  state.answers[question.id] = { values, checked: false, correct };
  state.checked = false;
  saveAnswers();
  renderQuiz();
  updateDashboard();
}

function renderQuiz() {
  const setup = $('#quizSetup');
  const session = $('#quizSession');
  if (!setup || !session) return;

  if (state.showResults) {
    setup.hidden = false;
    session.hidden = true;
    showResultsScreen();
    return;
  }
  if (!state.quizActive) {
    setup.hidden = false;
    session.hidden = true;
    renderQuizSetup();
    return;
  }

  setup.hidden = true;
  session.hidden = false;

  const list = filteredQuestions();
  if (!list.length) return;
  if (state.questionIndex >= list.length) state.questionIndex = 0;

  const question = list[state.questionIndex];
  const saved = state.answers[question.id] || {};
  state.selected = saved.selected ?? null;
  state.checked = Boolean(saved.checked);

  $('#answerModeToggle').checked = state.answerMode === 'end';
  $('#answerModeLabel').textContent = state.answerMode === 'end' ? 'At the end' : 'Right away';

  let questionContent = '';
  if (question.type === 'code-fill') {
    questionContent = codeMarkup(question);
  } else if (question.type === 'multi-answer') {
    questionContent = multiAnswerMarkup(question);
  } else if (question.type === 'fill-blank') {
    questionContent = fillBlankMarkup(question);
  } else {
    // Default multiple-choice
    questionContent = `<div class="answer-options">${optionOrderFor(question).map((originalIndex, displayIndex) => `
      <button class="answer-option ${state.selected === originalIndex ? 'selected' : ''} ${state.checked && originalIndex === question.answer ? 'correct' : ''} ${state.checked && state.selected === originalIndex && originalIndex !== question.answer ? 'incorrect' : ''}" data-option="${originalIndex}" type="button">
        <span class="option-letter">${String.fromCharCode(65 + displayIndex)}</span>
        <span>${escapeHtml(question.options[originalIndex])}</span>
      </button>
    `).join('')}</div>`;
  }

  const feedbackMarkup = state.checked && state.answerMode === 'immediate' ? `
    <div class="feedback ${saved.correct ? '' : 'wrong'}">
      ${saved.correct ? 'Correct! ' : 'Not quite. '} ${escapeHtml(question.explanation || '')}
    </div>
  ` : '';

  $('#questionContainer').innerHTML = `
    <article class="question-card">
      <div class="question-meta">
        <span class="question-type">${question.label || (question.type === 'code-fill' ? 'Coding exercise' : 'Question')}</span>
        <span>${state.questionIndex + 1} of ${list.length}</span>
      </div>
      <h2>${escapeHtml(question.title)}</h2>
      ${questionContent}
      ${feedbackMarkup}
    </article>
  `;

  const hasAnswer = isQuestionAnswered(question);
  $('#nextButton').disabled = state.answerMode === 'immediate' ? !state.checked : !hasAnswer;
  $('#nextButton').textContent = state.questionIndex === list.length - 1 ? 'Finish session  →' : 'Next question  →';
  $('#previousButton').disabled = state.questionIndex === 0;

  const checkedCount = list.filter((item) => state.answers[item.id]?.checked).length;
  const correctCount = list.filter((item) => state.answers[item.id]?.checked && state.answers[item.id]?.correct).length;
  const answeredCount = list.filter((item) => isQuestionAnswered(item)).length;
  $('#sessionScore').textContent = state.answerMode === 'end' ? `${answeredCount} answered` : `${correctCount} / ${checkedCount}`;

  renderQuestionList(list);

  // Attach event handlers
  $$('.answer-option[data-option]').forEach((option) => {
    option.addEventListener('click', () => selectOption(Number(option.dataset.option), question));
  });

  $$('[data-multi-option]').forEach((option) => {
    option.addEventListener('click', () => toggleMultiOption(Number(option.dataset.multiOption), question));
  });

  $('#checkMultiButton')?.addEventListener('click', () => checkMultiAnswer(question));
  $('#checkBlankButton')?.addEventListener('click', () => checkBlankAnswer(question));
  $('#blankInput')?.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') checkBlankAnswer(question);
  });
  $('#checkCodeButton')?.addEventListener('click', () => state.answerMode === 'end' ? saveCodeAnswer(question) : checkCode(question));
  $('#changeSubjectButton')?.addEventListener('click', () => {
    state.quizActive = false;
    state.showResults = false;
    state.quizSetupStep = 'subjects';
    renderQuiz();
  });
}

function renderQuestionList(list) {
  const container = $('#questionList');
  if (!container) return;
  container.innerHTML = list.map((question, index) => {
    const done = isQuestionAnswered(question);
    return `<button class="question-number ${index === state.questionIndex ? 'current' : ''} ${done ? 'done' : ''}" data-question-number="${index}" type="button">${index + 1}</button>`;
  }).join('');

  $$('[data-question-number]').forEach((button) => {
    button.addEventListener('click', () => {
      state.questionIndex = Number(button.dataset.questionNumber);
      renderQuiz();
    });
  });
}

function saveAnswers() {
  localStorage.setItem('midtermAnswers', JSON.stringify(state.answers));
}

function updateDashboard() {
  const answeredCount = Object.values(state.answers).filter((ans) => ans.checked || ans.selected !== null && ans.selected !== undefined || ans.value || ans.values?.length).length;
  const percent = Math.min(100, Math.round((answeredCount / 10) * 100));
  const progressPercent = $('#progressPercent');
  const progressLabel = $('#progressLabel');
  const progressBarFill = $('#progressBarFill');
  if (progressPercent) progressPercent.textContent = `${percent}%`;
  if (progressLabel) progressLabel.textContent = `${answeredCount} of 10 questions answered`;
  if (progressBarFill) progressBarFill.style.width = `${percent}%`;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');
}

function showToast(message) {
  const toast = $('#toast');
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('show');
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove('show'), 2200);
}

// Global controls
ensureAnswerKeyView();
const skipButton = $('#skipButton');
if (skipButton) {
  const previousButton = document.createElement('button');
  previousButton.id = 'previousButton';
  previousButton.className = skipButton.className;
  previousButton.type = 'button';
  previousButton.textContent = '← Previous';
  previousButton.disabled = true;
  skipButton.before(previousButton);
  previousButton.addEventListener('click', () => {
    if (state.questionIndex > 0) {
      state.questionIndex -= 1;
      renderQuiz();
    }
  });
}

$('#nextButton')?.addEventListener('click', () => {
  const list = filteredQuestions();
  if (state.questionIndex < list.length - 1) {
    state.questionIndex += 1;
    renderQuiz();
  } else {
    finishSession();
  }
});

$('#skipButton')?.addEventListener('click', () => {
  const list = filteredQuestions();
  state.questionIndex = (state.questionIndex + 1) % list.length;
  renderQuiz();
});

$('#answerModeToggle')?.addEventListener('change', (event) => {
  state.answerMode = event.target.checked ? 'end' : 'immediate';
  renderQuiz();
});

$('#menuButton')?.addEventListener('click', () => $('#sidebar')?.classList.toggle('open'));
$('#themeToggle')?.addEventListener('click', () => {
  state.dark = !state.dark;
  document.body.classList.toggle('dark', state.dark);
  localStorage.setItem('midtermDark', String(state.dark));
});

$$('[data-view]').forEach((button) => button.addEventListener('click', () => setView(button.dataset.view)));
$$('[data-go-to]').forEach((button) => button.addEventListener('click', () => setView(button.dataset.goTo)));

document.body.classList.toggle('dark', state.dark);
renderSidebarSubjects();
renderSubjects();
updateDashboard();
renderQuiz();

const weekBars = [
  { day: 'M', height: 36 },
  { day: 'T', height: 58 },
  { day: 'W', height: 26 },
  { day: 'T', height: 70 },
  { day: 'F', height: 43 },
  { day: 'S', height: 18 },
  { day: 'S', height: 7 }
];
const weekBarsEl = $('#weekBars');
if (weekBarsEl) {
  weekBarsEl.innerHTML = weekBars.map((bar, index) => `
    <div class="week-bar-wrap">
      <span class="week-bar ${index === 4 ? 'today' : ''}" style="height:${bar.height}%"></span>
      <small>${bar.day}</small>
    </div>
  `).join('');
}

function renderQuizSetup() {
  const setup = $("#quizSetup");
  const setupSubjects = [{ id: "all", title: "All subjects", desc: "A mixed review across every topic", count: `${questions.length} questions`, icon: "✦", color: "blue" }, ...subjects];
  const selected = getSelectedSubjects();
  const selectedCount = selected.includes("all") ? subjects.length : selected.length;
  const cards = setupSubjects.map((subject) => { const isSelected = subject.id === "all" ? selected.includes("all") : selected.includes(subject.id); return `<button class="setup-subject-card ${isSelected ? "selected" : ""}" data-setup-subject="${subject.id}" type="button"><span class="subject-card-icon ${subject.color}">${subject.icon}</span><span><strong>${subject.title}</strong><small>${subject.desc}</small></span><em>${subject.count}</em></button>`; }).join("");
  setup.innerHTML = `<div class="quiz-header setup-header"><div><p class="eyebrow accent">Practice mode</p><h1>Choose what to lock in.</h1><p class="view-intro">Pick one or more subjects for this review session.</p></div></div><div class="setup-subject-layout"><section class="setup-subjects"><p class="eyebrow">Subjects · ${selectedCount} selected</p><div class="setup-subject-grid">${cards}</div></section><aside class="panel setup-start-panel"><p class="eyebrow">Ready?</p><h2>${selectedCount} subject${selectedCount === 1 ? "" : "s"} selected.</h2><p>Questions from the selected subjects will be mixed into one quiz.</p><button class="primary-button start-quiz-button" id="startQuizButton" type="button">Start quiz <span>→</span></button></aside></div>`;
  $$('[data-setup-subject]').forEach((button) => button.addEventListener("click", () => { const id = button.dataset.setupSubject; if (id === "all") { state.sessionSubjects = ["all"]; state.sessionSubject = "all"; } else { let next = selected.includes("all") ? [] : [...selected]; next = next.includes(id) ? next.filter((subject) => subject !== id) : [...next, id]; if (!next.length) next = ["all"]; state.sessionSubjects = next; state.sessionSubject = next.length === 1 ? next[0] : "all"; } state.sessionQuestionIds = null; renderQuizSetup(); }));
  $("#startQuizButton").addEventListener("click", () => startQuiz(false));
}

state.sessionSubjects = null;

function getSelectedSubjects() {
  const availableSubjectIds = getSubjects().map((subject) => subject.id);
  if (Array.isArray(state.sessionSubjects)) {
    return state.sessionSubjects.filter((subject) => availableSubjectIds.includes(subject));
  }
  if (state.sessionSubject !== "all" && availableSubjectIds.includes(state.sessionSubject)) {
    return [state.sessionSubject];
  }
  return availableSubjectIds;
}
function questionsForSelectedSubjects() {
  const selected = getSelectedSubjects();
  return questions.filter((question) => selected.includes(question.subject));
}
function subjectQuestions() {
  const selectedQuestions = questionsForSelectedSubjects();
  return selectedQuestions.filter((question) => state.questionTypes.includes(question.type));
}
function filteredQuestions() {
  const availableQuestions = subjectQuestions();
  if (!state.sessionQuestionIds) return availableQuestions;
  const questionsById = new Map(availableQuestions.map((question) => [question.id, question]));
  return state.sessionQuestionIds.map((id) => questionsById.get(id)).filter(Boolean);
}

function renderQuizSetup() {
  const currentSubjects = getSubjects();
  if (!currentSubjects.length) {
    $("#quizSetup").innerHTML = `<div class="panel setup-start-panel"><p class="eyebrow">${questionBankStatus === 'error' ? 'Question bank unavailable' : 'Loading question bank'}</p><h2>${questionBankStatus === 'error' ? 'Could not load questions.' : 'Preparing your subjects…'}</h2><p>${questionBankStatus === 'error' ? 'Check that the app is being served over HTTP and the bank file is available.' : 'Your subjects will appear as soon as the bank is ready.'}</p>${questionBankStatus === 'error' ? '<button class="secondary-button" id="retryQuestionBanksButton" type="button">Retry loading</button>' : ''}</div>`;
    $('#retryQuestionBanksButton')?.addEventListener('click', loadQuestionBank);
    return;
  }
  const setupSubjects = currentSubjects;
  const selected = getSelectedSubjects();
  const selectedCount = selected.length;
  const selectedQuestions = questionsForSelectedSubjects();
  const availableQuestions = subjectQuestions();
  const questionTypeOptions = [
    { id: 'mixed', title: 'Mixed question types', description: 'Include every available format' },
    { id: 'multiple-choice', title: 'Multiple choice', description: 'Choose one answer' },
    { id: 'fill-blank', title: 'Fill in the blank', description: 'Type the missing answer' },
    { id: 'code-fill', title: 'Code fill-in-the-blank', description: 'Complete the missing code' },
    { id: 'multi-answer', title: 'Multi-answer', description: 'Select all correct answers' }
  ];
  const availableTypes = questionTypeOptions
    .filter((option) => option.id !== 'mixed')
    .filter((option) => selectedQuestions.some((question) => question.type === option.id));
  const mixedSelected = availableTypes.length > 0
    && availableTypes.every((option) => state.questionTypes.includes(option.id));

  if (state.quizSetupStep === 'subjects') {
    $("#quizSetup").innerHTML = `
      <div class="quiz-header setup-header"><div><p class="eyebrow accent">Practice mode · Step 1 of 2</p><h1>Choose what to lock in.</h1><p class="view-intro">Select one or more subjects for your review session.</p></div></div>
      <div class="setup-subject-layout">
        <section class="setup-subjects">
          <p class="eyebrow">Subjects · ${selectedCount} selected</p>
          <div class="setup-subject-grid">${setupSubjects.map((subject) => {
            const isSelected = selected.includes(subject.id);
            return `<button class="setup-subject-card ${isSelected ? "selected" : ""}" data-setup-subject="${subject.id}" type="button" aria-pressed="${isSelected}"><span class="subject-card-icon ${subject.color}">${subject.icon}</span><span><strong>${escapeHtml(subject.title)}</strong><small>${escapeHtml(subject.desc)}</small></span><em>${escapeHtml(subject.count)}</em></button>`;
          }).join("")}</div>
        </section>
        <aside class="panel setup-start-panel"><p class="eyebrow">Next</p><h2>${selectedCount} subject${selectedCount === 1 ? "" : "s"} selected.</h2><p>Choose the question formats you want on the next step.</p><button class="primary-button start-quiz-button" id="continueToFormatsButton" type="button" ${selectedCount ? "" : "disabled"}>Choose question types <span>→</span></button></aside>
      </div>`;

    $$('[data-setup-subject]').forEach((button) => button.addEventListener("click", () => {
      const id = button.dataset.setupSubject;
      const next = selected.includes(id)
        ? selected.filter((subject) => subject !== id)
        : [...selected, id];
      state.sessionSubjects = next;
      state.sessionSubject = next.length === 1 ? next[0] : "all";
      state.sessionQuestionIds = null;
      renderSidebarSubjects();
      renderQuizSetup();
    }));
    $('#continueToFormatsButton').addEventListener('click', () => {
      state.quizSetupStep = 'formats';
      renderQuizSetup();
    });
    return;
  }

  const questionTypeMarkup = questionTypeOptions.map((option) => {
    const count = option.id === 'mixed'
      ? selectedQuestions.length
      : selectedQuestions.filter((question) => question.type === option.id).length;
    const isSelected = option.id === 'mixed'
      ? mixedSelected
      : state.questionTypes.includes(option.id) && count > 0;
    return `<button class="mode-option ${isSelected ? 'selected' : ''}" data-question-type="${option.id}" type="button" aria-pressed="${isSelected}" ${count ? '' : 'disabled'}>
      <strong>${option.title}</strong><span>${option.description} · ${count} question${count === 1 ? '' : 's'}</span>
    </button>`;
  }).join('');

  $("#quizSetup").innerHTML = `
    <div class="quiz-header setup-header"><div><p class="eyebrow accent">Practice mode · Step 2 of 2</p><h1>Choose question types.</h1><p class="view-intro">Select one or more formats, or choose mixed for all available types.</p></div></div>
    <div class="setup-subject-layout">
      <section class="setup-subjects">
        <p class="eyebrow question-type-heading">Question format · ${availableTypes.filter((option) => state.questionTypes.includes(option.id)).length} selected</p>
        <div class="question-type-options" role="group" aria-label="Question format">${questionTypeMarkup}</div>
        <label class="shuffle-questions-option"><input id="shuffleQuestionsToggle" type="checkbox" ${state.shuffleQuestions ? 'checked' : ''}><span><strong>Shuffle all questions</strong><small>Randomize the order of questions in this quiz.</small></span></label>
      </section>
      <aside class="panel setup-start-panel"><p class="eyebrow">Ready?</p><h2>${selectedCount} subject${selectedCount === 1 ? "" : "s"} selected.</h2><p>${availableQuestions.length} question${availableQuestions.length === 1 ? '' : 's'} match the selected formats.</p><button class="primary-button start-quiz-button" id="startQuizButton" type="button" ${availableQuestions.length && selectedCount ? '' : 'disabled'}>Start quiz <span>→</span></button><button class="secondary-button setup-back-button" id="backToSubjectsButton" type="button">← Back to subjects</button></aside>
    </div>`;

  $$('[data-question-type]').forEach((button) => button.addEventListener('click', () => {
    const id = button.dataset.questionType;
    if (id === 'mixed') {
      state.questionTypes = ['multiple-choice', 'fill-blank', 'code-fill', 'multi-answer'];
    } else {
      const next = state.questionTypes.includes(id)
        ? state.questionTypes.filter((type) => type !== id)
        : [...state.questionTypes, id];
      state.questionTypes = next;
    }
    state.sessionQuestionIds = null;
    renderQuizSetup();
  }));
  $('#backToSubjectsButton').addEventListener('click', () => {
    state.quizSetupStep = 'subjects';
    renderQuizSetup();
  });
  $('#shuffleQuestionsToggle').addEventListener('change', (event) => {
    state.shuffleQuestions = event.target.checked;
  });
  $("#startQuizButton").addEventListener("click", () => startQuiz(false));
}

async function loadQuestionBank() {
  questionBankStatus = 'loading';
  renderSidebarSubjects();
  renderSubjects();
  renderQuiz();
  try {
    const manifestResponse = await fetch(new URL('question-banks/manifest.json', document.baseURI), { cache: 'no-store' });
    if (!manifestResponse.ok) throw new Error(`Question-bank manifest request failed: ${manifestResponse.status}`);
    const bankFiles = await manifestResponse.json();
    if (!Array.isArray(bankFiles) || !bankFiles.length || bankFiles.some((file) => (
      typeof file !== 'string' || !file.endsWith('.json') || file.includes('/') || file.includes('\\')
    ))) {
      throw new Error('question-banks/manifest.json must contain a non-empty array of JSON filenames.');
    }
    if (new Set(bankFiles).size !== bankFiles.length) {
      throw new Error('question-banks/manifest.json contains duplicate filenames.');
    }

    const loadedBanks = await Promise.all(bankFiles.map(async (filename) => {
      const bankUrl = new URL(`question-banks/${encodeURIComponent(filename)}`, document.baseURI);
      const response = await fetch(bankUrl, { cache: 'no-store' });
      if (!response.ok) throw new Error(`${filename} request failed: ${response.status}`);
      const loadedQuestions = await response.json();
      if (!Array.isArray(loadedQuestions)) throw new Error(`${filename} must contain an array.`);
      return loadedQuestions;
    }));
    const loadedQuestions = loadedBanks.flat();
    if (!loadedQuestions.length) throw new Error('Question banks are empty.');
    const questionIds = loadedQuestions.map((question) => question.id);
    if (questionIds.some((id) => id === undefined) || new Set(questionIds).size !== questionIds.length) {
      throw new Error('Question IDs must be present and unique across all banks in the manifest.');
    }
    questions = loadedQuestions;
    questionBankStatus = 'ready';
    renderSidebarSubjects();
    renderSubjects();
    updateDashboard();
    renderQuiz();
    if (state.view === 'answer-key') renderAnswerKey();
  } catch (error) {
    questionBankStatus = 'error';
    console.error('Could not load the question banks listed in question-banks/manifest.json.', error);
    renderSidebarSubjects();
    renderSubjects();
    renderQuiz();
    if (state.view === 'answer-key') renderAnswerKey();
  }
}

loadQuestionBank();
