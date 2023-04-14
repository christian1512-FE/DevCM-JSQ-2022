
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



// DOME ELEMENTS

var highScoreEl = document.querySelector("#highscore");
var timerEl = document.querySelector("#timer");

//Containers 
var startEL = document.querySelector('#card-container');
var quizContainerEL = document.querySelector('#quiz-container');
// var highScoreContainerEl = document.querySelector('#highscore-container');

//start button, question title, submit button
var startQuizEl = document.querySelector("#start-quiz");
var questitleEl = document.querySelector("#question-title");
var submitbtnEl = document.querySelector("#submit-button");

// Answer buttons
var answerOneEl = document.querySelector("#answer1");
var answerTwoEl = document.querySelector("#answer2");
var answerThreeEl = document.querySelector("#answer3");
var answerFourEl = document.querySelector("#answer4");

//Answer options
var answerOptionEl = document.querySelector("#answer-options");



var timeLeft = 60;
var timeInterval = 0;
var questionIndex = 0;

var index = 0;
var score = 0;
var highScores = JSON.parse(localStorage.getItem("highScores")) || [];
console.log(highScores)
//NEED TO HIDE CONTAINERS

function startQuiz() {

    timeInterval = setInterval(function () {
        timeLeft--;
        timer.textContent = "Time:" + timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timeInterval);
            timer.textContent = "GAME OVER!";

        }
    }, 1000);

    startEL.classList.remove('show');
    startEL.classList.add('hide');
    quizContainerEL.classList.remove('hide');
    quizContainerEL.classList.add('show');

    askQuestions();
};

function askQuestions() {

    document.getElementById('answer-options').innerHTML = ''


    questitleEl.textContent = quizQuestions[index].title;
    quizQuestions[index].options.forEach(function (option) {
        var button = document.createElement('button')
        button.classList.add('button')
        button.textContent = option
        button.setAttribute('value', option)
        button.onclick = function () {

            if (this.value === quizQuestions[index].answer) {
                score++;
                // console.log('correct')
            } else {
                timeLeft = timeLeft -= 10
                // alert('Wrong Answer')
            }

            index++; //move to next question
            if (index === quizQuestions.length) {
                console.log('end game')
                endGame();

            } else {
                askQuestions();

            }

        };
        document.getElementById('answer-options').appendChild(button)
    });

};

function endGame(event) {
    var scoreContainerEl = document.querySelector('#score-container');
    quizContainerEL.classList.add('hide');
    quizContainerEL.classList.remove('show');
    scoreContainerEl.classList.add('show');

    clearInterval(timeInterval);

    document.getElementById('submit-button').addEventListener("click", function (event) {
        event.preventDefault();
        var initials = document.getElementById('initials').value;
        var scoreObj = {
            initials: initials,
            score: score * timeLeft
        }
        highScores.push(scoreObj);
        localStorage.setItem('highScores', JSON.stringify(highScores));
        window.location.href = "highscore.html";
    });

};


startQuizEl.addEventListener('click', startQuiz)





