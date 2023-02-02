fetch("https://api.chucknorris.io/jokes/random?category={category}")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log("DATA is :", data);
    let joke = data.value;
    console.log("Joke", joke);
  })
  .catch();
