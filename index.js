const chalk = require('chalk');

var readlineSync = require('readline-sync');
var score = 0;
var userName = readlineSync.question("What is you Good Name?\n");
console.log("Welcome " +chalk.green(userName)+" to the"+chalk.blue( " My Quiz!"));

function play(question,answer){
var getAnswer = readlineSync.question(question);
if (answer.toUpperCase()===getAnswer.toUpperCase()  ){
 console.log(chalk.green("Yay! You are Correct"));
 score = score + 1;
 }
else{
 console.log(chalk.red("Oops! You are Wrong!"));
 }
 console.log("Your Current Score is: " + score);
 console.log("-----------------------------")
}

 
var qna = [
  { question:"Q. What is my Surname?\n ",
    answer:"Kulkarni"},
  { question: "Q. Is my age greater than 25?\n",
    answer: "No" },
  { question: "Q. What is my favourite Sport?\n",
    answer: "Football"},
  { question: "Q. Which city do I live in?\n",
    answer: "Mumbai"},
  { question: "Q. What is my favourite food?\n",
    answer: "Dosa"}
]

for(i=0;i<qna.length;i++){
  play(qna[i].question,qna[i].answer);
}
 console.log(chalk.bgGreen.bold("Your Final Score is " +score));



