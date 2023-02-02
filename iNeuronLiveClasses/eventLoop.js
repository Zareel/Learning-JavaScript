//? eventloop
/*
function uno() {
  console.log("I am one");
}
uno();
*/

let uno = () => {
  console.log("I am one");
};

let dos = () => {
  setTimeout(() => {
    console.log("WooHooo");
  }, 3000);
  console.log("I am two");
};

let tres = () => {
  console.log("I am three");
};

uno();
dos();
tres();
