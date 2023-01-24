//? fill(): fills the array with the given value. This modifies the original aray
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(arr.fill("zareel"));

//second value states where the change to start
// console.log(arr.fill("z", 2));

// console.log(arr.fill("z", 2, 4));

//? filter(): to filter out as we want

//const myNumber = [11, 22, 33, 44, 55, 66, 77, 88, 99];

// const result = myNumber.filter((num) => num != 55);
//const result = myNumber.filter((e) => e < 66);
//console.log(result);

//? slice: slice away the elements before the given start index value(exclusive of the given start index value), doesn't modify the original array
//cutting and dropping it off
//let users = ["nina", "meenu", "kim", "tessa", "rani"];
//console.log(users.slice(2));
//left and left- first argument is inclussive second argument is exclusive
// console.log(users.slice(1, 3));
// console.log(users);

//? splice
let users = ["nina", "meenu", "kim", "tessa", "rani"];
// element at 0th and from 4th has been cut off(left right)
//console.log(users.splice(1, 3));
//the range will be removed and new value will be placed instead
users.splice(1, 3, "zareel");
console.log(users);
