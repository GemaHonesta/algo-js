//Exercise 1.5: Ask two numbers with decimal part to the user. For the first one only keep the integer part. Then multiply them and display the result.

let number1 = new Number(readlineSync.question('Enter a number with decimal :'));
let number2 = new Number(readlineSync.question('Enter a number :'));
let number1integer = (Math.trunc (number1));
let totalmultiplication = number1integer * number2;
console.log (totalmultiplication);

