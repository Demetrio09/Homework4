var codingQuizEl = document.querySelector("#h2");
var instructionsEl = document.getElementById("p");
var startButtonEl = document.querySelector("#start-button");
var questionsEl = document.querySelector("#h2");
var answersEl = document.getElementById("buttons-div");
var answerEl = document.body;
var timerEl = document.querySelector("#timer");
var score = 0;
var questionsCount = 0;
// Event lister on the button to start the game.

var secondsLeft = 60;

startButtonEl.addEventListener("click", function () {
    setQuestions();
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timerEl.textContent = secondsLeft;

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            // call function with alert to stop game to continue runnig unless refresh the page
            console.log("times up");
            //endGame(); function
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
    questionsCount++;
    console.log(questionsCount);


    for (var i = 0; i < questions.length; i++) {
        var questionsLoop = Math.floor(Math.random() * questions.length);
        console.log(questionsLoop);
        var selectedQuestion = questions[questionsLoop].question;
        console.log(selectedQuestion);
        questionsEl.setAttribute("data-question", questionsLoop);
        questionsEl.textContent = selectedQuestion;

        for (var i = 0; i < questions[i].answers.length; i++) {
            answerButtonsEl = document.createElement("button");
            listAnwser = questions[questionsLoop].answers[i];
            answersEl.className = "row justify-content-center";
            answerButtonsEl.className = "btn-sm btn btn-outline-secondary";
            answerButtonsEl.setAttribute("data-answer", listAnwser);
            answerButtonsEl.setAttribute("id", i);
            answerButtonsEl.textContent = listAnwser;
            answersEl.appendChild(answerButtonsEl);
            // console.log(i);
            console.log(answerButtonsEl);
            var check = document.getElementById(i);
            if (questionsCount === 5) {
                console.log("end game")
            } else {
            check.addEventListener("click", checkAnswer);
            }
        }
    }
};



// conditional statments
function checkAnswer() {
    var dataQuestion = questionsEl.getAttribute("data-question");
    var choseAnswer = this.getAttribute("data-answer");
    console.log(choseAnswer);
    console.log(questions[dataQuestion].correctAnswer);


    if (choseAnswer == questions[dataQuestion].correctAnswer) {
        // answer is correct
        score++;
    } else {
        // answer is wrong
        score--;
    };

    for (var i = 0; i < 4; i++) {
        var removeBtn = document.getElementById(i);
        removeBtn.remove();
    }

    codingQuizEl.innerHTML = "";
    console.log(score);
    setQuestions();
}


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