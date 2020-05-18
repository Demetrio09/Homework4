// var questionsEl = document.querySelector("#h2");
const instructionsEl = document.getElementById("p");
const startButtonEl = document.querySelector("#start-button");
const questionsEl = document.querySelector("#h2");
const textEl = document.querySelector("#text");
const answersEl = document.getElementById("buttons-div");
const timerEl = document.querySelector("#timer");
let score = 0;
let questionsCount = 0;
let highscores = [];

// Event lister on the button to start the game.

let secondsLeft = 31;

startButtonEl.addEventListener("click", function () {
    setQuestions();
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timerEl.textContent = secondsLeft;

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            // call function with alert to stop game to continue runnig unless refresh the page
            alert("Times up! \n Please refresh the page to start the game again.");
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
    questionsEl.innerHTML = "";
    questionsEl.className = "col-8 align-self-center"
    instructionsEl.remove();
    startButtonEl.remove();
    questionsCount++;
    // console.log(questionsCount);


    for (var i = 0; i < questions.length; i++) {
        var questionsLoop = Math.floor(Math.random() * questions.length);
        // console.log(questionsLoop);
        var selectedQuestion = questions[questionsLoop].question;
        // console.log(selectedQuestion);
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
            var check = document.getElementById(i);
            check.addEventListener("click", checkAnswer);
        }
        if (questionsCount === 6) {
            // console.log("end game");
            endGame();
        }
    }
};



// conditional statments
function checkAnswer() {
    var dataQuestion = questionsEl.getAttribute("data-question");
    var choseAnswer = this.getAttribute("data-answer");

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

    questionsEl.innerHTML = "";
    setQuestions();
}

function endGame() {
    timerEl.remove();
    questionsEl.innerHTML = "Your score was: " + score + " of 5 questions.";
    var userName = prompt("End of game " + "\n" + " Please enter your name:");
    var highScoreBtn = document.createElement("a");
    highscores.push(userName);
    highscores.push(score);
    localStorage.setItem(userName, score);
    highScoreBtn.className = "btn-sm btn btn-outline-secondary";
    highScoreBtn.textContent = "View high scores";
    highScoreBtn.setAttribute("href", "highscores.html");
    answersEl.appendChild(highScoreBtn);
    for (let i = 0; i <= 3; i++) {
        document.getElementById(i).remove();

    };
};

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