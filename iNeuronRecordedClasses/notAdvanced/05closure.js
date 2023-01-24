/*
let outerFunction = () => {
  let firstName = "Shine";
  let innerFunction = () => {
    console.log(firstName);
  };
  innerFunction();
};
outerFunction();
*/

/*
let outerFunction = () => {
  let firstName = "Shine";
  let innerFunction = () => {
    console.log(firstName);
  };
  return innerFunction;
};
let val = outerFunction();
val();
*/
/*
function doAddition(x) {
  return function (y) {
    return x + y;
  };
}
let add5 = doAddition(4);
console.log(add5(5));
*/

function doAddition(x) {
  return function (y) {
    return x + y;
  };
}

let add5 = doAddition(4);
console.log(doAddition(5)(5));
