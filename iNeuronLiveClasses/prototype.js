let myName = ["Shon", "Leo"];

let user = {
  firstName: "Shon",
  lastName: "Leo",

  getFirstName: function () {
    console.log(`First name is ${this.firstName}`);
  },
};

Object.prototype.myObject = function () {
  console.log(
    `Prototype is the mechanism by which JavaScript objects inherits features from one another.`
  );
};
myName.myObject();

const MassEffect = {
  commanderShepard: "Incredible",
};
const HaloInfinite = {
  masterChief: "armorsPower",
};

const RedDeadRedemption = {
  mcCree: "rustic charm",
  peaceKeeper: true,
};

const FinalFantasy = {
  CloudStrife: "Wow! his sword",
  __proto__: RedDeadRedemption,
};

HaloInfinite.__proto__ = MassEffect;

// modern syntax

Object.setPrototypeOf(FinalFantasy, HaloInfinite);
/*
let myHeros = ["thor", "spiderman"];
let dcHeros = ["batman", "black adam", "superman"];

let heropower = {
  thor: "hammer",
  spiderman: "sling",

  getSpiderPower: function () {
    console.log(`Spidy power is ${this.spiderman}`);
  },
};

Object.prototype.zareel = function () {
  console.log(`zareel is present in all the objects`);
};

Array.prototype.heyzareel = function () {
  console.log(`Zareel says hello`);
};
myHeros.zareel();
*/
//inheritance
/*
let User = {
  name: "top name",
  email: "topuser@gmail.com",
};

const Teacher = {
  makeVideos: true,
};

const TeachingSupport = {
  isAvailable: false,
};

const TSAssistant = {
  makeAssingment: "JS assignment",
  fullTime: true,
  __proto__: TeachingSupport,
};
*/
/*
whatever the properties are there in teaching support, i want them all to be available in the TSAssistant also

*/

//? How the teacher can be binded with the user?

//Teacher.__proto__ = User;

//modern syntax

//Object.setPrototypeOf(TeachingSupport, Teacher);

// Get true length of string
/*String.prototype.truelength = function () {
  console.log(`true length is ${this.trim().length}`);
};
let myname = "zareel   ";
*/
