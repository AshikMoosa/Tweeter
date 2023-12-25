import renderHeader from "/src/components/header/Header.js";
import renderFooter from "/src/components/footer/Footer.js";
import renderHomePage from "/src/pages/home/Home.js";
import renderExplorePage from "/src/pages/explore/Explore.js";
import renderBookmarksPage from "/src/pages/bookmarks/Bookmarks.js";

const headerContainer = document.getElementById("header-container");
const footerContainer = document.getElementById("footer-container");
const contentContainer = document.getElementById("content-container");

// Render Header & Footer Always
headerContainer.innerHTML = renderHeader;
footerContainer.innerHTML = renderFooter;

const navigationContainer = document.querySelector(".navigation");
const navigationLists = document.querySelectorAll(".navigation-list");
const navigationLinks = document.querySelectorAll(".navigation-link");
const profileElem = document.querySelector(".profile-menu");
const profileInfo = document.querySelector(".profile-info");
const profileCard = document.querySelector(".profile-card");

// Handle navigation link clicks
navigationLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent default page reload
    const selectedPage = link.getAttribute("href");
    updateURLAndRenderComponent(selectedPage);

    // handle navigation selection links
    navigationLists.forEach((listItem) => {
      listItem.removeAttribute("selected");
    });

    // setting selected attribute to respective navigation-list
    event.target.parentElement.setAttribute("selected", true);
  });
});

// Handle back/forward button clicks
window.addEventListener("popstate", (event) => {
  const currentPage = window.location.pathname;
  renderComponent(currentPage);
});

// Render initial component based on URL - homepage
const currentPage = window.location.pathname;
renderComponent(currentPage);

function renderComponent(componentName) {
  switch (componentName) {
    case "/index.html":
    case "/":
      contentContainer.innerHTML = renderHomePage;
      break;
    case "explore":
      contentContainer.innerHTML = renderExplorePage;
      break;
    case "bookmarks":
      contentContainer.innerHTML = renderBookmarksPage;
      break;
    default:
    // Handle invalid routes (e.g., display a 404 page)
  }
}

function updateURLAndRenderComponent(pageName) {
  window.history.pushState({}, "", pageName);
  renderComponent(pageName);
}

// Handle Profile Menu Dropdown
// Toggle the card visibility
function toggleCard() {
  profileCard.hidden = profileCard.hidden === true ? false : true;
}

// Show profile-card when profile-info is clicked
profileInfo.addEventListener("click", (e) => {
  e.stopPropagation();
  toggleCard();
});

// Hide profile-card when user clicks outside
document.addEventListener("click", function (event) {
  if (!profileCard.contains(event.target) && event.target !== profileInfo) {
    profileCard.hidden = true;
  }
});
