//? innerfunction access values of the outerfunction is known as closure
/*
let outerFunction = () => {
  firstName = "Zareel";
  let innerFunction = () => {
    console.log(firstName);
  };
  innerFunction();
};
outerFunction();
*/
/*
let outerFunction = () => {
  firstName = "Zareel";
  let innerFunction = () => {
    console.log(firstName);
  };
  return innerFunction;
};
let val = outerFunction();
val();
*/
/*

/*
let outerFunction = () => {
  firstName = "Zareel";
  let innerFunction = () => {
    console.log(firstName);
  };
  return innerFunction;
};
let result = outerFunction();
result();
*/
/*
let outer = () => {
  firstName = "zar";
  let innerFunction = () => {
    console.log(firstName);
  };
  return innerFunction;
};
let val = outer();
val();
*/

let outerFunction = () => {
  let firstName = "Zareel";
  let innerFunction = () => {
    console.log(firstName);
  };
  return innerFunction;
};
let value = outerFunction();
value();
