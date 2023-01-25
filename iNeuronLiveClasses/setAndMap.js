//? set: is a collection unique elements
/*
let a = [1, 2, 5, 6, 9, 8, 7, 5, 4, 2, 3, 5, 5];
let numbers = new Set(a);
console.log(numbers);
for (i of numbers) {
  console.log(i);
}
numbers.add(11);
console.log(numbers);
numbers.delete(9);
console.log(numbers);

console.log(numbers.has(7));
*/

//? Maps: it holds key:value pair and the key can be of any datatype
/*
let newMap = new Map();
newMap.set("1", "one");
newMap.set(1, "one");
newMap.set(true, "one");
console.log(newMap);

{1:"one"} //object
{1,2,3,4,5}//set
{ '1' => 'one', 1 => 'one', true => 'one' }//Map //fat arrow

*/

let flowers = [
  ["rose", "red"],
  ["jasmin", "white"],
  ["sunFlower", "yellow"],
];

let newMap = new Map(flowers);
console.log(newMap);
console.log(newMap.get("rose"));

for (let i of flowers) {
  console.log(key);
}

for (let [key, value] of newMap) {
  console.log(key, value);
}
