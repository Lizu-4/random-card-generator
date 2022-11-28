/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./index.html";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  document.querySelector(".card").classList.add(iconPicker());
  document.querySelector(".number").innerHTML = numberPicker();
  console.log(numberPicker());
};

function numberPicker() {
  let numbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  return `${numbers[Math.floor(Math.random() * numbers.length)]}`;
}

function iconPicker() {
  let icons = ["heart", "spade", "diamond", "club"];
  return `${icons[Math.floor(Math.random() * icons.length)]}`;
}
