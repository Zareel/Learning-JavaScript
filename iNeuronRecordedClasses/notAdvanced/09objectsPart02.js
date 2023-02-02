//? 162

let User = {
  name: "",
  getUserName: function () {
    console.log(`User name is ${this.name}`);
  },
};

let zareel = Object.create(User);
console.log(zareel);

zareel.name = "Zareel Kalam";
zareel.getUserName();

let shon = Object.create(User, {
  name: { value: "shony" },
  corseCount: { value: 3 },
});
shon.getUserName();
