// Remove some of these variables if they are not needed:
var startButton = document.getElementById("start");
var questionText = document.querySelector("#question-text");
var answerChoices = document.querySelector("#answers-text");
var feedback = document.getElementById("msg");
var timerEl = document.querySelector(".timer");
var questionCounter = 0;
var secondsLeft = 30;

var question = "";
var currentQuestionIndex = 0;
var questionCounter;
var questionBox = document.querySelector("#question-box");
var choices = [];

var correctAnswer;
var chosenAnswer = document.querySelector(".chosen-answer");
var startScreen = document.getElementById("start-screen");
var questionScreen = document.getElementById("question-screen");
var resultsScreen = document.getElementById("results-screen");
var score = document.getElementById("score");


var quizQuestions = [
    {
      question: "Arrays in JavaScript can be used to store?",
      choices: ["Numbers & Strings", "Booleans", "Other arrays", "All of the above"],
      correctAnswer: "All of the above"
    },
    {
      question: "Commonly used data types DO NOT include?",
      choices: ["Strings", "Booleans", "Alerts", "Numbers"],
      correctAnswer: "Alerts"
    },
    {
      question: "String values must be enclosed in?",
      choices: ["Single or double quotation marks", "Curly brackets", "Parenthesis", "Square brackets"],
      correctAnswer: "Single or double quotation marks"
    },
    {
      question: "Which of the following methods removes the last element from an array and returns that element?",
      choices: ["get()", "last()", "pop()", "None of the above"],
      correctAnswer: "pop()"
    },
    {
      question: "Which operator is used to assign a value to a variable?",
      choices: ["*", "X", "==", "="],
      correctAnswer: "="
    },
    {
      question: "Which of these is NOT a JavaScript comparison operator?",
      choices: ["==", "===", "==!", ">=", "?"],
      correctAnswer: "==!"
    },
    {
      question: "JavaScript uses the + operator for both addition and concatenation.  Which of the following statements is TRUE?",
      choices: ["Numbers are concatenated. Strings are added.", "Numbers are added. Strings are concatenated.", "Both Numbers and Strings can be concatenated.", "Both Numbers and Strings can be added."],
      correctAnswer: "Numbers are added. Strings are concatenated."
    }, 
    {
      question: "Is the console a useful tool used in debugging of JavaScript?",
      choices: ["Yes", "No", "That depends"],
      correctAnswer: "Yes"
    },  
    {
      question: "Which of the following String functions creates a string and displays it in a large font as if it were in a tag?",
      choices: ["anchor()", "blink()", "strong()", "big()"],
      correctAnswer: "big()"
    },      
    {
      question: "How do you write an IF statement in JavaScript?",
      choices: ["if (i==5)", "if i=5 then", "if i==5 then", "if i=5"],
      correctAnswer: "if (i==5)"
    }
];

startButton.addEventListener("click", function() {
    clearIntroPara();
    setTime();
    displayQuiz();
});

function clearIntroPara() {
        startScreen.setAttribute("class", "hide");
}

function setTime() {
    var timerInterval = setInterval(function() {
      document.querySelector(".timer").classList.remove("hide");
      document.querySelector("#time").innerText=secondsLeft;
      secondsLeft--;

      console.log("Time left " + secondsLeft);
      if (secondsLeft === 0 -1) {
        clearInterval(timerInterval);
        sendMessage();
      }
    }, 1000);
}

function displayQuiz(){
        // Access the information in "quizQuestions"
        // Pull the "question" string from the first Question & show as text on the page 
        // Pull the "answers" array from the first Question & show as text within the choice buttons (5) on the page
        // Allow the user to make a choice from the choice buttons (click)
        // Identify if the user chose the "correctAnswer" or not & send relevant message
        // Move to the next question
        
        questionScreen.setAttribute("class", "inline");
        answerChoices.textContent = "";       
        questionText.textContent = quizQuestions[currentQuestionIndex].question;
        quizQuestions[currentQuestionIndex].choices.forEach(function (element){
            var choice = document.createElement("button");
            choice.textContent = element;
            answerChoices.appendChild(choice);
            choice.addEventListener("click", checkAnswer);
            // showFeedback();
        });
}

function showFeedback() {
    console.log(this.textContent)
    if (this.textContent === correctAnswer)
    feedback.textContent = "Correct!";
    else
    feedback.textContent = "Wrong";
};
showFeedback()

function checkAnswer() {
    if (quizQuestions.length -1 === currentQuestionIndex){
        showResults();
    }
    else {
    currentQuestionIndex +=1;
    displayQuiz();
    }
};
checkAnswer()

function showResults(){
    quizResults.removeAttribute("class");
    score.textContent = "Your score is " + correctAnswers;
    questionScreen.setAttribute("class", "hide");
}
showResults()

// Function to alert that the time is up &, therefore, the game is over:
function sendMessage() {
    timerEl.textContent = "Time is up!";
}


        // show options
        // var answers = quiz.getquestionIndex().answers;
        // for(var i = 0; i < choices.length; i++) {
        //     var element = document.getElementById("chosenAnswer" + i);
        //     element.innerText = choices[i];
        //     chosenAnswer("btn" + i, choices[i]);
        // }
 
        // Add in:
        // questionCounter++;

         // e.preventDefault();

// function getquestionIndex() {}
// function isEnded(){}


        // currentQuestion.display = quizQuestions[currentQuestionIndex].question;
        // question[0].choices.forEach(function (element){
      
        
        // quizQuestions.forEach(
        //   (currentQuestion, currentQuestionIndex) => {

        // for (var quizQuestions = 0; quizQuestions < quizQuestions.length; quizQuestions++) {
        
        
            // for (var i = 0; i < i.length; i++) {


// Need to clear the previous choices first?

//   submitButton.addEventListener("click", function() {
//     if (count < 10) {
//       count++;
//       counter.textContent = count;
//       localStorage.setItem("count", count);
//     }
//   });

// At end, show results
// submitButton.addEventListener('click', showResults);


// Sources:
// https://www.sitepoint.com/simple-javascript-quiz/#demo
// https://webdevtrick.com/create-javascript-quiz-program/

// For modal:
// https://www.youtube.com/watch?v=6ophW7Ask_0


// WHEN I answer the question, I am given a comment saying whether or not I answered correctly (Correct or Incorrect)
// If I answer correctly, the score (behind the scenes) adds 1 from 0
// Else if I answer incorrectly, the score (behind the scenes) remains where it is
// THEN I am presented with the next question

// This process continues until all the questions (10) are answered

// WHEN all questions are answered or the timer reaches 0
// THEN the game is over

// WHEN the game is over, I go through to a page which explains the high scores
// THEN I can save my initials and my score
// Link to as new page on a new html
// As a function endGame() then show the high scores page