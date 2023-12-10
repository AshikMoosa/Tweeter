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

  // Header - Inject Header component with associated script
  injectContent("/components/header/header.html", "tweeter-header-container", "/components/header/header.js");

  // Aside - Inject Trends component with associated script
  // injectContent("/components/trends/trends.html", "trends-container", "/components/trends/trends.js");
});
