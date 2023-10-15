let billAmount 
let numOfPeople

const form = document.querySelector('form');
form.addEventListener('change', function() {
    console.log('Hi!');
     billAmount = document.querySelector(".bill-amount").value;
 numOfPeople = document.querySelector(".people-amount").value;

 console.log("billAmount", billAmount)
console.log("numOfPeople", numOfPeople)
});





