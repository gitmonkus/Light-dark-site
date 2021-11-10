// ✨ You got this!

let headerEl = document.getElementById("header"); // Header
let toggleEl = document.getElementById("toggle"); // Toggle
let bodyEl = document.querySelector("body"); // Body Background
let h1El = document.getElementById("h1"); // H1
let cardEl = document.getElementById("post"); // Card background // Card text color
let buttonEl = document.getElementById("btn"); // Button background // Button text color

function toggle() {
  if (toggleEl.checked) {
    headerEl.setAttribute("class", "dark");
    bodyEl.setAttribute("class", "darkbody");
    // bodyEl.setAttribute("class", "darkbody");
    // bodyEl.setAttribute("class", "darkbody");
    // bodyEl.setAttribute("class", "darkbody");
    // bodyEl.setAttribute("class", "darkbody");

    console.log(bodyEl);
  } else {
    bodyEl.removeAttribute("class", "darkbody");
    headerEl.removeAttribute("class", "dark");
    console.log(bodyEl);
  }
}
