"use strict";
// Inject HTML Pages & scripts - navigation, profile
document.addEventListener("DOMContentLoaded", function () {
  function injectContent(url, containerId, scriptUrl) {
    const container = document.getElementById(containerId);

    // Create an iframe
    const iframe = document.createElement("iframe");
    iframe.src = url;

    // Wait for the iframe to load
    iframe.onload = function () {
      // Extract the content of the <body> element
      const content = iframe.contentDocument.body.innerHTML;

      // Inject the content into the specified container
      container.innerHTML = content;

      // Load the associated script if provided
      if (scriptUrl) {
        const script = document.createElement("script");
        script.src = scriptUrl;
        container.appendChild(script);
      }
    };

    // Append the iframe to the container
    container.appendChild(iframe);
  }

  // Inject Navigation component with associated script
  injectContent("/components/navigation/navigation.html", "navigation-container", "/components/navigation/navigation.js");

  // Inject Profile component with associated script
  injectContent("/components/profile-menu/profile-menu.html", "profile-container", "/components/profile-menu/profile-menu.js");
});
