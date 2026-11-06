const searchButton = document.getElementById("search-btn");

searchButton.addEventListener("click", function () {

  fetch("superheroes.php")
    .then(function (response) {
      return response.text();
    })
    .then(function (data) {
      alert(data);
    })
    .catch(function (error) {
      console.error("Request failed:", error);
    });
});