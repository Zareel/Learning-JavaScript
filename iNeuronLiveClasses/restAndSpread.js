/*
let arrOne = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let [a, b, ...rest] = arrOne;
console.log(a);
console.log(b);
console.log(a, b);
console.log(rest);
*/

//? spread and rest
/*
function sum(x, y) {
  return x + y;
}
let result = sum(2, 3);
console.log(result);
*/
//? spread operator
/*
function sum(x, y) {
  return x + y;
}
let val = [2, 3];
console.log(sum(...val));

function summ(x, y) {
  return x + y;
}
let result = [5, 4];
console.log(summ(...result)); // spread operator
*/

//?rest operator
/* 
function sum(...args) {
  console.log(args);
  let sum = 0;
  for (let a of args) {
    sum = sum + a;
  }
  return sum;
}
console.log(sum(3, 3, 2, 6, 9, 8));
*/

//? 'new' is a keyword
/*
let person = {
  name: "Zareel",
};
console.log(person);
*/

//?creating object with 'new' Keyword
/*
let person = new Object();
person.name = "zareel";
console.log(person);
*/
/*
let person = function (firstName, courseCount) {
  this.firstName = firstName;
  this.courseCount = courseCount;
};
let zareel = new person("zareel", 43);
console.log(zareel);

let shon = new person("shon", 18);
console.log(shon);
*/
