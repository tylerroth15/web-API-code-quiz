// Var Declaratives

var timerEl = document.querySelector(".timer");
var startBtn =document.createElement("button");

var openingEl =document.querySelector(".opening");
var welcomeEl = document.querySelector(".welcome");
var questionsEl = document.querySelector("#questionsEl")
var answerEl = document.querySelector("#answerEl")

//start button
document.body.appendChild(startBtn);
startBtn.setAttribute("style", "display:block; text-align: center; height: 60px; width: 80px; margin: auto; background-color: purple; color: #ffffff")
startBtn.innerHTML ="Start Quiz!";

startBtn.addEventListener("click", countdown);
startBtn.addEventListener("click", startQuiz);
// startBtn.addEventListener("click", startQuiz);
// questionEl.appendChild(startBtn);

var saveScoreInput = document.createElement("input");
saveScoreInput.className = "form-group p-1";
saveScoreInput.placeholder = "Enter your initials";

var saveScoreButton = document.createElement("button");
saveScoreButton.innerHTML = "Save Score";
saveScoreButton.className = "btn btn-success btn-block";
saveScoreButton.addEventListener("click", saveUserScore);

var tryAgainButton = document.createElement("button");
tryAgainButton.innerHTML = "Try Again";
tryAgainButton.className = "btn btn-info btn-block";
tryAgainButton.addEventListener("click", function () {
  window.location.reload();
});

var questionIndex= 0;
var secondsLeft = 75;
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
    correctAnswer: "c"
},
{
    title: "The condition in an if/else statement is enclosed within ______.",
    choices: {
      a: "curly brackets",
      b: "square brackets", 
      c: "quotes", 
      d: "parentheses"},
    correctAnswer: "d"
},
{
  title: "A very useful tool used during development and debugging for printing content to the development tools is______.",
  choices: {
    a:  "git bash" ,
    b: "console.log",
    c: "Javascript",
    d: "for loops"},
  correctAnswer: "b"
},
{   
    title: "Arrays in Javascript can be used to store ____.", 
    choices: {
      a: "numbers and strings", 
      b: "booleans",
      c: "other arrays", 
      d: "all of the above"},
    correctAnswer: "d"
},
{ 
    title: "String values must be enclosed within _____ when being assigned to variables.",
    choices: {
      a: "quotes", 
      b: "parrentheses", 
      c:"curly braces", 
      d: "commas"},
    correctAnswer: "a"
}
]

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
  timerInterval = setInterval(function(){
    secondsLeft--;
    timerEl.innerHTML = secondsLeft + " remaining";
    if(secondsLeft <= 0) {
      scoreScreen();
    }

  }, 1000);
}


function scoreScreen(){ 
  clearInterval(timerInterval);
  timerEl.remove();
  currentQuestion.remove();
  answerA.remove();
  answerB.remove();
  answerC.remove();
  answerD.remove();

  var timeScore = document.createElement("h2");
  timeScore.innerHTML = "Your Score: " + secondsLeft;

  questionsEl.appendChild(timeScore);
  questionsEl.appendChild(saveScoreInput);
  questionsEl.appendChild(saveScoreButton);
  questionsEl.appendChild(tryAgainButton);
}


function addCorrect() {
  var correctSpan = document.createElement("span");
  correctSpan.className = "text-success font-weight-bold m-2";
  correctSpan.innerHTML = "	&#10003;";

  answerEl.appendChild(correctSpan);
}

function addIncorrect() {
  var incorrectSpan = document.createElement("span");
  incorrectSpan.className = "text-danger font-weight-bold m-2";
  incorrectSpan.innerHTML = "X";

  answerEl.appendChild(incorrectSpan);
}

function saveUserScore() {
  var highScores = getHighScores();

  var userInitials = saveScoreInput.value;

  if (userInitials) {
    highScores.push({ user: userInitials, score: secondsLeft });
  }

  var sortedScores = sortScores(highScores);

  localStorage.setItem("highScores", JSON.stringify(sortedScores));

  document.getElementById("highScores").click();
}

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

