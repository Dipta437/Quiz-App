var chalk = require('chalk')

var readlineSync = require('readline-sync');

var score = 0;

var userName = readlineSync.question("What's your Name? ");

console.log (chalk.blue.underline.bold.bgWhite ("Welcome! " + userName + " TO DO YOU KNOW Dipta? ")); 

// play function

function play(question, answer) {
  var userAnswer = readlineSync.question(question);
  if (userAnswer.toUpperCase() === answer.toUpperCase()){
    console.log(chalk.blue.underline.bold.bgWhite("You Are Right! "));
    score = score + 1;
    console.log(chalk.blue.underline.bold.bgWhite("Current Score : " + score));
    console.log("--------");
  }else{
    console.log (chalk.red ("OOps! You Are Wrong! "));
    score = score - 1;
    console.log(chalk.blue.underline.bold.bgWhite("Current Score : " + score));
    console.log("--------");
  }
}

// array objects

var questions = [{
  question : "Where DO I Live? ",
  answer : "Moulvibazar"
},
  {
    question : "What's my favourite food? ",
    answer : "Biryani",

},
{
  question : "Where Do I work? ",
  answer : "Green Trust Corporation"
},

{
  question: "Do I Love Programming? ",
  answer : "Yes!"
},

{
  question : "Who's my favourite player? ",
  answer : "Shakib Al Hasan"
},
                 {
                   question: "Who's my favourite Super-hero?",
                   answer: "Tony Stark aka Ironman"
                 }                 
                 
]

for(i = 0; i < questions.length; i++ ) {
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer);
}

console.log(chalk.blue.underline.bold.bgWhite("YAY! YOU SCORED :", score));
