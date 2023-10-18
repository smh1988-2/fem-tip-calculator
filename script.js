const form = document.querySelector("form");
const tipButtons = document.querySelectorAll('input[name="tip-value"]');
const resetBtn = document.querySelector(".reset-btn");

const tipPerPerson = document.getElementById("tip-per-person");
const totalPerPerson = document.getElementById("total-per-person");

const peopleErrorText = document.querySelector(".people-error-text");

let billAmount = document.querySelector(".bill-amount");
let activeTipAmount;
let customTip;
let numOfPeople;
let actualTip;
let customTipValue;

form.addEventListener("submit", function (e) {
  e.preventDefault();
});

form.addEventListener("change", function () {
  customTipValue = document.querySelector(".custom-tip-field").value;

  billAmount = Number(document.querySelector(".bill-amount").value);
  numOfPeople = Number(document.querySelector(".people-amount").value);
  activeTipButton = document.querySelector('input[name="tip-value"]:checked');

  if (activeTipButton && !customTipValue) {
    resetTipButtons();
    activeTipButton.classList.add("active");
    actualTip = activeTipButton.value;
  } else {
    resetTipButtons();
    if (activeTipButton) {
      activeTipButton.checked = false;
    }
    actualTip = customTipValue / 100;
  }

  if (numOfPeople === 0) {
    peopleErrorText.style.display = "block";
  } else {
    peopleErrorText.style.display = "none";
  }

  if (numOfPeople && billAmount && actualTip) {
    setResults();
  }
});

function resetTipButtons() {
  tipButtons.forEach((btn) => {
    btn.classList.remove("active");
  });
}

function setResults() {
  let USDollar = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  tipPerPerson.textContent = USDollar.format(
    (billAmount * actualTip) / numOfPeople
  );

  totalPerPerson.textContent = USDollar.format(
    (billAmount + billAmount * actualTip) / numOfPeople
  );
}

resetBtn.addEventListener("click", function () {
  handleResetBtn();
});

function handleResetBtn() {
    form.reset()
    resetTipButtons()

    tipPerPerson.textContent = "$0.00"
    totalPerPerson.textContent = "$0.00"
}
