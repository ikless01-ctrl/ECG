/* ===========================================
   ECG MASTER
   Version 1.0
   script.js
=========================================== */

"use strict";

/* ===========================
   GLOBAL VARIABLES
=========================== */

let questions = [];
let currentQuestion = 0;

let score = 0;
let completed = 0;

let mistakes = [];
let favorites = [];

let examMode = false;
let examLength = 0;

let shuffledQuestions = [];

/* ===========================
   DOM ELEMENTS
=========================== */

const pages =
    document.querySelectorAll(".page");

const menuButtons =
    document.querySelectorAll(".menu-btn");

const questionText =
    document.getElementById("questionText");

const ecgImage =
    document.getElementById("ecgImage");

const answersDiv =
    document.getElementById("answers");

const submitButton =
    document.getElementById("submitBtn");

const nextButton =
    document.getElementById("nextBtn");

const feedback =
    document.getElementById("feedback");

const currentQuestionNumber =
    document.getElementById("currentQuestion");

const totalQuestions =
    document.getElementById("totalQuestions");

const questionTopic =
    document.getElementById("questionTopic");

const accuracy =
    document.getElementById("accuracy");

const completedLabel =
    document.getElementById("completed");

const mistakeCount =
    document.getElementById("mistakeCount");

const readiness =
    document.getElementById("readiness");

/* ===========================
   START APP
=========================== */

document.addEventListener("DOMContentLoaded", () => {

    initializeNavigation();

    initializeTheme();

    loadProgress();

    loadQuestions();

});

/* ===========================
   NAVIGATION
=========================== */

function initializeNavigation() {

    menuButtons.forEach(button => {

        button.addEventListener("click", () => {

            const page =
                button.dataset.page;

            showPage(page);

        });

    });

}

function showPage(pageName) {

    pages.forEach(page => {

        page.classList.remove("active-page");

    });

    menuButtons.forEach(button => {

        button.classList.remove("active");

    });

    document
        .getElementById(pageName)
        .classList.add("active-page");

    document
        .querySelector(`[data-page="${pageName}"]`)
        .classList.add("active");

    if(pageName==="review"){

        displayMistakes();

    }

    if(pageName==="statistics"){

        updateStatistics();

    }

}

/* ===========================
   DARK MODE
=========================== */

function initializeTheme(){

    const button =
        document.getElementById("themeToggle");

    const savedTheme =
        localStorage.getItem("theme");

    if(savedTheme==="light"){

        document.body.classList.add("light");

    }

    button.addEventListener("click",()=>{

        document.body.classList.toggle("light");

        if(document.body.classList.contains("light")){

            localStorage.setItem(
                "theme",
                "light"
            );

        }

        else{

            localStorage.setItem(
                "theme",
                "dark"
            );

        }

    });

}

/* ===========================
   LOAD QUESTIONS
=========================== */

async function loadQuestions(){

    try{

        const response =
            await fetch("questions.json");

        const data =
            await response.json();

        questions =
            data.questions;

        shuffledQuestions =
            [...questions];

        shuffleArray(shuffledQuestions);

        totalQuestions.textContent =
            shuffledQuestions.length;

        loadQuestion();

    }

    catch(error){

        console.error(error);

        questionText.innerHTML =

            "Unable to load questions.";

    }

}

/* ===========================
   SHUFFLE
=========================== */

function shuffleArray(array){

    for(

        let i=array.length-1;

        i>0;

        i--

    ){

        const j =
            Math.floor(
                Math.random()*(i+1)
            );

        [

            array[i],

            array[j]

        ]

        =

        [

            array[j],

            array[i]

        ];

    }

}

/* ===========================
   LOAD ONE QUESTION
=========================== */

function loadQuestion() {

    feedback.innerHTML = "";

    submitButton.disabled = false;
    nextButton.style.display = "none";

    if (currentQuestion >= shuffledQuestions.length) {

        finishExam();

        return;

    }

    const question = shuffledQuestions[currentQuestion];

    currentQuestionNumber.textContent = currentQuestion + 1;

    questionTopic.textContent = question.topic;

    questionText.textContent = question.question;

    ecgImage.src = question.image;

    ecgImage.alt = question.topic;

    answersDiv.innerHTML = "";

    const inputType =
        question.type === "multiple"
            ? "checkbox"
            : "radio";

    question.options.forEach((option, index) => {

        const label = document.createElement("label");

        label.className = "answer";

        label.innerHTML = `
            <input
                type="${inputType}"
                name="answer"
                value="${index}">
            <span>${option}</span>
        `;

        answersDiv.appendChild(label);

    });

}

/* ===========================
   SUBMIT ANSWER
=========================== */

submitButton.addEventListener("click", submitAnswer);

function submitAnswer() {

    const question = shuffledQuestions[currentQuestion];

    const checked =
        document.querySelectorAll(
            'input[name="answer"]:checked'
        );

    if (checked.length === 0) {

        alert("Please select an answer.");

        return;

    }

    const selected = [];

    checked.forEach(item => {

        selected.push(Number(item.value));

    });

    let correct = true;

    if (selected.length !== question.correct.length) {

        correct = false;

    }

    question.correct.forEach(answer => {

        if (!selected.includes(answer)) {

            correct = false;

        }

    });

    completed++;

    if (correct) {

        score++;

    } else {

        mistakes.push(question);

    }

    saveProgress();

    displayCorrection(question, correct);

}

/* ===========================
   SHOW CORRECTION
=========================== */

function displayCorrection(question, correct) {

    submitButton.disabled = true;

    nextButton.style.display = "inline-block";

    const answerCards =
        document.querySelectorAll(".answer");

    answerCards.forEach((card, index) => {

        if (question.correct.includes(index)) {

            card.classList.add("correct");

        }

    });

    feedback.innerHTML = `

        <div class="feedback-card">

            <h2>

                ${correct ? "✅ Correct" : "❌ Incorrect"}

            </h2>

            <br>

            <h3>Explanation</h3>

            <p>

                ${question.explanation}

            </p>

            <br>

            <h3>Exam Tip</h3>

            <p>

                ${question.examTip}

            </p>

        </div>

    `;

}

/* ===========================
   NEXT QUESTION
=========================== */

nextButton.addEventListener("click", () => {

    currentQuestion++;

    loadQuestion();

});

/* ===========================
   FINISH EXAM
=========================== */

function finishExam() {

    const percent = Math.round(
        (score / shuffledQuestions.length) * 100
    );

    feedback.innerHTML = "";

    answersDiv.innerHTML = "";

    questionText.innerHTML = `
        🎉 Exam Complete
    `;

    ecgImage.style.display = "none";

    submitButton.style.display = "none";
    nextButton.style.display = "none";

    feedback.innerHTML = `

        <div class="feedback-card">

            <h2>Your Results</h2>

            <br>

            <h1>${score} / ${shuffledQuestions.length}</h1>

            <h2>${percent}%</h2>

            <br>

            <p>

                ${getReadiness(percent)}

            </p>

            <br>

            <button
                class="primary-btn"
                onclick="restartPractice()">

                Practice Again

            </button>

        </div>

    `;

    updateStatistics();

}

/* ===========================
   RESTART
=========================== */

function restartPractice(){

    score = 0;

    completed = 0;

    currentQuestion = 0;

    ecgImage.style.display = "block";

    submitButton.style.display = "inline-block";

    nextButton.style.display = "none";

    shuffledQuestions = [...questions];

    shuffleArray(shuffledQuestions);

    loadQuestion();

}

/* ===========================
   STATISTICS
=========================== */

function updateStatistics(){

    const percent =

        questions.length===0
        ? 0
        :
        Math.round(
            (score/questions.length)*100
        );

    accuracy.textContent =
        percent + "%";

    completedLabel.textContent =
        completed;

    mistakeCount.textContent =
        mistakes.length;

    readiness.textContent =
        getReadiness(percent);

}

/* ===========================
   EXAM READINESS
=========================== */

function getReadiness(score){

    if(score>=90)
        return "Excellent";

    if(score>=80)
        return "Very Good";

    if(score>=70)
        return "Good";

    if(score>=60)
        return "Fair";

    return "Needs Practice";

}

/* ===========================
   REVIEW MISTAKES
=========================== */

function displayMistakes(){

    const container =
        document.getElementById("mistakeList");

    container.innerHTML="";

    if(mistakes.length===0){

        container.innerHTML=`

            <div class="card">

                <h2>

                    🎉 Great job!

                </h2>

                <p>

                    You don't have any mistakes.

                </p>

            </div>

        `;

        return;

    }

    mistakes.forEach((question,index)=>{

        container.innerHTML+=`

            <div class="card">

                <h3>

                    ${index+1}.
                    ${question.question}

                </h3>

                <br>

                <p>

                    Topic:
                    ${question.topic}

                </p>

            </div>

        `;

    });

}

/* ===========================
   SAVE
=========================== */

function saveProgress(){

    localStorage.setItem(

        "score",

        score

    );

    localStorage.setItem(

        "completed",

        completed

    );

    localStorage.setItem(

        "mistakes",

        JSON.stringify(mistakes)

    );

}

/* ===========================
   LOAD
=========================== */

function loadProgress(){

    score = Number(
        localStorage.getItem("score")
    ) || 0;

    completed = Number(
        localStorage.getItem("completed")
    ) || 0;

    mistakes = JSON.parse(

        localStorage.getItem("mistakes")

    ) || [];

}

/* ==========================================
   ECG IMAGE ZOOM
========================================== */

const imageModal =
    document.getElementById("imageModal");

const modalImage =
    document.getElementById("modalImage");

const closeModal =
    document.getElementById("closeModal");

if(ecgImage){

    ecgImage.addEventListener("click",()=>{

        imageModal.style.display="flex";

        modalImage.src=ecgImage.src;

    });

}

if(closeModal){

    closeModal.addEventListener("click",()=>{

        imageModal.style.display="none";

    });

}

window.addEventListener("click",(event)=>{

    if(event.target===imageModal){

        imageModal.style.display="none";

    }

});

/* ==========================================
   MOCK EXAM
========================================== */

const exam10 =
    document.getElementById("exam10");

const exam20 =
    document.getElementById("exam20");

const examAll =
    document.getElementById("examAll");

if(exam10){

exam10.addEventListener("click",()=>{

    startExam(10);

});

}

if(exam20){

exam20.addEventListener("click",()=>{

    startExam(20);

});

}

if(examAll){

examAll.addEventListener("click",()=>{

    startExam(questions.length);

});

}

function startExam(number){

    examMode=true;

    examLength=number;

    currentQuestion=0;

    score=0;

    completed=0;

    shuffledQuestions=[...questions];

    shuffleArray(shuffledQuestions);

    shuffledQuestions=
        shuffledQuestions.slice(0,number);

    totalQuestions.textContent=
        shuffledQuestions.length;

    showPage("practice");

    ecgImage.style.display="block";

    submitButton.style.display="inline-block";

    nextButton.style.display="none";

    loadQuestion();

}

/* ==========================================
   FAVORITES
========================================== */

function addFavorite(questionID){

    if(favorites.includes(questionID))
        return;

    favorites.push(questionID);

    localStorage.setItem(

        "favorites",

        JSON.stringify(favorites)

    );

}

function loadFavorites(){

    favorites=

        JSON.parse(

            localStorage.getItem("favorites")

        ) || [];

}

/* ==========================================
   RESET APP
========================================== */

function resetProgress(){

    if(

        confirm(

            "Reset all statistics?"

        )

    ){

        localStorage.clear();

        location.reload();

    }

}

/* ==========================================
   LOADING SCREEN
========================================== */

window.addEventListener("load",()=>{

    const loading=

        document.getElementById(

            "loadingScreen"

        );

    if(loading){

        setTimeout(()=>{

            loading.style.display="none";

        },600);

    }

});

/* ==========================================
   INITIALIZE
========================================== */

updateStatistics();

loadFavorites();

console.log(

"🫀 ECG MASTER LOADED"

);
