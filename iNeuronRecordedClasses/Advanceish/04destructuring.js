/*
let user = ["zareel", 3, "admin"];
let role = user[2];
let name = user[0];

console.log(role);
*/
/*
let user = ["zareel", 3, "admin"];

let [name, courseCount, role] = user;
console.log(courseCount);
*/
/*
let user = ["zareel", 3, "admin"];

let [name, ...rest] = user;
console.log(rest);
*/

let myUser = {
  name: "zaree",
  courseCount: 3,
  role: "admin",
};
console.log(myUser.courseCount);
let { name, courseCount, role } = myUser;
console.log(courseCount);
