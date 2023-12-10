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

  // Main - Inject Tweet-Form component with associated script
  injectContent("/components/tweet-form/tweet-form.html", "tweet-form-container", "/components/tweet-form/tweet-form.js");
  injectContent("/components/tweet-card/tweet-card.html", "tweet-card-container", "/components/tweet-card/tweet-card.js");

  // Aside - Inject Trends component with associated script
  injectContent("/components/trends/trends.html", "trends-container", "/components/trends/trends.js");
  injectContent("/components/recommendations/recommendations.html", "recommendations-container", "/components/recommendations/recommendations.js");
});
