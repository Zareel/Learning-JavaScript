//import User from "./06classjs"

const User = require("./06classjs");

let zareel = new User("zareel", "z@areel.com");

console.log(zareel.getInfo());

zareel.enrollCourse("React BootCamp");
zareel.enrollCourse("Angular BootCamp");

console.log(zareel.getCourseList());

let courses = zareel.getCourseList();

courses.forEach((c) => console.log(c));
