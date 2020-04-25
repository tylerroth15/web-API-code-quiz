// Var Declaratives
// var headerEl =document.querySelector(".header");
var timeEl = document.querySelector(".timer");
var startBtn =document.createElement("button");
var questionBtn =document.querySelector(".button-area")
document.body.appendChild(startBtn);
startBtn.setAttribute("style", "display:block; text-align: center; height: 60px; width: 80px; margin: auto; background-color: purple; color: #ffffff")
startBtn.innerHTML ="Start Quiz!";
startBtn.addEventListener("click", countdown);
startBtn.addEventListener("click", startGame)
// var mainEl = document.querySelector("main");
// var startBtn = document.createElement(".btn");

var secondsLeft = 75;
var score = 0;
var total = 0; 
var incorrect = 0;

//Question list
var questions = [
  {
    title: "Commonly used data types DO NOT Include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts"
},
{
    title: "The condition in an if/else statement is enclosed within ______.",
    choices: ["curly brackets","square brackets", "quotes", "parentheses"],
    answer: "parentheses"
},
{
  title: "A very useful tool used during development and debugging for printing content to the development tools is______.",
  choices: [ "git bash" ,"console.log", "Javascript","for loops"],
  answer: "console.log"

},
{   
    title: "Arrays in Javascript can be used to store ____.", 
    choices: ["numbers and strings", "booleans", "other arrays", "all of the above"],
    answer: "all of the above"
},
{ 
    title: "String values must be enclosed within _____ when being assigned to variables.",
    choices: ["quotes", "parrentheses", "curly braces", "commas"],
    answer: "quotes"
}
]
// pull quiz button code from activity 19

//countdown timer function
function countdown() {
  startBtn.style.display= "none";
  var timerInterval = setInterval(function(){
    secondsLeft--;
    timerEl.textContent = secondsLeft + "remaining.";

  
    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      scoreScreen();
    }

  }, 1000);
}

//score screen and inital log of what user's score

function scoreSreen(){
    timeEl.textContent = "Finished!";
}

function startGame(event){
  event.preventDefault();

  var questionEl = document.querySelector(".card-header");
  questionEl.setAttribute("Style", "display: block")

  questionEl.textContent = "Hello Beautiful"
}

function handleClick(event){
  event.preventDefault();

    if(event.target.matches(".answer")){
      if(event.target.matches(".correct")){
        greating="Correct Answer!"
      }else{
        greating="Incorrect Answer!"
      }
    }
}
//start button
//create button and appendchild
//create function within arond, style and event listener
//high scores screen

// start.addEventListener
//document.getElementById("start-btn").addEventListener("click", XXXXX)
//console.log(click)

// setTime();