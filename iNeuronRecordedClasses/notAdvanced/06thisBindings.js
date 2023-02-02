//! 166
let zareel = {
  firstName: "Zareel",
  lastName: "Zareel",
  role: "Admin",
  courseCount: 3,
  getInfo: function () {
    console.log(`
    First name is ${this.firstName}
    Last name is ${this.lastName}
    His role is ${this.role},
    And he is studying ${this.courseCount} courses
    `);
  },
};

let dj = {
  firstName: "Rock",
  lastName: "dj",
  role: "sub-admin",
  courseCount: 4,
};

//* zareel.getInfo();

//* bind()
let djInfo = zareel.getInfo.bind(dj);
djInfo();

//* call()
zareel.getInfo.call(dj);
