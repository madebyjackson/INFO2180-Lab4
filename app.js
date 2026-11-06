const form = document.getElementById("search-form");
const input = document.getElementById("search-input");
const resultDiv = document.getElementById("result");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const query = input.value.trim();
  const url = "superheroes.php?query=" + encodeURIComponent(query);

  fetch(url)
    .then(function (response) {
      if (!response.ok) {
        throw new Error("Server returned " + response.status);
      }
      return response.text();
    })
    .then(function (html) {
      resultDiv.innerHTML = html;
    })
    .catch(function (error) {
      resultDiv.textContent = "Something went wrong. Please try again.";
      console.error(error);
    });
});