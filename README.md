# Inferly

Inferly is a mobile-first language learning prototype focused on contextual understanding rather than vocabulary memorization.

Instead of teaching users with flashcards and direct definitions, Inferly guides them through short reading experiences where they infer meaning from context, review reasoning-based explanations, and apply the same word in a new situation.

## Project Vision

Inferly is designed around one core idea:

> learners should feel like they are figuring things out, not being told answers.

This prototype explores a learning flow inspired by products like Duolingo, but with a different educational goal:

- read short stories
- infer word meaning from surrounding clues
- learn reasoning patterns instead of memorized definitions
- transfer understanding into a new context

## Current Prototype Features

The current frontend prototype includes:

- Welcome screen with product positioning
- Goal selection for personalization
- Light level assessment with low-pressure inference questions
- First-time guided inference experience
- Home dashboard with daily progress and motivation
- Story-based learning session with 3 highlighted words
- Inference flow with immediate feedback
- Reasoning-focused explanation screens
- Transfer test to check real understanding
- Session summary with self-rating
- Progress page with understanding score and learning trend
- Related visual cards for highlighted words
- Tap-to-hear word audio using the browser speech API

## Design Direction

The UI is intentionally designed to feel:

- energetic but not overwhelming
- playful but still intellectually focused
- guided, not passive

The product should feel like:

> a smart, interactive reading coach that actively guides your thinking

Design principles used in this prototype:

- strong visual feedback for every interaction
- guided attention through color, emphasis, and motion
- progressive reveal instead of dumping all information at once
- high clarity over flat minimalism

## Tech Stack

This is a lightweight static frontend prototype built with:

- HTML
- CSS
- vanilla JavaScript
- Python `http.server` for local development

No framework or backend is required for the current version.

## Project Structure

- [index.html](/Users/theresaquan/Desktop/cursor/my_profilo/index.html): app shell and page structure
- [styles.css](/Users/theresaquan/Desktop/cursor/my_profilo/styles.css): visual system, layout, animation, and UI states
- [script.js](/Users/theresaquan/Desktop/cursor/my_profilo/script.js): screen rendering, interaction flow, progress logic, word audio, and trend chart generation
- [serve.py](/Users/theresaquan/Desktop/cursor/my_profilo/serve.py): local development server
- [start_inferly.command](/Users/theresaquan/Desktop/cursor/my_profilo/start_inferly.command): one-click launcher for macOS
- [project_plan.md](/Users/theresaquan/Desktop/cursor/project_plan.md): original product and UX plan

## How To Run

For the most reliable audio playback, run Inferly through a local server instead of opening `index.html` directly.

### Recommended on macOS

Double-click [start_inferly.command](/Users/theresaquan/Desktop/cursor/my_profilo/start_inferly.command)

This will:

- start a local server at `http://127.0.0.1:8000`
- open the app in your default browser
- keep the terminal window open while the app is running

### Manual Run

```bash
cd /Users/theresaquan/Desktop/cursor/my_profilo
python3 serve.py
```

Then open:

```text
http://127.0.0.1:8000
```

## Audio Notes

Highlighted word audio is implemented with the browser `speechSynthesis` API.

This means:

- it works best when the app is opened through `http://127.0.0.1:8000`
- some browsers may require the user to click the page once before audio playback
- voice quality depends on the voices installed in the local system/browser

## Learning Model

Inferly does not present dictionary-style teaching.

It follows this sequence instead:

1. Read the story
2. Tap a highlighted word
3. Infer meaning from context
4. Get a reasoning-based explanation
5. Apply that meaning in a new sentence

The key difference is that the explanation teaches why a meaning fits, not just what the word “means.”

## What This Prototype Is

This project is currently:

- a product design and frontend interaction prototype
- suitable for portfolio presentation, UX iteration, and concept validation
- useful for demonstrating learning flow, visual design, and educational interaction ideas

This project is not yet:

- connected to a backend
- saving user progress persistently
- using real audio files or recorded pronunciation
- production-ready

## Future Improvements

Good next steps for this project could include:

- move the prototype into React or Next.js
- store user progress locally or in a backend
- replace browser speech with real pronunciation audio assets
- add multiple stories and adaptive content selection
- connect the progress page to real learner data
- support different target languages

## Git Ignore

The project includes [\.gitignore](/Users/theresaquan/Desktop/cursor/my_profilo/.gitignore) for common local files such as:

- `.DS_Store`
- `__pycache__/`
- Python cache files
- editor metadata

## Authoring Note

This README reflects the current state of the prototype in this repository and is aligned with the product goals defined in [project_plan.md](/Users/theresaquan/Desktop/cursor/project_plan.md).
