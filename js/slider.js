
const radioButtons = document.querySelectorAll('input[name="food-filter"]');

//Change the group when the radiobutton is clicked
radioButtons.forEach(radioButton => {
  radioButton.addEventListener('change', () => {
    if (radioButton.checked) {
      console.log('Selected value:', radioButton.value);
      changeActiveGroup();
    }
  });
});


function changeActiveGroup(){};