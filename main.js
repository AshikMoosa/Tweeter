import renderHeader from "/src/components/header/Header.js";
import renderFooter from "/src/components/footer/Footer.js";
import renderHomePage from "/src/pages/home/home.js";

const headerContainer = document.getElementById("header-container");
headerContainer.innerHTML = renderHeader;
const footerContainer = document.getElementById("footer-container");
footerContainer.innerHTML = renderFooter;
const contentContainer = document.getElementById("content-container");
contentContainer.innerHTML = renderHomePage;
