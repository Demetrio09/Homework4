// event listener on the button to start the game
var startButton = document.querySelector("#start-button");
var timerEl = document.querySelector("#timer");

secondsLeft = 60;

startButton.addEventListener("click", function() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timerEl.innerHTML = secondsLeft + "test";
        console.log(secondsLeft);
        

        if(secondsLeft === 0) {
            clearInterval(timerInterval);
        }
        
    }, 1000);
})


/* Starting the game */
// A timer starts and is displayed on the page.
// set a variable that has the number of milliseconds
// Will need to setup a setinterval function
// if variable reaches 0, clear the timer, example is in 4.08
// Make sure it works for like 10 seconds and doesn't go below 0, ex no negatives
// clear the timer when it hits 0
// clear the middle section and display first question
​
/* Logic of the quiz */
// Need something keeping track of score
​
// Need a list of multichoice questions
// list of questions inside array.
// what makes a question:
// answers
// which answer is right, and which are wrong
// the actual question
var questions =  [
    {
        question: "Commonly used data types DO NOT include:",
        answers: [
            "strings",
            "booleans",
            "alerts",
            "numbers"
        ],
        correctAnswer: "alerts"
    },
    {
        question: "Commonly used data types DO NOT include:",
        answers: [
            "answer1",
            "answer2",
            "answer3"
        ],
        correctAnswer: "answer2"
    },
    {
        question: "Commonly used data types DO NOT include:",
        answers: [
            "answer1",
            "answer2",
            "answer3"
        ],
        correctAnswer: "answer2"
    },
    {
        question: "Commonly used data types DO NOT include:",
        answers: [
            "answer1",
            "answer2",
            "answer3"
        ],
        correctAnswer: "answer2"
    },
    {
        question: "Commonly used data types DO NOT include:",
        answers: [
            "answer1",
            "answer2",
            "answer3"
        ],
        correctAnswer: "answer2"
    }
]
​
/* Putting a question on the page */
// Counter variable starting at 0.
// Take the first question from the array, this will be an object
// Grab the title of the question and put it on the page with javascript
// Grab the answers of the question
    // Loop through the answers
    // Put the answers in individual buttons
    // Have some data on the buttons indicating the value inside (hint data-answer)
    // event listener to click those answers
        // when you click the answer, you grab the value of that button and compare to the correct answer
            // if right, you can keep score the same or increase
            // if wrong, you can lower the score
        // after comparison and score calculation,
            // old question disappears, new question appears
                // increase the counter by 1 to get to the next question
            // compare counter to length of the array, if less go to next question
                // repeat everything we did above
        // once the counter is equal to length of the array, we don't show the next question, the game ends
​
        // Last screen all done
            // Title
            // Your final score
            // input
            // submit button
        // Once you submit the score
            // Grab the initial array from localstorage, if there is one, and convert it, otherwise use an empty array
            // take the score and initials, put it into an array, stringify that array, and then put it in localstorage
            // You'll save that score, and the initials to localStorage
        // var highscores = [
//     {
//         // score:
//         // initials:
//     }
// ]