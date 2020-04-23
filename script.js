// Var Declaratives
var headerEl =document.querySelector(".header");
var timeEl = document.querySelector(".time");
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
    choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
    answer: "parentheses"
},
{   
    title: "Arrays in Javascript can be used to store ____.", 
    choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
    answer: "all of the above"
},
{ 
    title: "String values must be enclosed within _____ when being assigned to variables.",
    choices: ["commas", "curly braces", "quotes", "parrentheses"],
    answer: "quotes"
},
{
    title: "A very useful tool used during development and debugging for printing content to the development tools is______.",
    choices: ["console.log", "for loops", "Javascript", "git bash"],
    answer: "console.log"
  
}
]

function 
// pull quiz button code from activity 19

//countdown timer function
function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " remaining.";

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      sendMessage();
    }

  }, 1000);
}

//score screen and inital log of what user's score

function scoreSreen(){
    timeEl
}

//start button
create button and appendchild
create function within arond, style and event listener
//high scores screen

// start.addEventListener
document.getElementById("start-btn").addEventListener("click", XXXXX)
console.log(click)

setTime();