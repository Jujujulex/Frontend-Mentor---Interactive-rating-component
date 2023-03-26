let rateStart = document.querySelector(".main");
let form = document.querySelector(".rating-form");
let thankYou = document.querySelector(".thank-you");

function rate(event) {
  event.preventDefault(); //prevents Browser from refreshing
  let selector = "input[name=ratings]:checked";

  let checkedInput = document.querySelector(selector);

  // User needs to select an Option in order to go on
  if (checkedInput !== null) {
    let selectedRating = document.querySelector(".selection");
    selectedRating.textContent =
      "You selected " + checkedInput.getAttribute("value") + " out of 5";
    rateStart.classList.add("hidden");
    thankYou.classList.remove("hidden");
  }
}

form.addEventListener("submit", rate);
