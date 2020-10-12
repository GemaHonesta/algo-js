const readlineSync = require("readline-sync");

//Ask the user to enter its age. If its age is at least 18 display "You are an adult". If it's not the case display "You are not yet an adult".
let question = readlineSync.question('What is your age?');


if (question >=18) {

    console.log("You are an adutlt")
}
else {
    console.log("You are not yet an adult")
}


