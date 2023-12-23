const tweetListContainer = document.querySelector(".tweet-list");
const tweetList = tweetListContainer.querySelectorAll(".tweet-list-item");

tweetList.forEach((element) => {
  element.addEventListener("click", (e) => {
    tweetList.forEach((listItem) => {
      listItem.removeAttribute("selected");
    });

    // setting selected attribute to respective <li> element
    e.target.setAttribute("selected", true);
  });
});
