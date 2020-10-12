
/* Exercise 1.7: Ask to the user its shoe size and its birth year. Then make the following calculation:

Multiply the shoe size by 2
Add 5 to the result
Multiply that by 50
Subtract the birth year
Add 1766

*/



let shoes = new Number(readlineSync.question('What is your shoes size? :'));
let year = new Number(readlineSync.question('What is your birth year? :'));
var shoesx2 = shoes * 2;
var resultat = (shoesx2 +5 )*50 -year + 1766; 
console.log(resultat); 
