//? HOF => Higher Order Function
//? callback
//* Function is calling a function
/*
 * Higher Order Functions are functions which take other function as a parameter or return a function as a value.
 *The function passed as a parameter is called callback.
 */
/*
function a() {
  console.log("I was called by a function");
}
function b() {
  a();
}
b();
*/

//? mini program
/*
const callback = (n) => {
  return n ** 2;
};

function cube(callback, n) {
  return callback(n) * n;
}
console.log(cube(callback, 2));
*/

//?forEach

//* forEach is hof and the ()=>{} inside it is callback
/*
let arr = ["zareel", "shine", "shon"];
arr.forEach((x) => {
  console.log(x);
});
*/
/*
let arr = ["zareel", "shine", "shon"];
arr.forEach(myFunc);
function myFunc(val) {
  console.log(val);
}
*/

//?setTimeout
/*
setTimeout(() => {
  console.log("Hello Zareel");
}, 2000);
*/
/*
setInterval(() => {
  console.log("Hello World");
}, 1000);
*/

/*
forEach
map
filter
reduce
find
every
some
sort
*/

//? map
/*
let numbers = [1, 2, 3, 4, 5, 6, 7];
let numsqu = numbers.map((x) => x * x);
console.log(numsqu);
*/

//? filter
/*
let names = ["zareel", "shine", "shon"];
let store = names.filter((x) => x.includes("zareel"));
console.log(store);
*/

//? reduce

//* reduce takes a callback function. The call back function takes accumulator, current and initial value as a parameter
//* and returns a single value. It is a good practice to define an initial value for the accumulator value
//* if we do not specify this parameter, by defalul, accumulator will get array first value.
//* If our array is an empty array, then js will throw an error
/*
let num = [1, 2, 3, 4, 5, 6];
let sum = num.reduce((acc, curr) => acc + curr, 1);
console.log(sum);
*/
/*
let names = ["zareel", "shine", "shon"];
console.log(names.sort());
console.log(names.reverse());
*/

//? Destructuring, Spread and Rest
/*
let names = ["zareel", "shine", "shon"];
let [mother, eson, yson] = names;
console.log(mother, yson, eson);
*/
/*
let arr = [1, 2, 3];
let [num1, , num3] = arr;
console.log(num1, num3);
*/
/*
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let [num1, num2, ...rest] = arr;
console.log(num1, num2);
console.log(rest);
*/
