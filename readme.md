# lock tf in — Reviewer

> A focused study and quiz workspace built to help students lock in their midterm concepts one session at a time.

![Platform](https://img.shields.io/badge/Platform-Web-blue?style=flat-square)
![Stack](https://img.shields.io/badge/Stack-Vanilla%20HTML%20%7C%20CSS%20%7C%20JS-coral?style=flat-square)
![Dependencies](https://img.shields.io/badge/Dependencies-Zero%20(No%20Build)-green?style=flat-square)

---

## 📖 Overview

**lock tf in — Reviewer** is a responsive, zero-build study application crafted for efficient exam preparation. It combines an editorial dashboard, topic-based quizzes, interactive code-completion challenges, and concise study cheatsheets into a distraction-free environment.

Students can practice on individual subjects or mixed sessions, toggle between immediate feedback and deferred test modes, review detailed mistake breakdowns, and drill specifically on incorrect answers until mastered.

---

## ✨ Features

- **🎯 Multi-Subject Review**:
  - **Programming Basics**: Variables, control flow, functions, and data structures.
  - **Web Development**: Semantic HTML, CSS layout/styling, and responsive design.
  - **Design Principles**: Visual hierarchy, proximity, layout grouping, and contrast.
  - **CS0075 Machine Learning Algorithms**: A combined review covering linear and logistic regression, softmax, and Naive Bayes.
  - **CS0075 Code Snippets & Fill-in-the-Blanks**: A single code-practice subject spanning regression, Naive Bayes, imports, preprocessing, KNN, and regularization. Individual question labels identify each topic and exercise format.
  - **All Subjects**: Comprehensive mixed study set across all banks.
- **⚡ Dual Evaluation Modes**:
  - **Right Away (Immediate)**: Instant feedback and explanations after each answer.
  - **At the End (Exam Simulation)**: Answers are stored silently; complete score and question-by-question breakdown are presented at the end.
- **💻 Interactive Question Types Supported**:
  - **Multiple Choice (`multiple-choice`)**: Alphabetical choice cards with visual feedback.
  - **Multi-Answer (`multi-answer`)**: Select multiple options with checkbox pills and validation.
  - **Fill-in-the-Blank (`fill-blank`)**: Text input with case-insensitive validation.
  - **Interactive Code Fill (`code-fill`)**: Dark-themed syntax-highlighted code editor with inline interactive blanks and automatic validation.
- **🎛️ Quiz Format Selection**: Choose subjects first, then select one or more question formats on a separate setup step. Choose mixed to include every available format.
- **🔀 Quiz Shuffling**: Optionally shuffle question order; answer choices are shuffled automatically for choice-based questions.
- **🔄 Smart Review & Targeted Retries**:
  - Filter session results by *All*, *Correct*, or *Incorrect*.
  - **"Retry all incorrect"** button dynamically scopes a new quiz round containing only previously missed questions.
- **📊 Progress & Habit Tracking**:
  - Weekly activity histogram and weekly goal completion bar.
  - Current study streak indicator (`3 day streak`).
  - Progress and answer state persisted locally in browser `localStorage`.
- **🌙 Dark & Light Modes**:
  - One-click toggle in the sidebar with instant color scheme switching and persistence.
- **📱 Responsive Layout**:
  - Desktop multi-column grid, tablet-optimized views, and mobile off-canvas slide-out navigation.

---

## 🗂️ Project Structure

```text
lock-tf-in/
├── index.html              # Core application markup, app shell, and view panels
├── styles.css              # Custom CSS design system, typography, dark mode & responsiveness
├── script.js               # Application logic, quiz engine, state machine, and dynamic rendering
├── template.json           # Reference schema template for defining new question types
├── questions.json          # Master question database (used as fallback or standalone bank)
├── question-banks/         # Modular question datasets categorized by subject
│   ├── manifest.json       # List of bank JSON filenames loaded by the app
│   ├── template.json       # Reference schema for modular question banks
│   ├── CS0075-Supervised-Learning-to-Naive-Bayes-Question-Bank.json
│   ├── CS0075-Regression-Naive-Bayes-Question-Bank.json
│   └── CS0075-Code-Snippets-and-Fill-Blanks-Question-Bank.json
├── design.md               # UI/UX architecture and design system documentation
├── agents.md               # AI agent operations guide, codebase conventions & rules
└── readme.md               # Project documentation (this file)
```

---

## 🚀 Getting Started

Because **lock tf in** is built with modern vanilla web technologies, there are no bundlers, compilation steps, or `node_modules` required.

### Recommended: Run with a Local Web Server

The app loads the JSON banks listed in `question-banks/manifest.json`. To let the browser fetch the manifest and bank files without `file:///` CORS restrictions, run a local static server:

#### Using Node.js:
```bash
npx serve .
# or
npx http-server .
```

#### Using Python 3:
```bash
python -m http.server 8000
```

#### Using VS Code / IDE:
Install the **Live Server** extension and click **"Go Live"** from [index.html](file:///c:/Users/raisi/Documents/Coding%20Projects/lock-tf-in/index.html).

> **Note**: If opened directly via file protocol (`file:///...`), the application automatically catches the fetch error and falls back to its bundled in-memory question bank, ensuring immediate usability.

### Deploying to Vercel

This is a static site, so it does not need a build command, package installation, or a `vercel.json` file.

1. Push the project folder to a GitHub repository, including `index.html`, `styles.css`, `script.js`, and the `question-banks/` directory.
2. In Vercel, choose **Add New → Project** and import that GitHub repository.
3. Set the Framework Preset to **Other** and leave the Build Command and Output Directory empty.
4. Deploy. Vercel will serve `index.html` and the question-bank JSON files as static assets. Future pushes to the connected branch deploy automatically.

Keep `question-banks/manifest.json` and each bank it lists in the repository; otherwise the app cannot load those questions on the deployed site.

### Adding a Question Bank

1. Add a JSON file inside `question-banks/` using the question structure in [template.json](./template.json).
2. Add the filename to `question-banks/manifest.json`.
3. Serve or reload the app. Questions with new subject IDs are automatically shown as subjects; use an existing subject ID to add questions to an existing subject.

---

## 📝 Question Schema & Bank Authoring

To add or modify questions, reference the schema provided in [template.json](file:///c:/Users/raisi/Documents/Coding%20Projects/lock-tf-in/template.json) and existing files in `question-banks/`.

### 1. Multiple Choice (`multiple-choice`)
```json
{
  "id": 101,
  "subject": "programming",
  "label": "Programming",
  "type": "multiple-choice",
  "title": "Which keyword declares a constant in JavaScript?",
  "options": ["let", "var", "const", "static"],
  "answer": 2,
  "explanation": "const declares a variable whose binding cannot be reassigned."
}
```

### 2. Code Fill-in-the-Blank (`code-fill`)
```json
{
  "id": 104,
  "subject": "programming",
  "label": "Programming",
  "type": "code-fill",
  "title": "Complete the function so it returns the product of two numbers.",
  "explanation": "The return statement should multiply the two parameters.",
  "code": [
    [
      { "text": "function multiply(a, b) {" }
    ],
    [
      { "text": "  return ", "className": "code-keyword" },
      { "blank": "a", "aria": "first value" },
      { "text": " * " },
      { "blank": "b", "aria": "second value" },
      { "text": ";" }
    ],
    [
      { "text": "}" }
    ]
  ]
}
```

---

## 💾 Local Storage Persistence

The app saves state to the user's browser:
- `midtermAnswers`: Record of answered question indices, correctness flags, and entered values.
- `midtermDark`: Theme preference (`"true"` or `"false"`).

---

## 📄 License

Open-source under the MIT License. Feel free to adapt for personal study groups or classroom review sessions.
