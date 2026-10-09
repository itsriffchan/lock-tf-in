# Design System & UI/UX Architecture: lock tf in — Reviewer

## 1. Product Vision & Concept

**"lock tf in — Reviewer"** is a focused, distraction-free web application designed for students and self-learners reviewing core computer science and web development material. Built with an editorial, academic-yet-playful visual style, the interface encourages deep study sessions ("locking in") with tactile feedback, structured progress tracking, and interactive quizzes.

### Target Themes & Metaphors
- **The "Lock In" Metaphor**: Heavy typography, high-contrast badges, visual lock icons, and clean card containers convey focus, discipline, and purpose.
- **Bento & Editorial Layout**: Clean grids, subtle outlines, structured information hierarchy, and generous breathing room mirror modern technical documentation and productivity tools.
- **Zero Distraction / High Agency**: Clear separation between views (Dashboard, Quizzer, Study Notes), toggleable immediate vs. deferred answer reveal, and instant retries for incorrect responses.

---

## 2. Visual Identity & Design Tokens

The visual foundation is defined in [styles.css](file:///c:/Users/raisi/Documents/Coding%20Projects/lock-tf-in/styles.css) via CSS Custom Properties (`:root`), providing a cohesive light and dark theme.

### 2.1 Color Palette

| Token | Light Value | Dark Value | Purpose / Usage |
| :--- | :--- | :--- | :--- |
| `--ink` | `#1e2530` | `#eef1f7` | Primary typography, high-contrast dark buttons, icons |
| `--muted` | `#7d8490` | `#aeb7c5` / `#9ea7b6` | Secondary typography, metadata, borders, subtle labels |
| `--line` | `#e8e8e4` | `#35404e` / `#313947` | Subtle card borders, dividers, outline buttons |
| `--surface` | `#ffffff` | `#202733` | Elevated card surfaces, panels, inputs, sidebars |
| `--canvas` | `#f7f7f4` | `#151b24` | Background canvas (warm off-white in light, slate-charcoal in dark) |
| `--blue` | `#5d76e9` | `#5d76e9` | Primary brand accent, active state, hero background |
| `--blue-dark` | `#435bd0` | `#b9c6ff` | Deep accent hover, hero contrast text |
| `--blue-soft` | `#edf0ff` | `#283557` / `#29385f` | Active tab pill, soft highlight backgrounds |
| `--coral` | `#e9816e` | `#ffb4a5` | Subject accent: Web development, warning/error fills |
| `--gold` | `#e1ad4d` | `#f2ca78` | Subject accent: Design principles, streaks, study tips |
| `--green` | `#55a078` | `#73d39a` | Success feedback, correct answers, completed steps |

### 2.2 Typography Hierarchy

Imported via Google Fonts in [index.html](file:///c:/Users/raisi/Documents/Coding%20Projects/lock-tf-in/index.html):
- **Display / Headings**: `'Space Grotesk', sans-serif` (weights 500, 600, 700)
  - Used for the brand title, hero slogans, view titles, card headings, score readouts, and question headers.
  - Distinctive geometric structure with tight tracking (`letter-spacing: -0.04em` to `-0.05em`).
- **Body & Controls**: `'DM Sans', sans-serif` (weights 400, 500, 600, 700)
  - Used for question options, study notes, labels, metadata, and body copy.
  - High legibility, neutral warmth, and crisp rendering on high-DPI displays.
- **Code & Syntax**: `'Consolas', 'Monaco', monospace`
  - Used within the interactive code editor for fill-in-the-blank code challenges.

### 2.3 Spacing, Radius & Shadows
- **Border Radius**:
  - Buttons & Inputs: `8px` – `10px`
  - Cards & Panels: `13px`
  - Hero Section: `19px`
  - Circular Badges & Avatars: `50%`
- **Elevation**:
  - Soft diffuse drop shadow: `--shadow: 0 14px 35px rgba(44, 48, 59, 0.07)`
  - Cards elevate slightly on hover with `transform: translateY(-2px)` or `-3px`.

---

## 3. Information Architecture & View Layouts

The application implements a single-page app (SPA) view-switching architecture inside [script.js](file:///c:/Users/raisi/Documents/Coding%20Projects/lock-tf-in/script.js) and [index.html](file:///c:/Users/raisi/Documents/Coding%20Projects/lock-tf-in/index.html), consisting of an App Shell with three dedicated views:

```
+-------------------------------------------------------------------------------+
| App Shell                                                                     |
| +------------------+--------------------------------------------------------+ |
| | Sidebar (240px)  | Topbar (64px) [Breadcrumb, Quick Search, User Avatar]  | |
| | - Brand Mark     +--------------------------------------------------------+ |
| | - Nav Links      | Page Wrap (Dynamic Active View)                        | |
| |   * Dashboard    |                                                        | |
| |   * Quizzer      |  [1] Dashboard View                                    | |
| |   * Study Notes  |      - Hero Banner ("Lock tf in")                      | |
| | - Subject Links  |      - Subject Cards Grid                              | |
| | - Streak Widget  |      - Weekly Activity & Progress Meters               | |
| | - Theme Toggle   |                                                        | |
| |                  |  [2] Quizzer View                                      | |
| |                  |      - Subject & Mode Selector Screen                  | |
| |                  |      - Active Quiz Session (MCQ & Code Fill)           | |
| |                  |      - Results & Incorrect-Answer Retry Screen         | |
| |                  |                                                        | |
| |                  |  [3] Study Notes View                                  | |
| |                  |      - High-Yield Concept Cards & Bullet Lists         | |
| +------------------+--------------------------------------------------------+ |
+-------------------------------------------------------------------------------+
```

### 3.1 App Shell & Navigation
- **Collapsible Sidebar**:
  - Fixed 240px width on desktop; collapses to an off-canvas slide-out drawer on screens `<= 680px`.
  - Displays the slanted brand mark with padlock SVG glyph.
  - Direct subject jump buttons with color-coded dot indicators (`all`, `blue`, `coral`, `gold`).
  - Study streak indicator card (`3 day streak`).
  - Dark/light mode switcher button.
- **Top Bar**:
  - Breadcrumb navigation showing current workspace depth (`Workspace / Dashboard`).
  - Mobile hamburger button (`#menuButton`).
  - Quick action search icon (`#searchButton`) that jumps to Study Notes.
  - User initials profile pill (`JD`).

### 3.2 Dashboard View (`#dashboardView`)
- **Hero Banner**: High-impact blue card with an SVG padlock graphic, motivational copy, and an immediate "Start a quiz" CTA.
- **Subject Grid**: Bento-styled cards summarizing each topic (Programming, Web Development, Design Principles) with icon glyphs, topic counts, and click-to-quiz triggers.
- **Weekly Progress Panel**:
  - Percentage score meter with animated bar fill.
  - Day-by-day activity bar histogram (Monday through Sunday) highlighting today's bar.
- **Continue Panel**: Quick bookmark card pointing directly to ongoing exercises.

### 3.3 Quizzer View (`#quizzerView`)
- **Setup State (`#quizSetup`)**:
  - Subject cards grid enabling users to filter by specific subject or test "All subjects".
  - Mode selector:
    - **Right away (`immediate`)**: Answer is evaluated immediately upon selection; shows explanation card and unlocks "Next question".
    - **At the end (`end`)**: Answers are recorded without giving away results; full evaluation presented at session completion.
- **Active Session State (`#quizSession`)**:
  - Question container dynamically rendering questions according to type.
  - Live session score tally (`Correct / Checked` in immediate mode, `Answered` in exam mode).
  - Bottom navigation bar: Skip button, live answer-reveal switch toggle, and "Next question / Finish session" action.
  - Right sidebar: Interactive grid of numbered question buttons with color indicators (`current`, `done`).
- **Results Screen**:
  - Total score breakdown (`X correct`, `Y answered`, `Z skipped`).
  - Filter tabs: `All`, `Correct`, `Incorrect`.
  - Detailed review list comparing selected answers with correct answers.
  - Action buttons: "Retry all", "Retry all incorrect" (auto-scoped session), and "Choose another subject".

### 3.4 Study Notes View (`#notesView`)
- 3-column responsive card grid breaking down core principles for Programming, Web Development, and Design.
- High-yield bullet points for quick pre-exam review.

---

## 4. Interaction Patterns & Component Details

### 4.1 Multiple Choice Question (`multiple-choice`)
- Rendered with alphabetical pill badges (`A`, `B`, `C`, `D`).
- State transitions:
  - Default: Border `--line`, background `--surface`.
  - Hover: Border `--blue`, background `--blue-soft`.
  - Selected: Border `--blue`, background `--blue-soft`, text `--blue-dark`.
  - Verified Correct: Border `--green`, background `#eff9f3`, text `#357752`.
  - Verified Incorrect: Border `--coral`, background `#fff1ef`, text `#bb5748`.
- Accompanied by explanation feedback box with clear affirmative/corrective messaging.

### 4.2 Interactive Code Fill (`code-fill`)
- Terminal / Code Editor container with dark theme styling (`#1c2430`), toolbar title bar (`javascript · Fill in the blanks`), and line numbering.
- Code text parts rendered with syntax styling tokens (`.code-keyword`, `.code-string`, etc.).
- Inline interactive `<input class="code-blank" />` fields positioned directly in code flow with custom aria-labels.
- Validation: Inputs evaluate case-insensitively against data answers on clicking "Check answer" or "Save answer".
- Correct blanks illuminate green (`#73d39a`), incorrect blanks highlight coral (`#f09482`).

### 4.3 Toast Feedback (`#toast`)
- Floating toast alert centered at screen bottom.
- Fades in via CSS class `.show` with smooth cubic transitions and auto-dismiss timer (2200ms).

---

## 5. Responsive Design Breakpoints

| Breakpoint | Layout Adaptations |
| :--- | :--- |
| **Desktop (> 960px)** | Full 240px sidebar, 3-column subject and notes grids, 2-column quiz layout with question sidebar. |
| **Tablet (681px – 960px)** | Compact 210px sidebar, 2-column subject grid, stacked dashboard progress panels, single-column quiz layout with horizontal question navigator. |
| **Mobile (<= 680px)** | Off-canvas drawer sidebar with hamburger toggle, single-column bento grids, full-width hero with scaled SVG lock illustration, responsive code blanks with horizontal scrolling. |

---

## 6. Accessibility (a11y) & Usability Considerations

- **Semantic HTML**: `<aside>`, `<nav>`, `<main>`, `<header>`, `<section>`, `<article>`.
- **Keyboard Navigation**: Native `<button>` and `<input>` elements utilized across all interactive controls.
- **ARIA Attributes**:
  - `role="switch"` and `aria-label` on toggle switches.
  - `role="status"` and `aria-live="polite"` on toast alerts.
  - `aria-label` for screen reader descriptions on code input blanks and navigation links.
  - `aria-hidden="true"` on purely decorative SVG illustrations.
- **Color Contrast**: Compliant text contrast ratios maintained across light and dark modes with dedicated dark-mode color overrides.
