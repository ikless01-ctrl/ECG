# ECG Lab v6

A static ECG study guide, guided-practice app and mock-exam simulator.

## What is included

- 10 expanded study chapters
- 51 individual ECG atlas examples from the repository image bank
- A separate explanation, recognition shortcut, clinical significance and exam trap for each example
- 32 professor-style multi-select questions
- Topic-filtered practice buttons
- Timed mock examinations
- Colour-coded answer review and persistent mistake review

## Run locally

From the folder containing `index.html`:

```bash
python3 -m http.server 8000
```

Open `http://localhost:8000`.

No build tools or external packages are required.

## Updating an existing repository

For v6, replace `index.html`, `questions.js`, `script.js`, and `style.css`. Keep the entire `assets/ecgs` folder because the guide references those image filenames.

## Important

This project is for education and exam practice. It is not intended for diagnosis or patient-care decisions.


## v7 changes
- Questions now focus on ECG diagnosis, visible morphology, lead localisation, and frontal axis interpretation.
- Topic and difficulty labels are hidden during active practice and mock exams.
- The unused theme toggle was removed.
