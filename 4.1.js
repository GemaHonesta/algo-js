/* Exercise 4.1
Create a function named calcSurface that takes the length and width of a rectangle and returns its surface. Then create a program that asks the length and width of a rectangle to the user then displays the surface of that rectangle. That program must use the function you created. */
const readlineSync = require("readline-sync");

function calcSurface(length, width) {
  	return length * width;
}

let user_length = Number(readlineSync.question("Please enter the length of the rectangle > "));
let user_width = Number(readlineSync.question("Please enter the width of the rectangle > "));

console.log("The surface of this rectangle is: " + calcSurface(user_length, user_width));
