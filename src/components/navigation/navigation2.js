"use strict";
const navContainer = document.querySelector(".navigation");
const navList = navContainer.querySelectorAll("li");
const navItem = navContainer.querySelectorAll("a");

navItem.forEach((element) => {
  element.addEventListener("click", (e) => {
    navList.forEach((listItem) => {
      listItem.removeAttribute("selected");
    });

    // setting selected attribute to respective <li> element
    e.target.parentElement.setAttribute("selected", true);
  });
});
