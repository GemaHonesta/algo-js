//Exercise 1.6: Ask two integers to the user. Display the rest of the integer division of the two numbers.

let number1 = new Number(readlineSync.question('Enter an integer number :'));
let number2 = new Number(readlineSync.question('Enter a second integer number :'));
let totaldivision = parseInt(number1) % parseInt(number2); 
console.log(totaldivision);

/* parseInt: transforme une chaine de caractères dans un entier
math.trunc : il transforme un nombre décimal en entier. 
Ils ont la même fonction*/