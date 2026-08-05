# ECG Lab

A dependency-free ECG study guide, guided practice app and multiple-select mock-exam simulator.

## Run locally

Because this version uses plain HTML, CSS and JavaScript, either open `index.html` directly or serve the folder:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Features

- 32 image-based ECG questions from the repository image bank
- Single workflow for multi-select questions
- Immediate explanations in practice mode
- Timed mock exams with answers hidden until submission
- Per-option explanations and exam tips
- Searchable study guide
- Persistent statistics and mistake review using `localStorage`
- Responsive desktop and mobile layout

## Files

- `index.html` — application structure
- `style.css` — visual design and responsive layout
- `questions.js` — question bank and study-guide content
- `script.js` — navigation, practice, exam, scoring and persistence
- `assets/ecgs/` — ECG image bank
