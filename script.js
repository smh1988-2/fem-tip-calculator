const form = document.querySelector("form");
const tipButtons = document.querySelectorAll('input[name="tip-value"]');

let billAmount;
let activeTipAmount;
let customTip;
let numOfPeople;

form.addEventListener("submit", function (e) {
  e.preventDefault();
});

form.addEventListener("change", function (e) {
  customTipValue = document.querySelector(".custom-tip-field");

  resetTipButtons();

  billAmount = Number(document.querySelector(".bill-amount").value);
  numOfPeople = Number(document.querySelector(".people-amount").value);
  activeTipButton = document.querySelector('input[name="tip-value"]:checked');

  let actualTip = .5;
  
  if (activeTipButton) {
    activeTipButton.classList.add("active")
    customTipValue.value = "Custom"
    actualTip = activeTipButton.value
  } else {
    actualTip = customTipValue.value;
  }

  console.log("billAmount", billAmount);
  console.log("customTip", customTip);
  console.log("numOfPeople", numOfPeople);
  console.log("actualTip", actualTip);

  console.log("tip amount pp", (actualTip / numOfPeople))
  console.log("total amount pp", ((billAmount + (billAmount * actualTip)) / numOfPeople))
});

function resetTipButtons() {
  tipButtons.forEach((btn) => {
    btn.classList.remove("active");
  });

}
