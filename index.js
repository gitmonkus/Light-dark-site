// ✨ You got this!

let headerEl = document.getElementById("header"); // Header
let toggleEl = document.getElementById("toggle"); // Toggle
let bodyEl = document.querySelector("body"); // Body Background
let h1El = document.getElementById("h1"); // H1
let postEl = document.getElementById("post"); // Card background // Card text color
let post1El = document.getElementById("post1"); // Card background // Card text color
let post2El = document.getElementById("post2"); // Card background // Card text color
let buttonEl = document.getElementById("btn"); // Button background // Button text color
let button1El = document.getElementById("btn1"); // Button background // Button text color
let button2El = document.getElementById("btn2"); // Button background // Button text color
let labelEl = document.getElementById("label");

function toggle() {
  if (toggleEl.checked) {
    headerEl.setAttribute("class", "dark-header");
    bodyEl.setAttribute("class", "dark-body");
    h1El.setAttribute("class", "dark-h1");
    postEl.setAttribute("id", "dark-post");
    post1El.setAttribute("id", "dark-post");
    post2El.setAttribute("id", "dark-post");
    buttonEl.setAttribute("class", "dark-button");
    button1El.setAttribute("class", "dark-button");
    button2El.setAttribute("class", "dark-button");
    labelEl.setAttribute("id", "dark-label");
  } else {
    headerEl.setAttribute("class", "header");
    bodyEl.removeAttribute("class", "dark-body");
    h1El.removeAttribute("class", "dark-h1");
    postEl.setAttribute("id", "post");
    post1El.setAttribute("id", "post");
    post2El.setAttribute("id", "post");
    buttonEl.removeAttribute("class", "dark-button");
    button1El.removeAttribute("class", "dark-button");
    button2El.removeAttribute("class", "dark-button");
    labelEl.setAttribute("id", "label");
  }
}
