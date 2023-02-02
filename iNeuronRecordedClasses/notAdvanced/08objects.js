let User = function (firstName, courseCount) {
  this.firstName = firstName;
  this.courseCount = courseCount;
  this.getCourseCount = function () {
    console.log(`courseCount is ${this.courseCount}`);
  };
};

User.prototype.getFirstName = function () {
  console.log(`the first name is ${this.firstName}`);
};

let zareel = new User("zareel", 10);
zareel.getCourseCount();
if (zareel.hasOwnProperty("firstName")) {
  zareel.getFirstName();
}
// console.log(zareel);

let shon = new User("shon", 20);
shon.getCourseCount();
shon.getFirstName();
// console.log(shon);
