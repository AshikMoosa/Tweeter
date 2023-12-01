const exploreListContainer = document.querySelector(".explore-list");
const exploreList = exploreListContainer.querySelectorAll(".explore-list-item");

exploreList.forEach((element) => {
  element.addEventListener("click", (e) => {
    exploreList.forEach((listItem) => {
      listItem.removeAttribute("selected");
    });

    // setting selected attribute to respective <li> element
    e.target.setAttribute("selected", true);
  });
});
