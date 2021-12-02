"use strict";

const navLinks = document.querySelectorAll(".link_nav");
const navBar = document.querySelector(".navbar-nav");
const btnGS = document.querySelector("btn_getstart");
//

navBar.addEventListener("click", function (e) {
  if (e.target.classList.contains("btn")) return;
  navLinks.forEach((el) => {
    el.classList.remove("active");
  });
  e.target.classList.add("active");
});
