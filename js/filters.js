import data from "../products.json";

document.addEventListener("DOMContentLoaded", () => {
  const radioButtons = document.querySelectorAll('input[name="food-filter"]');
  const cards = document.querySelectorAll(".popular-foods__card");
  const catalogue = document.querySelector(".popular-foods__catalogue");

  //Change the group when the radiobutton is clicked
  function radioButtonFilters() {
    radioButtons.forEach((radioButton) => {
      radioButton.addEventListener("change", () => {
        if (radioButton.checked) {
          //   console.log("Selected value:", radioButton.value);
          changeActiveGroup(radioButton.value);
        }
      });
    });
  }

  function changeActiveGroup(category) {
    const list = document.querySelectorAll(".popular-foods__card");
    list.forEach((card) => {
      if (
        card.querySelector(".popular-foods__card-category").textContent ==
          category ||
        category == "all"
      ) {
        card.style.display = "flex";
      } else {
        card.style.display = "none";
      }
    });
  }

  // Generate new cards when the page loads
  function setTheData() {
    data.products.forEach((product) => {
      // Clone the existing card
      const newCard = cards[0].cloneNode(true);
      // Set the values for each of the cards
      newCard.querySelector("h4").textContent = product.name;
      newCard.querySelector(".popular-foods__card-image").src = product.photo;
      newCard.querySelector(".popular-foods__card-price").textContent =
        product.price;
      newCard.querySelector(".popular-foods__card-category").textContent =
        product.category;
      newCard.querySelector(".popular-foods__card-rating p").textContent =
        product.price;
      catalogue.appendChild(newCard);
    });
  }

  setTheData();
  radioButtonFilters();
});
