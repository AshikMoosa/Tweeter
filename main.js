import renderHeader from "/src/components/header/Header.js";
import renderFooter from "/src/components/footer/Footer.js";
import renderHomePage from "/src/pages/home/Home.js";
import renderExplorePage from "/src/pages/explore/Explore.js";
import renderBookmarksPage from "/src/pages/bookmarks/Bookmarks.js";

const headerContainer = document.getElementById("header-container");
headerContainer.innerHTML = renderHeader;
const footerContainer = document.getElementById("footer-container");
footerContainer.innerHTML = renderFooter;
const contentContainer = document.getElementById("content-container");
contentContainer.innerHTML = renderBookmarksPage;
