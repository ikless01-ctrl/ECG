const QUESTION_BANK = [
  {
    "id": 1,
    "topic": "Basics",
    "difficulty": "Foundation",
    "image": "assets/ecgs/119_Normal ECG.jpg",
    "prompt": "Select one or more ECG interpretations that are supported by the tracing.",
    "options": [
      "Normal sinus rhythm",
      "Atrial fibrillation",
      "Complete AV block",
      "Left bundle branch block",
      "Normal frontal QRS axis"
    ],
    "correct": [
      0,
      4
    ],
    "explanation": "This is a normal sinus ECG: regular rhythm, a sinus P wave before every QRS, normal conduction, and no acute ST-segment pattern.",
    "optionNotes": [
      "Correct: regular P–QRS relationship with narrow complexes.",
      "No: AF is irregularly irregular and lacks consistent P waves.",
      "No: there is no AV dissociation.",
      "No: the QRS is not broad with LBBB morphology.",
      "Correct: leads I and aVF are predominantly positive, placing the axis in the normal quadrant."
    ],
    "tip": "Do not choose a pathology merely because one wave looks prominent; complete the systematic read."
  },
  {
    "id": 2,
    "topic": "Sinus rhythms",
    "difficulty": "Foundation",
    "image": "assets/ecgs/121_Sinus tachycardia.jpg",
    "prompt": "Select one or more ECG interpretations that are supported by the tracing.",
    "options": [
      "Sinus tachycardia",
      "Atrial flutter",
      "Ventricular tachycardia",
      "Atrial fibrillation",
      "Regular narrow-complex rhythm"
    ],
    "correct": [
      0,
      4
    ],
    "explanation": "The tracing shows sinus tachycardia: sinus P waves precede each narrow QRS and the rate is above 100/min.",
    "optionNotes": [
      "Correct.",
      "No saw-tooth flutter waves are present.",
      "The QRS is narrow and sinus P waves are visible.",
      "The rhythm is regular, not irregularly irregular.",
      "Correct."
    ],
    "tip": "Confirm sinus P waves before calling any fast rhythm sinus tachycardia."
  },
  {
    "id": 3,
    "topic": "Sinus rhythms",
    "difficulty": "Foundation",
    "image": "assets/ecgs/sinus bradycard.jpeg",
    "prompt": "Select one or more ECG interpretations that are supported by the tracing.",
    "options": [
      "Sinus bradycardia",
      "Junctional escape rhythm",
      "Second-degree AV block",
      "P waves precede each QRS",
      "Atrial fibrillation"
    ],
    "correct": [
      0,
      3
    ],
    "explanation": "This is sinus bradycardia: normal sinus activation with a ventricular rate below 60/min.",
    "optionNotes": [
      "Correct.",
      "No: sinus P waves are present before QRS complexes.",
      "No dropped conducted beats are demonstrated.",
      "Correct.",
      "No: the rhythm is regular with visible P waves."
    ],
    "tip": "Rate describes speed; P-wave morphology identifies the origin."
  },
  {
    "id": 4,
    "topic": "Sinus node",
    "difficulty": "Intermediate",
    "image": "assets/ecgs/sinus arrest.jpeg",
    "prompt": "Select one or more ECG interpretations that are supported by the tracing.",
    "options": [
      "Sinus pause/arrest",
      "Mobitz II AV block",
      "Premature ventricular complex",
      "The pause lacks an expected P wave",
      "Complete AV block"
    ],
    "correct": [
      0,
      3
    ],
    "explanation": "A sinus pause/arrest is present because an expected P wave and its following QRS are absent during the pause.",
    "optionNotes": [
      "Correct.",
      "No: Mobitz II has a P wave that is not followed by QRS.",
      "No premature broad QRS initiates the pause.",
      "Correct.",
      "No persistent AV dissociation is shown."
    ],
    "tip": "During a pause, look for a P wave: absent suggests sinus-node failure; present suggests AV block."
  },
  {
    "id": 5,
    "topic": "Sinus node",
    "difficulty": "Intermediate",
    "image": "assets/ecgs/ecg-laddergram-2nd-sa-block typ 2.webp",
    "prompt": "Select one or more ECG interpretations that are supported by the tracing.",
    "options": [
      "Second-degree SA exit block",
      "Second-degree AV block",
      "Atrial fibrillation",
      "Ventricular tachycardia",
      "The pause is a multiple of the underlying P–P interval"
    ],
    "correct": [
      0,
      4
    ],
    "explanation": "The whole atrial–ventricular cycle is dropped, compatible with second-degree sinoatrial exit block.",
    "optionNotes": [
      "Correct.",
      "No: AV block preserves the P wave during a dropped QRS.",
      "No.",
      "No.",
      "Correct and characteristic of type II SA exit block."
    ],
    "tip": "SA block removes the P wave as well as the QRS and T wave."
  },
  {
    "id": 6,
    "topic": "Atrial arrhythmias",
    "difficulty": "Foundation",
    "image": "assets/ecgs/atrialfibrillation.jpg",
    "prompt": "Select one or more ECG interpretations that are supported by the tracing.",
    "options": [
      "Atrial fibrillation",
      "Atrial flutter with fixed block",
      "Sinus arrhythmia",
      "Irregularly irregular rhythm",
      "Complete AV block"
    ],
    "correct": [
      0,
      3
    ],
    "explanation": "This tracing is atrial fibrillation: no reproducible P waves and an irregularly irregular ventricular response.",
    "optionNotes": [
      "Correct.",
      "No organised flutter waves or fixed pattern.",
      "No consistent sinus P waves.",
      "Correct.",
      "No independent regular atrial and ventricular rhythms."
    ],
    "tip": "Irregularly irregular rhythm plus absent discrete P waves strongly supports AF."
  },
  {
    "id": 7,
    "topic": "Atrial arrhythmias",
    "difficulty": "Foundation",
    "image": "assets/ecgs/atrial flutter.png",
    "prompt": "Select one or more ECG interpretations that are supported by the tracing.",
    "options": [
      "Atrial flutter",
      "Atrial fibrillation",
      "Ventricular tachycardia",
      "Flutter waves are visible between QRS complexes",
      "Sinus tachycardia"
    ],
    "correct": [
      0,
      3
    ],
    "explanation": "The repeating saw-tooth atrial activity indicates atrial flutter, often best seen in inferior leads.",
    "optionNotes": [
      "Correct.",
      "No: AF lacks organised repetitive atrial waves.",
      "No.",
      "Correct.",
      "No: the atrial baseline is not made of normal sinus P waves."
    ],
    "tip": "Count atrial waves between QRS complexes and assess the conduction ratio."
  },
  {
    "id": 8,
    "topic": "Atrial arrhythmias",
    "difficulty": "Intermediate",
    "image": "assets/ecgs/atrial tachycardia.jpeg",
    "prompt": "Select one or more ECG interpretations that are supported by the tracing.",
    "options": [
      "Atrial tachycardia",
      "Atrial fibrillation",
      "Monomorphic VT",
      "Complete AV block",
      "Ectopic P waves precede the QRS complexes"
    ],
    "correct": [
      0,
      4
    ],
    "explanation": "A regular narrow-complex tachycardia with abnormal atrial P-wave morphology supports atrial tachycardia.",
    "optionNotes": [
      "Correct.",
      "No: rhythm is not irregularly irregular.",
      "No: complexes are not broad ventricular complexes.",
      "No.",
      "Correct."
    ],
    "tip": "Compare P-wave morphology with sinus P waves in leads II and aVR."
  },
  {
    "id": 9,
    "topic": "Ectopy",
    "difficulty": "Foundation",
    "image": "assets/ecgs/premature atrial contraction PAC.jpeg",
    "prompt": "Select one or more ECG interpretations that are supported by the tracing.",
    "options": [
      "Premature atrial contraction",
      "Premature ventricular contraction",
      "Mobitz I AV block",
      "The premature QRS is usually narrow",
      "Ventricular bigeminy"
    ],
    "correct": [
      0,
      3
    ],
    "explanation": "An early abnormal P wave followed by a usually narrow QRS is a premature atrial contraction.",
    "optionNotes": [
      "Correct.",
      "No: a PVC is broad and not preceded by a premature P wave.",
      "No progressive PR pattern.",
      "Correct.",
      "No alternating normal beat/PVC pattern."
    ],
    "tip": "Search the preceding T wave for a hidden premature P wave."
  },
  {
    "id": 10,
    "topic": "Junctional rhythms",
    "difficulty": "Intermediate",
    "image": "assets/ecgs/junctional&#x3a;escape rhythm.jpeg",
    "prompt": "Select one or more ECG interpretations that are supported by the tracing.",
    "options": [
      "Junctional escape rhythm",
      "Sinus bradycardia",
      "Complete AV block",
      "Ventricular escape rhythm",
      "Absent or retrograde P waves may be present"
    ],
    "correct": [
      0,
      4
    ],
    "explanation": "A slow narrow-complex rhythm without normal preceding sinus P waves is a junctional escape rhythm.",
    "optionNotes": [
      "Correct.",
      "No normal sinus P waves precede every QRS.",
      "No clear independent atrial rhythm.",
      "No: ventricular escape is usually broad.",
      "Correct."
    ],
    "tip": "A narrow QRS without a normal preceding P wave suggests an AV-junctional origin."
  },
  {
    "id": 11,
    "topic": "Junctional rhythms",
    "difficulty": "Intermediate",
    "image": "assets/ecgs/Accelerated-Junctional-Rhythm-AJR-ECG-3.jpg",
    "prompt": "Select one or more ECG interpretations that are supported by the tracing.",
    "options": [
      "Accelerated junctional rhythm",
      "Atrial fibrillation",
      "Monomorphic ventricular tachycardia",
      "Narrow QRS complexes with absent/retrograde P waves",
      "Sinus tachycardia"
    ],
    "correct": [
      0,
      3
    ],
    "explanation": "The junctional morphology is present at a rate faster than a typical junctional escape rhythm.",
    "optionNotes": [
      "Correct.",
      "No irregularly irregular pattern.",
      "No broad ventricular morphology.",
      "Correct.",
      "No normal sinus P waves."
    ],
    "tip": "Use rate to distinguish junctional escape, accelerated junctional rhythm, and junctional tachycardia."
  },
  {
    "id": 12,
    "topic": "AV blocks",
    "difficulty": "Foundation",
    "image": "assets/ecgs/1st degree av block.jpeg",
    "prompt": "Select one or more ECG interpretations that are supported by the tracing.",
    "options": [
      "First-degree AV block",
      "Mobitz I AV block",
      "Mobitz II AV block",
      "Complete AV block",
      "Prolonged PR interval with 1:1 conduction"
    ],
    "correct": [
      0,
      4
    ],
    "explanation": "Every P wave conducts, but the PR interval is consistently longer than 200 ms: first-degree AV block.",
    "optionNotes": [
      "Correct.",
      "No progressive prolongation or dropped QRS.",
      "No sudden dropped QRS.",
      "No AV dissociation.",
      "Correct."
    ],
    "tip": "First degree means long PR and no dropped beat."
  },
  {
    "id": 13,
    "topic": "AV blocks",
    "difficulty": "Intermediate",
    "image": "assets/ecgs/2nd degree av block type 1.jpeg",
    "prompt": "Select one or more ECG interpretations that are supported by the tracing.",
    "options": [
      "Mobitz I second-degree AV block",
      "Mobitz II second-degree AV block",
      "First-degree AV block",
      "Progressive PR prolongation before a dropped QRS",
      "Complete AV block"
    ],
    "correct": [
      0,
      3
    ],
    "explanation": "Progressive PR prolongation followed by a non-conducted P wave identifies Mobitz I (Wenckebach).",
    "optionNotes": [
      "Correct.",
      "No: Mobitz II has constant conducted PR intervals.",
      "No: a QRS is dropped.",
      "Correct.",
      "No AV dissociation."
    ],
    "tip": "Longer, longer, longer, drop."
  },
  {
    "id": 14,
    "topic": "AV blocks",
    "difficulty": "Advanced",
    "image": "assets/ecgs/2nd degree av block type 2.jpeg",
    "prompt": "Select one or more ECG interpretations that are supported by the tracing.",
    "options": [
      "Mobitz II second-degree AV block",
      "Mobitz I second-degree AV block",
      "Sinus pause",
      "Constant PR intervals before a dropped QRS",
      "First-degree AV block"
    ],
    "correct": [
      0,
      3
    ],
    "explanation": "Conducted beats have a fixed PR interval, followed by sudden non-conduction: Mobitz II.",
    "optionNotes": [
      "Correct.",
      "No progressive PR prolongation.",
      "No: a P wave is present without a following QRS.",
      "Correct.",
      "No: there are dropped beats."
    ],
    "tip": "Same PR, then drop."
  },
  {
    "id": 15,
    "topic": "AV blocks",
    "difficulty": "Advanced",
    "image": "assets/ecgs/3rd degree av block.jpeg",
    "prompt": "Select one or more ECG interpretations that are supported by the tracing.",
    "options": [
      "Third-degree AV block",
      "Mobitz I AV block",
      "Atrial fibrillation",
      "P waves and QRS complexes have no fixed relationship",
      "Sinus bradycardia"
    ],
    "correct": [
      0,
      3
    ],
    "explanation": "P waves and QRS complexes march independently, indicating complete AV dissociation.",
    "optionNotes": [
      "Correct.",
      "No repeating Wenckebach cycles.",
      "No: organised P waves are present.",
      "Correct.",
      "No stable 1:1 P–QRS relationship."
    ],
    "tip": "Find two independent regular rhythms: an atrial rhythm and a slower escape rhythm."
  },
  {
    "id": 16,
    "topic": "Bundle branch blocks",
    "difficulty": "Intermediate",
    "image": "assets/ecgs/RBBB2.jpeg",
    "prompt": "Select one or more ECG interpretations that are supported by the tracing.",
    "options": [
      "Right bundle branch block",
      "Left bundle branch block",
      "Ventricular tachycardia",
      "rSR′ morphology in V1 with broad terminal S in I/V6",
      "Left ventricular hypertrophy"
    ],
    "correct": [
      0,
      3
    ],
    "explanation": "A broad QRS with rSR′ in V1 and a broad terminal S wave in lateral leads supports RBBB.",
    "optionNotes": [
      "Correct.",
      "No: LBBB has a predominantly negative V1 and broad lateral R waves.",
      "No tachycardia.",
      "Correct.",
      "Voltage alone does not explain the bundle pattern."
    ],
    "tip": "For RBBB, think M-shaped V1 and wide terminal S in I/V6."
  },
  {
    "id": 17,
    "topic": "Bundle branch blocks",
    "difficulty": "Intermediate",
    "image": "assets/ecgs/LBBB.jpeg",
    "prompt": "Select one or more ECG interpretations that are supported by the tracing.",
    "options": [
      "Left bundle branch block",
      "Right bundle branch block",
      "Hyperkalemia",
      "Broad/notched R waves in I, aVL, V5–V6",
      "Inferior STEMI"
    ],
    "correct": [
      0,
      3
    ],
    "explanation": "The broad QRS, deep negative V1 and broad/notched lateral R waves support LBBB.",
    "optionNotes": [
      "Correct.",
      "No rSR′ pattern in V1.",
      "No diffuse peaked-T progression.",
      "Correct.",
      "No inferior lead ST-elevation pattern."
    ],
    "tip": "In LBBB, septal Q waves are usually absent in lateral leads and ST–T changes are discordant."
  },
  {
    "id": 18,
    "topic": "Axis & fascicles",
    "difficulty": "Advanced",
    "image": "assets/ecgs/left posterior fasicular block.jpeg",
    "prompt": "Select one or more ECG interpretations that are supported by the tracing.",
    "options": [
      "Left posterior fascicular block",
      "Right axis deviation",
      "Left axis deviation",
      "Left anterior fascicular block",
      "QRS axis is generally greater than +90°"
    ],
    "correct": [
      0,
      1,
      4
    ],
    "explanation": "The tracing supports left posterior fascicular block, which produces right-axis deviation after other causes are excluded.",
    "optionNotes": [
      "Correct.",
      "Correct.",
      "No.",
      "No: LAFB produces left-axis deviation.",
      "Correct."
    ],
    "tip": "Axis is determined from limb leads; LPFB is a diagnosis of morphology plus exclusion."
  },
  {
    "id": 19,
    "topic": "Hypertrophy",
    "difficulty": "Intermediate",
    "image": "assets/ecgs/left ventricular hypertrophy1.jpeg",
    "prompt": "Select one or more ECG interpretations that are supported by the tracing.",
    "options": [
      "Left ventricular hypertrophy",
      "Right ventricular hypertrophy",
      "Left bundle branch block",
      "Tall lateral R waves with deep right-precordial S waves",
      "Hyperkalemia"
    ],
    "correct": [
      0,
      3
    ],
    "explanation": "High leftward QRS voltage with possible lateral strain supports LVH.",
    "optionNotes": [
      "Correct.",
      "No dominant rightward/anterior forces.",
      "No characteristic broad bundle morphology required.",
      "Correct.",
      "No diffuse peaked T-wave pattern."
    ],
    "tip": "Look for voltage plus secondary lateral ST depression/T inversion, not voltage alone."
  },
  {
    "id": 20,
    "topic": "Hypertrophy",
    "difficulty": "Intermediate",
    "image": "assets/ecgs/right ventricular hypertrophy.jpeg",
    "prompt": "Select one or more ECG interpretations that are supported by the tracing.",
    "options": [
      "Right ventricular hypertrophy",
      "Left ventricular hypertrophy",
      "Right bundle branch block",
      "Dominant R wave in V1",
      "Right axis deviation"
    ],
    "correct": [
      0,
      3,
      4
    ],
    "explanation": "Dominant anterior/rightward forces support RVH, commonly with right-axis deviation.",
    "optionNotes": [
      "Correct.",
      "No.",
      "Not required; distinguish rSR′ from a dominant R.",
      "Correct.",
      "Correct."
    ],
    "tip": "A tall R in V1 has several causes; combine it with axis and lateral S waves."
  },
  {
    "id": 21,
    "topic": "Ventricular ectopy",
    "difficulty": "Foundation",
    "image": "assets/ecgs/ECG-Premature-Ventricular-Complex-PVC-Bigeminy.jpg",
    "prompt": "Select one or more ECG interpretations that are supported by the tracing.",
    "options": [
      "Ventricular bigeminy",
      "Premature atrial contractions",
      "Atrial flutter",
      "Wide premature QRS complexes without preceding P waves",
      "Mobitz II AV block"
    ],
    "correct": [
      0,
      3
    ],
    "explanation": "Every normal beat is followed by a premature broad ventricular complex, producing ventricular bigeminy.",
    "optionNotes": [
      "Correct.",
      "No: PAC QRS is usually narrow.",
      "No flutter waves.",
      "Correct.",
      "No dropped P-to-QRS conduction."
    ],
    "tip": "Bigeminy describes the repeating pattern; PVC describes the premature beat."
  },
  {
    "id": 22,
    "topic": "Ventricular rhythms",
    "difficulty": "Intermediate",
    "image": "assets/ecgs/accelerated idioventricular.jpeg",
    "prompt": "Select one or more ECG interpretations that are supported by the tracing.",
    "options": [
      "Accelerated idioventricular rhythm",
      "Monomorphic ventricular tachycardia",
      "Atrial fibrillation",
      "Broad QRS ventricular rhythm, usually about 50–110/min",
      "Sinus tachycardia"
    ],
    "correct": [
      0,
      3
    ],
    "explanation": "A regular broad-complex ventricular rhythm at a relatively modest rate supports accelerated idioventricular rhythm.",
    "optionNotes": [
      "Correct.",
      "Rate is generally slower than classic VT.",
      "No.",
      "Correct.",
      "No sinus P-to-QRS relationship."
    ],
    "tip": "AIVR is often a reperfusion rhythm and is slower than VT."
  },
  {
    "id": 23,
    "topic": "Ventricular rhythms",
    "difficulty": "Advanced",
    "image": "assets/ecgs/ventricular tachycard - monomorphic.jpeg",
    "prompt": "Select one or more ECG interpretations that are supported by the tracing.",
    "options": [
      "Monomorphic ventricular tachycardia",
      "Atrial flutter",
      "Torsades de pointes",
      "Regular wide-complex tachycardia with a stable QRS shape",
      "Sinus tachycardia"
    ],
    "correct": [
      0,
      3
    ],
    "explanation": "A regular fast wide-complex rhythm with uniform QRS morphology is monomorphic VT.",
    "optionNotes": [
      "Correct.",
      "Flutter usually has narrow QRS unless aberrant and visible atrial activity.",
      "No twisting morphology.",
      "Correct.",
      "No normal sinus P waves and complexes are broad."
    ],
    "tip": "Treat an unexplained regular wide-complex tachycardia as VT until proven otherwise."
  },
  {
    "id": 24,
    "topic": "Ventricular rhythms",
    "difficulty": "Advanced",
    "image": "assets/ecgs/torsades de pointes.jpeg",
    "prompt": "Select one or more ECG interpretations that are supported by the tracing.",
    "options": [
      "Torsades de pointes",
      "Monomorphic ventricular tachycardia",
      "Ventricular fibrillation",
      "Polymorphic ventricular tachycardia with twisting QRS axis",
      "Atrial fibrillation"
    ],
    "correct": [
      0,
      3
    ],
    "explanation": "The polymorphic QRS amplitude appears to twist around the baseline, characteristic of torsades de pointes.",
    "optionNotes": [
      "Correct.",
      "No uniform morphology.",
      "VF is fully chaotic without organised repeating complexes.",
      "Correct.",
      "No."
    ],
    "tip": "Torsades is a specific polymorphic VT associated with a prolonged QT."
  },
  {
    "id": 25,
    "topic": "Ventricular rhythms",
    "difficulty": "Advanced",
    "image": "assets/ecgs/ventricular fibrillation.jpeg",
    "prompt": "Select one or more ECG interpretations that are supported by the tracing.",
    "options": [
      "Ventricular fibrillation",
      "Torsades de pointes",
      "Atrial fibrillation",
      "No organised QRS complexes are identifiable",
      "Monomorphic VT"
    ],
    "correct": [
      0,
      3
    ],
    "explanation": "There is chaotic electrical activity without identifiable P waves, QRS complexes, or T waves: ventricular fibrillation.",
    "optionNotes": [
      "Correct.",
      "No organised twisting complexes.",
      "AF still has QRS complexes.",
      "Correct.",
      "No regular broad-complex rhythm."
    ],
    "tip": "VF is electrical chaos, not merely an irregular rhythm."
  },
  {
    "id": 26,
    "topic": "Ischaemia & infarction",
    "difficulty": "Intermediate",
    "image": "assets/ecgs/anterior STEMI.jpeg",
    "prompt": "Select one or more ECG interpretations that are supported by the tracing.",
    "options": [
      "Anterior STEMI",
      "Inferior STEMI",
      "Left bundle branch block",
      "ST elevation is present in V1–V4",
      "Reciprocal ST depression may occur in inferior leads"
    ],
    "correct": [
      0,
      3,
      4
    ],
    "explanation": "ST elevation in contiguous anterior precordial leads supports an anterior STEMI, often with reciprocal changes in opposing leads.",
    "optionNotes": [
      "Correct.",
      "No: inferior STEMI is centred in II, III and aVF.",
      "No broad LBBB morphology.",
      "Correct.",
      "Correct, depending on extent and timing."
    ],
    "tip": "Name STEMI territory from contiguous leads: septal V1–V2, anterior V3–V4, lateral I/aVL/V5–V6."
  },
  {
    "id": 27,
    "topic": "Ischaemia & infarction",
    "difficulty": "Intermediate",
    "image": "assets/ecgs/inferior STEMI.jpeg",
    "prompt": "Select one or more ECG interpretations that are supported by the tracing.",
    "options": [
      "Inferior STEMI",
      "Anterior STEMI",
      "Left ventricular hypertrophy",
      "ST elevation is present in leads II, III and aVF",
      "Reciprocal ST depression may be present in I and aVL"
    ],
    "correct": [
      0,
      3,
      4
    ],
    "explanation": "ST elevation in II, III and aVF with possible reciprocal depression in I and aVL is an inferior STEMI.",
    "optionNotes": [
      "Correct.",
      "No: anterior injury is in V1–V4.",
      "LVH does not explain territorial inferior ST elevation.",
      "Correct.",
      "Correct."
    ],
    "tip": "Compare lead III with II and inspect V1/V4R when right-ventricular involvement is suspected."
  },
  {
    "id": 28,
    "topic": "Ischaemia & infarction",
    "difficulty": "Intermediate",
    "image": "assets/ecgs/NSTEMI.jpeg",
    "prompt": "Select one or more ECG interpretations that are supported by the tracing.",
    "options": [
      "NSTEMI / subendocardial ischaemia pattern",
      "Inferior STEMI",
      "Pericarditis",
      "ST depression or T-wave inversion is present",
      "Hyperkalemia"
    ],
    "correct": [
      0,
      3
    ],
    "explanation": "The tracing shows subendocardial ischaemic changes such as ST depression and/or T-wave inversion without diagnostic territorial ST elevation.",
    "optionNotes": [
      "Correct as an ECG pattern when supported clinically and by biomarkers.",
      "No diagnostic inferior ST elevation.",
      "Pericarditis usually causes diffuse ST elevation and PR depression.",
      "Correct.",
      "No diffuse peaked T-wave progression."
    ],
    "tip": "ECG alone cannot distinguish NSTEMI from unstable angina; biomarkers and clinical context are required."
  },
  {
    "id": 29,
    "topic": "Inflammation",
    "difficulty": "Intermediate",
    "image": "assets/ecgs/pericarditis.jpeg",
    "prompt": "Select one or more ECG interpretations that are supported by the tracing.",
    "options": [
      "Acute pericarditis",
      "Anterior STEMI",
      "Inferior STEMI",
      "Diffuse ST elevation across multiple territories",
      "PR-segment depression may be present"
    ],
    "correct": [
      0,
      3,
      4
    ],
    "explanation": "Diffuse concave ST elevation with PR-segment depression and no territorial reciprocal pattern supports acute pericarditis.",
    "optionNotes": [
      "Correct.",
      "No territorial anterior pattern with reciprocal changes.",
      "No isolated inferior territory.",
      "Correct.",
      "Correct."
    ],
    "tip": "Pericarditis is diffuse; STEMI follows a coronary territory."
  },
  {
    "id": 30,
    "topic": "Electrolytes",
    "difficulty": "Intermediate",
    "image": "assets/ecgs/hyperkalemia1.jpeg",
    "prompt": "Select one or more ECG interpretations that are supported by the tracing.",
    "options": [
      "Hyperkalemia",
      "Hypokalemia",
      "Hypercalcemia",
      "Tall, narrow, symmetric peaked T waves",
      "Inferior STEMI"
    ],
    "correct": [
      0,
      3
    ],
    "explanation": "Tall narrow-based peaked T waves are an early classic ECG manifestation of hyperkalemia.",
    "optionNotes": [
      "Correct.",
      "Hypokalemia causes flattened T waves, ST depression and U waves.",
      "Hypercalcemia mainly shortens QT.",
      "Correct.",
      "No territorial inferior ST elevation."
    ],
    "tip": "As potassium rises, expect PR prolongation, P-wave loss and QRS widening after peaked T waves."
  },
  {
    "id": 31,
    "topic": "Electrolytes",
    "difficulty": "Intermediate",
    "image": "assets/ecgs/hypercalcemia.jpeg",
    "prompt": "Select one or more ECG interpretations that are supported by the tracing.",
    "options": [
      "Hypercalcemia",
      "Hypocalcemia",
      "Hyperkalemia",
      "Short QT interval",
      "Long QT syndrome"
    ],
    "correct": [
      0,
      3
    ],
    "explanation": "A shortened QT interval, mainly from a shortened ST segment, supports hypercalcemia.",
    "optionNotes": [
      "Correct.",
      "Hypocalcemia prolongs QT.",
      "No classic diffuse peaked T waves.",
      "Correct.",
      "No."
    ],
    "tip": "Calcium mainly changes QT duration: high calcium shortens, low calcium prolongs."
  },
  {
    "id": 32,
    "topic": "Drug effects",
    "difficulty": "Intermediate",
    "image": "assets/ecgs/T-waves-digoxin-effect.jpg",
    "prompt": "Select one or more ECG interpretations that are supported by the tracing.",
    "options": [
      "Digoxin effect",
      "Acute inferior STEMI",
      "Hyperkalemia",
      "Scooped (“reverse tick”) ST depression",
      "Acute pericarditis"
    ],
    "correct": [
      0,
      3
    ],
    "explanation": "Scooped, down-sloping ST depression with shortened repolarisation is the classic digoxin effect.",
    "optionNotes": [
      "Correct.",
      "No inferior territorial ST elevation.",
      "Not the characteristic pattern shown.",
      "Correct.",
      "No diffuse ST elevation/PR depression."
    ],
    "tip": "Digoxin effect is not synonymous with digoxin toxicity; toxicity can produce many arrhythmias."
  },
  {
    "id": 33,
    "topic": "Axis",
    "difficulty": "Foundation",
    "image": "assets/ecgs/119_Normal ECG.jpg",
    "prompt": "Determine the frontal QRS axis. Select one or more correct statements.",
    "options": [
      "Normal QRS axis",
      "Left axis deviation",
      "Right axis deviation",
      "Extreme axis deviation",
      "The axis is approximately between −30° and +90°"
    ],
    "correct": [
      0,
      4
    ],
    "explanation": "Predominantly positive QRS complexes in leads I and aVF place the frontal axis in the normal quadrant, generally about −30° to +90°.",
    "optionNotes": [
      "Correct.",
      "No: lead aVF would generally be negative.",
      "No: lead I would generally be negative.",
      "No: both I and aVF would generally be negative.",
      "Correct."
    ],
    "tip": "Use lead I and aVF first; use lead II to refine a borderline leftward axis."
  },
  {
    "id": 34,
    "topic": "Axis",
    "difficulty": "Intermediate",
    "image": "assets/ecgs/left posterior fasicular block.jpeg",
    "prompt": "Determine the frontal QRS axis. Select one or more correct statements.",
    "options": [
      "Right axis deviation",
      "Left axis deviation",
      "Normal axis",
      "The QRS axis is generally greater than +90°",
      "The QRS axis is between −30° and +90°"
    ],
    "correct": [
      0,
      3
    ],
    "explanation": "A negative QRS in lead I with a positive QRS in aVF indicates right-axis deviation, usually greater than +90°.",
    "optionNotes": [
      "Correct.",
      "No.",
      "No.",
      "Correct.",
      "No."
    ],
    "tip": "Right axis: lead I negative, aVF positive."
  },
  {
    "id": 35,
    "topic": "Axis",
    "difficulty": "Intermediate",
    "image": "assets/ecgs/left ventricular hypertrophy1.jpeg",
    "prompt": "Determine the frontal QRS axis. Select one or more correct statements.",
    "options": [
      "Left axis deviation",
      "Right axis deviation",
      "Extreme axis deviation",
      "The QRS axis is generally more negative than −30°",
      "Normal axis is certain"
    ],
    "correct": [
      0,
      3
    ],
    "explanation": "The limb-lead polarity is compatible with a leftward frontal axis; left-axis deviation is generally more negative than −30°.",
    "optionNotes": [
      "Correct when the displayed limb-lead polarity is used.",
      "No.",
      "No.",
      "Correct.",
      "No."
    ],
    "tip": "Lead I positive and aVF negative suggests a leftward axis; check lead II to separate borderline normal from true LAD."
  },
  {
    "id": 36,
    "topic": "Axis",
    "difficulty": "Advanced",
    "image": "assets/ecgs/ventricular tachycard - monomorphic.jpeg",
    "prompt": "Determine the frontal QRS axis. Select one or more correct statements.",
    "options": [
      "Extreme axis deviation",
      "Normal axis",
      "Right axis deviation only",
      "Both lead I and aVF are predominantly negative",
      "The axis is necessarily between −30° and +90°"
    ],
    "correct": [
      0,
      3
    ],
    "explanation": "During a broad-complex ventricular rhythm, the frontal QRS axis may be extreme (“northwest”), with predominantly negative QRS complexes in both I and aVF.",
    "optionNotes": [
      "Correct.",
      "No.",
      "No: both negative is beyond the usual right-axis quadrant.",
      "Correct.",
      "No."
    ],
    "tip": "Extreme axis is the negative-negative quadrant in leads I and aVF."
  }
];
const STUDY_TOPICS = [
{group:'Method',image:'assets/ecgs/119_Normal ECG.jpg',imageAlt:'Normal 12-lead ECG used to demonstrate a systematic interpretation sequence',title:'A systematic ECG read',kicker:'Start here',summary:'Use the same sequence every time so striking abnormalities do not distract you.',points:['Rate: 300 ÷ large squares for a regular rhythm','Rhythm: compare R–R and P–P intervals','P waves: origin, morphology and relation to QRS','Intervals: PR, QRS and corrected QT','Axis: begin with leads I and aVF','ST–T: localised vs diffuse changes'],trap:'Naming the rhythm before checking whether every QRS has a preceding P wave.'},
{group:'Rhythm',image:'assets/ecgs/Sinus Pause with sinus arrhythmia.jpg',imageAlt:'ECG strip showing a sinus pause and sinus rhythm',title:'Sinus and sinus-node disorders',kicker:'Rate + P waves',summary:'Sinus rhythms have a consistent P wave before each QRS; node failure creates pauses without P waves.',points:['Sinus bradycardia: <60/min','Sinus tachycardia: >100/min','Sinus arrest: missing P wave during pause','SA exit block: entire P–QRS–T cycle is dropped','Tachy-brady syndrome alternates slow and fast atrial rhythms'],trap:'Confusing a sinus pause with AV block. Look for a P wave during the pause.'},
{group:'Rhythm',image:'assets/ecgs/atrial flutter.png',imageAlt:'ECG example of atrial flutter with repeating flutter waves',title:'Atrial arrhythmias',kicker:'Look between QRS complexes',summary:'Atrial fibrillation, flutter and atrial tachycardia are separated by atrial organisation and regularity.',points:['AF: no discrete P waves, irregularly irregular','Flutter: regular saw-tooth F waves, often 250–350/min','Atrial tachycardia: abnormal P morphology and usually regular','PAC: premature abnormal P wave, usually narrow QRS'],trap:'Calling every narrow tachycardia “sinus tachycardia” without proving sinus P waves.'},
{group:'Conduction',image:'assets/ecgs/2nd degree av block type 1.jpeg',imageAlt:'ECG example of second-degree AV block with Wenckebach conduction',title:'AV blocks',kicker:'Follow every P wave',summary:'Decide whether conduction is delayed, intermittently blocked or completely dissociated.',points:['First degree: PR >200 ms, all P waves conduct','Mobitz I: progressive PR lengthening then drop','Mobitz II: fixed PR with sudden dropped QRS','Third degree: P and QRS march independently','2:1 block may not be classifiable as I vs II from one strip'],trap:'Measuring only one PR interval instead of tracking the pattern across beats.'},
{group:'Conduction',image:'assets/ecgs/RBBB.jpeg',imageAlt:'ECG example of right bundle branch block morphology',title:'Bundle and fascicular blocks',kicker:'QRS width + morphology',summary:'Bundle blocks widen the QRS; fascicular blocks mainly alter the frontal axis.',points:['RBBB: rSR′ in V1 and broad S in I/V6','LBBB: broad/notched lateral R waves','LAFB: left axis deviation with characteristic qR/rS pattern','LPFB: right axis deviation after excluding other causes','Bifascicular block combines RBBB with a fascicular block'],trap:'Diagnosing a fascicular block from axis alone without excluding hypertrophy or infarction.'},
{group:'Axis',image:'assets/ecgs/left posterior fasicular block.jpeg',imageAlt:'ECG example illustrating an abnormal frontal-plane axis',title:'Heart axis',kicker:'Lead I + aVF',summary:'Use QRS polarity in leads I and aVF as a fast quadrant method.',points:['I positive + aVF positive: normal quadrant','I positive + aVF negative: leftward axis','I negative + aVF positive: rightward axis','Both negative: extreme axis','Lead II can refine borderline left axis'],trap:'Using the tallest R wave in one lead without checking the full frontal-plane pattern.'},
{group:'Structure',image:'assets/ecgs/left ventricular hypertrophy1.jpeg',imageAlt:'ECG example showing voltage features of left ventricular hypertrophy',title:'Atrial and ventricular hypertrophy',kicker:'Voltage + morphology',summary:'Chamber enlargement changes depolarisation direction, amplitude and sometimes repolarisation.',points:['RAE: tall peaked P waves','LAE: broad/notched P waves or terminal negativity in V1','LVH: high leftward voltage ± lateral strain','RVH: dominant R in V1 + right axis deviation','Voltage criteria are supportive, not perfectly specific'],trap:'Treating voltage criteria as a diagnosis without age, body habitus or clinical context.'},
{group:'Ischaemia',image:'assets/ecgs/anterior STEMI.jpeg',imageAlt:'ECG example of anterior ST-segment elevation myocardial infarction',title:'Ischaemia, injury and infarction',kicker:'Contiguous leads',summary:'Localise changes by lead territory and distinguish ST depression, ST elevation and pathological Q waves.',points:['Anterior/septal: V1–V4','Lateral: I, aVL, V5–V6','Inferior: II, III, aVF','ST depression/T inversion can reflect subendocardial ischaemia','ST elevation in contiguous leads suggests acute injury','Troponin distinguishes NSTEMI from unstable angina'],trap:'Diagnosing NSTEMI or unstable angina from ECG alone.'},
{group:'Metabolic',image:'assets/ecgs/hyperkalemia1.jpeg',imageAlt:'ECG example demonstrating hyperkalaemic repolarisation changes',title:'Electrolytes and QT',kicker:'Repolarisation clues',summary:'Potassium strongly changes T waves and conduction; calcium mainly changes QT duration.',points:['Hyperkalaemia: peaked T waves → P loss/QRS widening','Hypokalaemia: ST depression, flat T, U waves','Hypercalcaemia: short QT','Hypocalcaemia: prolonged QT','Long QT increases torsades risk'],trap:'Assuming one classic sign must be present at every severity.'},
{group:'Ventricular',image:'assets/ecgs/ventricular tachycard - monomorphic.jpeg',imageAlt:'ECG example of monomorphic ventricular tachycardia',title:'Ventricular rhythms',kicker:'Wide QRS + rate',summary:'Separate premature beats, AIVR, VT, torsades and VF by organisation, rate and morphology.',points:['PVC: premature wide complex, often discordant ST–T','AIVR: ventricular rhythm commonly 50–110/min','Monomorphic VT: regular, wide, same QRS shape','Torsades: polymorphic VT twisting around baseline','VF: chaotic activity without effective output'],trap:'Calling AIVR ventricular tachycardia without considering the rate.'},
{group:'Drugs',image:'assets/ecgs/T-waves-digoxin-effect.jpg',imageAlt:'ECG example showing the scooped ST segment associated with digoxin effect',title:'Digoxin effect',kicker:'Effect ≠ toxicity',summary:'Therapeutic digoxin changes repolarisation; toxicity is a clinical diagnosis and may cause many arrhythmias.',points:['Scooped down-sloping ST depression','Flattened, inverted or biphasic T waves','QT may shorten','AV conduction slows','No single arrhythmia uniquely identifies toxicity'],trap:'Labeling expected ST–T changes as digoxin poisoning.'}
];


// Expanded study-guide content. Each important pattern can have its own ECG example.
Object.assign(STUDY_TOPICS.find(t=>t.title==='AV blocks'), {
  summary:'Follow every P wave across the strip. AV block is best learned as five separate patterns—not as one combined diagnosis.',
  points:['First decide whether every P wave conducts','Measure several PR intervals, not only one','Look for dropped QRS complexes after visible P waves','Compare atrial and ventricular regularity','Treat 2:1 conduction cautiously because Mobitz type may be indeterminate'],
  examples:[
    {title:'First-degree AV block',image:'assets/ecgs/1st degree av block.jpeg',caption:'Every P wave conducts, but the PR interval is consistently longer than 200 ms.',features:['Regular P waves','1:1 P-to-QRS conduction','Prolonged, fixed PR interval','No dropped QRS complexes'],pearl:'Think “delay,” not dropped beats.'},
    {title:'Second-degree AV block — Mobitz I (Wenckebach)',image:'assets/ecgs/2nd degree av block type 1.jpeg',caption:'Progressive PR prolongation culminates in a non-conducted P wave.',features:['PR gets longer beat by beat','A P wave is not followed by QRS','Cycle then repeats','Often AV-nodal'],pearl:'Longer, longer, longer, drop.'},
    {title:'Second-degree AV block — Mobitz II',image:'assets/ecgs/2nd degree av block type 2.jpeg',caption:'Conducted beats have a fixed PR interval, followed by a sudden dropped QRS.',features:['Constant PR in conducted beats','Unexpected non-conducted P wave','Often infranodal','Higher risk of complete block'],pearl:'Same PR, then drop.'},
    {title:'2:1 AV block',image:'assets/ecgs/2nd degree av block type ii.jpeg',caption:'Every second P wave is blocked. A short strip may not distinguish Mobitz I from Mobitz II.',features:['Two P waves for each QRS','Regular atrial rhythm','Ventricular rate roughly half atrial rate','Use QRS width and longer monitoring for context'],pearl:'Do not force a Mobitz label from one 2:1 strip.'},
    {title:'Third-degree (complete) AV block',image:'assets/ecgs/3rd degree av block.jpeg',caption:'Atria and ventricles depolarise independently because no atrial impulses conduct.',features:['P waves march through regularly','QRS complexes have their own slower rhythm','PR relationship constantly changes','Escape QRS may be narrow or wide'],pearl:'Find two independent clocks: P–P and R–R.'}
  ]
});

Object.assign(STUDY_TOPICS.find(t=>t.title==='Sinus and sinus-node disorders'), {
  examples:[
    {title:'Sinus bradycardia',image:'assets/ecgs/sinus bradycard.jpeg',caption:'Normal sinus activation at a rate below 60/min.',features:['P before every QRS','Constant PR','Regular rhythm','Slow rate'],pearl:'Rate is slow, mechanism remains sinus.'},
    {title:'Sinus tachycardia',image:'assets/ecgs/121_Sinus tachycardia.jpg',caption:'Normal sinus P waves with a rate above 100/min.',features:['Sinus P-wave morphology','1:1 conduction','Usually gradual onset/offset','Search for a physiological cause'],pearl:'Prove sinus P waves before calling it sinus tachycardia.'},
    {title:'Sinus arrest / pause',image:'assets/ecgs/sinus arrest.jpeg',caption:'The sinus node fails to discharge, so the pause contains no expected P wave.',features:['Missing P wave','Pause may not be an exact P–P multiple','Escape beat may appear','Different from blocked P wave'],pearl:'During the pause, ask whether a P wave is present.'},
    {title:'SA exit block',image:'assets/ecgs/ecg-laddergram-2nd-sa-block typ 2.webp',caption:'A sinus impulse forms but does not exit to activate the atria, dropping an entire cycle.',features:['Missing P–QRS–T cycle','Pause often multiple of basic P–P interval','Conducted P waves retain sinus morphology'],pearl:'SA block drops the P wave too.'},
    {title:'Sick sinus / tachy-brady syndrome',image:'assets/ecgs/sick sinus syndrome.jpeg',caption:'Sinus-node dysfunction may alternate marked bradycardia, pauses and atrial tachyarrhythmias.',features:['Inappropriate sinus bradycardia','Sinus pauses','Alternating fast and slow rhythms','Chronotropic incompetence may occur'],pearl:'Look for a pattern over time, not one isolated beat.'}
  ]
});

Object.assign(STUDY_TOPICS.find(t=>t.title==='Atrial arrhythmias'), {
  examples:[
    {title:'Atrial fibrillation',image:'assets/ecgs/atrialfibrillation.jpg',caption:'Chaotic atrial activity produces no consistent P waves and an irregularly irregular ventricular response.',features:['No discrete repeating P waves','Irregularly irregular R–R intervals','Variable ventricular response'],pearl:'No P waves + irregularly irregular.'},
    {title:'Atrial flutter',image:'assets/ecgs/atrial flutter.png',caption:'Organised atrial macro-reentry creates repeating flutter waves, often with fixed or variable AV conduction.',features:['Saw-tooth F waves','Atrial rate often 250–350/min','Ventricular rhythm may be regular'],pearl:'Search inferior leads and V1 for repeating F waves.'},
    {title:'Atrial tachycardia',image:'assets/ecgs/atrial tachycardia.jpeg',caption:'A regular atrial rhythm from a non-sinus focus with abnormal P-wave morphology.',features:['Regular narrow-complex tachycardia','Abnormal P morphology','P waves may hide in preceding T waves'],pearl:'Compare the tachycardia P wave with a known sinus P wave.'},
    {title:'Premature atrial contraction',image:'assets/ecgs/premature atrial contraction PAC.jpeg',caption:'An early ectopic atrial impulse creates a premature abnormal P wave, usually followed by a narrow QRS.',features:['Premature abnormal P wave','Usually narrow QRS','Often non-compensatory pause'],pearl:'The premature P wave may deform the preceding T wave.'}
  ]
});

Object.assign(STUDY_TOPICS.find(t=>t.title==='Bundle and fascicular blocks'), {
  examples:[
    {title:'Right bundle branch block',image:'assets/ecgs/RBBB.jpeg',caption:'Delayed right ventricular activation gives an rSR′-type pattern in V1 and a broad terminal S wave laterally.',features:['QRS widened when complete','Terminal R′ in V1/V2','Broad terminal S in I and V6'],pearl:'Look right, then lateral.'},
    {title:'Left bundle branch block',image:'assets/ecgs/LBBB.jpeg',caption:'Delayed left ventricular activation produces broad notched lateral R waves and a predominantly negative V1.',features:['Wide QRS','Broad/notched R in I, aVL, V5–V6','Deep S or QS in V1','Secondary discordant ST–T changes'],pearl:'LBBB changes depolarisation and repolarisation.'},
    {title:'Left posterior fascicular block',image:'assets/ecgs/left posterior fasicular block.jpeg',caption:'A fascicular conduction pattern associated with right-axis deviation after other causes are excluded.',features:['Right-axis deviation','rS in I/aVL','qR in III/aVF','QRS may be only mildly prolonged'],pearl:'Axis alone is not enough—exclude RVH and infarction.'}
  ]
});
