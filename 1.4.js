
//Exercise 1.4: Make this same thing as Exercise 2 but this time ask the user for the name, the first name and the city 

let name = readlineSync.question('Enter your first name:');
let firstName = readlineSync.question('Enter your first first name:');
let city = readlineSync.question('Enter your first city:');
console.log('Hello ' +  name  +  firstName + ' you live in ' + city); 

