import renderHeader from "/src/components/header/Header.js";
console.log("testing", renderHeader);

const headerContainer = document.getElementById("header-container");
headerContainer.innerHTML = renderHeader;
