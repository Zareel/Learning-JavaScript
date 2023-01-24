//!164

//we can access the variable from the outer function
/*
function init() {
  let firstName = "zareel";
  function SayFirstName() {
    console.log(firstName);
  }
  SayFirstName();
}
init();
*/

let outerFunction = () => {
  let firstName = "Shine";
  let innerFunction = () => {
    console.log(firstName);
  };
  innerFunction();
};
outerFunction();
