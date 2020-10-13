/*Exercise 2.5
Make a program that asks the favorite number of the user. If that number is anything other than 42 display "Are you sure?" and ask again. (This program should never end as long as the user didn't chose 42).
*/
const readlineSync = require("readline-sync"); 
let question = new Number(readlineSync.question('Enter your favorite number:'));
while (question !=42) {
    question=(readlineSync.question("Are you sure? Try again"));
}

/* '!=42' le point d'exclamation devant le égal signifie not (donc tout sauf 42)*/