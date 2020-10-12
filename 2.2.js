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