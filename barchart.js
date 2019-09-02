"use strict";
const barArray = [
  12,
  13,
  1,
  9,
  26,
  9,
  25,
  26,
  34,
  12,
  11,
  24,
  31,
  31,
  24,
  13,
  23,
  27,
  2,
  18,
  30,
  0,
  14,
  25,
  9,
  12,
  17,
  12,
  11,
  33,
  27,
  21,
  21,
  2,
  22,
  14,
  4,
  15,
  34,
  11
];
window.addEventListener("load", createBars);
let counter = 0;

// create bars:
function createBars() {
  counter = 0;
  let barCounter = -1;

  //goes through each bar and gives it a height generated from random

  document.querySelectorAll("div").forEach(bar => {
    barCounter++;
    bar.style.height = barArray[barCounter] + "vh";
  });

  //for every second, go to function that modify content/height of bars
  setTimeout(modifyBars, 1000);
}

function modifyBars() {
  console.log("modify bars");
  let queueSize = getNumberOfCustomers();
  counter++;
  barArray.push(queueSize);
  barArray.shift();
  createBars();
}

//get number of customers:

function getNumberOfCustomers() {
  //Gives a random number
  return Math.floor(Math.random() * 36);
}
