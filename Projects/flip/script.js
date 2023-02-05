let cool = document.querySelector(".cool");

cool.addEventListener("click", () => {
  if (cool.src.match("./coolface.png")) {
    cool.src = "./evilface.png";
  } else {
    cool.src = "./coolface.png";
  }
});
