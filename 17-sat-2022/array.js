// let names = ["shon", "shine", "sharon", "bhagya", "preksha"];
// console.log(names);
// console.log(names.length);
// console.log(names[3]);

//? how to access the last element of an array
/*
let names = ["shon", "shine", "sharon", "bhagya", "preksha"];
console.log(names[names.length - 1]);
*/

//? How to replace an element
/*
let names = ["shon", "shine", "sharon", "bhagya", "preksha"];
names[2] = "ritu";
console.log(names);
*/

//? push method => insert new value inside the array
/*
let names = ["shon", "shine", "sharon", "bhagya", "preksha"];
names.push("vyom");
console.log(names);
*/

//? slice method => it will slice away the elements startig from the start argument till the optional end argument excluding the end argument
/*
let names = ["shon", "shine", "sharon", "bhagya", "preksha"];
console.log(names.slice(0, 3));
*/

//? splice method =>
/*
let names = ["shon", "shine", "sharon", "bhagya", "preksha"];
names.splice(2, 1, "ritu", "ivin");
console.log(names);
*/

//? concathenation
/*
let arr1 = [1, 2, 3, 4];
let arr2 = [4, 5, 6, 7];
let arr3 = [6, 7, 6, 7, 7, 7, 7, 7, 7, 7];
console.log(arr1.concat(arr2));
console.log(arr1.concat(arr2, arr3));
*/

//? fill
/*
let arr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
arr4.fill("zareel", 2, 4);
console.log(arr4);

*/
//? includes
/*
let num = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(num.includes(1));
*/

//? indexof
/*
let names = ["shon", "shine", "sharon", "bhagya", "preksha"];
console.log(names.indexOf("shon"));
*/

//? isArray
/*
let names = ["shon", "shine", "sharon", "bhagya", "preksha"];
let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(Array.isArray(names));
console.log(Array.isArray(num));
*/

//? join
/*
let arr1 = [1, 2, 3, 4, 5, 6, 7];
let var1 = arr1.join("shon");
console.log(var1);
console.log(typeof var1);
console.log(typeof arr1);
*/

//? key
//? for ... of

//? lastndexof
/*
let num = [1, 2, 3, "zareel", 4, 5, 6, 7, 8, "zareel", "zareel"];
console.log(num.lastIndexOf("zareel"));
*/

//? map
/*
let math = [1, 4, 9, 16, 25];
console.log(math.map(Math.sqrt));
*/

//? pop -> pop takes away the element at the last index value
/*
let names = ["shon", "shine", "sharon", "bhagya", "preksha"];
console.log(names.pop());
console.log(names);
*/

//? reverse
/*
let names = ["shon", "shine", "sharon", "bhagya", "preksha"];
console.log(names.reverse());
*/

//? shift -> shift takes away the element at the first index vaule
/*
let names = ["shon", "shine", "sharon", "bhagya", "preksha"];
console.log(names.shift());
console.log(names);
*/

//? sort
/*
let names = ["shon", "shine", "sharon", "bhagya", "preksha"];
console.log(names.sort());
console.log(names.reverse(names.sort()));
*/

//? unshift
/*
let names = ["shon", "shine", "sharon", "bhagya", "preksha"];
names.unshift("ana", "ivin");
console.log(names);
*/

//? converting to array
/*
let name = "zareel";
let arr = name.split("");
console.log(arr);
*/

//? for...of
/*
let names = ["shon", "shine", "sharon", "bhagya", "preksha"];
let upperName = [];
for (let newVariable of names) {
  upperName.push(newVariable.toUpperCase());
}
console.log(upperName);
*/

//? break and continue
//? break
/*
for (let i = 0; i <= 5; i++) {
  if (i == 3) {
    break;
  }
  console.log(i);
}
*/
/*
//? continue
for (let i = 0; i <= 10; i++) {
  if (i == 5) {
    continue; //avoid or skip
  }
  console.log(i);
} */
