let myMap = new Map();

myMap.set(1, "Uno");
myMap.set(2, "Dos");
myMap.set(3, "Tres");
myMap.set(4, "Cuatro");

console.log(myMap);

for (let key of myMap.keys()) {
  console.log(`key is ${key}`);
}

for (let value of myMap.values()) {
  console.log(`The value is ${value}`);
}

for (let [key, value] of myMap) {
  console.log(`key is ${key} and the value is ${value}`);
}

myMap.forEach((key) => console.log(`key is ${key}`));
myMap.forEach((value) => console.log(`key is ${value}`));
myMap.forEach((value, key) => console.log(` ${value} key is ${key}`));

myMap.delete(2);
console.log(myMap);
