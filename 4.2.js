/*Exercise 4.2
Create a function named rand10() that returns a random integer between 1 and 10. Create a program that will display the result of that function each time it is run.

Write a documentation for the rand10() function.
*/

const readlineSync = require("readline-sync");

function  rand10(){
	return parseInt(Math.random()*10) + 1;
}
console.log(rand10());

//Math.floor = chiffre entier; (Math.random = chiffre au hazard()*11;





