// Variables to keep track of time
var currentQuestions = 0;
// indexed at 0
var timer = questions.length * 15;
// Allows you to keep a timer and score for your quiz
var timerId;

// Variables to help Traverse the DOM
var questionsEl = document.getElementById("questions");
var timer = document.getElementById("time");
var choiceEl = document.getElementById("choices");
var submitBtn = document.getElementById("submit");
var startBtn = document.getElementById("start");
var initialsEl = document.getElementById("initials");
var feedBackEl = document.getElementById("feedback");
// var imgEl = document.getElementById(".img");
// Questions for the Quiz
var questions = [
    {
        title: "What team does Captain America lead?",
        choices: ["X-Men", "The Defenders", "Suicide Squad", "Avengers"],
        answer: "Avengers"
    },
    {
        title: "What is covering Wolverine's skeleton?",
        choices: ["Adamantium", "Unobtanium", "Vibranium", "Badassium"],
        answer: "Adamantium"
    },
    {
        title: "Where is Natasha Romanoff (Black Widow) from?",
        choices: ["England", "India", "Russia", "Japan"],
        answer: "Russia"
    },
    {
        title: "What is Cyclops' mutant ability?",
        choices: ["Telekninesis", "Eye Lasers", "Speed (i.e. Running Fast", "Talking to Animals"],
        answer: "Eye Lasers"
    },
    {
        title: "Who plays Spider-Man in the Marvel Cinematic Universe?",
        choices: ["Toby Maguire", "Tom Holland", "Andrew Garfield", "All of the Above"],
        answer: "All of the Above"
    },
];

// Start Quiz Function
function beginQuiz() {
    // hide the start screen during the quiz
    var startQuizEl = document.getElementById("start");
    startScreenEl.setAttribute("class", "hide");

    // make the questions appear on the page
    questionsEl.removeAttribute("class");

    // start the time

    // show starting time on the page

    getQuestions();
}

// Get Quiz questions
function getQuestions() {
    
}

// Question button clicks
function clickQuestions() {

}

// End the Quiz
function endTheQuiz() {

}

// Timer Function
function clockCountDown() {

}

// Save the Score
function saveHighScores() {

}

// Key event functions
function enterBtnEvent() {

}

submitBtn.onclick = saveHighScores;
startBtn.onclick = beginQuiz;
initialsEl.onkeyup = enterBtnEvent;