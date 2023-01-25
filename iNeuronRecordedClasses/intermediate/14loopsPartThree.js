//? 'for of' loop

let names = ["Youtube", "Facebook", "Instagram", "NetFlix"];

for (let i of names) {
  console.log(i);
}

//? 'for in' loop is used for objects

let symbols = {
  yt: "Youtube",
  ig: "Instagram",
  fb: "facebook",
  lco: "learnCodeOnline",
};
for (let i in symbols) {
  console.log(symbols);
}

for (let i in symbols) {
  console.log(symbols[i]);
}

for (let i in symbols) {
  console.log(`key is:${i} and value is: ${symbols[i]}`);
}
