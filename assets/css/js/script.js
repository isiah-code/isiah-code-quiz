var start = document.getElementById("start");
var quiz = document.getElementById("quiz");
var question = document.getElementById("question");
var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var counter = document.getElementById("counter");
var timeGauge = document.getElementById("timeGauge");
var progress = document.getElementById("progress");
var scoreDiv = document.getElementById("scoreContainer");
var button = document.getElementById("myBtn");

let questions = [
    {
        question : "What year did Michael Jordan join the NBA?",
        choiceA : "1984",
        choiceB : "1999",
        choiceC : "1985",
        correct : "A"
    },{
        question : "What team did Michael Jordan never play for?",
        choiceA : "Chicago Bulls",
        choiceB : "New York Knicks",
        choiceC : "Washington Wizards",
        correct : "B"
    },{
        question : "How many championship rings does Michael Jordan have?",
        choiceA : "13",
        choiceB : "23",
        choiceC : "6",
        correct : "C"
    },{
        question : "What year did Michael Jordan first retire from the NBA?",
        choiceA : "1999",
        choiceB : "1993",
        choiceC : "2004",
        correct : "B"
    },{
        question : "What was Michael Jordan's jersey number when he competed in the Olympics?",
        choiceA : "9",
        choiceB : "23",
        choiceC : "45",
        correct : "A"
    },
];

var lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
var questionTime = 10; 
var gaugeWidth = 150; 
var gaugeUnit = gaugeWidth / questionTime;
let TIMER;
let score = 0;

function renderQuestion(){
    let q = questions[runningQuestion];
    
    question.innerHTML = "<p>"+ q.question +"</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
}

button.addEventListener("click",startQuiz);

function startQuiz(){
    button.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    renderProgress();
    renderCounter();
    TIMER = setInterval(renderCounter,1000); 
}

function renderProgress(){
    for(let qIndex = 0; qIndex <= lastQuestion; qIndex++){
        progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>";
    }
}


function renderCounter(){
    if(count <= questionTime){
        counter.innerHTML = count;
        timeGauge.style.width = count * gaugeUnit + "px";
        count++
    }else{
        count = 0;
        answerIsWrong();
        if(runningQuestion < lastQuestion){
            runningQuestion++;
            renderQuestion();
        }else{
            clearInterval(TIMER);
            scoreRender();
        }
    }
}


function checkAnswer(answer){
    if( answer == questions[runningQuestion].correct){
        score++;
        answerIsCorrect();
    }else{
        answerIsWrong();
    }
    count = 0;
    if(runningQuestion < lastQuestion){
        runningQuestion++;
        renderQuestion();
    }else{
        clearInterval(TIMER);
        scoreRender();
    }
}

function answerIsCorrect(){
    document.getElementById(runningQuestion);
}

function answerIsWrong(){
    document.getElementById(runningQuestion);
}

function scoreRender(){
    scoreDiv.style.display = "block";

}