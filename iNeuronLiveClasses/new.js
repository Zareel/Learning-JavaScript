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

let person = function (firstName, courseCount) {
  this.firstName = firstName;
  this.courseCount = courseCount;
};
let zareel = new person("zareel", 43);
console.log(zareel);

let shon = new person("shon", 18);
console.log(shon);
