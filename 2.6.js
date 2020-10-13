/*Exercise 2.6: Make a program that ask the user to enter a number between 1 and 7. Depending on the number, display the day of the week that correspond. (1 => Monday, 2 => Tuesday, etc...)
*/

const readlineSync = require("readline-sync"); 
let day = new Number(readlineSync.question('Enter a number between 1 and 7:'));

if (day ==1) {

    console.log("Monday")
}

if (day ==2) {

    console.log("Tuesday")
}

if (day ==3) {

    console.log("Wednesday")
}

if (day ==4) {

    console.log("Thursday")
}

if (day ==5) {

    console.log("Friday")
}

if (day ==6) {

    console.log("Saterday")
}

if (day ==7) {

    console.log("Sunday")
}