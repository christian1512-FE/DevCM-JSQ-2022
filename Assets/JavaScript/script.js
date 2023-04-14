
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

// quizQuestions[0].title //this gets you the first question
// quizQuestions[1].answer // this gets answer: parenthesis
// quizQuestions[2].options[2] = /// this gets you booleans


// DOME ELEMENTS

var highScoreEl = document.querySelector("#highscore");
var timerEl = document.querySelector("#timer");

//Containers 
var containerEL = document.querySelector('#card-container');
var quizContainerEL = document.querySelector('#quiz-container');
var scoreContainerEl = document.querySelector("#score-container")
var highScoreContainerEl = document.querySelector('#highscore-container');

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

    containerEL.classList.remove('show');
    containerEL.classList.add('hide');
    quizContainerEL.classList.remove('hide');
    quizContainerEL.classList.add('show');
    
    askQuestions();
}

function askQuestions() {

    document.getElementById('answer-options').innerHTML = ''


    questitleEl.textContent = quizQuestions[index].title;
    // answerOneEl.textContent = quizQuestions[index].options[0];
    // answerTwoEl.textContent = quizQuestions[index].options[1];
    // answerThreeEl.textContent = quizQuestions[index].options[2];
    // answerFourEl.textContent = quizQuestions[index].options[3];
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
                timeLeft = timeLeft -=10
                // alert('Wrong Answer')
            }

            index++; //move to next question
            if (index === quizQuestions.length) {
                console.log('end game')

            } else {
                askQuestions();
                endGame();


            }
            //score ++ or whatever the score variable was 
    //timer decromentation whatever the timer variable is -=10
    //end game do another function 

        }
        document.getElementById('answer-options').appendChild(button)
    })

}

function endGame (event) {
    quizContainerEL.classList.add('hide');
    scoreContainerEl.classList.add('show');
    // highScoreContainerEl.classList.add('show');
    // scoreContainerEl.classList.remove('hide');
    // scoreContainerEl.classList.add('show');
    
    // quizContainerEL.classList.add('hide');



}


//add to score if correct 
// reduce timer if wrong
// when quiz over show score container & hide quiz container 

// function checkAnswer(event) { //event is going to trigger when you click on the answer
//     //index++;
//     //call startQuiz()

//     startQuiz();
// }

startQuizEl.addEventListener('click', startQuiz)





