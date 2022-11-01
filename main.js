"use strict";

// select the button
const btnIncrease = document.querySelector(".increase");
const btnDecrease = document.querySelector(".decrease");
const btnReset = document.querySelector(".reset");

// Increase the button
let count = 0;
btnIncrease.addEventListener("click", function () {
  document.getElementById("number-value").textContent = ++count;
  document.getElementById("number-value").style.color = "#2d6a4f";
   if(count === 0){
     document.getElementById("number-value").style.color = "#14213d";
  }
});

// Reset the button
btnReset.addEventListener("click", function () {
 count = 0;
  document.getElementById("number-value").textContent = 0;
  document.getElementById("number-value").style.color = "#14213d";

});


// descrese the button
btnDecrease.addEventListener("click", function () {
    // we want descrese the actuall count
    count = count -1;
  document.getElementById("number-value").textContent = count;
    if(count < 0){
     document.getElementById('number-value').style.color ='red'
    } else if(count === 0){
   document.getElementById("number-value").style.color = "#14213d";

   }
});
