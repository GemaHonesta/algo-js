/* Exercise 1.8: Create a "Story Teller".

Ask questions to the user about different things. Store the results he gives to you. Display them in a way that it creates a fun story!

Bonus: when you ask questions to the user he should be able to see how many questions remain to be asked.*/

const { question } = require("readline-sync");


let question1 = readlineSync.question('What is your favorite animal?');
let compterStory = 2;
let stockreponse = question;
compterStory--;
console.log(stockreponse +"Il vous rest" + compterStory);


let question2 = readlineSync.question('Choose an adjective');
let stockreponse = question;
compterStory--;
console.log(stockreponse +"Il vous rest" + compterStory);
console.log("I love " + question1 + " because it's " + question2 + "like me");


