//! 178

let uno = () => {
  return "I am one";
};

// let dos = () => {
//   setTimeout(() => {
//     console.log("WooHooo");
//   }, 3000);
//   return "I am two";
// };

let dos = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("I am two");
    }, 3000);
  });
};

let tres = () => {
  return "I am three";
};

let callMe = async () => {
  let valOne = uno();
  console.log(valOne);

  let valTwo = await dos();
  console.log(valTwo);

  let valThree = tres();
  console.log(valThree);
};
callMe();
