let user = {
  firstName: "Zareel",
  lastName: "Kalam",
  role: "admin",
  loginCount: 32,
  facebookSignedIn: true,
};

console.log(user.firstName);
console.log(user["lastName"]);
user.loginCount = 44;
console.log(user);
console.table(user);

//? Object
/*
let bankAccount = {
  name: "Zareel",
  place: "Kochi",
  mobno: 97443333367,
  balace: 500000000000,
};
console.log(bankAccount.name);
*/
