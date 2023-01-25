//! 148

let user = {
  firstName: "Zareel",
  lastName: "Kalam",
  role: "admin",
  loginCount: 32,
  facebookSignedIn: true,
  courseList: [],
  buyCourse: function (courseName) {
    //here this. reffers to user.
    this.courseList.push(courseName);
  },
  getCourseCount: function () {
    return `${this.firstName} is enrolled in total of ${this.courseList.length} courses`;
  },
};

let courseList = true;
console.log(user.firstName);

user.buyCourse("Angular");
user.buyCourse("React JS");
console.log(user.getCourseCount());

//? 'new' is a keyword
/*
let person = {
  name: "Zareel",
};
console.log(person);
*/

//?creating object with 'new' Keyword
/*
let person = new Object();
person.name = "zareel";
console.log(person);
*/

let person = function (firstName, courseCount) {
  this.firstName = firstName;
  this.courseCount = courseCount;
};
let zareel = new person("zareel", 43);
console.log(zareel);

let shon = new person("shon", 18);
console.log(shon);
