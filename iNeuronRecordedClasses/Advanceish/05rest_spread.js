/*
let returnedValue = Math.max(2, 6, 8, 9, 1, 4, 7);
console.log(returnedValue);

let myObj = {};

Object.assign(myObj, { a: 1, b: 2, c: 4 }, { z: 9, y: 8, x: 6 });
console.log(myObj);
*/
/*
function sumOne(a, b) {
  return a + b;
}
let sum = sumOne(3, 4);
console.log(sum);

console.log(sumOne(3, 4));
*/
/*
function sumOne(a, b) {
  return a + b;
}
let arr = [4, 5];
console.log(sumOne(arr));
*/

//? spread

function sumOne(a, b) {
  return a + b;
}
let arr = [4, 5]; //this one is taking this array and trying to seperate them out individually and passing it as individual value
console.log(sumOne(...arr));

//.................................
//? rest
//? for of
/*
let sumTwo = (...args) => {
  let sum = 0;
  for (let arg of args) {
    sum += arg;
  }
  return sum;
};
console.log(sumTwo(2, 3, 5, 6));
*/
//? showing that the arguments are converted to array
/*
let sumTwo = (...args) => {
  console.log(args);
  let sum = 0;
  for (let arg of args) {
    sum += arg;
  }
  return sum;
};
console.log(sumTwo(1, 2, 3, 4)); // this one takes these individual values and bunch them together into an array 
*/

//?little more

function sumTwo(a, b, ...args) {
  console.log(args);
  let multi = a * b;
  let sum = 0;
  for (let arg of args) {
    sum += arg;
  }
  return [multi, sum];
}
console.log(sumTwo(3, 2, 1, 1, 1));
