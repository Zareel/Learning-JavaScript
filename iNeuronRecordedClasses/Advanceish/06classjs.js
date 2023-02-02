//! 174

//? 07ClassObject.js file is a continuation of this

class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  courseList = [];
  getInfo() {
    return { name: this.name, email: this.email };
  }
  enrollCourse(name) {
    this.courseList.push(name);
  }
  getCourseList() {
    return this.courseList;
  }
  //* static keyword makes the method private.(cannot be inheritted)
  static login() {
    return "You are logged in";
  }
}

class SubAdmin extends User {
  constructor(name, email) {
    super(name, email);
  }
  getAdminInfo() {
    return "I am subAdmin";
  }
  login() {
    return "login for admin only";
  }
}

module.exports = User;

//!175

let rock = new User("rock", "r@ock.com");
console.log(rock.getInfo());
rock.enrollCourse("Angular BootCamp");
console.log(rock.getCourseList());
console.log(rock.courseList);

let tom = new SubAdmin("tom", "tom@jerry.com");
console.log(tom.getAdminInfo());
console.log(tom.login());
console.log(tom.getInfo());
