// Define variables:
var startButton = document.getElementById("start");
var quizQuestions = document.getElementById("quiz");
var timerEl = document.querySelector(".timer");
var secondsLeft = 10;
// Change timer to begin at 45 seconds (or other time interval) at the end


// When I open the website, I am presented with:
//   - a heading 
//   - & short paragraph about the multiple choice quiz (10 questions) & the time allocated (45 seconds?)
//   - a start button
// WHEN I am ready to start, I click the start button
// THEN a timer starts & I am presented with the first question

startButton.addEventListener("click", function() {
    setTime ();
    displayQuiz();

    console.log("button is clicked")
});

function setTime() {
    var timerInterval = setInterval(function() {
      document.querySelector(".timer").classList.remove("hide");
      document.querySelector("#time").innerText=secondsLeft;
      secondsLeft--;

      console.log("Time left " + secondsLeft);
      if(secondsLeft === 0-1) {
        clearInterval(timerInterval);
        sendMessage();
      }
    }, 1000);
  }
  
// Function to alert that the time is up &, therefore, the game is over:
function sendMessage() {
    timerEl.textContent = "Time is up!";
  }

// Set variables:
var currentQuestion = [];
var questionNumber = [];
var questions;
var answers;
var quizResults = document.getElementById('results');
var chosenAnswers = document.querySelector('.chosen-answer');
var currentQuestionIndex


  function displayQuiz(){
      var output = [];
      var answers = []; // to store the answers
      
// Need to clear the previous choices first

        // for each question...
        questionText.textContent = questions[currentQuestionIndex].title; // change title?
        questions[0].choices.forEach(function (element){


        })
        questionChoices.textContent = "Answer1", "Answer2", "Answer3", "Answer4";
        
        
        quizQuestions.forEach(
          (currentQuestion, questionNumber) => {

        // for (var quizQuestions = 0; quizQuestions < quizQuestions.length; quizQuestions++) {
        // for (var i = 0; i < i.length; i++) {
             
            // submitButton.addEventListener("click", function(event) {
            //     event.preventDefault();

            // and for each available answer...
            for(letter in currentQuestion.answers){

  }
});
  }


//   submitButton.addEventListener("click", function() {
//     if (count < 24) {
//       count++;
//       counter.textContent = count;
//       localStorage.setItem("count", count);
//     }
//   });

// To set up button for answers???
// themeButtonEl.on('click', function () {
//     if (isDark) {
//       $('body').css({ 'background-color': '#d9e9e8', color: '#1a1a1a' });
//       isDark = !isDark;
//     } else {
//       $('body').css({ 'background-color': '#1a1a1a', color: '#d9e9e8' });
//       isDark = !isDark;
//     }
//     });








function showResults(){}

// On start, display first quiz question
// buildQuiz();

// At end, show results
// submitButton.addEventListener('click', showResults);


// https://www.sitepoint.com/simple-javascript-quiz/#demo

var quizQuestions = [
    {
      question: "Arrays in JavaScript can be used to store?",
      answers: ["Numbers & Strings", "Booleans", "Other arrays", "All of the above"],
      correctAnswer: "All of the above"
    },
    {
      question: "Commonly used data types DO NOT include?",
      answers: ["Strings", "Booleans", "Alerts", "Numbers"],
      correctAnswer: "Alerts"
    },
    {
      question: "String values must be enclosed in?",
      answers: ["Single or double quotation marks", "Curly brackets", "Parenthesis", "Square brackets"],
      correctAnswer: "Single or double quotation marks"
    },
    {
      question: "Which of the following methods removes the last element from an array and returns that element?",
      answers: ["get()", "last()", "pop()", "None of the above"],
      correctAnswer: "pop()"
    },
    {
      question: "Which operator is used to assign a value to a variable?",
      answers: ["*", "X", "==", "="],
      correctAnswer: "="
    },
    {
      question: "Which of these is NOT a JavaScript comparison operator?",
      answers: ["==", "===", "==!", ">=", "?"],
      correctAnswer: "==!"
    },
    {
      question: "JavaScript uses the + operator for both addition and concatenation.  Which of the following statements is TRUE?",
      answers: ["Numbers are concatenated. Strings are added.", "Numbers are added. Strings are concatenated.", "Both Numbers and Strings can be concatenated.", "Both Numbers and Strings can be added."],
      correctAnswer: "Numbers are added. Strings are concatenated."
    }, 
    {
      question: "Is the console a useful tool used in debugging of JavaScript?",
      answers: ["Yes", "No", "That depends"],
      correctAnswer: "Yes"
    },  
    {
      question: "Which of the following String functions creates a string and displays it in a large font as if it were in a tag?",
      answers: ["anchor()", "blink()", "strong()", "big()"],
      correctAnswer: "big()"
    },      
    {
      question: "How do you write an IF statement in JavaScript?",
      answers: ["if (i==5)", "if i=5 then", "if i==5 then", "if i=5"],
      correctAnswer: "if (i==5)"
    }
];



        // ...add an HTML radio button
        // answers.push(
        //   `<label>
        //     <input type="radio" name="question${questionNumber}" value="${letter}">
        //     ${letter} :
        //     ${currentQuestion.answers[letter]}
        //   </label>`
        // );


      // add this question and its answers to the output
    //   output.push(
    //     `<div class="question"> ${currentQuestion.question} </div>
    //     <div class="answers"> ${answers.join('')} </div>`
    //   );

  

  // finally combine our output list into one string of HTML and put it on the page
//   quizContainer.innerHTML = output.join('');


// quizQuestions.forEach( (currentQuestion, questionNumber) => {
//     the code we want to run for each question goes here
//   });


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