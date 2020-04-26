// Var Declaratives

var timerEl = document.querySelector(".timer");
var startBtn =document.createElement("button");

var openingEl =document.querySelector(".opening");
var welcomeEl = document.querySelector(".welcome");

var answerEl = document.querySelector("#answerEl")

//start button
document.body.appendChild(startBtn);
startBtn.setAttribute("style", "display:block; text-align: center; height: 60px; width: 80px; margin: auto; background-color: purple; color: #ffffff")
startBtn.innerHTML ="Start Quiz!";

startBtn.addEventListener("click", countdown);
startBtn.addEventListener("click", startQuiz);
// startBtn.addEventListener("click", startQuiz);
// questionEl.appendChild(startBtn);

var questionIndex= 0;
var secondsLeft = 10;
var score = 0;
var total = 0; 
var incorrect = 0;


//Question list
var questions = [
  {
    title: "Commonly used data types DO NOT Include:",
    choices: {
      a: "strings", 
      b: "booleans",
      c: "alerts", 
      d: "numbers"},
    answer: "c"
},
{
    title: "The condition in an if/else statement is enclosed within ______.",
    choices: {
      a: "curly brackets",
      b: "square brackets", 
      c: "quotes", 
      d: "parentheses"},
    answer: "d"
},
{
  title: "A very useful tool used during development and debugging for printing content to the development tools is______.",
  choices: {
    a:  "git bash" ,
    b: "console.log",
    c: "Javascript",
    d: "for loops"},
  answer: "b"
},
{   
    title: "Arrays in Javascript can be used to store ____.", 
    choices: {
      a: "numbers and strings", 
      b: "booleans",
      c: "other arrays", 
      d: "all of the above"},
    answer: "d"
},
{ 
    title: "String values must be enclosed within _____ when being assigned to variables.",
    choices: {
      a: "quotes", 
      b: "parrentheses", 
      c:"curly braces", 
      d: "commas"},
    answer: "a"
}
]

// var saveScoreInput=document.createElement("input");
// saveScoreInput.className="form-group p-1";
// saveScoreInput.placeholder="Enter Your Initals";

function startQuiz() {
  questionsEl.appendChild(timerEl);
  startBtn.remove();
  countdown();
  nextQuestion();
}
function nextQuestion(){
  if (questionIndex < questions.length) {
    // add the currentQuestion
    questionsEl.appendChild(currentQuestion);
    // add the answer buttons
    questionsEl.appendChild(answerA);
    questionsEl.appendChild(answerB);
    questionsEl.appendChild(answerC);
    questionsEl.appendChild(answerD);
    // give the answer buttons and the question their text
    currentQuestion.innerHTML = questions[questionIndex].title;
    answerA.innerHTML = questions[questionIndex].choices.a;
    answerB.innerHTML = questions[questionIndex].choices.b;
    answerC.innerHTML = questions[questionIndex].choices.c;
    answerD.innerHTML = questions[questionIndex].choices.d;
  } else {
    scoreScreen();
  }
}
// countdown timer function
function countdown() {
  startBtn.style.display= "none";
  openingEl.style.display= "none";
  welcomeEl.style.display= "none";
  var timerInterval = setInterval(function(){
    secondsLeft--;
    timerEl.innerHTML = secondsLeft + " remaining";
    if(secondsLeft === 0) {
      scoreScreen();
    }

  }, 1000);
}


function scoreSreen(){ 
  clearInterval(timerInterval);
  timerEl.remove();
  currentQuestion.remove();
  hearder.remove();
  answerA.remove();
  answerB.remove();
  answerC.remove();
  answerD.remove();
  var timeScore = document.createElement("h2");
  timeScore.innerHTML = "Your Score: " + secondsLeft;
  questionEl.appendChild(timeScore);
  // questionEl.appendChild(saveScoreInput);
  // questionEl.appendChild(saveScoreButton);
}

// function startGame(event){
//   event.preventDefault();

//   var questionEl = document.querySelector(".card-header");
//   questionEl.setAttribute("Style", "display: block")
//   cardEl.setAttribute("Style", "display: block")

//   questionEl.textContent = questions [0]["title"]
//   countdown();
// }

// function multipleChoice(){
//   var list= document.createElement("ul");
//     list.setAttribute("style", "list-style:none");

//     for (var i=0; i<questions[current].choices.length; i++){
//       var li= document.createElement("li");
//       list.appendChild(li);
//       var button =document.createElement("button")
//   }
// }

// function startGame(event){
//   event.preventDefault();

//   var questionEl = document.querySelector("#questionsEl");
//   questionEl.setAttribute("Style", "display: block")
//   cardEl.setAttribute("Style", "display: block")

//   questionEl.textContent = questions [0]["title"]
//   countdown();
   
// }

var currentQuestion = document.createElement("p");
currentQuestion.classList = "lead";
var answerA = document.createElement("button");
answerA.className = "btn btn-success btn-block mb-2";
answerA.addEventListener("click", function () {
  if (questions[questionIndex].correctAnswer === "a") {
    addCorrect();
  } else {
    secondsLeft = secondsLeft - 15;
    addIncorrect();
  }
  questionIndex++;
  nextQuestion();
});

var currentQuestion = document.createElement("p");
currentQuestion.classList = "lead";
var answerB = document.createElement("button");
answerB.className = "btn btn-success btn-block mb-2";
answerB.addEventListener("click", function () {
  if (questions[questionIndex].correctAnswer === "b") {
    addCorrect();
  } else {
    secondsLeft = secondsLeft - 15;
    addIncorrect();
  }
  questionIndex++;
  nextQuestion();
});


var currentQuestion = document.createElement("p");
currentQuestion.classList = "lead";
var answerC = document.createElement("button");
answerC.className = "btn btn-success btn-block mb-2";
answerC.addEventListener("click", function () {
  if (questions[questionIndex].correctAnswer === "c") {
    addCorrect();
  } else {
    secondsLeft = secondsLeft - 15;
    addIncorrect();
  }
  questionIndex++;
  nextQuestion();
});


var currentQuestion = document.createElement("p");
currentQuestion.classList = "lead";
var answerD = document.createElement("button");
answerD.className = "btn btn-success btn-block mb-2";
answerD.addEventListener("click", function () {
  if (questions[questionIndex].correctAnswer === "d") {
    addCorrect();
  } else {
    secondsLeft = secondsLeft - 15;
    addIncorrect();
  }
  questionIndex++;
  nextQuestion();
});

// function nextQuestion() {
//   if (questionIndex <questions.length) {
//     // add the currentQuestion
//     questionEl.appendChild(currentQuestion);
//     // add the answer buttons
//     questionEl.appendChild(answerA);
//     questionEl.appendChild(answerB);
//     questionEl.appendChild(answerC);
//     questionEl.appendChild(answerD);
//     // give the answer buttons and the question their text
//     currentQuestion.innerHTML = questions[questionIndex].question;
//     answerA.innerHTML = questions[questionIndex].answers.a;
//     answerB.innerHTML = questions[questionIndex].answers.b;
//     answerC.innerHTML = questions[questionIndex].answers.c;
//     answerD.innerHTML = questions[questionIndex].answers.d;
//   } else {
//     scoreScreen();
//   }
// }
