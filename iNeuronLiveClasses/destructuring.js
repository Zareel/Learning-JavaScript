//? storing the values of an array into different variables is known as destructuring
/*
let names = ["Zareel", "Shine", "Shon"];
let [mother, elderSon, youngerSon] = names;
console.log(beautiful);
console.log(smart);
console.log(handsome);
*/
/*
let fullStack = [
  ["HTML", "CSS", "JS", "REACT JS"],
  ["node.js", "express", "mongodb"],
];

let [frontEnd, backend] = fullStack;
console.log(backend);
*/
/*
let arr1 = [1, 2, 3, 4, 5];
let [a, , b, , c] = arr1;
console.log(c);
*/

//?rest

let arrOne = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let [a, b, ...rest] = arrOne;
console.log(a);
console.log(b);
console.log(a, b);
console.log(rest);
