"use strict";

//set initial count
let count = 0;

// select the button
const btnIncrease = document.querySelector(".increase");
 const btnDecrease = document.querySelector(".decrease");
 const btnReset = document.querySelector(".reset");
const btns = document.querySelectorAll('.btn');

// selet the number of span
const numberValue = document.getElementById("number-value");

// Increase the button

 btnIncrease.addEventListener("click", function () {
   numberValue.textContent = ++count;
   numberValue.style.color = "#2d6a4f";
  if (count === 0) {
    numberValue.style.color = "#14213d";
   }
});

 // Reset the button
 btnReset.addEventListener("click", function () {
  count = 0;
  numberValue.textContent = 0;
   numberValue.style.color = "#14213d";
 });

 // descrese the button
 btnDecrease.addEventListener("click", function () {
   // we want descrese the actuall count
   count = count - 1;
  numberValue.textContent = count;
   if (count < 0) {
     numberValue.style.color = "red";
   } else if (count === 0) {
     numberValue.style.color = "#14213d";
   }
 });
