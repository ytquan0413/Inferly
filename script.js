const appState = {
  screen: "welcome",
  goalSelections: [],
  levelAnswers: {},
  assignedLevel: null,
  storyVariant: 0,
  onboardingStage: "story",
  onboardingAnswer: null,
  onboardingWordAnswered: false,
  sessionWordIndex: null,
  sessionStage: "story",
  sessionAnswers: {},
  transferAnswers: {},
  confidence: 4,
  isSpeaking: false,
  speechReady: false,
};

const screenOrder = [
  "welcome",
  "goals",
  "assessment",
  "firstExperience",
  "dashboard",
  "session",
  "summary",
  "progress",
];

const goalOptions = [
  {
    id: "reading",
    title: "Improve reading comprehension",
    description: "Build the habit of understanding a full passage before reaching for help.",
  },
  {
    id: "dictionary",
    title: "Reduce dictionary usage",
    description: "Practice staying in the text and using nearby clues to infer meaning.",
  },
  {
    id: "nuance",
    title: "Understand nuance",
    description: "Notice tone, intention, and what a word suggests in a new situation.",
  },
];

const levelParagraph = `Mina joined the volunteer team on a rainy Saturday. At first she felt hesitant, but she noticed how each person quietly looked for what needed attention instead of waiting for instructions. By noon, the room felt orderly and warm, even though no one had given a speech about teamwork. She left thinking that the group had been quietly effective rather than dramatic.`;

const assessmentQuestions = [
  {
    id: "q1",
    prompt: "What does \"hesitant\" most likely suggest about Mina at the beginning?",
    options: [
      "She felt unsure about joining in",
      "She was already leading the group",
      "She wanted to leave immediately",
      "She had forgotten the schedule",
    ],
    correct: 0,
  },
  {
    id: "q2",
    prompt: "What does the paragraph imply about the volunteer team?",
    options: [
      "They were loud but disorganized",
      "They worked well without needing attention",
      "They depended on one person for direction",
      "They were not interested in helping",
    ],
    correct: 1,
  },
];

const onboardingWord = {
  word: "meticulous",
  paragraph:
    "Nora packed for the field trip with a meticulous routine. She checked every zipper twice, labeled the snack containers, and folded the map into a clear plastic sleeve so it would stay dry.",
  question: "What does \"meticulous\" most likely mean here?",
  options: [
    "careless and rushed",
    "easily distracted",
    "very careful about small details",
    "excited to travel",
  ],
  correct: 2,
  explanation:
    "Nora double-checks, labels, and protects each item. Those actions suggest close attention to small details, so the word points to carefulness rather than speed.",
  visual: {
    key: "meticulous",
    title: "Orderly preparation",
    caption: "A carefully packed bag with labeled items supports the idea of close attention to detail.",
  },
};

const sessionStory = {
  title: "The Last Lantern",
  readTime: "12 min remaining",
  intro:
    "Read through the story first. Tap the highlighted words when you feel ready to infer their meaning.",
  paragraphs: [
    `By the time Leena reached the harbor, the market had gone quiet. A few vendors were still stacking crates, but the earlier crowd had already vanished into the fog. She paused beside an ${highlightWord("idle", 0)} fishing boat that rocked gently against the dock, its ropes loose but untouched.`,
    `At the end of the pier, an old keeper was trimming the wick of the last lantern. His movements were ${highlightWord("deliberate", 1)}, as if every turn of the glass mattered. Leena watched in silence and noticed that the light grew steadier each time he adjusted it.`,
    `When she finally asked why he stayed so late, the keeper gave a ${highlightWord("wry", 2)} smile. "Because the boats that arrive late still need a path," he said, lifting the lantern until the fog seemed a little less certain of itself.`,
  ],
  words: [
    {
      id: 0,
      word: "idle",
      clueSentence:
        "A few vendors were still stacking crates, but the earlier crowd had already vanished into the fog. She paused beside an idle fishing boat...",
      question: "What does \"idle\" most likely mean here?",
      options: [
        "moving quickly toward shore",
        "not currently being used",
        "damaged by the weather",
        "painted in bright colors",
      ],
      correct: 1,
      hint:
        "Look at what the boat is doing and what the busy market is no longer doing.",
      explanation:
        "The market is winding down, and the boat is simply rocking in place with loose ropes. Those details suggest it is inactive right now, not broken or moving.",
      transfer:
        "After the storm, the factory sat idle for two days while repairs were completed.",
      transferQuestion:
        "What does \"idle\" suggest in this new sentence?",
      transferOptions: [
        "The factory was operating at full speed",
        "The factory was temporarily inactive",
        "The factory was too small to matter",
        "The factory had just opened",
      ],
      transferCorrect: 1,
      visual: {
        key: "idle",
        title: "Boat at rest",
        caption: "A still boat at the dock reinforces the sense of something not currently in use.",
      },
    },
    {
      id: 1,
      word: "deliberate",
      clueSentence:
        "His movements were deliberate, as if every turn of the glass mattered.",
      question: "What does \"deliberate\" most likely mean here?",
      options: [
        "slow and intentional",
        "nervous and clumsy",
        "secretive and suspicious",
        "playful and relaxed",
      ],
      correct: 0,
      hint: "Notice the phrase about every turn of the glass mattering.",
      explanation:
        "The keeper adjusts the lantern with care because each movement affects the light. The sentence frames his actions as purposeful and controlled, not accidental.",
      transfer:
        "The composer made a deliberate choice to leave a long silence before the final note.",
      transferQuestion:
        "What does \"deliberate\" imply in this new context?",
      transferOptions: [
        "The silence happened by mistake",
        "The choice was thoughtful and intentional",
        "The music became impossible to hear",
        "The audience was confused by the rules",
      ],
      transferCorrect: 1,
      visual: {
        key: "deliberate",
        title: "Intentional movement",
        caption: "Careful hands and a steady light help communicate purposeful, controlled action.",
      },
    },
    {
      id: 2,
      word: "wry",
      clueSentence:
        "The keeper gave a wry smile. \"Because the boats that arrive late still need a path,\" he said...",
      question: "What does \"wry\" most likely mean here?",
      options: [
        "deeply angry",
        "quietly amused with a knowing edge",
        "embarrassed and apologetic",
        "wide and celebratory",
      ],
      correct: 1,
      hint: "Pair the smile with the keeper's gently pointed reply.",
      explanation:
        "His smile comes with a subtle answer that carries both warmth and a bit of dry perspective. That combination points to restrained, knowing amusement.",
      transfer:
        "Jules gave a wry laugh when the 'temporary' fix failed for the third time.",
      transferQuestion:
        "What does \"wry\" most likely communicate here?",
      transferOptions: [
        "pure excitement",
        "humor mixed with mild irony",
        "complete confusion",
        "fear of speaking up",
      ],
      transferCorrect: 1,
      visual: {
        key: "wry",
        title: "Knowing smile",
        caption: "A small smile with a raised brow suggests humor mixed with perspective.",
      },
    },
  ],
};

const storyIntroVariants = [
  "Read through the story first. Tap the highlighted words when you feel ready to infer their meaning.",
  "Stay in the story until a clue starts to stand out, then open one highlighted word.",
  "Treat this like guided reading. Follow the narrative first, then pause only when you notice enough context.",
];

const praiseMessages = [
  "Nice catch - you noticed the detail.",
  "Strong read - the context gave it away.",
  "You followed the clue trail well.",
];

const hintMessages = [
  "Look closely at what she did.",
  "Stay with the surrounding action before deciding.",
  "The sentence is pointing you somewhere specific.",
];

const explanationMessages = [
  "Now let’s unpack why that interpretation fits.",
  "Here’s the reasoning path the text is inviting.",
  "This is where the context does the teaching.",
];

const transferMessages = [
  "See if the meaning still holds when the situation changes.",
  "A new sentence reveals whether the idea really stuck.",
  "This next step checks understanding, not memory.",
];

const screenContainer = document.getElementById("screenContainer");
const progressFill = document.getElementById("progressFill");
const progressLabel = document.getElementById("progressLabel");
const backButton = document.getElementById("backButton");
let availableVoices = [];
let preferredVoice = null;

backButton.addEventListener("click", goBack);
initializeSpeech();

function highlightWord(word, id) {
  return `
    <span class="inline-word-group">
      <button class="story-word ${wordStateClass(id)}" data-word-id="${id}" type="button">${word}</button>
      <button class="audio-chip" data-speak-text="${word}" type="button" aria-label="Hear ${word}">
        <span aria-hidden="true">Listen</span>
      </button>
    </span>
  `;
}

function wordStateClass(id) {
  if (appState.sessionWordIndex === id && appState.screen === "session") {
    return "active";
  }

  if (appState.sessionAnswers[id] !== undefined) {
    return "opened";
  }

  return "";
}

function render() {
  updateProgress();
  const screen = getScreenTemplate(appState.screen);
  screenContainer.innerHTML = screen;
  document.body.dataset.screen = appState.screen;
  bindScreenEvents();
}

function updateProgress() {
  const progressMap = {
    welcome: { label: "Welcome", width: "10%" },
    goals: { label: "Your goals", width: "22%" },
    assessment: { label: "Light assessment", width: "34%" },
    firstExperience: { label: "Try Inferly", width: "46%" },
    dashboard: { label: "Home", width: "58%" },
    session: { label: "Learning session", width: "74%" },
    summary: { label: "Session summary", width: "88%" },
    progress: { label: "Progress", width: "100%" },
  };

  const current = progressMap[appState.screen];
  progressLabel.textContent = current.label;
  progressFill.style.width = current.width;

  if (appState.screen === "welcome") {
    backButton.classList.add("hidden");
  } else {
    backButton.classList.remove("hidden");
  }
}

function getScreenTemplate(screen) {
  switch (screen) {
    case "welcome":
      return renderWelcome();
    case "goals":
      return renderGoals();
    case "assessment":
      return renderAssessment();
    case "firstExperience":
      return renderFirstExperience();
    case "dashboard":
      return renderDashboard();
    case "session":
      return renderSession();
    case "summary":
      return renderSummary();
    case "progress":
      return renderProgress();
    default:
      return renderWelcome();
  }
}

function renderWelcome() {
  return `
    <div class="screen hero">
      <section class="hero-card">
        <div class="hero-badge">Smart reading coach</div>
        <h2>Learn to understand, not memorize.</h2>
        <p>Infer meaning from real context and build the reasoning habits that make reading feel natural.</p>
        <div class="illustration-panel">
          <strong>Why Inferly feels different</strong>
          <p class="coach-line">Guided attention, vivid feedback, and explanations built around evidence in the text.</p>
          <div class="signal-grid">
            <div class="signal-card">
              <strong>Read first</strong>
              <span>Short stories anchor every session.</span>
            </div>
            <div class="signal-card">
              <strong>Infer</strong>
              <span>Use nearby clues instead of instant definitions.</span>
            </div>
            <div class="signal-card">
              <strong>Reason</strong>
              <span>Explanations connect behavior to meaning.</span>
            </div>
            <div class="signal-card">
              <strong>Transfer</strong>
              <span>Apply understanding in a new context.</span>
            </div>
          </div>
        </div>
      </section>

      <div class="button-row footer-action">
        <button class="primary-button" data-action="next">Get Started</button>
        <button class="secondary-button" data-action="next">Log in</button>
      </div>
    </div>
  `;
}

function renderGoals() {
  return `
    <div class="screen">
      <section class="content-card">
        <div class="section-header">
          <div>
            <h2>What do you want Inferly to help with?</h2>
            <p>Select one or more. We’ll use this to shape your reading path.</p>
          </div>
          <div class="pill">Personalization</div>
        </div>
        <div class="coach-banner coach-banner-blue">
          <strong>We’ll guide your attention differently based on your goal.</strong>
          <span>Reading confidence, dictionary independence, and nuance each nudge the session in a slightly different way.</span>
        </div>
      </section>

      <section class="options-grid">
        ${goalOptions
          .map(
            (goal) => `
              <button class="option-card ${appState.goalSelections.includes(goal.id) ? "selected" : ""}" data-goal-id="${goal.id}" type="button">
                <strong>${goal.title}</strong>
                <span>${goal.description}</span>
              </button>
            `
          )
          .join("")}
      </section>

      <div class="button-row footer-action">
        <button class="primary-button" data-action="goals-next" ${appState.goalSelections.length ? "" : "disabled"}>Continue</button>
      </div>
    </div>
  `;
}

function renderAssessment() {
  return `
    <div class="screen">
      <section class="content-card">
        <div class="section-header">
          <div>
            <h2>Let’s get a feel for your reading style.</h2>
            <p>No score, no timer. Just use the paragraph and infer what the text suggests.</p>
          </div>
          <div class="pill">Low pressure</div>
        </div>
        <div class="coach-banner coach-banner-violet">
          <strong>Think out loud in your head.</strong>
          <span>This is closer to guided reading than a test.</span>
        </div>
      </section>

      <section class="content-card">
        <p class="assessment-copy">${levelParagraph}</p>
      </section>

      ${assessmentQuestions
        .map(
          (question) => `
            <section class="content-card question-block">
              <h3>${question.prompt}</h3>
              ${question.options
                .map(
                  (option, index) => `
                    <button class="choice-card ${appState.levelAnswers[question.id] === index ? "selected" : ""}" data-assessment-id="${question.id}" data-option-index="${index}" type="button">
                      ${option}
                    </button>
                  `
                )
                .join("")}
            </section>
          `
        )
        .join("")}

      <div class="button-row footer-action">
        <button class="primary-button" data-action="assessment-next" ${Object.keys(appState.levelAnswers).length === assessmentQuestions.length ? "" : "disabled"}>See my starting level</button>
      </div>
    </div>
  `;
}

function renderFirstExperience() {
  const stage = appState.onboardingStage;
  const selected = appState.onboardingAnswer;
  const answered = appState.onboardingWordAnswered;
  const isCorrect = selected === onboardingWord.correct;
  const coachMessage = answered
    ? "You got to the meaning by noticing behavior in the sentence."
    : selected === null
      ? "Tap the highlighted word to unlock the first reasoning prompt."
      : isCorrect
        ? randomFrom(praiseMessages, selected)
        : randomFrom(hintMessages, selected);
  return `
    <div class="screen">
      <section class="content-card">
        <div class="section-header">
          <div>
            <h2>Try one inference moment.</h2>
            <p>This is the feeling we want users to get right away: understanding through context, not a definition card.</p>
          </div>
          <div class="pill">Level ${appState.assignedLevel || 1}</div>
        </div>
        <div class="coach-banner ${answered ? "coach-banner-green" : "coach-banner-blue"}">
          <strong>Coach cue</strong>
          <span>${coachMessage}</span>
        </div>
      </section>

      <section class="story-card ${stage === "question" ? "story-card-dimmed" : ""}">
        <div class="story-header">
          <div>
            <h3>First experience</h3>
            <p class="story-meta">Tap the highlighted word when you’re ready.</p>
          </div>
          <div class="mini-badge">1 word</div>
        </div>
        ${renderWordVisual(onboardingWord.visual)}
        <p class="story-text">${onboardingWord.paragraph.replace(
          onboardingWord.word,
          `<span class="inline-word-group"><button class="story-word active" data-action="open-onboarding-word" type="button">${onboardingWord.word}</button><button class="audio-chip" data-speak-text="${onboardingWord.word}" type="button" aria-label="Hear ${onboardingWord.word}"><span aria-hidden="true">Listen</span></button></span>`
        )}</p>
      </section>

      ${
        stage === "question" || answered
          ? `
            <section class="content-card focus-card ${answered ? "state-revealed" : "state-question"}">
              <h3>${onboardingWord.question}</h3>
              <div class="helper-row">
                <button class="audio-chip audio-chip-standalone" data-speak-text="${onboardingWord.word}" type="button" aria-label="Hear ${onboardingWord.word}">
                  <span aria-hidden="true">Hear "${onboardingWord.word}"</span>
                </button>
              </div>
              <div class="options-grid">
                ${onboardingWord.options
                  .map((option, index) => {
                    let classes = "choice-card";
                    if (answered && index === onboardingWord.correct) {
                      classes += " correct";
                    } else if (answered && selected === index && index !== onboardingWord.correct) {
                      classes += " incorrect";
                    } else if (selected === index) {
                      classes += " selected";
                    }

                    return `
                      <button class="${classes}" data-onboarding-option="${index}" type="button" ${answered ? "disabled" : ""}>
                        ${option}
                      </button>
                    `;
                  })
                  .join("")}
              </div>
              ${
                answered
                  ? `
                    <div class="explanation-box glow-success">
                      <strong>Reasoning</strong>
                      <p class="feedback-note">${onboardingWord.explanation}</p>
                    </div>
                  `
                  : ""
              }
            </section>
          `
          : ""
      }

      <div class="button-row footer-action">
        <button class="primary-button" data-action="${stage === "story" ? "open-onboarding-word" : answered ? "to-dashboard" : "submit-onboarding"}" ${stage === "question" && selected === null ? "disabled" : ""}>${stage === "story" ? "Infer the word" : answered ? "Go to dashboard" : "See explanation"}</button>
      </div>
    </div>
  `;
}

function renderDashboard() {
  return `
    <div class="screen">
      <section class="dashboard-head">
        <div class="stat-card large">
          <div class="pulse-dot"></div>
          <div class="metric-label">Continue learning</div>
          <div class="metric-value">15 min</div>
          <p>Pick up where you left off with a story designed for contextual inference.</p>
          <div class="button-row" style="margin-top: 16px;">
            <button class="primary-button" data-action="start-session">Continue Learning</button>
          </div>
        </div>

        <div class="stats-grid">
          <div class="stat-card">
            <strong>Today’s progress</strong>
            <span class="metric-label">${sessionProgressLabel()}</span>
          </div>
          <div class="stat-card">
            <strong>Starting level</strong>
            <span class="metric-label">Level ${appState.assignedLevel || 1}</span>
          </div>
        </div>
      </section>

      <section class="motivation-card">
        <div class="section-header">
          <div>
            <h3>Understanding is compounding</h3>
            <p>You inferred 5 words yesterday, and your transfer accuracy improved over the last three sessions.</p>
          </div>
          <div class="score-pill">+12%</div>
        </div>
        <div class="coach-banner coach-banner-yellow">
          <strong>Today’s coaching move</strong>
          <span>We’ll highlight clue-rich moments and help you look in the right place before revealing the reasoning.</span>
        </div>
      </section>

      <section class="summary-grid">
        <article class="summary-item">
          <strong>Today’s focus</strong>
          <span>Learn to notice how tone and action shape meaning in narrative text.</span>
        </article>
        <article class="summary-item">
          <strong>Why this matters</strong>
          <span>The goal is smoother reading with fewer interruptions from dictionary checks.</span>
        </article>
      </section>

      <div class="button-row footer-action">
        <button class="secondary-button" data-action="open-progress">View Progress</button>
      </div>
    </div>
  `;
}

function renderSession() {
  if (appState.sessionWordIndex === null) {
    return renderStoryStage();
  }

  const word = sessionStory.words[appState.sessionWordIndex];
  if (appState.sessionStage === "inference") {
    return renderInferenceStage(word);
  }

  if (appState.sessionStage === "explanation") {
    return renderExplanationStage(word);
  }

  return renderTransferStage(word);
}

function renderStoryStage() {
  const completed = Object.keys(appState.transferAnswers).length;
  const variantClass = `story-variant-${appState.storyVariant}`;
  return `
    <div class="screen">
      <section class="story-card ${variantClass}">
        <div class="story-header">
          <div>
            <h3>${sessionStory.title}</h3>
            <p class="story-meta">${storyIntroVariants[appState.storyVariant]}</p>
          </div>
          <div class="mini-badge">${sessionStory.readTime}</div>
        </div>
        <div class="coach-banner coach-banner-blue">
          <strong>Reading mode</strong>
          <span>Stay with the narrative first. Open a word only when the surrounding clues start to feel useful.</span>
        </div>
        ${sessionStory.paragraphs
          .map((paragraph) => `<p class="story-text">${paragraph}</p>`)
          .join("")}
        <div class="story-footer">
          <span class="muted-text">${completed}/3 transfer checks completed</span>
          <button class="nav-chip" data-action="open-first-word" type="button">
            ${completed ? "Continue" : "Start with a highlighted word"}
          </button>
        </div>
      </section>

      <section class="content-card">
        <h3>Reading flow stays intact</h3>
        <p>No dictionary popups. You choose when to pause and think.</p>
      </section>

      <div class="button-row footer-action">
        <button class="primary-button" data-action="open-first-word">Open inference task</button>
      </div>
    </div>
  `;
}

function renderInferenceStage(word) {
  const selected = appState.sessionAnswers[word.id];
  const showFeedback = selected !== undefined;
  const isCorrect = selected === word.correct;
  const coachMessage = !showFeedback
    ? "Start with the clue-rich sentence, then look at the tone and nearby action."
    : isCorrect
      ? randomFrom(praiseMessages, word.id + selected)
      : randomFrom(hintMessages, word.id + selected);

  return `
    <div class="screen">
      <section class="content-card">
        <div class="section-header">
          <div>
            <h2>What does "${word.word}" most likely mean?</h2>
            <p>Stay with the nearby context before choosing.</p>
          </div>
          <div class="pill">Inference</div>
        </div>
        <div class="coach-banner ${showFeedback ? (isCorrect ? "coach-banner-green" : "coach-banner-yellow") : "coach-banner-blue"}">
          <strong>Coach cue</strong>
          <span>${coachMessage}</span>
        </div>
      </section>

      <section class="content-card ${showFeedback && !isCorrect ? "content-card-shake" : ""}">
        ${renderWordVisual(word.visual)}
        <div class="highlight-box ${showFeedback ? (isCorrect ? "highlight-correct" : "highlight-hint") : "highlight-focus"}">
          <div class="label-row">
            <strong>Relevant sentence</strong>
            <button class="audio-chip audio-chip-standalone" data-speak-text="${word.word}" type="button" aria-label="Hear ${word.word}">
              <span aria-hidden="true">Hear "${word.word}"</span>
            </button>
          </div>
          <p class="feedback-note">${word.clueSentence}</p>
        </div>
      </section>

      <section class="options-grid">
        ${word.options
          .map((option, index) => {
            let classes = "choice-card";
            if (showFeedback && index === word.correct) {
              classes += " correct";
            } else if (showFeedback && selected === index && index !== word.correct) {
              classes += " incorrect";
            } else if (selected === index) {
              classes += " selected";
            }

            return `
              <button class="${classes}" data-session-option="${index}" type="button">
                ${option}
              </button>
            `;
          })
          .join("")}
      </section>

      ${
        showFeedback && !isCorrect
          ? `
            <section class="hint-box glow-hint">
              <strong>Hint</strong>
              <p>${word.hint}</p>
            </section>
          `
          : ""
      }

      <div class="button-row footer-action">
        <button class="primary-button" data-action="to-explanation" ${showFeedback ? "" : "disabled"}>See reasoning</button>
      </div>
    </div>
  `;
}

function renderExplanationStage(word) {
  return `
    <div class="screen">
      <section class="content-card">
        <div class="section-header">
          <div>
            <h2>Why this meaning fits</h2>
            <p>Inferly explains how the context points to the answer instead of replacing it with a definition.</p>
          </div>
          <div class="pill">Reasoning</div>
        </div>
        <div class="coach-banner coach-banner-violet">
          <strong>Explanation unlocked</strong>
          <span>${randomFrom(explanationMessages, word.id)}</span>
        </div>
      </section>

      <section class="content-card">
        ${renderWordVisual(word.visual)}
        <div class="highlight-box highlight-spotlight">
          <div class="label-row">
            <strong>Context clue</strong>
            <button class="audio-chip audio-chip-standalone" data-speak-text="${word.word}" type="button" aria-label="Hear ${word.word}">
              <span aria-hidden="true">Hear "${word.word}"</span>
            </button>
          </div>
          <p class="feedback-note">${word.clueSentence}</p>
        </div>
        <div class="explanation-box glow-violet" style="margin-top: 14px;">
          <strong>Reasoning explanation</strong>
          <p class="feedback-note">${word.explanation}</p>
        </div>
      </section>

      <div class="button-row footer-action">
        <button class="primary-button" data-action="to-transfer">Try it in a new context</button>
      </div>
    </div>
  `;
}

function renderTransferStage(word) {
  const selected = appState.transferAnswers[word.id];
  const showFeedback = selected !== undefined;
  const isCorrect = selected === word.transferCorrect;

  return `
    <div class="screen">
      <section class="content-card">
        <div class="section-header">
          <div>
            <h2>Can you transfer that understanding?</h2>
            <p>The same word appears in a different context. This is the real check for understanding.</p>
          </div>
          <div class="pill">Transfer</div>
        </div>
        <div class="coach-banner ${showFeedback ? (isCorrect ? "coach-banner-green" : "coach-banner-yellow") : "coach-banner-blue"}">
          <strong>Transfer check</strong>
          <span>${showFeedback ? (isCorrect ? randomFrom(praiseMessages, word.id + 10) : "Look for the same core idea in a different situation.") : randomFrom(transferMessages, word.id)}</span>
        </div>
      </section>

      <section class="content-card">
        ${renderWordVisual(word.visual)}
        <p class="transfer-copy">${word.transfer}</p>
      </section>

      <section class="content-card question-block">
        <h3>${word.transferQuestion}</h3>
        ${word.transferOptions
          .map((option, index) => {
            let classes = "choice-card";
            if (showFeedback && index === word.transferCorrect) {
              classes += " correct";
            } else if (showFeedback && selected === index && index !== word.transferCorrect) {
              classes += " incorrect";
            } else if (selected === index) {
              classes += " selected";
            }

            return `
              <button class="${classes}" data-transfer-option="${index}" type="button">
                ${option}
              </button>
            `;
          })
          .join("")}
      </section>

      <div class="button-row footer-action">
        <button class="primary-button" data-action="next-word" ${showFeedback ? "" : "disabled"}>${nextWordLabel()}</button>
      </div>
    </div>
  `;
}

function renderSummary() {
  const transferCorrect = getTransferScore();
  return `
    <div class="screen">
      <section class="summary-card">
        <div class="section-header">
          <div>
            <h2>You built understanding through context.</h2>
            <p>Today’s session focused on whether meaning held up in a new situation, not just in the original story.</p>
          </div>
          <div class="score-pill">${transferCorrect}/3 transfer wins</div>
        </div>
        <div class="coach-banner coach-banner-green">
          <strong>Session reflection</strong>
          <span>You practiced noticing evidence, testing a meaning, and carrying that idea into a new context.</span>
        </div>
      </section>

      <section class="word-grid">
        ${sessionStory.words
          .map((word) => {
            const correct = appState.transferAnswers[word.id] === word.transferCorrect;
            return `
              <article class="word-status">
                <strong>${word.word}</strong>
                <div class="status-row">
                  <span class="word-chip ${correct ? "good" : "soft"}">${correct ? "Understood" : "Unsure"}</span>
                </div>
                <span>${correct ? "You carried the meaning into a new context." : "You saw part of the pattern, but the transfer check was still shaky."}</span>
              </article>
            `;
          })
          .join("")}
      </section>

      <section class="summary-grid">
        <article class="summary-item">
          <strong>Understanding feedback</strong>
          <span>You understood ${transferCorrect} out of 3 words in new contexts.</span>
        </article>
      </section>

      <section class="content-card">
        <h3>How confident do you feel?</h3>
        <div class="confidence-row" style="margin-top: 12px;">
          ${[1, 2, 3, 4, 5]
            .map(
              (value) => `
                <button class="confidence-button ${appState.confidence === value ? "selected" : ""}" data-confidence="${value}" type="button">${value}</button>
              `
            )
            .join("")}
        </div>
      </section>

      <div class="button-row footer-action">
        <button class="primary-button" data-action="open-progress">View progress</button>
      </div>
    </div>
  `;
}

function renderProgress() {
  const transferCorrect = getTransferScore();
  const trendValues = [42, 51, 57, 63, 71, 78];
  const trendLabels = ["W1", "W2", "W3", "W4", "W5", "W6"];
  const chartPoints = buildTrendPoints(trendValues);
  const progressDelta = trendValues[trendValues.length - 1] - trendValues[0];
  return `
    <div class="screen">
      <section class="summary-card">
        <div class="section-header">
          <div>
            <h2>Your inference ability is improving.</h2>
            <p>Inferly tracks how well understanding transfers, because that’s what supports real reading fluency.</p>
          </div>
          <div class="score-pill">${Math.round((transferCorrect / 3) * 100)}%</div>
        </div>
        <div class="coach-banner coach-banner-blue">
          <strong>Progress focus</strong>
          <span>We care most about your ability to transfer meaning, because that’s what helps with real reading.</span>
        </div>
      </section>

      <section class="progress-grid">
        <article class="progress-card">
          <strong>Understanding score</strong>
          <span>${Math.round((transferCorrect / 3) * 100)}% of transfer questions answered correctly</span>
        </article>
        <article class="progress-card">
          <strong>Word mastery</strong>
          <span>New: 8 words · Understood: 14 words · Mastered: 6 words</span>
        </article>
      </section>

      <section class="chart-card">
        <div class="chart-head">
          <div>
            <h3>Learning trend</h3>
            <p class="chart-note">Your transfer accuracy is climbing steadily across recent weeks.</p>
          </div>
          <div class="trend-pill">+${progressDelta}%</div>
        </div>
        <div class="line-chart-card">
          <div class="chart-scale">
            <span>80%</span>
            <span>60%</span>
            <span>40%</span>
          </div>
          <div class="line-chart-shell">
            <svg class="line-chart" viewBox="0 0 320 190" preserveAspectRatio="none" aria-label="Learning trend chart">
              <defs>
                <linearGradient id="trendLineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stop-color="#7b3ff2"></stop>
                  <stop offset="100%" stop-color="#355cff"></stop>
                </linearGradient>
                <linearGradient id="trendAreaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stop-color="rgba(123, 63, 242, 0.28)"></stop>
                  <stop offset="100%" stop-color="rgba(53, 92, 255, 0.02)"></stop>
                </linearGradient>
              </defs>
              <line x1="28" y1="30" x2="300" y2="30" class="grid-line"></line>
              <line x1="28" y1="95" x2="300" y2="95" class="grid-line"></line>
              <line x1="28" y1="160" x2="300" y2="160" class="grid-line"></line>
              <path d="${chartPoints.areaPath}" class="trend-area"></path>
              <path d="${chartPoints.linePath}" class="trend-line"></path>
              ${chartPoints.points
                .map(
                  (point, index) => `
                    <g class="trend-point-group" style="animation-delay: ${index * 90}ms;">
                      <circle cx="${point.x}" cy="${point.y}" r="8" class="trend-point-ring"></circle>
                      <circle cx="${point.x}" cy="${point.y}" r="4.5" class="trend-point-core"></circle>
                    </g>
                  `
                )
                .join("")}
            </svg>
            <div class="chart-label-row">
              ${trendLabels.map((label) => `<span class="bar-label">${label}</span>`).join("")}
            </div>
          </div>
        </div>
        <div class="trend-summary">
          <div class="trend-summary-item">
            <strong>Current pace</strong>
            <span>${trendValues[trendValues.length - 1]}% transfer accuracy</span>
          </div>
          <div class="trend-summary-item">
            <strong>What changed</strong>
            <span>More consistent use of nearby clues before answering.</span>
          </div>
        </div>
      </section>

      <section class="summary-grid">
        <article class="summary-item">
          <strong>What this means</strong>
          <span>You’re getting better at using actions, tone, and surrounding clues to infer meaning without direct definitions.</span>
        </article>
      </section>

      <div class="button-row footer-action">
        <button class="primary-button" data-action="restart">Restart demo</button>
      </div>
    </div>
  `;
}

function bindScreenEvents() {
  screenContainer.querySelectorAll("[data-action='next']").forEach((button) => {
    button.addEventListener("click", () => navigate("goals"));
  });

  screenContainer.querySelectorAll("[data-goal-id]").forEach((button) => {
    button.addEventListener("click", () => toggleGoal(button.dataset.goalId));
  });

  screenContainer.querySelector("[data-action='goals-next']")?.addEventListener("click", () => {
    navigate("assessment");
  });

  screenContainer.querySelectorAll("[data-assessment-id]").forEach((button) => {
    button.addEventListener("click", () => {
      appState.levelAnswers[button.dataset.assessmentId] = Number(button.dataset.optionIndex);
      render();
    });
  });

  screenContainer.querySelector("[data-action='assessment-next']")?.addEventListener("click", () => {
    appState.assignedLevel = calculateLevel();
    appState.storyVariant = appState.goalSelections.length % storyIntroVariants.length;
    navigate("firstExperience");
  });

  screenContainer.querySelectorAll("[data-action='open-onboarding-word']").forEach((button) => {
    button.addEventListener("click", () => {
      appState.onboardingStage = "question";
      render();
    });
  });

  screenContainer.querySelectorAll("[data-onboarding-option]").forEach((button) => {
    button.addEventListener("click", () => {
      appState.onboardingAnswer = Number(button.dataset.onboardingOption);
      render();
    });
  });

  screenContainer.querySelector("[data-action='submit-onboarding']")?.addEventListener("click", () => {
    appState.onboardingWordAnswered = true;
    render();
  });

  screenContainer.querySelector("[data-action='to-dashboard']")?.addEventListener("click", () => {
    navigate("dashboard");
  });

  screenContainer.querySelector("[data-action='start-session']")?.addEventListener("click", () => {
    navigate("session");
  });

  screenContainer.querySelector("[data-action='open-progress']")?.addEventListener("click", () => {
    navigate("progress");
  });

  screenContainer.querySelectorAll("[data-word-id]").forEach((button) => {
    button.addEventListener("click", () => {
      appState.storyVariant = (appState.storyVariant + 1) % storyIntroVariants.length;
      openSessionWord(Number(button.dataset.wordId));
    });
  });

  screenContainer.querySelectorAll("[data-speak-text]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      speakText(button.dataset.speakText);
    });
  });

  screenContainer.querySelectorAll("[data-action='open-first-word']").forEach((button) => {
    button.addEventListener("click", () => {
      openNextIncompleteWord();
    });
  });

  screenContainer.querySelectorAll("[data-session-option]").forEach((button) => {
    button.addEventListener("click", () => {
      const option = Number(button.dataset.sessionOption);
      const wordId = appState.sessionWordIndex;
      appState.sessionAnswers[wordId] = option;
      render();
    });
  });

  screenContainer.querySelector("[data-action='to-explanation']")?.addEventListener("click", () => {
    appState.sessionStage = "explanation";
    render();
  });

  screenContainer.querySelector("[data-action='to-transfer']")?.addEventListener("click", () => {
    appState.sessionStage = "transfer";
    render();
  });

  screenContainer.querySelectorAll("[data-transfer-option]").forEach((button) => {
    button.addEventListener("click", () => {
      const option = Number(button.dataset.transferOption);
      const wordId = appState.sessionWordIndex;
      appState.transferAnswers[wordId] = option;
      render();
    });
  });

  screenContainer.querySelector("[data-action='next-word']")?.addEventListener("click", () => {
    const next = getNextIncompleteWordId();
    if (next === null) {
      navigate("summary");
      return;
    }

    openSessionWord(next);
  });

  screenContainer.querySelectorAll("[data-confidence]").forEach((button) => {
    button.addEventListener("click", () => {
      appState.confidence = Number(button.dataset.confidence);
      render();
    });
  });

  screenContainer.querySelector("[data-action='restart']")?.addEventListener("click", resetDemo);
}

function toggleGoal(goalId) {
  if (appState.goalSelections.includes(goalId)) {
    appState.goalSelections = appState.goalSelections.filter((id) => id !== goalId);
  } else {
    appState.goalSelections = [...appState.goalSelections, goalId];
  }

  render();
}

function calculateLevel() {
  let score = 0;
  assessmentQuestions.forEach((question) => {
    if (appState.levelAnswers[question.id] === question.correct) {
      score += 1;
    }
  });

  if (score === 0) {
    return 1;
  }

  if (score === 1) {
    return 2;
  }

  return 3;
}

function openSessionWord(id) {
  appState.sessionWordIndex = id;
  appState.sessionStage = "inference";
  navigate("session", false);
}

function openNextIncompleteWord() {
  const next = getNextIncompleteWordId();
  if (next === null) {
    navigate("summary");
    return;
  }

  openSessionWord(next);
}

function getNextIncompleteWordId() {
  const nextWord = sessionStory.words.find((word) => appState.transferAnswers[word.id] === undefined);
  return nextWord ? nextWord.id : null;
}

function nextWordLabel() {
  return getNextIncompleteWordId() === null ? "Finish session" : "Next highlighted word";
}

function sessionProgressLabel() {
  const completed = Object.keys(appState.transferAnswers).length;
  if (completed === 0) {
    return "Not started";
  }

  if (completed < sessionStory.words.length) {
    return "In progress";
  }

  return "Completed";
}

function getTransferScore() {
  return sessionStory.words.reduce((score, word) => {
    return score + (appState.transferAnswers[word.id] === word.transferCorrect ? 1 : 0);
  }, 0);
}

function navigate(target, resetWord = true) {
  appState.screen = target;
  if (resetWord && target !== "session") {
    appState.sessionWordIndex = null;
    appState.sessionStage = "story";
  }

  render();
}

function goBack() {
  if (appState.screen === "session" && appState.sessionWordIndex !== null) {
    appState.sessionWordIndex = null;
    appState.sessionStage = "story";
    render();
    return;
  }

  const currentIndex = screenOrder.indexOf(appState.screen);
  if (currentIndex > 0) {
    navigate(screenOrder[currentIndex - 1]);
  }
}

function resetDemo() {
  appState.screen = "welcome";
  appState.goalSelections = [];
  appState.levelAnswers = {};
  appState.assignedLevel = null;
  appState.storyVariant = 0;
  appState.onboardingStage = "story";
  appState.onboardingAnswer = null;
  appState.onboardingWordAnswered = false;
  appState.sessionWordIndex = null;
  appState.sessionStage = "story";
  appState.sessionAnswers = {};
  appState.transferAnswers = {};
  appState.confidence = 4;
  render();
}

function randomFrom(list, seed) {
  return list[seed % list.length];
}

function buildTrendPoints(values) {
  const left = 28;
  const right = 300;
  const top = 30;
  const bottom = 160;
  const step = (right - left) / (values.length - 1);
  const points = values.map((value, index) => {
    const x = left + step * index;
    const y = bottom - ((value - 35) / 45) * (bottom - top);
    return {
      x: Number(x.toFixed(2)),
      y: Number(y.toFixed(2)),
      value,
    };
  });
  const linePath = points
    .map((point, index) => `${index === 0 ? "M" : "L"} ${point.x} ${point.y}`)
    .join(" ");
  const areaPath = `${linePath} L ${points[points.length - 1].x} ${bottom} L ${points[0].x} ${bottom} Z`;

  return {
    points,
    linePath,
    areaPath,
  };
}

function renderWordVisual(visual) {
  if (!visual) {
    return "";
  }

  return `
    <div class="visual-card visual-${visual.key}">
      <div class="visual-art" aria-hidden="true">
        <span class="visual-shape visual-shape-a"></span>
        <span class="visual-shape visual-shape-b"></span>
        <span class="visual-icon"></span>
      </div>
      <div class="visual-copy">
        <strong>${visual.title}</strong>
        <span>${visual.caption}</span>
      </div>
    </div>
  `;
}

function speakText(text) {
  const synth = window.speechSynthesis;
  if (!synth || typeof SpeechSynthesisUtterance === "undefined") {
    return;
  }

  const normalizedText = (text || "").trim();
  if (!normalizedText) {
    return;
  }

  if (synth.speaking) {
    synth.cancel();
  }

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = 0.92;
  utterance.pitch = 1.02;
  utterance.lang = "en-US";
  if (preferredVoice) {
    utterance.voice = preferredVoice;
    utterance.lang = preferredVoice.lang || "en-US";
  }

  appState.isSpeaking = true;
  utterance.onend = () => {
    appState.isSpeaking = false;
  };
  utterance.onerror = () => {
    appState.isSpeaking = false;
  };

  window.setTimeout(() => {
    try {
      synth.resume();
      synth.speak(utterance);
    } catch (_error) {
      appState.isSpeaking = false;
    }
  }, 40);
}

function initializeSpeech() {
  const synth = window.speechSynthesis;
  if (!synth || typeof SpeechSynthesisUtterance === "undefined") {
    return;
  }

  loadSpeechVoices();
  if (typeof synth.onvoiceschanged !== "undefined") {
    synth.onvoiceschanged = () => {
      loadSpeechVoices();
    };
  }
}

function loadSpeechVoices() {
  const synth = window.speechSynthesis;
  if (!synth) {
    return;
  }

  availableVoices = synth.getVoices();
  preferredVoice = pickPreferredVoice(availableVoices);
  appState.speechReady = availableVoices.length > 0;
}

function pickPreferredVoice(voices) {
  if (!voices || !voices.length) {
    return null;
  }

  const exactEnglish = voices.find((voice) => voice.lang === "en-US");
  if (exactEnglish) {
    return exactEnglish;
  }

  const genericEnglish = voices.find((voice) => voice.lang && voice.lang.toLowerCase().startsWith("en"));
  if (genericEnglish) {
    return genericEnglish;
  }

  return voices[0];
}

render();
