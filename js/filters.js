import data from "../products.json";

document.addEventListener("DOMContentLoaded", () => {
  const radioButtons = document.querySelectorAll('input[name="food-filter"]');
  const cards = document.querySelectorAll(".popular-foods__card");
  const catalogue = document.querySelector(".popular-foods__catalogue");
  const foodCardTemplate = document.getElementById("food-card");
  const filterCover = document.querySelector(".popular-foods__catalogue-cover");
  const transitionTime = getComputedStyle(document.documentElement)
    .getPropertyValue("--transition-time")
    .slice(0, -2);

  let isAnimating = false;

  /**
   * Sets the event listeners for the button filters on the popular section.
   */
  function radioButtonFilters() {
    radioButtons.forEach((radioButton) => {
      radioButton.addEventListener("change", () => {
        // Only run if not currently animating
        if (!isAnimating && radioButton.checked) {
          isAnimating = true;
          changeActiveGroup(radioButton.value);
          runCoverAnimation();

          // Reset flag after animation complete
          setTimeout(() => {
            isAnimating = false;
          }, transitionTime * 3); // Total animation duration
        }
      });
    });
  }

  /**
   * Changes the card to the given category.
   * @param {string} category - The new category
   */
  function changeActiveGroup(category) {
    console.log("CATEGORY", category);
    const list = document.querySelectorAll(".popular-foods__card");
    list.forEach((card) => {
      console.log(card.querySelector(".popular-foods__card-category").textContent == category);
      console.log("card: ", card.querySelector(".popular-foods__card-category").textContent);
      console.log("category to fileter: ", category);
      if (
        card.querySelector(".popular-foods__card-category").textContent ==
        category
      ) {
        card.classList.remove("hidden");
      } else {
        card.classList.add("hidden");
      }
    });
  }

  /**
   * Generate new cards and set the values from json when the page first loads using the existing template in index.
   */
  function setTheData() {
    data.products.forEach((product) => {
      // Clone the existing card
      const newCard = foodCardTemplate.content.cloneNode(true);
      // Set the values for each of the cards
      newCard.querySelector("h4").textContent = product.name;
      newCard.querySelector(".popular-foods__card-image").src = product.photo;
      newCard.querySelector(".popular-foods__card-price").textContent =
        "$" + product.price;
      newCard.querySelector(".popular-foods__card-category").textContent =
        product.category;
      newCard.querySelector(".popular-foods__card-rating p").textContent =
        product.price;
      catalogue.appendChild(newCard);
    });
    console.log("render finished")
    changeActiveGroup(findCheckedButton());
  }


  function findCheckedButton() {
    radioButtons.forEach((button)=>{
      if(button.checked == true) {
        console.log(button.value);  
        return button.value;
      }
    })
  }

  /**
   * Run the filter cover animation for the smooth interaction
   */
  function runCoverAnimation() {
    filterCover.classList.remove("hidden");

    filterCover.style.opacity = "100%";

    requestAnimationFrame(() => {
      setTimeout(() => {
        filterCover.style.opacity = "0%";

        filterCover.addEventListener(
          "transitionend",
          () => {
            filterCover.classList.add("hidden");
          },
          { once: true }
        );
      }, transitionTime * 2);
    });
  }

  setTheData();
  radioButtonFilters();
});
