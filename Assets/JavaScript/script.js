
//QUESTIONS ARRAY 

var quizQuestions = [
    {
        title: "Commonly used data types DO Not Include",
        options: ['string', 'booleans', 'alerts', 'numbers'],
        answer: 'alerts'
    },
    {
        title: "The condition in an if / else statement is enclosed with____",
        options: ['quotes', 'curly brackets', 'parenthesis', 'square brackets'],
        answer: 'parenthesis'
    },
    {
        title: "Arrays in JavaScript can be used to store",
        options: ['numbers and strings', 'other arrays', 'booleans', 'all of the above'],
        answer: 'all of the above'
    },
    {
        title: "String values must be enclosed within____ when being assigned to variables",
        options: ['commas', 'curley brackets', 'quotes', 'parenthesis'],
        answer: 'quotes'
    },
    {
        title: "A very useful tool used during development and debugging for printing content to the debugger is:",
        options: ['JavaScript', 'terminal/bash', 'for loop', 'console.log()'],
        answer: 'console.log()'
    },
]


quizQuestions[1].answer
quizQuestions[2].options[2]


// variables 
var questionIndex = [0];
var score = 0;



// DOME ELEMENTS

var highScoreEl = document.querySelector("#highscore");
var timerEl = document.querySelector("#timer");
var startQuizEl = document.querySelector("#start-quiz");
var questitleEl = document.querySelector("#question-title");
var answerOptions = document.querySelector("#answer-options");
var submitbtnEl = document.querySelector("#submit-button");

var index = 0;

// var startQuizEl = document.querySelector("#start-quiz");

function startQuiz() {
    questitleEl.textContent = quizQuestions[index].title;

    //display each choices on each button


    //after clicked on one of the choices
    //create a click event for the buttonss

}

function checkAnswer(event){
  //index++;
    //call startQuiz()
}

startQuizEl.addEventListener('click', startQuiz)

