// Variables to keep track of time
var questionsIndex = 0;
// indexed at 0
var time = questions.length * 15;
// Allows you to keep a timer and score for your quiz
var timerId;

// Variables to help Traverse the DOM
var questionsEl = document.getElementById("questions");
var timerEl = document.getElementById("time");
var choicesEl = document.getElementById("choices");
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
    // create a variable to get the current questions array
    var currentQuestions = questions[questionsIndex];

    // Update the code question title with current code

    // clear out old question choices

    // we can loop over the choices using forEach

    // attach click event to listener

    // display the choice on the page
}

// Question button clicks
function clickQuestions() {
    // error handling needed for incorrect answer to question

    // And add the time deduction

    // display the new time once time deducted

    // flash the wrong/right feedback on the page under the questions

    // move to the next question

    // check if we've finished asking all the questions


}

// End the Quiz
function endTheQuiz() {
    // Stop the timer
    clearInterval(timerId);

    // show the final screen

    // show final score

    // hide questions
}

// Timer Function
function clockCountDown() {
    // update the time
    time--;
    timerEl.textContent = time;
    // check if the user is out of time
    if (time <= 0) {
        endTheQuiz();
    }
}

// Save the Score
function saveHighScores() {
// get value from your input box

// make sure the user wrote their initials in the box

// local storage

// redirect to next page (highscore.html)
}

// Key event functions
function enterBtnEvent() {
    // give enter key ability to save your high score when keydown

}

// user clicks button to submit their initials
submitBtn.onclick = saveHighScores;
// user clicks to begin the quiz
startBtn.onclick = beginQuiz;
// this checks if the user hit enter for their initials
initialsEl.onkeyup = enterBtnEvent;