let courses = [
  {
    name: "Complete ReactJS Course",
    price: "2.3",
  },

  {
    name: "Complete Angular Course",
    price: "2.1",
  },

  {
    name: "Complete MERN Course",
    price: "2.7",
  },

  { name: "Complete C++ Course", price: "2.8" },
  {
    name: "Django",
    price: "2.2",
  },
];

function generateList() {
  let ul = document.querySelector(".list-group");
  ul.innerHTML = "";
  courses.forEach((course) => {
    let li = document.createElement("li");
    li.classList.add("list-group-item");

    let name = document.createTextNode(course.name);
    li.appendChild(name);

    let span = document.createElement("span");
    span.classList.add("float-right");

    let price = document.createTextNode("$ " + course.price);
    span.appendChild(price);

    li.appendChild(span);
    ul.appendChild(li);
  });
}

generateList();

let button = document.querySelector(".sort-btn");

button.addEventListener("click", () => {
  courses.sort((a, b) => a.price - b.price);
  generateList();
});

// creating a button

let containerDiv = document.querySelector(".container");
let btn = document.createElement("button");
btn.classList.add("btn-primary");
btn.classList.add("btn-lg");
btn.classList.add("mt-4");
btn.classList.add("mx-auto");
btn.classList.add("d-block");
btn.classList.add("d-block");
containerDiv.appendChild(btn);
btn.textContent = "Sort-descending";

btn.addEventListener("click", () => {
  courses.sort((a, b) => b.price - a.price);
  generateList();
});
