var startPage = document.querySelector("#start-page");
var startButton = document.querySelector("#start-button");
var timerEl = document.querySelector("#timer");
var score = 0;
var secondsLeft = 31;

// Event lister on the button to start the game.
startButton.addEventListener("click", function() {
    var timerInterval = setInterval(function() {        
    
    secondsLeft--;
    timerEl.textContent = secondsLeft;

    if(secondsLeft === 0) {
        clearInterval(timerInterval);
        alert("Times up!");
    }    
}, 1000);
})

// questions object.
var questions = [{
    question: "What kind of statement is used to execute actions based on a trigger or condition?",
    answers: [
        "Conditional Statement",
        "Boolean Variable",
        "RegExp or Regular Expression",
        "Fired Event"
    ],
    correctAnswer: "Conditional Statement"
},
{
    question: "In JavaScript, what element is used to store multiple values in a single variable?",
    answers: [
        "Functions",
        "Arrays",
        "Variables",
        "Strings"
    ],
    correctAnswer: "Arrays"
},
{
    question: "What is a JavaScript element that represents either TRUE or FALSE values?",
    answers: [
        "Event",
        "Condition",
        "RegExp",
        "Boolean"
    ],
    correctAnswer: "Boolean"
},
{
    question: "What elements are used to test for TRUE or False values stored in variables?",
    answers: [
        "Comparison and logical operators.",
        "Trigger readers.",
        "Conditional statements.",
        "RegExp or Regular Expressions."
    ],
    correctAnswer: "Comparison and logical operators."
},
{
    question: "What is considered to be the most popular programming language in the world?",
    answers: [
        "Ruby",
        "HTML",
        "Swift",
        "JavaScript"
    ],
    correctAnswer: "JavaScript"
}];