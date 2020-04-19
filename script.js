var codingQuizEl = document.querySelector("#h2");
var instructionsEl = document.getElementById("p");
var startButtonEl = document.querySelector("#start-button");
var questionsEl = document.querySelector("#h2");
var answersEl = document.getElementById("paragraph");
var answerEl = document.body;
var timerEl = document.querySelector("#timer");
var score = 0;
// Event lister on the button to start the game.

var secondsLeft = 31;

startButtonEl.addEventListener("click", function() {
    setQuestions();
    var timerInterval = setInterval(function() {
    secondsLeft--;
    timerEl.textContent = secondsLeft;

    if(secondsLeft === 0) {
        clearInterval(timerInterval);
        // call function with alert to stop game to continue runnig unless refresh the page
        alert("Times up!");
    }    
}, 1000);

})

// function setQuestions.
// when user clicks stars needs to run a star game function
    // timerInterval starts
    // run a function with for loop to loop for the questions array
    // append first question on ducument
    // appen list of anwsers using DOM

// function setQuestions() / grabs a array and a value from a key object and append to the document

function setQuestions() {    
    codingQuizEl.innerHTML = "";
    codingQuizEl.className = "col-8 align-self-center"
    instructionsEl.remove();
    startButtonEl.remove();

    for (var i = 0; i < questions.length; i++) {
        var questionsLoop = Math.floor(Math.random() * questions.length);
        var selectedQuestion = questions[questionsLoop].question;
        console.log(selectedQuestion);
        questionsEl.textContent = selectedQuestion;

        for (var i = 0; i < questions[i].answers.length; i++) {
            answerButtonsEl = document.createElement("button");
            answersEl.className = "row justify-content-center";
            answersEl.nodeType = "button";
            answerButtonsEl.className = "btn-sm btn btn-outline-secondary";
            answerButtonsEl.textContent = questions[questionsLoop].answers[i];
            answersEl.appendChild(answerButtonsEl);
            console.log(i);
            console.log(answerButtonsEl)
            }
    }
    answerButtonsEl.addEventListener("click", checkAnswer);
};



// conditional statments
function checkAnswer() {
    if (answerButtonsEl == questions.correctAnswer) {
        // answer is correct
        score++;
    } else {
        // answer is wrong
        score--;
    }
}
console.log(score);


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

var lastQuestion = questions.length - 1;
var runningQuestion = 0;