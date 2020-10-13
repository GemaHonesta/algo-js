/*Exercise 3.3 :Write a program that will create a duplicate of a given array.
Bonus: make a first version that will only do it using push(). Make a second version that uses a single method call to perform the copy. (You'll have to search on the MDN or Google for this one.)*/


// First way



let myarray = [7, 4, 16, 3, 1];
let array2 = [];

for (let elem of myarray) {
	array2.push(elem);
}

console.log("My new copy of the given array is: ");

