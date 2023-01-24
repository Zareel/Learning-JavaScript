// for (let index = 0; index < array.length; index++) {
//   const element = array[index];
// }

//? loops is used to iterate over elements again and again
//* i stands for index

// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }
/*
const names = ["zareel", "Shine", "Shon", 2023];

for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}
*/

//? break and continue keyword
/*
let names = ["zareel", "shine", "shon", 2023, "universe"];

for (let i = 0; i < names.length; i++) {
  if (typeof names[i] !== "string") continue;
  console.log(names[i]);
}
*/
/*
let names = ["zareel", "shine", "shon", 2023, "universe"];

for (let i = 0; i < names.length; i++) {
  if (typeof names[i] !== "string") break;
  console.log(names[i]);
}
*/

//? While loop
/*
let names = ["zareel", "shine", "shon", 2023, "universe"];

let i = 0;

while (i < names.length) {
  console.log(names[i]);
  i++;
  if (typeof names[i] !== "string") break;
}
*/

//? do while loop
let names = ["zareel", "shine", "shon", 2023, "universe"];
let i = 0;
do {
  console.log(names[i]);
  i++;
  if (typeof names[i] !== "string") break;
} while (i < names.length);

//? for loop

//for

// function ineuron(msg) {
//   console.log(msg);
// }
// ineuron("I am zareel");

// let ineuron = (msg) => {
//   console.log(msg);
// };
// ineuron("I am zareel");

/*
function you(id) {
  console.log(id);
}
you("zareel");

setTimeout(() => {
  console.log("I am javascript");
}, 1000);
*/

//? loops

//* do while loop
/*
let i = 0;
do {
  console.log("value of i is:", i);
  i++;
} while (i <= 5);
*/

//* while loop
/*
let i = 6;
while (i <= 10) {
  console.log(i);
  i++;
}
*/
/*
for (let step = 0; step < 5; step++) {
  console.log("walking east one step");
}
*/

// !-----------------------
/*
for (let number = 10; number <= 15; number++) {
  console.log(number);
}
*/
// !-------------------------
/*
let names = ["shine", "shon", "zareel"];

let takeNames =""

for (i = 0; i <= names.length; i++) {
 takeNames+=names[1]
}
*/

// !-------------------------
/*
let cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];

let myGarage = "";

for (i = 0; i <= cars.length; i++) {
  myGarage += cars[i];
  console.log(myGarage);
}
*/
/*
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (i = 0; i <= numbers.length; i++) {
  console.log(i);
}
*/
/*
for (let numbers = 10; numbers <= 20; numbers++) {
  console.log(numbers);
}
*/
/*
let n = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i <= n.length; i++) {
  console.log(i);
  break;
}
*/
/*
for (let i = 0; i <= 10; i++) {
  console.log(i);
}
*/

//? Create an enpty string. Insert number 0 to 9 into that string using for loop
/*
let str = "";

for (let i = 0; i < 9; i++) {
  str = str + i;
}

console.log(str);
*/
/*
for (let i = 0; i <= 5; i++) {
  console.log(`${i}`);
}
*/
/*
for (let i = 1; i < 5; i++) {
  console.log(`${i} * ${i} = ${i * i}`);
}*/
//?syntax
/*
initialization => condition => increment
*/
//? create an array and convert the elements in the array into the uppercase and push it to the new array
/*
let names = ["shon", "shine"];
let upperName = [];
for (let i = 0; i < names.length; i++) {
  upperName.push(names[i].toUpperCase());
}
console.log(upperName);
*/

//? declare a number array. declare an empty array and push the suare of all the numbers to empty aray using for loop
/*
let numbers = [1, 2, 3, 4, 5];
let squ = [];
for (let i = 0; i < numbers.length; i++) {
  squ.push(numbers[i]);
}
console.log(squ);
*/
//? while loop
/*
let i = 0;
while (i <= 5) {
  console.log(i);
  i = i + 1;
}
*/
/*
let i = 0;
while (i % 2 == 0) {
  console.log(i);
  i = i + 1;
}
*/
/*
//?do while loop
let i = 0;
do {
  console.log(i);
  i = i + 1;
} while (i <= 5);
*/
