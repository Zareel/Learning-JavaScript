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
