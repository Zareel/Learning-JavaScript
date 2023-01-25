//? for regular function calls, this points to window object
console.log(this);
let user = {
  name: "zareel",
  coursecount: 4,
  getCourseCount: function () {
    console.log("line7", this);
    function sayHello() {
      console.log("line9", this);
    }
    sayHello();
  },
};
user.getCourseCount();
