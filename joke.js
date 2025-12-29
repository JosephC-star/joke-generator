const jokeArea = document.querySelector("#jokeSpace");
const button = document.querySelector("#button");

async function getJoke() {
  try {
    const response = await axios.get(`https://icanhazdadjoke.com/`, {
      headers: {
        Accept: "application/json",
      },
    });
    console.table(response.data);

    jokeArea.textContent = response.data.joke;
  } catch (error) {
    jokeArea.textContent = "Failed to load joke";
    console.error(error);
  }
}

button.addEventListener("click", function (e) {
  e.preventDefault();
  getJoke();
});
