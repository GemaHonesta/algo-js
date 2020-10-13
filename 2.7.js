/* Exercise 2.7
 Make a program that ask the user to enter a number named n. Then ask him n time to enter a new number. At the end display the sum of all the numbers collected this way.*/

const readlineSync = require("readline-sync"); 
let n = new Number(readlineSync.question('Enter a number:'));
let sum = 0;
for (let i =0; i < n; i++){
    let num1 = new Number(readlineSync.question('Enter a number:'));
    sum += num1;
}

console.log (sum);

/*i = argument pour que la boucle continue à poser la question juqu'à ce qu'on arrive au nombre i*/