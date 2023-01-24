/*
let names = ["Zareel", "Shine", "Shon"];
let countries = new Array("India", "USA", "UAE", "Canada");
console.log(countries[1]);

console.log(names.length);
*/
//? how to replace an element
/*
countries[0] = "UK";
console.log(countries);
*/

//? pop - Removes the last item from the array, modifies the original aray
/*
let user = ["zareel", "developer", 43, 75000, true];
console.log(user.pop());
console.log(user);
*/

//? unshift: adds new value at the start of the array and shifts all the other elements to the right
/*
let animals = ["cat", "dog", "tiger", "lion"];
animals.unshift("new value");
console.log(animals);
*/
//? shift: removes the first element and shifts all the element to the left
let animals = ["cat", "dog", "tiger", "lion"];
animals.shift();
console.log(animals);

//? indexof
console.log(animals.indexOf(3));

//? Array
/*
let arr = ["red", "blue", "yellow", "green"];
console.log(arr[arr.length - 1]);
*/
