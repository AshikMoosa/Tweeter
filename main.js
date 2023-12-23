import renderHeader from "/src/components/header/Header.js";
import renderFooter from "/src/components/footer/Footer.js";

const headerContainer = document.getElementById("header-container");
headerContainer.innerHTML = renderHeader;
const footerContainer = document.getElementById("footer-container");
footerContainer.innerHTML = renderFooter;
