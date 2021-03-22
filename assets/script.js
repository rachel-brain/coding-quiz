// Remove the variables that are not needed:
var startButton = document.getElementById("start");
var questionText = document.querySelector("#question-text");
var answerChoices = document.querySelector("#answers-text");
var questionFeedback = document.getElementById("result-feedback");
var timerEl = document.querySelector(".timer");
var questionCounter = 0;
var secondsLeft = 25;

var question = "";
var currentQuestionIndex = 0;
var questionCounter;
var questionBox = document.querySelector("#question-box");
var choices = [];
var chosenAnswer;
var correctAnswer;
var currentAnswer;
var startScreen = document.getElementById("start-screen");
var questionScreen = document.getElementById("question-screen");
var resultsScreen = document.getElementById("results-screen");
var finalScore = document.getElementById("score");
var finalMessage = document.getElementById("msg");
var totalCorrect;


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

      console.log("Time left " + secondsLeft)
      if (secondsLeft === 0 -1) {
        clearInterval(timerInterval);
        sendMessage();
      }
    }, 1000);
}

function displayQuiz(){      
        questionScreen.removeAttribute("class");
        answerChoices.textContent = "";       
        questionText.textContent = quizQuestions[currentQuestionIndex].question;
        quizQuestions[currentQuestionIndex].choices.forEach(function (element){
            var choice = document.createElement("button");
            choice.textContent = element;
            answerChoices.appendChild(choice);
            choice.addEventListener("click", checkAnswer);
        });
}

// Correct to display the message onto the webpage re. whether or not the user chose the "correctAnswer".
function checkAnswer() {
    console.log(this.textContent)
    
    var chosenAnswer = this.textContent;
    var correctAnswer = quizQuestions[currentQuestionIndex].correctAnswer;    
    feedback = document.getElementById("#feedback");

    if (chosenAnswer === correctAnswer){
        questionFeedback.textContent = " correct!";
        console.log(questionFeedback.textContent)
        totalCorrect += 1;
    } 
    else {
        questionFeedback.textContent = " wrong.";
        console.log(questionFeedback.textContent)
    }

    if (quizQuestions.length -1 === currentQuestionIndex){
        showResults();
    }
    else {
        currentQuestionIndex +=1;
        displayQuiz();
    }
    questionFeedback.removeAttribute("class");
}
checkAnswer()

// Correct to display the results screen showing the final score.
function showResults(){
    questionScreen.setAttribute("class", "hide");
    finalMessage.removeAttribute("class");
    finalScore.removeAttribute("class");
    finalScore.textContent = "Your final score is " + totalCorrect + "out of a total of 10.";
}
showResults()

function sendMessage() {
    timerEl.textContent = "Time is up!";
    showResults();
}

// When the game is over, the user goes through to another screen explaining the high scores
// If the user confirms, they link to a new page (new html) where they can save their initials alongside their score
// Then, the function endGame shows the high scores page
function endGame() {
    // Go to high scores screen
    // Link to a new page (new html) for inputting initials
    // Then the high scores page is displayed

    // var highScore = document.createElement("button");
    // highScore.addEventListener("dblclick", top.location.href = "http://myscoreishigherthanyours.com");
}
endGame()



// Sources:
// https://www.sitepoint.com/simple-javascript-quiz/#demo
// https://webdevtrick.com/create-javascript-quiz-program/
// https://www.youtube.com/watch?v=6ophW7Ask_0