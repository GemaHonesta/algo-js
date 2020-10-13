/* Exercice 2.2: Ask the user to enter three numbers: min, max and current. Display if current is between min and max.
Bonus: if min is greater than max, display an error message to explain the user he's doesn't understand anything then exit the program. (It must not ask any other question.)
Bonus 2: be polite in the error messages. (facultative)
*/

const readlineSync = require("readline-sync");

let min = readlineSync.question('Entrez un chiffre minimum?');
let max = readlineSync.question('Entrez un chiffre maximal?');
let current = readlineSync.question('Entrez un chiffre current');

if (current > min && current < max) { console.log("It's between min and max");

}

else if (min > max) { console.log("You don't understand, please get out!")

}

else {console.log("Sorry, it isn't correct, try again");
}