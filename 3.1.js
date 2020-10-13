//Exercise 3.1:Write a program that will add all the elements of an array.
/*
//Méthode 1:
const readlineSync = require("readline-sync"); 
let arr = [1,2,3,4,5]; 
console.log(arr[0] + arr[1] + arr[2] + arr[3] + arr[4]);
*/


//Méthode 2:
const readlineSync = require("readline-sync"); 

let arr = [1,2,3,4,5];
let sum = 0;

for (let i = 0; i < arr.length; i += 1) {
 sum += arr[i];
 
}
console.log(sum);