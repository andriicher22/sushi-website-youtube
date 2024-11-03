const radioButtons = document.querySelectorAll('input[name="food-filter"]');
const cards = document.querySelectorAll(".popular-foods__card");

//Change the group when the radiobutton is clicked
radioButtons.forEach((radioButton) => {
  radioButton.addEventListener("change", () => {
    if (radioButton.checked) {
      console.log("Selected value:", radioButton.value);
      changeActiveGroup();
    }
  });
});

function changeActiveGroup() {}

// Adding the active class to the clicked card
cards.forEach((card) => {
  card.addEventListener("click", () => {
    console.log("Card was clicked");
    removeActiveAll();
    card.classList.add("active-card");
  });
});

function removeActiveAll() {
  cards.forEach((card) => {
    card.classList.remove("active-card");
  });
}
